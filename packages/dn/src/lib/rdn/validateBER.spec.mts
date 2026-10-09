import { describe, expect, it } from "vitest";
import { ASN1Error } from "@wildboar/asn1";
import validateRelativeDistinguishedNameBER, {
    isRelativeDistinguishedNameBER,
} from "./validateBER.mjs";

function hex (s: string): Uint8Array {
    return Uint8Array.from(Buffer.from(s.replace(/ /g, ""), "hex"));
}

/** `cn=a`: SEQUENCE { OID 2.5.4.3, UTF8String "a" } */
const CN_A: string = "30 08 06 03 55 04 03 0C 01 61";
/** `sn=b`: SEQUENCE { OID 2.5.4.4, UTF8String "b" } */
const SN_B: string = "30 08 06 03 55 04 04 0C 01 62";
/** A SEQUENCE whose type is an OCTET STRING. */
const BAD: string = "30 08 04 03 55 04 03 0C 01 61";

function expectValid (bytes: string): void {
    expect(() => validateRelativeDistinguishedNameBER(hex(bytes)))
        .not.toThrow();
}

function expectInvalid (bytes: string): void {
    let caught: unknown;
    try {
        validateRelativeDistinguishedNameBER(hex(bytes));
    } catch (error) {
        caught = error;
    }
    expect(caught).toBeInstanceOf(ASN1Error);
}

describe("isRelativeDistinguishedNameBER()", () => {
    it("returns whether the bytes are valid", () => {
        expect(isRelativeDistinguishedNameBER(hex(`31 0A ${CN_A}`)))
            .toBe(true);
        expect(isRelativeDistinguishedNameBER(hex("31 00"))).toBe(false);
        expect(isRelativeDistinguishedNameBER(hex(CN_A))).toBe(false);
    });

    it("rethrows errors that are not ASN.1 errors", () => {
        expect(() => isRelativeDistinguishedNameBER(
            null as unknown as Uint8Array,
        )).toThrow(TypeError);
    });
});

describe("validateRelativeDistinguishedNameBER()", () => {
    it("accepts single- and multi-valued RDNs", () => {
        expectValid(`31 0A ${CN_A}`);
        expectValid(`31 14 ${CN_A} ${SN_B}`);
    });

    it("accepts indefinite lengths", () => {
        expectValid(`31 80 ${CN_A} ${SN_B} 00 00`);
        expectValid("31 0C 30 80 06 03 55 04 03 0C 01 61 00 00");
    });

    it("rejects empty RDNs", () => {
        expectInvalid("31 00");
        expectInvalid("31 80 00 00");
    });

    it("rejects empty, truncated, and trailing bytes", () => {
        expectInvalid("");
        expectInvalid(`31 0B ${CN_A}`);
        expectInvalid(`31 0A ${CN_A} 00`);
        expectInvalid(`31 0B ${CN_A} 00`);
    });

    it("rejects elements that are not a universal constructed SET", () => {
        expectInvalid(`30 0A ${CN_A}`);
        expectInvalid(`A1 0A ${CN_A}`);
        expectInvalid(`11 0A ${CN_A}`);
    });

    it("rejects components that are not attribute types and values", () => {
        expectInvalid("31 03 0C 01 61");
        expectInvalid("31 02 31 00");
        expectInvalid(`31 0A ${BAD}`);
    });

    it("validates every component", () => {
        expectInvalid(`31 14 ${BAD} ${CN_A}`);
        expectInvalid(`31 14 ${CN_A} ${BAD}`);
        expectInvalid(`31 1E ${CN_A} ${SN_B} ${BAD}`);
    });
});
