import { describe, expect, it, vi } from "vitest";
import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import { relativeDistinguishedNameToKey, type RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import { compareRelativeDistinguishedName } from "./compare.mjs";
import type { GetDistinguishedValueMatcher } from "../atav/compare.mjs";

const id_at_countryName = ObjectIdentifier.fromParts([2, 5, 4, 6]);
const id_at_organizationName = ObjectIdentifier.fromParts([2, 5, 4, 10]);
const id_at_commonName = ObjectIdentifier.fromParts([2, 5, 4, 3]);
const id_at_surname = ObjectIdentifier.fromParts([2, 5, 4, 4]);

function utf8(s: string): DERElement {
    const el = new DERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.utf8String);
    el.utf8String = s;
    return el;
}

function printable(s: string): DERElement {
    const el = new DERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.printableString);
    el.printableString = s;
    return el;
}

function atav(type_: OBJECT_IDENTIFIER, str: string, isPrintable = false): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, isPrintable ? printable(str) : utf8(str));
}

describe("compareRelativeDistinguishedName", () => {
    describe("empty RDNs", () => {
        it("returns false if both RDNs are empty", () => {
            expect(compareRelativeDistinguishedName([], [])).toBe(false);
        });

        it("returns false if the first RDN is empty", () => {
            const b: RelativeDistinguishedName = [atav(id_at_commonName, "Smith")];
            expect(compareRelativeDistinguishedName([], b)).toBe(false);
        });

        it("returns false if the second RDN is empty", () => {
            const a: RelativeDistinguishedName = [atav(id_at_commonName, "Smith")];
            expect(compareRelativeDistinguishedName(a, [])).toBe(false);
        });
    });

    describe("cardinality checks", () => {
        it("returns false if RDNs have different lengths", () => {
            const a: RelativeDistinguishedName = [atav(id_at_commonName, "Smith")];
            const b: RelativeDistinguishedName = [atav(id_at_commonName, "Smith"), atav(id_at_surname, "Smith")];
            expect(compareRelativeDistinguishedName(a, b)).toBe(false);
            expect(compareRelativeDistinguishedName(b, a)).toBe(false);
        });
    });

    describe("single-valued RDNs (fast path)", () => {
        it("matches identical single-valued RDNs", () => {
            const a: RelativeDistinguishedName = [atav(id_at_commonName, "Smith")];
            const b: RelativeDistinguishedName = [atav(id_at_commonName, "Smith")];
            expect(compareRelativeDistinguishedName(a, b)).toBe(true);
        });

        it("matches case-insensitively via heuristic normalization", () => {
            const a: RelativeDistinguishedName = [atav(id_at_commonName, "Smith")];
            const b: RelativeDistinguishedName = [atav(id_at_commonName, "smith")];
            expect(compareRelativeDistinguishedName(a, b)).toBe(true);
        });

        it("returns false for different values", () => {
            const a: RelativeDistinguishedName = [atav(id_at_commonName, "Smith")];
            const b: RelativeDistinguishedName = [atav(id_at_commonName, "Jones")];
            expect(compareRelativeDistinguishedName(a, b)).toBe(false);
        });

        it("returns false for different attribute types", () => {
            const a: RelativeDistinguishedName = [atav(id_at_commonName, "Smith")];
            const b: RelativeDistinguishedName = [atav(id_at_surname, "Smith")];
            expect(compareRelativeDistinguishedName(a, b)).toBe(false);
        });

        it("consults custom matcher callback", () => {
            const matcher = vi.fn(() => false);
            const getMatcher: GetDistinguishedValueMatcher = () => matcher;
            const a: RelativeDistinguishedName = [atav(id_at_commonName, "Smith")];
            const b: RelativeDistinguishedName = [atav(id_at_commonName, "Smith")];
            expect(compareRelativeDistinguishedName(a, b, getMatcher)).toBe(false);
            expect(matcher).toHaveBeenCalledTimes(1);
        });
    });

    describe("multi-valued RDNs (sorted by OID bytes)", () => {
        it("matches multi-valued RDNs in the same order", () => {
            const a: RelativeDistinguishedName = [
                atav(id_at_commonName, "John"),
                atav(id_at_surname, "Smith"),
            ];
            const b: RelativeDistinguishedName = [
                atav(id_at_commonName, "John"),
                atav(id_at_surname, "Smith"),
            ];
            expect(compareRelativeDistinguishedName(a, b)).toBe(true);
        });

        it("matches multi-valued RDNs in reverse order", () => {
            const a: RelativeDistinguishedName = [
                atav(id_at_surname, "Smith"),
                atav(id_at_commonName, "John"),
            ];
            const b: RelativeDistinguishedName = [
                atav(id_at_commonName, "john"),
                atav(id_at_surname, "smith"),
            ];
            expect(compareRelativeDistinguishedName(a, b)).toBe(true);
        });

        it("matches multi-valued RDNs with 3+ attributes regardless of permutation", () => {
            const a: RelativeDistinguishedName = [
                atav(id_at_countryName, "US", true),
                atav(id_at_organizationName, "Acme"),
                atav(id_at_commonName, "John"),
            ];
            const b: RelativeDistinguishedName = [
                atav(id_at_commonName, "john"),
                atav(id_at_countryName, "us", true),
                atav(id_at_organizationName, "ACME"),
            ];
            expect(compareRelativeDistinguishedName(a, b)).toBe(true);
        });

        it("returns false if any attribute value differs in multi-valued RDN", () => {
            const a: RelativeDistinguishedName = [
                atav(id_at_commonName, "John"),
                atav(id_at_surname, "Smith"),
            ];
            const b: RelativeDistinguishedName = [
                atav(id_at_commonName, "John"),
                atav(id_at_surname, "Jones"),
            ];
            expect(compareRelativeDistinguishedName(a, b)).toBe(false);
        });

        it("returns false if an attribute type is replaced in multi-valued RDN", () => {
            const a: RelativeDistinguishedName = [
                atav(id_at_commonName, "John"),
                atav(id_at_surname, "Smith"),
            ];
            const b: RelativeDistinguishedName = [
                atav(id_at_commonName, "John"),
                atav(id_at_organizationName, "Smith"),
            ];
            expect(compareRelativeDistinguishedName(a, b)).toBe(false);
        });

        it("does not mutate the input RDN arrays when sorting", () => {
            const a: RelativeDistinguishedName = [
                atav(id_at_surname, "Smith"),
                atav(id_at_commonName, "John"),
            ];
            const b: RelativeDistinguishedName = [
                atav(id_at_commonName, "John"),
                atav(id_at_surname, "Smith"),
            ];
            compareRelativeDistinguishedName(a, b);
            expect(a[0].type_.isEqualTo(id_at_surname)).toBe(true);
            expect(b[0].type_.isEqualTo(id_at_commonName)).toBe(true);
        });

        it("agrees with relativeDistinguishedNameToKey()", () => {
            const pairs: [RelativeDistinguishedName, RelativeDistinguishedName][] = [
                [
                    [atav(id_at_commonName, "John"), atav(id_at_surname, "Smith")],
                    [atav(id_at_surname, "smith"), atav(id_at_commonName, "john")],
                ],
                [
                    [atav(id_at_commonName, "John"), atav(id_at_surname, "Smith")],
                    [atav(id_at_surname, "Jones"), atav(id_at_commonName, "John")],
                ],
            ];
            for (const [a, b] of pairs) {
                const direct = compareRelativeDistinguishedName(a, b);
                const key = relativeDistinguishedNameToKey(a) === relativeDistinguishedNameToKey(b);
                expect(direct).toBe(key);
            }
        });
    });
});
