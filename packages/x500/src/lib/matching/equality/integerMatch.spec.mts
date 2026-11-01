import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { DER, _encodeEnumerated, _encodeInteger } from "@wildboar/asn1/functional";
import { Attribute } from "../../modules/InformationFramework/Attribute.ta.mjs";
import integerMatch from "./integerMatch.mjs";
import { onStoredValue } from "./onStoredValue.spec.mjs";

const match = onStoredValue(integerMatch);

function rawInteger (octets: number[], construction = ASN1Construction.primitive): DERElement {
    const el = new DERElement(
        ASN1TagClass.universal,
        construction,
        ASN1UniversalType.integer,
    );
    el.value = new Uint8Array(octets);
    return el;
}

describe("integerMatch", () => {
    it("matches equal integers", () => {
        for (const n of [ 0, 1, -1, 127, 128, -128, -129, 255, 256, 65535, -65536 ]) {
            expect(match(_encodeInteger(n, DER), _encodeInteger(n, DER))).toBe(true);
        }
    });

    it("does not match unequal integers", () => {
        expect(match(_encodeInteger(2, DER), _encodeInteger(3, DER))).toBe(false);
        expect(match(_encodeInteger(1, DER), _encodeInteger(-1, DER))).toBe(false);
        expect(match(_encodeInteger(128, DER), _encodeInteger(-128, DER))).toBe(false);
        expect(match(_encodeInteger(255, DER), _encodeInteger(-1, DER))).toBe(false);
    });

    it("matches integers larger than a JavaScript number", () => {
        const big = (2n ** 100n) + 7n;
        expect(match(_encodeInteger(big, DER), _encodeInteger(big, DER))).toBe(true);
        expect(match(_encodeInteger(big, DER), _encodeInteger(big + 1n, DER))).toBe(false);
        expect(match(_encodeInteger(-big, DER), _encodeInteger(-big, DER))).toBe(true);
    });

    it("matches an INTEGER assertion against an ENUMERATED value", () => {
        expect(match(_encodeInteger(5, DER), _encodeEnumerated(5, DER))).toBe(true);
        expect(match(_encodeInteger(5, DER), _encodeEnumerated(6, DER))).toBe(false);
    });

    it("matches any of several values", () => {
        const attr = new Attribute(
            ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]),
            [ _encodeInteger(1, DER), _encodeInteger(2, DER), _encodeInteger(3, DER) ],
        );
        expect(integerMatch(_encodeInteger(2, DER), attr)).toBe(true);
        expect(integerMatch(_encodeInteger(4, DER), attr)).toBe(false);
    });

    it("rejects malformed assertions", () => {
        const five = _encodeInteger(5, DER);
        expect(() => match(rawInteger([]), five)).toThrow();
        expect(() => match(rawInteger([ 0x00, 0x05 ]), five)).toThrow();
        expect(() => match(rawInteger([ 0x00, 0x00, 0x80 ]), five)).toThrow();
        expect(() => match(rawInteger([ 0xFF, 0x80 ]), five)).toThrow();
        expect(() => match(rawInteger([ 0x02, 0x01, 0x05 ], ASN1Construction.constructed), five)).toThrow();
    });

    it("accepts minimal encodings that begin with 0x00 or 0xFF", () => {
        expect(match(rawInteger([ 0x00, 0x80 ]), _encodeInteger(128, DER))).toBe(true);
        expect(match(rawInteger([ 0xFF, 0x7F ]), _encodeInteger(-129, DER))).toBe(true);
    });

    it("does not match padded values", () => {
        expect(match(_encodeInteger(5, DER), rawInteger([ 0x00, 0x05 ]))).toBe(false);
    });
});
