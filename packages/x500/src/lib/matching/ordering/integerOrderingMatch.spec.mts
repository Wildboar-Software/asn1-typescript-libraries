import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
    type ASN1Element,
} from "@wildboar/asn1";
import { DER, _encodeInteger } from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import {
    MATCH_FLAG_ORDERING_GREATER,
    MATCH_FLAG_ORDERING_OR_EQUAL,
} from "../../types/matching.mjs";
import integerOrderingMatch, {
    integerOrderingMatchTyped,
} from "./integerOrderingMatch.mjs";

function integer (value: number | bigint): ASN1Element {
    return _encodeInteger(value, DER);
}

function raw (octets: number[]): ASN1Element {
    const el = new DERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer);
    el.value = new Uint8Array(octets);
    return el;
}

const attributeType = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

describe("integerOrderingMatch", () => {
    it("orders by the signed difference, including values past MAX_SAFE_INTEGER", () => {
        expect(integerOrderingMatchTyped(5, integer(1))).toBeGreaterThan(0);
        expect(integerOrderingMatchTyped(5, 1)).toBeGreaterThan(0);
        expect(integerOrderingMatchTyped(0, integer(-1))).toBeGreaterThan(0);
        expect(integerOrderingMatchTyped(-1, integer(-8))).toBeGreaterThan(0);
        expect(integerOrderingMatchTyped(1, integer(5))).toBeLessThan(0);
        expect(integerOrderingMatchTyped(-8, integer(-1))).toBeLessThan(0);
        expect(integerOrderingMatchTyped(4, integer(4))).toBe(0);
        expect(integerOrderingMatchTyped(-3, integer(-3))).toBe(0);
        const above = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
        expect(integerOrderingMatchTyped(above, integer(above - 1n))).toBeGreaterThan(0);
        expect(integerOrderingMatchTyped(above - 1n, integer(above))).toBeLessThan(0);
    });

    it("orders encoded INTEGERs the same as their decoded values", () => {
        const samples: bigint[] = [ 0n ];
        for (let bits = 0; bits <= 72; bits++) {
            const p = 1n << BigInt(bits);
            samples.push(p - 1n, p, p + 1n, -p + 1n, -p, -p - 1n);
        }
        samples.push(BigInt(Number.MAX_SAFE_INTEGER), -BigInt(Number.MAX_SAFE_INTEGER));
        const encoded = samples.map(integer);
        for (let i = 0; i < samples.length; i++) {
            for (let j = 0; j < samples.length; j++) {
                const expected = Math.sign(Number(samples[i] - samples[j]));
                const actual = Math.sign(integerOrderingMatchTyped(encoded[i], encoded[j])!);
                if (actual !== expected) {
                    throw new Error(`${samples[i]} vs ${samples[j]}: expected ${expected}, got ${actual}`);
                }
            }
        }
    });

    it("tolerates a redundant sign octet in a two-octet INTEGER", () => {
        expect(integerOrderingMatchTyped(raw([ 0x00, 0x05 ]), integer(5))).toBe(0);
        expect(integerOrderingMatchTyped(raw([ 0xFF, 0xFF ]), integer(-1))).toBe(0);
        expect(integerOrderingMatchTyped(raw([ 0x00, 0x05 ]), integer(6))).toBeLessThan(0);
        expect(integerOrderingMatchTyped(raw([ 0xFF, 0x80 ]), integer(-129))).toBeGreaterThan(0);
    });

    it("rejects malformed INTEGERs", () => {
        expect(() => integerOrderingMatchTyped(raw([]), integer(1))).toThrow();
        expect(() => integerOrderingMatchTyped(integer(1), raw([ 0x00, 0x00, 0x01 ]))).toThrow();
        expect(() => integerOrderingMatchTyped(integer(1), raw([ 0xFF, 0xFF, 0xFF ]))).toThrow();
        const constructed = integer(1);
        constructed.construction = ASN1Construction.constructed;
        expect(() => integerOrderingMatchTyped(constructed, integer(1))).toThrow();
    });

    it("is TRUE when the stored value is less than the assertion", () => {
        const stored = new AttributeTypeAndValue(attributeType, integer(1));
        expect(integerOrderingMatch(integer(5), stored)).toBe(true);
        expect(integerOrderingMatch(integer(1), stored)).toBe(false);
        expect(integerOrderingMatch(integer(1), new AttributeTypeAndValue(attributeType, integer(1)))).toBe(false);
        expect(integerOrderingMatch(integer(-1), new AttributeTypeAndValue(attributeType, integer(-256)))).toBe(true);
        expect(integerOrderingMatch(integer(-256), new AttributeTypeAndValue(attributeType, integer(-1)))).toBe(false);
    });

    it("honors the greater-than and or-equal flags", () => {
        const stored = new AttributeTypeAndValue(attributeType, integer(300));
        expect(integerOrderingMatch(integer(200), stored, undefined, MATCH_FLAG_ORDERING_GREATER)).toBe(true);
        expect(integerOrderingMatch(integer(300), stored, undefined, MATCH_FLAG_ORDERING_GREATER)).toBe(false);
        expect(integerOrderingMatch(
            integer(300),
            stored,
            undefined,
            MATCH_FLAG_ORDERING_GREATER | MATCH_FLAG_ORDERING_OR_EQUAL,
        )).toBe(true);
        expect(integerOrderingMatch(integer(300), stored, undefined, MATCH_FLAG_ORDERING_OR_EQUAL)).toBe(true);
    });

    it("throws on a malformed assertion and is UNDEFINED for a malformed value", () => {
        const stored = new AttributeTypeAndValue(attributeType, integer(1));
        expect(() => integerOrderingMatch(raw([]), stored)).toThrow();
        expect(() => integerOrderingMatch(raw([ 0x00, 0x00, 0x01 ]), stored)).toThrow();
        const malformed = new AttributeTypeAndValue(attributeType, raw([ 0x00, 0x00, 0x01 ]));
        expect(integerOrderingMatch(integer(5), malformed)).toBeUndefined();
    });
});
