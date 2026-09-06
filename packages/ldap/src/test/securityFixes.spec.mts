import type { Filter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta.mjs";
import type { PartialAttributeList } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/PartialAttributeList.ta.mjs";
import type AttributeTypeAndValue from "../lib/types/AttributeTypeAndValue";
import { AttributeValueAssertion } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/AttributeValueAssertion.ta.mjs";
import { MatchingRuleAssertion } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/MatchingRuleAssertion.ta.mjs";
import { PartialAttribute } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta.mjs";
import { SubstringFilter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/SubstringFilter.ta.mjs";
import { BERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ObjectIdentifier, ASN1ConstructionError } from "@wildboar/asn1";
import { _decode_Filter, _encode_Filter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta.mjs";
import destringifyFilter from "../lib/destringifiers/Filter";
import destringifyRDNSequence from "../lib/destringifiers/RDNSequence";
import stringifyFilter from "../lib/stringifiers/Filter";
import evaluateFilter, { EvaluateFilterOptions } from "../lib/evaluateFilter";
import encodeLDAPOID from "../lib/encodeLDAPOID";
import { integer as decodeInteger } from "../lib/syntaxDecoders.mjs";
import SubstringSelection from "../lib/types/SubstringSelection";
import type { ASN1Element } from "@wildboar/asn1";
import type { LDAPString } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/LDAPString.ta.mjs";

function utf8Element (str: string): BERElement {
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        str,
    );
}

const cn = ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]);
const ou = ObjectIdentifier.fromParts([ 2, 5, 4, 11 ]);
const name = ObjectIdentifier.fromParts([ 2, 5, 4, 41 ]);
const serialNumber = ObjectIdentifier.fromParts([ 2, 5, 4, 5 ]);

