import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import bitStringMatch from "./bitStringMatch.mjs";

function primitiveBitString (unusedBits: number, content: number[]): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.bitString,
        new Uint8Array([ unusedBits, ...content ]),
    );
}

describe("bitStringMatch()", () => {
    it("matches primitive encodings that differ only in BER unused-bit padding", () => {
        const a = primitiveBitString(5, [ 0b10100000 ]);
        const b = primitiveBitString(5, [ 0b10111111 ]);
        expect(bitStringMatch(a, b)).toBe(true);
    });

    it("returns false when the unused-bit count (and therefore length) differs", () => {
        const a = primitiveBitString(5, [ 0b10100000 ]);
        const b = primitiveBitString(4, [ 0b10100000 ]);
        expect(bitStringMatch(a, b)).toBe(false);
    });

    it("matches empty BIT STRING values", () => {
        const empty = primitiveBitString(0, []);
        expect(bitStringMatch(empty, empty)).toBe(true);
    });
});
