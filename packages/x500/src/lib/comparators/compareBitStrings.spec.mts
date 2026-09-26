import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
} from "@wildboar/asn1";
import compareBitStrings from "./compareBitStrings.mjs";

function primitiveBitString (contents: number[]): BERElement {
    const el = new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.bitString,
    );
    el.value = new Uint8Array(contents);
    return el;
}

function constructedBitString (fragments: BERElement[]): BERElement {
    const el = new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.constructed,
        ASN1UniversalType.bitString,
    );
    el.construct(fragments);
    return el;
}

describe("compareBitStrings()", () => {
    it("compares the bit view, not unused bytes in the backing buffer", () => {
        const offsetView = new Uint8ClampedArray([ 0, 0, 1, 0, 1 ]).subarray(2);
        const sameBits = new Uint8ClampedArray([ 1, 0, 1 ]);
        expect(compareBitStrings(offsetView, sameBits)).toBe(true);

        const longerBuffer = new Uint8ClampedArray([ 1, 0, 1, 1 ]);
        const prefix = longerBuffer.subarray(0, 3);
        expect(compareBitStrings(prefix, longerBuffer)).toBe(false);
        expect(compareBitStrings(prefix, sameBits)).toBe(true);
    });

    describe("encoded BIT STRING", () => {
        // 19 significant bits: 11001010 11110000 101. Unused count is 5.
        const clean = primitiveBitString([ 5, 0b11001010, 0b11110000, 0b10100000 ]);
        const dirtyTrailing = primitiveBitString([ 5, 0b11001010, 0b11110000, 0b10111111 ]);
        const differentLastBit = primitiveBitString([ 5, 0b11001010, 0b11110000, 0b10000000 ]);
        const differentMiddle = primitiveBitString([ 5, 0b11001010, 0b11110001, 0b10100000 ]);

        it("ignores unused bits in the final content octet", () => {
            expect(compareBitStrings(clean, dirtyTrailing)).toBe(true);
            expect(compareBitStrings(dirtyTrailing, clean)).toBe(true);
        });

        it("rejects a difference in a significant bit of the final octet", () => {
            expect(compareBitStrings(clean, differentLastBit)).toBe(false);
        });

        it("rejects a difference in an earlier octet", () => {
            expect(compareBitStrings(clean, differentMiddle)).toBe(false);
        });

        it("treats a different unused-bits count as a different length", () => {
            const eightBits = primitiveBitString([ 0, 0b11111111 ]);
            const sevenBits = primitiveBitString([ 1, 0b11111111 ]);
            expect(compareBitStrings(eightBits, sevenBits)).toBe(false);
        });

        it("matches an empty BIT STRING", () => {
            expect(compareBitStrings(
                primitiveBitString([ 0 ]),
                primitiveBitString([ 0 ]),
            )).toBe(true);
        });

        it("matches a constructed encoding to an equivalent primitive encoding", () => {
            const constructed = constructedBitString([
                primitiveBitString([ 0, 0b11001010 ]),
                primitiveBitString([ 0, 0b11110000 ]),
                primitiveBitString([ 5, 0b10111111 ]),
            ]);
            expect(compareBitStrings(constructed, clean)).toBe(true);
            expect(compareBitStrings(clean, constructed)).toBe(true);
            expect(compareBitStrings(constructed, differentLastBit)).toBe(false);
        });

        it("matches constructed encodings that split the same bits differently", () => {
            const byBytes = constructedBitString([
                primitiveBitString([ 0, 0b11001010 ]),
                primitiveBitString([ 0, 0b11110000 ]),
                primitiveBitString([ 5, 0b10100000 ]),
            ]);
            const firstTwoCombined = constructedBitString([
                primitiveBitString([ 0, 0b11001010, 0b11110000 ]),
                primitiveBitString([ 5, 0b10110101 ]),
            ]);
            expect(compareBitStrings(byBytes, firstTwoCombined)).toBe(true);
        });

        it("matches a nested constructed BIT STRING", () => {
            const nested = constructedBitString([
                constructedBitString([
                    primitiveBitString([ 0, 0b11001010, 0b11110000 ]),
                ]),
                primitiveBitString([ 5, 0b10100011 ]),
            ]);
            expect(compareBitStrings(nested, dirtyTrailing)).toBe(true);
        });
    });

    describe("mixed BIT_STRING and element", () => {
        // Same 19 bits as the encoded examples above.
        const bits = new Uint8ClampedArray([
            1, 1, 0, 0, 1, 0, 1, 0,
            1, 1, 1, 1, 0, 0, 0, 0,
            1, 0, 1,
        ]);
        const clean = primitiveBitString([ 5, 0b11001010, 0b11110000, 0b10100000 ]);
        const dirtyTrailing = primitiveBitString([ 5, 0b11001010, 0b11110000, 0b10111111 ]);
        const constructed = constructedBitString([
            primitiveBitString([ 0, 0b11001010 ]),
            primitiveBitString([ 0, 0b11110000 ]),
            primitiveBitString([ 5, 0b10111111 ]),
        ]);

        it("converts an element to a BIT_STRING before comparing", () => {
            expect(compareBitStrings(bits, clean)).toBe(true);
            expect(compareBitStrings(clean, bits)).toBe(true);
            expect(compareBitStrings(bits, dirtyTrailing)).toBe(true);
            expect(compareBitStrings(dirtyTrailing, bits)).toBe(true);
            expect(compareBitStrings(bits, constructed)).toBe(true);
            expect(compareBitStrings(constructed, bits)).toBe(true);
        });

        it("rejects a decoded value whose bits differ", () => {
            const shorter = bits.subarray(0, -1);
            expect(compareBitStrings(shorter, clean)).toBe(false);
            expect(compareBitStrings(constructed, shorter)).toBe(false);
        });

        it("matches an empty decoded value to an empty encoding", () => {
            expect(compareBitStrings(
                new Uint8ClampedArray(0),
                primitiveBitString([ 0 ]),
            )).toBe(true);
        });
    });
});
