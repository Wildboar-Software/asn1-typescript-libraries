import type { Filter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/Filter.ta.mjs";
import type AttributeTypeAndValue from "../lib/types/AttributeTypeAndValue";
import type { PartialAttributeList } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/PartialAttributeList.ta.mjs";
import { PartialAttribute } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta.mjs";
import { AttributeValueAssertion } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/AttributeValueAssertion.ta.mjs";
import { MatchingRuleAssertion } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/MatchingRuleAssertion.ta.mjs";
import { SubstringFilter } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/SubstringFilter.ta.mjs";
import evaluateFilter, { EvaluateFilterOptions } from "../lib/evaluateFilter";
import encodeLDAPOID from "../lib/encodeLDAPOID";
import { ObjectIdentifier, BERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "@wildboar/asn1";
import type { LDAPString } from "../lib/modules/Lightweight-Directory-Access-Protocol-V3/LDAPString.ta.mjs";
import SubstringSelection from "../lib/types/SubstringSelection";

// Filter ::= CHOICE {
//     and              [0]  SET SIZE (1..MAX) OF filter Filter,
//     or               [1]  SET SIZE (1..MAX) OF filter Filter,
//     not              [2]  Filter,
//     equalityMatch    [3]  AttributeValueAssertion,
//     substrings       [4]  SubstringFilter,
//     greaterOrEqual   [5]  AttributeValueAssertion,
//     lessOrEqual      [6]  AttributeValueAssertion,
//     present          [7]  AttributeDescription,
//     approxMatch      [8]  AttributeValueAssertion,
//     extensibleMatch  [9]  MatchingRuleAssertion,
//     ...
// }

// SubstringFilter ::= SEQUENCE {
//     type        AttributeDescription,
//     substrings
//         SEQUENCE SIZE (1..MAX) OF substring
//         CHOICE {initial  [0]  AssertionValue, -- can occur at most once--
//                 any      [1]  AssertionValue,
//                 final    [2]  AssertionValue} -- can occur at most once
// }

// MatchingRuleAssertion ::= SEQUENCE {
//     matchingRule  [1]  MatchingRuleId OPTIONAL,
//     type          [2]  AttributeDescription OPTIONAL,
//     matchValue    [3]  AssertionValue,
//     dnAttributes  [4]  BOOLEAN DEFAULT FALSE
// }

function utf8Element (str: string): BERElement {
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        str,
    );
}

const commonName = ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]);
const organizationName = ObjectIdentifier.fromParts([ 2, 5, 4, 10 ]);
const serialNumber = ObjectIdentifier.fromParts([ 2, 5, 4, 5 ]);

const dn: AttributeTypeAndValue[][] = [
    [
        [
            commonName,
            utf8Element("Jonathan Wilbur"),
        ],
    ],
    [
        [
            organizationName,
            utf8Element("Wildboar Software"),
        ],
    ],
];

const entry: PartialAttributeList = [
    new PartialAttribute(
        encodeLDAPOID(serialNumber),
        [
            Buffer.from("ASDF1234"),
        ],
    ),
];

const TEST_FILTER: Filter = {
    present: encodeLDAPOID(serialNumber),
};

const getLDAPSyntaxDecoder = (ad: LDAPString): (value: Uint8Array) => ASN1Element => {
    return (value: Uint8Array): ASN1Element => {
        return new BERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.utf8String,
            Buffer.from(value).toString("utf-8"),
        );
    };
};

