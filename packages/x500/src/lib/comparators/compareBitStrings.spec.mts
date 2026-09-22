import compareBitStrings from "./compareBitStrings.mjs";

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
});