describe("LDAP security regressions", () => {

    describe("stringifyFilter AND/OR joining", () => {
        it("joins multiple AND clauses without comma separators", () => {
            const filter: Filter = {
                and: [
                    { present: encodeLDAPOID(cn) },
                    { present: encodeLDAPOID(ou) },
                ],
            };
            expect(stringifyFilter(filter)).toBe("(&(2.5.4.3=*)(2.5.4.11=*))");
        });

        it("round-trips a multi-clause AND filter through destringifyFilter", () => {
            const filterStr = "(&(2.5.4.3=admin)(2.5.4.11=hr))";
            const parsed = destringifyFilter({
                input: filterStr,
                index: 0,
                filter: { and: [] },
            });
            expect("and" in parsed.filter).toBeTruthy();
            if (!("and" in parsed.filter)) {
                return;
            }
            expect(parsed.filter.and.length).toBe(2);
            expect(stringifyFilter(parsed.filter)).toBe(filterStr);
        });
    });

    describe("destringifyFilter substring final component", () => {
        it("parses a suffix wildcard as a final substring, not initial", () => {
            const parsed = destringifyFilter({
                input: "(2.5.4.3=*admin)",
                index: 0,
                filter: { and: [] },
            });
            expect("substrings" in parsed.filter).toBeTruthy();
            if (!("substrings" in parsed.filter)) {
                return;
            }
            const finalPart = parsed.filter.substrings.substrings.find((s) => ("final" in s));
            expect(finalPart).toBeTruthy();
            expect(parsed.filter.substrings.substrings.some((s) => ("initial" in s))).toBeFalsy();
        });
    });

    describe("filter recursion limits", () => {
        it("rejects excessively nested string filters", () => {
            let filterStr = "(2.5.4.3=admin)";
            for (let i = 0; i < 25; i++) {
                filterStr = `(!${filterStr})`;
            }
            expect(() => destringifyFilter({
                input: filterStr,
                index: 0,
                filter: { and: [] },
            })).toThrow("Filter string nesting too deep.");
        });

        it("returns undefined for excessively nested evaluateFilter input", () => {
            let filter: Filter = { present: encodeLDAPOID(cn) };
            for (let i = 0; i < 25; i++) {
                filter = { not: filter };
            }
            const options: EvaluateFilterOptions = {
                getLDAPSyntaxDecoder: () => undefined,
                getEqualityMatcher: () => undefined,
                getSubstringsMatcher: () => undefined,
                getOrderingMatcher: () => undefined,
                getApproxMatcher: () => undefined,
                isSubtype: (ad, parent) => ad.toString() === parent.toString(),
                permittedToMatch: () => true,
            };
            expect(evaluateFilter(filter, [], [], options)).toBeUndefined();
        });

        it("rejects excessively nested BER-encoded filters", () => {
            let filter: Filter = { present: encodeLDAPOID(cn) };
            for (let i = 0; i < 25; i++) {
                filter = { not: filter };
            }
            const el = _encode_Filter(filter, BERElement);
            expect(() => _decode_Filter(el)).toThrow(ASN1ConstructionError);
        });
    });

    describe("evaluateFilter extensibleMatch dnAttributes", () => {
        const options: EvaluateFilterOptions = {
            getLDAPSyntaxDecoder: () => (value: Uint8Array): ASN1Element => utf8Element(Buffer.from(value).toString("utf-8")),
            getEqualityMatcher: () => (assertion: ASN1Element, value: ASN1Element) => (
                assertion.utf8String === value.utf8String
            ),
            getSubstringsMatcher: () => undefined,
            getOrderingMatcher: () => undefined,
            getApproxMatcher: () => undefined,
            isSubtype: (ad, parent) => ad.toString() === parent.toString(),
            permittedToMatch: () => true,
        };

        it("matches DN attribute values when dnAttributes is true", () => {
            const dn: AttributeTypeAndValue[][] = [
                [
                    [ cn, utf8Element("admin") ],
                ],
            ];
            const entry: PartialAttributeList = [];
            const filter: Filter = {
                extensibleMatch: new MatchingRuleAssertion(
                    undefined,
                    encodeLDAPOID(cn),
                    Buffer.from("admin"),
                    true,
                ),
            };
            expect(evaluateFilter(filter, dn, entry, options)).toBeTruthy();
        });

        it("does not match DN attributes when the asserted value differs", () => {
            const dn: AttributeTypeAndValue[][] = [
                [
                    [ cn, utf8Element("guest") ],
                ],
            ];
            const entry: PartialAttributeList = [];
            const filter: Filter = {
                extensibleMatch: new MatchingRuleAssertion(
                    undefined,
                    encodeLDAPOID(cn),
                    Buffer.from("admin"),
                    true,
                ),
            };
            expect(evaluateFilter(filter, dn, entry, options)).toBeFalsy();
        });
    });

    describe("evaluateFilter isSubtype argument order", () => {
        const subtypeMap = new Map<string, string>([
            [ cn.toString(), name.toString() ],
        ]);

        const options: EvaluateFilterOptions = {
            getLDAPSyntaxDecoder: () => (value: Uint8Array): ASN1Element => utf8Element(Buffer.from(value).toString("utf-8")),
            getEqualityMatcher: () => (assertion: ASN1Element, value: ASN1Element) => (
                assertion.utf8String === value.utf8String
            ),
            getSubstringsMatcher: () => undefined,
            getOrderingMatcher: () => undefined,
            getApproxMatcher: () => undefined,
            isSubtype: (ad: LDAPString, parent: LDAPString) => {
                if (ad.toString() === parent.toString()) {
                    return true;
                }
                return subtypeMap.get(ad.toString()) === parent.toString();
            },
            permittedToMatch: () => true,
        };

        it("matches entry subtypes of the filter attribute type", () => {
            const entry: PartialAttributeList = [
                new PartialAttribute(
                    encodeLDAPOID(cn),
                    [ Buffer.from("Jonathan") ],
                ),
            ];
            const filter: Filter = {
                equalityMatch: new AttributeValueAssertion(
                    encodeLDAPOID(name),
                    Buffer.from("Jonathan"),
                ),
            };
            expect(evaluateFilter(filter, [], entry, options)).toBeTruthy();
        });

        it("does not treat filter types as subtypes of entry supertype attributes", () => {
            const entry: PartialAttributeList = [
                new PartialAttribute(
                    encodeLDAPOID(name),
                    [ Buffer.from("Jonathan") ],
                ),
            ];
            const filter: Filter = {
                equalityMatch: new AttributeValueAssertion(
                    encodeLDAPOID(cn),
                    Buffer.from("Jonathan"),
                ),
            };
            expect(evaluateFilter(filter, [], entry, options)).toBeFalsy();
        });
    });

    describe("RDN delimiter escaping", () => {
        it("does not split on a comma escaped by an escaped backslash", () => {
            const str = "2.5.4.3=foo\\\\,2.5.4.3=bar";
            const decoderGetter = () => [ ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]), utf8Element ];
            const decoded = Array.from(destringifyRDNSequence(str, decoderGetter));
            expect(decoded.length).toBe(2);
            expect(decoded[1][0][1].utf8String).toBe("bar");
            expect(decoded[0][0][1].utf8String.startsWith("foo\\")).toBeTruthy();
        });
    });

    describe("syntaxDecoders buffer views", () => {
        it("decodes integer syntax from a subarray without adjacent buffer bytes", () => {
            const backing = Buffer.from("99942");
            const view = backing.subarray(0, 2);
            const el = decodeInteger(view);
            expect(el.integer).toBe(99);
        });
    });

    describe("evaluateFilter substring final matching", () => {
        it("matches suffix substrings using the final matcher", () => {
            const entry: PartialAttributeList = [
                new PartialAttribute(
                    encodeLDAPOID(cn),
                    [ Buffer.from("backupadmin") ],
                ),
            ];
            const filter: Filter = {
                substrings: new SubstringFilter(
                    encodeLDAPOID(cn),
                    [
                        { final: Buffer.from("admin") },
                    ],
                ),
            };
            const options: EvaluateFilterOptions = {
                getLDAPSyntaxDecoder: () => (value: Uint8Array): ASN1Element => utf8Element(Buffer.from(value).toString("utf-8")),
                getEqualityMatcher: () => undefined,
                getSubstringsMatcher: () => (
                    assertion: ASN1Element,
                    value: ASN1Element,
                    selection: SubstringSelection,
                ) => {
                    const a = assertion.utf8String;
                    const v = value.utf8String;
                    if (selection === SubstringSelection.final) {
                        return v.endsWith(a);
                    }
                    if (selection === SubstringSelection.initial) {
                        return v.startsWith(a);
                    }
                    return v.includes(a);
                },
                getOrderingMatcher: () => undefined,
                getApproxMatcher: () => undefined,
                isSubtype: (ad, parent) => ad.toString() === parent.toString(),
                permittedToMatch: () => true,
            };
            expect(evaluateFilter(filter, [], entry, options)).toBeTruthy();
        });
    });
});
