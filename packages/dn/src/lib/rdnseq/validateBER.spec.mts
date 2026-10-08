import { describe, expect, it } from "vitest";
import { ASN1Error, ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import validateRDNSequenceBER, {
    isRDNSequenceBER,
} from "./validateBER.mjs";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import { _encode_RDNSequence } from "../RDNSequence.ta.mjs";

function hex (s: string): Uint8Array {
    return Uint8Array.from(Buffer.from(s.replace(/ /g, ""), "hex"));
}

/** `cn=a`: SET { SEQUENCE { OID 2.5.4.3, UTF8String "a" } } */
const CN_A: string = "31 0A 30 08 06 03 55 04 03 0C 01 61";
/** `dc=b`: SET { SEQUENCE { OID 0.9.2342.19200300.100.1.25, IA5String "b" } } */
const DC_B: string = "31 11 30 0F 06 0A 09 92 26 89 93 F2 2C 64 01 19 16 01 62";
/** An empty SET. */
const EMPTY_RDN: string = "31 00";

function expectValid (bytes: string): void {
    expect(() => validateRDNSequenceBER(hex(bytes))).not.toThrow();
}

function expectInvalid (bytes: string): void {
    let caught: unknown;
    try {
        validateRDNSequenceBER(hex(bytes));
    } catch (error) {
        caught = error;
    }
    expect(caught).toBeInstanceOf(ASN1Error);
}

describe("isRDNSequenceBER()", () => {
    it("returns whether the bytes are valid", () => {
        expect(isRDNSequenceBER(hex(`30 1F ${CN_A} ${DC_B}`))).toBe(true);
        expect(isRDNSequenceBER(hex("30 00"))).toBe(true);
        expect(isRDNSequenceBER(hex(CN_A))).toBe(false);
        expect(isRDNSequenceBER(hex("30 02 31 00"))).toBe(false);
    });

    it("rethrows errors that are not ASN.1 errors", () => {
        expect(() => isRDNSequenceBER(
            null as unknown as Uint8Array,
        )).toThrow(TypeError);
    });
});

describe("validateRDNSequenceBER()", () => {
    it("accepts the root DN", () => {
        expectValid("30 00");
        expectValid("30 80 00 00");
    });

    it("accepts one or more RDNs", () => {
        expectValid(`30 0C ${CN_A}`);
        expectValid(`30 1F ${CN_A} ${DC_B}`);
        expectValid(`30 2B ${CN_A} ${DC_B} ${CN_A}`);
    });

    it("accepts the output of _encode_RDNSequence()", () => {
        const cn = new AttributeTypeAndValue(
            ObjectIdentifier.fromParts([2, 5, 4, 3]),
            _encodeUTF8String("Jonathan", BER),
        );
        const sn = new AttributeTypeAndValue(
            ObjectIdentifier.fromParts([2, 5, 4, 4]),
            _encodeUTF8String("Wilbur", BER),
        );
        expect(isRDNSequenceBER(
            _encode_RDNSequence([[cn, sn], [cn]], BER).toBytes(),
        )).toBe(true);
    });

    it("accepts indefinite lengths", () => {
        expectValid(`30 80 ${CN_A} ${DC_B} 00 00`);
        expectValid("30 0E 31 80 30 08 06 03 55 04 03 0C 01 61 00 00");
    });

    it("rejects empty, truncated, and trailing bytes", () => {
        expectInvalid("");
        expectInvalid("30");
        expectInvalid(`30 0D ${CN_A}`);
        expectInvalid(`30 0C ${CN_A} 00`);
        expectInvalid(`30 0D ${CN_A} 00`);
        expectInvalid(`30 80 ${CN_A}`);
    });

    it("rejects elements that are not a universal constructed SEQUENCE", () => {
        expectInvalid("31 00");
        expectInvalid(`31 0C ${CN_A}`);
        expectInvalid(`A0 0C ${CN_A}`);
        expectInvalid("10 00");
    });

    it("rejects empty RDNs", () => {
        expectInvalid(`30 02 ${EMPTY_RDN}`);
        expectInvalid(`30 0E ${CN_A} ${EMPTY_RDN}`);
        expectInvalid(`30 0E ${EMPTY_RDN} ${CN_A}`);
    });

    it("rejects components that are not RDNs", () => {
        expectInvalid("30 0A 30 08 06 03 55 04 03 0C 01 61");
        expectInvalid(`30 0F ${CN_A} 0C 01 61`);
    });

    it("validates every attribute type and value in every RDN", () => {
        expectInvalid("30 0C 31 0A 30 08 04 03 55 04 03 0C 01 61");
        expectInvalid(`30 18 ${CN_A} 31 0A 30 08 06 03 80 04 03 0C 01 61`);
    });
});
