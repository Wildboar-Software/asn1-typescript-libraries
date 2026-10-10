import { describe, expect, it, vi } from "vitest";
import {
    type ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import {
    compareAttributeTypeAndValue,
    type DistinguishedValueMatcher,
    type GetDistinguishedValueMatcher,
} from "./compare.mjs";
import {
    id_at_commonName,
    id_at_dnsName,
    id_at_postalAddress,
    id_at_serialNumber,
    id_at_surname,
    id_at_telephoneNumber,
    id_mail,
} from "./distinguishedTypeToString.mjs";

function universal(tagNumber: ASN1UniversalType, construction = ASN1Construction.primitive): DERElement {
    return new DERElement(ASN1TagClass.universal, construction, tagNumber);
}

function utf8(s: string): DERElement {
    const el = universal(ASN1UniversalType.utf8String);
    el.utf8String = s;
    return el;
}

function printable(s: string): DERElement {
    const el = universal(ASN1UniversalType.printableString);
    el.printableString = s;
    return el;
}

function numeric(s: string): DERElement {
    const el = universal(ASN1UniversalType.numericString);
    el.numericString = s;
    return el;
}

function boolean(b: boolean): DERElement {
    const el = universal(ASN1UniversalType.boolean);
    el.boolean = b;
    return el;
}

function generalizedTime(d: Date): DERElement {
    const el = universal(ASN1UniversalType.generalizedTime);
    el.generalizedTime = d;
    return el;
}

function sequence(...els: ASN1Element[]): DERElement {
    const el = universal(ASN1UniversalType.sequence, ASN1Construction.constructed);
    el.sequence = els;
    return el;
}

/** A value with no string form: a context-specific tag. */
function contextSpecific(tagNumber: number, ...bytes: number[]): DERElement {
    const el = new DERElement(ASN1TagClass.context, ASN1Construction.primitive, tagNumber);
    el.value = new Uint8Array(bytes);
    return el;
}

function integer(n: number): DERElement {
    const el = universal(ASN1UniversalType.integer);
    el.integer = n;
    return el;
}

function objectIdentifier(o: OBJECT_IDENTIFIER): DERElement {
    const el = universal(ASN1UniversalType.objectIdentifier);
    el.objectIdentifier = o;
    return el;
}

function relativeOID(arcs: number[]): DERElement {
    const el = universal(ASN1UniversalType.relativeOID);
    el.relativeObjectIdentifier = arcs;
    return el;
}

function enumerated(n: number): DERElement {
    const el = universal(ASN1UniversalType.enumerated);
    el.enumerated = n;
    return el;
}

function nill(): DERElement {
    return universal(ASN1UniversalType.nill);
}

function date(d: Date): DERElement {
    const el = universal(ASN1UniversalType.date);
    el.date = d;
    return el;
}

function timeOfDay(d: Date): DERElement {
    const el = universal(ASN1UniversalType.timeOfDay);
    el.timeOfDay = d;
    return el;
}

function utcTime(d: Date): DERElement {
    const el = universal(ASN1UniversalType.utcTime);
    el.utcTime = d;
    return el;
}

function rawElement(tagClass: ASN1TagClass, tagNumber: number, bytes: number[]): DERElement {
    const el = new DERElement(tagClass, ASN1Construction.primitive, tagNumber);
    el.value = new Uint8Array(bytes);
    return el;
}

function bitString(...bits: number[]): DERElement {
    const el = universal(ASN1UniversalType.bitString);
    el.bitString = new Uint8ClampedArray(bits);
    return el;
}

function octetString(...bytes: number[]): DERElement {
    const el = universal(ASN1UniversalType.octetString);
    el.value = new Uint8Array(bytes);
    return el;
}

function atav(type_: OBJECT_IDENTIFIER, value: ASN1Element, exts: ASN1Element[] = []): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, value, exts);
}