const options: EvaluateFilterOptions = {
    getLDAPSyntaxDecoder,
    getEqualityMatcher: (ad: LDAPString) => {
        return function (assertion: ASN1Element, value: ASN1Element): boolean {
            return (assertion.utf8String === value.utf8String);
        };
    },
    getSubstringsMatcher: (ad: LDAPString) => {
        return function (assertion: ASN1Element, value: ASN1Element, selection: SubstringSelection): boolean {
            const a = assertion.utf8String;
            const v = value.utf8String;
            switch (selection) {
            case (SubstringSelection.initial): {
                return v.startsWith(a);
            }
            case (SubstringSelection.any_): {
                return (v.indexOf(a) > -1);
            }
            case (SubstringSelection.final): {
                return v.endsWith(a);
            }
            default: {
                throw new Error();
            }
            }
        };
    },
    getOrderingMatcher: (ad: LDAPString) => {
        return function (assertion: ASN1Element, value: ASN1Element): number {
            const a = Array.from(assertion.octetString).reduce((p, c) => p + c, 0);
            const v = Array.from(value.octetString).reduce((p, c) => p + c, 0);
            return (v - a);
        };
    },
    getApproxMatcher: (ad: LDAPString) => {
        return function (assertion: ASN1Element, value: ASN1Element): boolean {
            const a = assertion.utf8String;
            const v = value.utf8String;
            return (v.indexOf(a) > -1);
        };
    },
    isSubtype: (ad: LDAPString, parent: LDAPString) => {
        return (ad.toString() === parent.toString());
    },
    permittedToMatch: () => true,
};

describe("evaluateFilter()", () => {
    it("evalutes an and filter against a match", () => {
        const filter: Filter = {
            and: [
                TEST_FILTER,
            ],
        };
        expect(evaluateFilter(filter, dn, entry, options)).toBeTruthy();
    });

    it("evalutes an or filter against a match", () => {
        const filter: Filter = {
            or: [
                TEST_FILTER,
            ],
        };
        expect(evaluateFilter(filter, dn, entry, options)).toBeTruthy();
    });

    it("evalutes a not filter against a match", () => {
        const filter: Filter = {
            not: TEST_FILTER,
        };
        expect(evaluateFilter(filter, dn, entry, options)).toBeFalsy();
    });

    it("evalutes an equalityMatch filter against a match", () => {
        const filter: Filter = {
            equalityMatch: new AttributeValueAssertion(
                encodeLDAPOID(serialNumber),
                Buffer.from("ASDF1234"),
            ),
        };
        expect(evaluateFilter(filter, dn, entry, options)).toBeTruthy();
    });

    it("evalutes a substrings filter against a match", () => {
        const filter: Filter = {
            substrings: new SubstringFilter(
                encodeLDAPOID(serialNumber),
                [
                    {
                        initial: Buffer.from("ASD"),
                    },
                    {
                        final: Buffer.from("234"),
                    },
                    {
                        any_: Buffer.from("DF12"),
                    },
                ],
            ),
        };
        expect(evaluateFilter(filter, dn, entry, options)).toBeTruthy();
    });

    it("evalutes a greaterOrEqual filter against a match", () => {
        const filter: Filter = {
            greaterOrEqual: new AttributeValueAssertion(
                encodeLDAPOID(serialNumber),
                Buffer.from("ARDF1234"),
            ),
        };
        expect(evaluateFilter(filter, dn, entry, options)).toBeTruthy();
    });

    it("evalutes a lessOrEqual filter against a match", () => {
        const filter: Filter = {
            lessOrEqual: new AttributeValueAssertion(
                encodeLDAPOID(serialNumber),
                Buffer.from("ATDF1234"),
            ),
        };
        expect(evaluateFilter(filter, dn, entry, options)).toBeTruthy();
    });

    it("evalutes a present filter against a match", () => {
        const filter: Filter = {
            present: encodeLDAPOID(serialNumber),
        };
        expect(evaluateFilter(filter, dn, entry, options)).toBeTruthy();
    });

    it("evalutes an approxMatch filter against a match", () => {
        const filter: Filter = {
            approxMatch: new AttributeValueAssertion(
                encodeLDAPOID(serialNumber),
                Buffer.from("ASDF123"),
            ),
        };
        expect(evaluateFilter(filter, dn, entry, options)).toBeTruthy();
    });

    it("evalutes an extensibleMatch filter against a match", () => {
        const filter: Filter = {
            extensibleMatch: new MatchingRuleAssertion(
                undefined,
                encodeLDAPOID(serialNumber),
                Buffer.from("ASDF1234"),
                false,
            ),
        };
        expect(evaluateFilter(filter, dn, entry, options)).toBeTruthy();
    });

});
