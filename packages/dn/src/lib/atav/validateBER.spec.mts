import { describe, expect, it } from "vitest";
import { ASN1Error, ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import validateAttributeTypeAndValueBER, {
    isAttributeTypeAndValueBER,
} from "./validateBER.mjs";
import {
    AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../AttributeTypeAndValue.ta.mjs";

function hex (s: string): Uint8Array {
    return Uint8Array.from(Buffer.from(s.replace(/ /g, ""), "hex"));
}

/** `cn=a`: SEQUENCE { OID 2.5.4.3, UTF8String "a" } */
const CN_A: string = "30 08 06 03 55 04 03 0C 01 61";

function expectValid (bytes: string): void {
    expect(() => validateAttributeTypeAndValueBER(hex(bytes)))
        .not.toThrow();
}

function expectInvalid (bytes: string): void {
    let caught: unknown;
    try {
        validateAttributeTypeAndValueBER(hex(bytes));
    } catch (error) {
        caught = error;
    }
    expect(caught).toBeInstanceOf(ASN1Error);
}

describe("isAttributeTypeAndValueBER()", () => {
    it("returns whether the bytes are valid", () => {
        expect(isAttributeTypeAndValueBER(hex(CN_A))).toBe(true);
        expect(isAttributeTypeAndValueBER(hex(""))).toBe(false);
        expect(isAttributeTypeAndValueBER(hex("30 00"))).toBe(false);
    });

    it("rethrows errors that are not ASN.1 errors", () => {
        expect(() => isAttributeTypeAndValueBER(
            null as unknown as Uint8Array,
        )).toThrow(TypeError);
    });
});

describe("validateAttributeTypeAndValueBER()", () => {
    it("accepts a type and value", () => {
        expectValid(CN_A);
    });

    it("accepts the output of _encode_AttributeTypeAndValue()", () => {
        const atav = new AttributeTypeAndValue(
            ObjectIdentifier.fromParts([2, 5, 4, 3]),
            _encodeUTF8String("Jonathan", BER),
        );
        expect(isAttributeTypeAndValueBER(
            _encode_AttributeTypeAndValue(atav).toBytes(),
        )).toBe(true);
    });

    it("accepts values of any type", () => {
        expectValid("30 07 06 03 55 04 03 30 00");
        expectValid("30 07 06 03 55 04 03 05 00");
    });

    it("accepts extensions", () => {
        expectValid("30 0A 06 03 55 04 03 0C 01 61 05 00");
    });

    it("accepts indefinite lengths", () => {
        expectValid("30 80 06 03 55 04 03 0C 01 61 00 00");
    });

    it("rejects empty, truncated, and trailing bytes", () => {
        expectInvalid("");
        expectInvalid("30");
        expectInvalid("30 08 06 03 55 04 03 0C 01");
        expectInvalid(`${CN_A} 00`);
        expectInvalid(`${CN_A} 30 00`);
        expectInvalid("30 80 06 03 55 04 03 0C 01 61");
    });

    it("rejects elements that are not a universal constructed SEQUENCE", () => {
        expectInvalid("31 08 06 03 55 04 03 0C 01 61");
        expectInvalid("A0 08 06 03 55 04 03 0C 01 61");
        expectInvalid("10 08 06 03 55 04 03 0C 01 61");
    });

    it("rejects missing components", () => {
        expectInvalid("30 00");
        expectInvalid("30 05 06 03 55 04 03");
    });

    it("rejects malformed components", () => {
        expectInvalid("30 09 06 03 55 04 03 0C 01 61 00");
        expectInvalid("30 08 06 03 55 04 03 0C 02 61");
    });

    it("rejects types that are not an object identifier", () => {
        expectInvalid("30 08 04 03 55 04 03 0C 01 61");
        expectInvalid("30 08 26 03 55 04 03 0C 01 61");
        expectInvalid("30 08 86 03 55 04 03 0C 01 61");
    });

    it("rejects malformed object identifiers", () => {
        expectInvalid("30 05 06 00 0C 01 61");
        expectInvalid("30 08 06 03 80 04 03 0C 01 61");
        expectInvalid("30 08 06 03 55 80 03 0C 01 61");
        expectInvalid("30 08 06 03 55 04 83 0C 01 61");
    });
});