/** An unrecognized attribute type, so no name-based normalization applies. */
const id_unknown = ObjectIdentifier.fromString("1.3.6.1.4.1.56490.999.1");

const always = (result: boolean): DistinguishedValueMatcher => () => result;

describe("compareAttributeTypeAndValue", () => {
    describe("attribute type", () => {
        it("does not match values of different types, even if the values are identical", () => {
            const a = atav(id_at_commonName, utf8("Smith"));
            const b = atav(id_at_surname, utf8("Smith"));
            expect(compareAttributeTypeAndValue(a, b)).toBe(false);
        });

        it("compares types by value, not by identity", () => {
            const a = atav(ObjectIdentifier.fromString("2.5.4.3"), utf8("Smith"));
            const b = atav(ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]), utf8("Smith"));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
        });

        it("ignores unrecognized extensions", () => {
            const a = atav(id_at_commonName, utf8("Smith"), [ contextSpecific(0, 1, 2, 3) ]);
            const b = atav(id_at_commonName, utf8("Smith"));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(b, a)).toBe(true);
        });
    });

    describe("with a matcher", () => {
        it("looks up the matcher by the attribute type and passes it both values", () => {
            const matcher = vi.fn<DistinguishedValueMatcher>(() => true);
            const getMatcher = vi.fn<GetDistinguishedValueMatcher>(() => matcher);
            const avalue = utf8("a");
            const bvalue = utf8("b");
            const a = atav(id_at_commonName, avalue);
            const b = atav(id_at_commonName, bvalue);
            expect(compareAttributeTypeAndValue(a, b, getMatcher)).toBe(true);
            expect(getMatcher).toHaveBeenCalledTimes(1);
            expect(getMatcher.mock.calls[0][0].isEqualTo(id_at_commonName)).toBe(true);
            expect(matcher).toHaveBeenCalledTimes(1);
            expect(matcher.mock.calls[0][0]).toBe(avalue);
            expect(matcher.mock.calls[0][1]).toBe(bvalue);
        });

        it("returns whatever the matcher decides", () => {
            const a = atav(id_at_commonName, utf8("Smith"));
            const b = atav(id_at_commonName, utf8("smith"));
            // The heuristic would say these match; the matcher overrides it.
            expect(compareAttributeTypeAndValue(a, b, () => always(false))).toBe(false);
            const c = atav(id_at_commonName, utf8("Jones"));
            // The heuristic would say these differ; the matcher overrides it.
            expect(compareAttributeTypeAndValue(a, c, () => always(true))).toBe(true);
        });

        it("falls back to the heuristic when the matcher does not recognize the type", () => {
            const getMatcher: GetDistinguishedValueMatcher = (type_: OBJECT_IDENTIFIER) => (
                type_.isEqualTo(id_at_serialNumber) ? always(false) : undefined
            );
            const a = atav(id_at_commonName, utf8("  Smith,  JOHN "));
            const b = atav(id_at_commonName, utf8("smith, john"));
            expect(compareAttributeTypeAndValue(a, b, getMatcher)).toBe(true);
            const c = atav(id_at_serialNumber, printable("123"));
            const d = atav(id_at_serialNumber, printable("123"));
            expect(compareAttributeTypeAndValue(c, d, getMatcher)).toBe(false);
        });

        it("accepts a matcher with extra optional parameters, like x500's EqualityMatcher", () => {
            type EqualityMatcher = (
                assertion: ASN1Element,
                value: ASN1Element,
                getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
                flags?: number,
            ) => boolean;
            const matcher: EqualityMatcher = (assertion, value) => (assertion.utf8String === value.utf8String);
            const getEqualityMatcher = (_: OBJECT_IDENTIFIER): EqualityMatcher | undefined => matcher;
            const a = atav(id_at_commonName, utf8("Smith"));
            const b = atav(id_at_commonName, utf8("Smith"));
            const c = atav(id_at_commonName, utf8("smith"));
            expect(compareAttributeTypeAndValue(a, b, getEqualityMatcher)).toBe(true);
            expect(compareAttributeTypeAndValue(a, c, getEqualityMatcher)).toBe(false);
        });
    });

    describe("heuristic fallback", () => {
        it("matches strings that differ only in case and insignificant whitespace", () => {
            const a = atav(id_at_commonName, utf8("  Smith,  JOHN "));
            const b = atav(id_at_commonName, utf8("smith, john"));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
        });

        it("matches equal strings in different string types", () => {
            const a = atav(id_at_commonName, utf8("Smith"));
            const b = atav(id_at_commonName, printable("smith"));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
        });

        it("does not match different strings", () => {
            const a = atav(id_at_commonName, utf8("Smith"));
            const b = atav(id_at_commonName, utf8("Smyth"));
            expect(compareAttributeTypeAndValue(a, b)).toBe(false);
        });

        it("is case-sensitive for serialNumber", () => {
            const a = atav(id_at_serialNumber, printable("ABC123"));
            const b = atav(id_at_serialNumber, printable("abc123"));
            const c = atav(id_at_serialNumber, printable(" ABC123 "));
            expect(compareAttributeTypeAndValue(a, b)).toBe(false);
            expect(compareAttributeTypeAndValue(a, c)).toBe(true);
        });

        it("ignores spaces and hyphens in telephone numbers", () => {
            const a = atav(id_at_telephoneNumber, printable("+1 555-123-4567"));
            const b = atav(id_at_telephoneNumber, printable("+15551234567"));
            const c = atav(id_at_telephoneNumber, printable("+15551234568"));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, c)).toBe(false);
        });

        it("ignores spaces in NumericStrings", () => {
            const a = atav(id_unknown, numeric("12 34 56"));
            const b = atav(id_unknown, numeric("123456"));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
        });

        it("compares DNS names as lowercase punycode without a trailing dot", () => {
            const a = atav(id_at_dnsName, utf8("Bücher.Example.COM."));
            const b = atav(id_at_dnsName, utf8("xn--bcher-kva.example.com"));
            const c = atav(id_at_dnsName, utf8("bucher.example.com"));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, c)).toBe(false);
        });

        it("normalizes the domain of an email address but only case-folds the local part", () => {
            const a = atav(id_mail, utf8("John.Smith@Example.COM"));
            const b = atav(id_mail, utf8("john.smith@example.com"));
            const c = atav(id_mail, utf8("johnsmith@example.com"));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, c)).toBe(false);
        });

        it("compares BOOLEANs by value", () => {
            expect(compareAttributeTypeAndValue(
                atav(id_unknown, boolean(true)),
                atav(id_unknown, boolean(true)),
            )).toBe(true);
            expect(compareAttributeTypeAndValue(
                atav(id_unknown, boolean(true)),
                atav(id_unknown, boolean(false)),
            )).toBe(false);
        });

        it("compares times to the second", () => {
            const a = atav(id_unknown, generalizedTime(new Date("2026-09-27T12:34:56.000Z")));
            const b = atav(id_unknown, generalizedTime(new Date("2026-09-27T12:34:56.789Z")));
            const c = atav(id_unknown, generalizedTime(new Date("2026-09-27T12:34:57.000Z")));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, c)).toBe(false);
        });

        it("compares postal addresses line by line, case-insensitively", () => {
            const a = atav(id_at_postalAddress, sequence(utf8("123 Main St"), utf8("Springfield")));
            const b = atav(id_at_postalAddress, sequence(printable("123 MAIN ST"), utf8("springfield")));
            const c = atav(id_at_postalAddress, sequence(utf8("123 Main St")));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, c)).toBe(false);
        });

        it("compares values with no string form by tag and value octets", () => {
            const a = atav(id_unknown, contextSpecific(0, 1, 2, 3));
            const b = atav(id_unknown, contextSpecific(0, 1, 2, 3));
            const differentBytes = atav(id_unknown, contextSpecific(0, 1, 2, 4));
            const differentTag = atav(id_unknown, contextSpecific(1, 1, 2, 3));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, differentBytes)).toBe(false);
            expect(compareAttributeTypeAndValue(a, differentTag)).toBe(false);
        });

        it("does not match a value with a string form against one without", () => {
            const a = atav(id_unknown, utf8("abc"));
            const b = atav(id_unknown, contextSpecific(0, 0x61, 0x62, 0x63));
            expect(compareAttributeTypeAndValue(a, b)).toBe(false);
            expect(compareAttributeTypeAndValue(b, a)).toBe(false);
        });

        it("agrees with toKey()", () => {
            const pairs: [AttributeTypeAndValue, AttributeTypeAndValue][] = [
                [ atav(id_at_commonName, utf8("Smith")), atav(id_at_commonName, printable(" SMITH")) ],
                [ atav(id_at_commonName, utf8("Smith")), atav(id_at_commonName, utf8("Jones")) ],
                [ atav(id_at_telephoneNumber, printable("+1 555-1234")), atav(id_at_telephoneNumber, printable("+15551234")) ],
                [ atav(id_unknown, contextSpecific(0, 1)), atav(id_unknown, contextSpecific(0, 1)) ],
                [ atav(id_unknown, contextSpecific(0, 1)), atav(id_unknown, contextSpecific(0, 2)) ],
            ];
            for (const [ a, b ] of pairs) {
                expect(compareAttributeTypeAndValue(a, b)).toBe(a.toKey() === b.toKey());
            }
        });
    });

    describe("optimized direct comparisons", () => {
        it("matches byte-for-byte identical values via fast path", () => {
            const a = atav(id_at_commonName, utf8("Smith"));
            const b = atav(id_at_commonName, utf8("Smith"));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
        });

        it("compares INTEGERs directly by value", () => {
            const a = atav(id_unknown, integer(1433));
            const b = atav(id_unknown, integer(1433));
            const c = atav(id_unknown, integer(1434));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, c)).toBe(false);
        });

        it("compares OBJECT IDENTIFIERs directly", () => {
            const a = atav(id_unknown, objectIdentifier(id_at_commonName));
            const b = atav(id_unknown, objectIdentifier(id_at_commonName));
            const c = atav(id_unknown, objectIdentifier(id_at_surname));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, c)).toBe(false);
        });

        it("compares RELATIVE-OIDs directly", () => {
            const a = atav(id_unknown, relativeOID([ 1, 2, 3 ]));
            const b = atav(id_unknown, relativeOID([ 1, 2, 3 ]));
            const c = atav(id_unknown, relativeOID([ 1, 2, 4 ]));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, c)).toBe(false);
        });

        it("compares ENUMERATED directly", () => {
            const a = atav(id_unknown, enumerated(1));
            const b = atav(id_unknown, enumerated(1));
            const c = atav(id_unknown, enumerated(2));
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, c)).toBe(false);
        });

        it("compares NULL directly", () => {
            const a = atav(id_unknown, nill());
            const b = atav(id_unknown, nill());
            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
        });

        it("compares BOOLEAN without decoding, across 0xFF and non-zero BER values", () => {
            const derTrue = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.boolean, [ 0xFF ]));
            const berTrue = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.boolean, [ 0x01 ]));
            const derFalse = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.boolean, [ 0x00 ]));
            expect(compareAttributeTypeAndValue(derTrue, berTrue)).toBe(true);
            expect(compareAttributeTypeAndValue(derTrue, derFalse)).toBe(false);
            expect(compareAttributeTypeAndValue(derFalse, derFalse)).toBe(true);
        });

        it("compares DATE and TIME-OF-DAY directly", () => {
            const d1 = new Date("2026-09-27T00:00:00.000Z");
            const d2 = new Date("2026-09-28T00:00:00.000Z");
            expect(compareAttributeTypeAndValue(atav(id_unknown, date(d1)), atav(id_unknown, date(d1)))).toBe(true);
            expect(compareAttributeTypeAndValue(atav(id_unknown, date(d1)), atav(id_unknown, date(d2)))).toBe(false);

            const t1 = new Date("1970-01-01T12:30:45.000Z");
            const t2 = new Date("1970-01-01T12:30:46.000Z");
            expect(compareAttributeTypeAndValue(atav(id_unknown, timeOfDay(t1)), atav(id_unknown, timeOfDay(t1)))).toBe(true);
            expect(compareAttributeTypeAndValue(atav(id_unknown, timeOfDay(t1)), atav(id_unknown, timeOfDay(t2)))).toBe(false);
        });

        it("optimizes GeneralizedTime primitive comparisons to avoid decoding", () => {
            // Same second with fractional seconds
            const a = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.generalizedTime, Array.from(Buffer.from("20260927123456Z"))));
            const b = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.generalizedTime, Array.from(Buffer.from("20260927123456.789Z"))));
            const diffSec = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.generalizedTime, Array.from(Buffer.from("20260927123457Z"))));
            const diffYear = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.generalizedTime, Array.from(Buffer.from("20250927123456Z"))));

            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, diffSec)).toBe(false);
            expect(compareAttributeTypeAndValue(a, diffYear)).toBe(false);
        });

        it("optimizes UTCTime primitive comparisons to avoid decoding", () => {
            const a = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.utcTime, Array.from(Buffer.from("260927123456Z"))));
            const b = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.utcTime, Array.from(Buffer.from("260927123456Z"))));
            const diff = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.utcTime, Array.from(Buffer.from("260927123457Z"))));

            expect(compareAttributeTypeAndValue(a, b)).toBe(true);
            expect(compareAttributeTypeAndValue(a, diff)).toBe(false);
        });

        it("does not match mixed UTCTime and GeneralizedTime across differing tags", () => {
            const u26 = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.utcTime, Array.from(Buffer.from("260927123456Z"))));
            const g2026 = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.generalizedTime, Array.from(Buffer.from("20260927123456Z"))));
            expect(compareAttributeTypeAndValue(u26, g2026)).toBe(false);
            expect(compareAttributeTypeAndValue(g2026, u26)).toBe(false);
        });

        it("compares BIT STRING and OCTET STRING", () => {
            const b1 = atav(id_unknown, bitString(1, 0, 1));
            const b2 = atav(id_unknown, bitString(1, 0, 1));
            const b3 = atav(id_unknown, bitString(1, 0, 0));
            expect(compareAttributeTypeAndValue(b1, b2)).toBe(true);
            expect(compareAttributeTypeAndValue(b1, b3)).toBe(false);

            const o1 = atav(id_unknown, octetString(1, 2, 3));
            const o2 = atav(id_unknown, octetString(1, 2, 3));
            const o3 = atav(id_unknown, octetString(1, 2, 4));
            expect(compareAttributeTypeAndValue(o1, o2)).toBe(true);
            expect(compareAttributeTypeAndValue(o1, o3)).toBe(false);
        });

        it("can be invoked via AttributeTypeAndValue.prototype.compare", () => {
            const a = atav(id_at_commonName, utf8("Smith"));
            const b = atav(id_at_commonName, printable("smith"));
            const c = atav(id_at_commonName, utf8("Jones"));
            expect(a.compare(b)).toBe(true);
            expect(a.compare(c)).toBe(false);
        });

        it("throws when a distinguished value fails to decode correctly", () => {
            const malformed = atav(id_unknown, rawElement(ASN1TagClass.universal, ASN1UniversalType.bitString, []));
            const valid = atav(id_unknown, bitString(1));
            expect(() => compareAttributeTypeAndValue(malformed, valid)).toThrow();
        });
    });
});
