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
import {
    rdnSequenceToKey,
    type RDNSequence,
} from "../RDNSequence.ta.mjs";
import {
    compareLdapRDNSequence,
    compareRDNSequence,
    compareRDNSequenceReverse,
    compareX500RDNSequence,
} from "./compare.mjs";
import type { GetDistinguishedValueMatcher } from "../atav/compare.mjs";

const id_at_countryName = ObjectIdentifier.fromParts([2, 5, 4, 6]);
const id_at_organizationName = ObjectIdentifier.fromParts([2, 5, 4, 10]);
const id_at_commonName = ObjectIdentifier.fromParts([2, 5, 4, 3]);

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

describe("compareRDNSequence", () => {
    describe("empty sequence", () => {
        it("returns true when both sequences are empty", () => {
            expect(compareRDNSequence([], [])).toBe(true);
        });

        it("returns false if one sequence is empty and the other is not", () => {
            const seq: RDNSequence = [[[atav(id_at_commonName, "Smith")]]];
            expect(compareRDNSequence([], seq)).toBe(false);
            expect(compareRDNSequence(seq, [])).toBe(false);
        });

        it("returns false if an element in the sequence is an empty RDN", () => {
            const seqA: RDNSequence = [[]];
            const seqB: RDNSequence = [[]];
            expect(compareRDNSequence(seqA, seqB)).toBe(false);
        });
    });

    describe("cardinality checks", () => {
        it("returns false if sequences have different lengths", () => {
            const a: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
            ];
            const b: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
                [atav(id_at_organizationName, "Acme")],
            ];
            expect(compareRDNSequence(a, b)).toBe(false);
            expect(compareRDNSequence(b, a)).toBe(false);
        });
    });

    describe("in-order comparison", () => {
        it("matches identical sequences", () => {
            const a: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
                [atav(id_at_organizationName, "Acme")],
                [atav(id_at_commonName, "Smith")],
            ];
            const b: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
                [atav(id_at_organizationName, "Acme")],
                [atav(id_at_commonName, "Smith")],
            ];
            expect(compareRDNSequence(a, b)).toBe(true);
        });

        it("matches case-insensitively via heuristic normalization", () => {
            const a: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
                [atav(id_at_organizationName, "Acme Corp")],
                [atav(id_at_commonName, "Jane Smith")],
            ];
            const b: RDNSequence = [
                [atav(id_at_countryName, "us", true)],
                [atav(id_at_organizationName, "ACME  CORP")],
                [atav(id_at_commonName, "jane  smith")],
            ];
            expect(compareRDNSequence(a, b)).toBe(true);
        });

        it("returns false if an RDN differs", () => {
            const a: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
                [atav(id_at_organizationName, "Acme")],
            ];
            const b: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
                [atav(id_at_organizationName, "Other")],
            ];
            expect(compareRDNSequence(a, b)).toBe(false);
        });

        it("agrees with rdnSequenceToKey()", () => {
            const a: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
                [atav(id_at_organizationName, "Acme")],
            ];
            const b: RDNSequence = [
                [atav(id_at_countryName, "us", true)],
                [atav(id_at_organizationName, "ACME")],
            ];
            const c: RDNSequence = [
                [atav(id_at_countryName, "CA", true)],
                [atav(id_at_organizationName, "ACME")],
            ];
            expect(compareRDNSequence(a, b)).toBe(rdnSequenceToKey(a) === rdnSequenceToKey(b));
            expect(compareRDNSequence(a, c)).toBe(rdnSequenceToKey(a) === rdnSequenceToKey(c));
        });
    });

    describe("forward vs reverse order implementations", () => {
        it("starts from index 0 in forward order (reverse = false)", () => {
            const callOrder: string[] = [];
            const getMatcher: GetDistinguishedValueMatcher = (type_) => {
                callOrder.push(type_.toString());
                return () => true;
            };
            const a: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
                [atav(id_at_organizationName, "Acme")],
                [atav(id_at_commonName, "Smith")],
            ];
            const b: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
                [atav(id_at_organizationName, "Acme")],
                [atav(id_at_commonName, "Smith")],
            ];
            expect(compareRDNSequence(a, b, getMatcher, false)).toBe(true);
            expect(callOrder).toEqual([
                id_at_countryName.toString(),
                id_at_organizationName.toString(),
                id_at_commonName.toString(),
            ]);
        });

        it("starts from last index in reverse order (reverse = true)", () => {
            const callOrder: string[] = [];
            const getMatcher: GetDistinguishedValueMatcher = (type_) => {
                callOrder.push(type_.toString());
                return () => true;
            };
            const a: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
                [atav(id_at_organizationName, "Acme")],
                [atav(id_at_commonName, "Smith")],
            ];
            const b: RDNSequence = [
                [atav(id_at_countryName, "US", true)],
                [atav(id_at_organizationName, "Acme")],
                [atav(id_at_commonName, "Smith")],
            ];
            expect(compareRDNSequence(a, b, getMatcher, true)).toBe(true);
            expect(callOrder).toEqual([
                id_at_commonName.toString(),
                id_at_organizationName.toString(),
                id_at_countryName.toString(),
            ]);
        });

        it("fails faster on differing leaf RDN when reverse = true (X.500 order)", () => {
            const checked: number[] = [];
            const getMatcher: GetDistinguishedValueMatcher = () => (aEl, bEl) => {
                checked.push(1);
                return aEl.utf8String === bEl.utf8String;
            };
            // Same root and org, but different leaf (commonName)
            const a: RDNSequence = [
                [atav(id_at_countryName, "US")],
                [atav(id_at_organizationName, "Acme")],
                [atav(id_at_commonName, "Smith")],
            ];
            const b: RDNSequence = [
                [atav(id_at_countryName, "US")],
                [atav(id_at_organizationName, "Acme")],
                [atav(id_at_commonName, "Jones")],
            ];

            // In reverse order, index 2 is compared first and fails immediately after 1 check
            expect(compareRDNSequenceReverse(a, b, getMatcher)).toBe(false);
            expect(checked.length).toBe(1);

            // In forward order, index 0 and 1 are checked before index 2 fails (3 checks total)
            checked.length = 0;
            expect(compareLdapRDNSequence(a, b, getMatcher)).toBe(false);
            expect(checked.length).toBe(3);
        });

        it("compareX500RDNSequence is an alias for compareRDNSequenceReverse", () => {
            expect(compareX500RDNSequence).toBe(compareRDNSequenceReverse);
        });
    });
});
