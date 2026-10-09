import { describe, expect, it } from "vitest";
import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { Name } from "../Name.ta.mjs";
import { compareName, compareNameReverse } from "./compare.mjs";

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

function makeName(...rdns: [OBJECT_IDENTIFIER, string, boolean?][][]): Name {
    return {
        rdnSequence: rdns.map((rdn) => rdn.map(([oid, str, print]) => atav(oid, str, print))),
    };
}

describe("compareName", () => {
    it("matches identical Name structures", () => {
        const a = makeName(
            [[id_at_countryName, "US", true]],
            [[id_at_organizationName, "Acme"]],
            [[id_at_commonName, "John Smith"]],
        );
        const b = makeName(
            [[id_at_countryName, "US", true]],
            [[id_at_organizationName, "Acme"]],
            [[id_at_commonName, "John Smith"]],
        );
        expect(compareName(a, b)).toBe(true);
    });

    it("matches normalized Name structures", () => {
        const a = makeName(
            [[id_at_countryName, "US", true]],
            [[id_at_organizationName, "Acme Widgets, Inc."]],
            [[id_at_commonName, "John Smith"]],
        );
        const b = makeName(
            [[id_at_countryName, "us", true]],
            [[id_at_organizationName, "ACME  WIDGETS,  INC."]],
            [[id_at_commonName, "john  smith"]],
        );
        expect(compareName(a, b)).toBe(true);
    });

    it("returns false for different names", () => {
        const a = makeName(
            [[id_at_countryName, "US", true]],
            [[id_at_commonName, "John Smith"]],
        );
        const b = makeName(
            [[id_at_countryName, "US", true]],
            [[id_at_commonName, "Jane Doe"]],
        );
        expect(compareName(a, b)).toBe(false);
    });

    it("supports compareNameReverse for leaf-first comparison", () => {
        const a = makeName(
            [[id_at_countryName, "US", true]],
            [[id_at_commonName, "John Smith"]],
        );
        const b = makeName(
            [[id_at_countryName, "US", true]],
            [[id_at_commonName, "john smith"]],
        );
        expect(compareNameReverse(a, b)).toBe(true);

        const c = makeName(
            [[id_at_countryName, "US", true]],
            [[id_at_commonName, "Jane Doe"]],
        );
        expect(compareNameReverse(a, c)).toBe(false);
    });
});
