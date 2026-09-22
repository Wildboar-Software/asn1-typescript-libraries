import { compareBitStrings } from "./compareBitStrings.mjs";

describe("compareBitStrings()", () => {
    it("matches equal unpacked bit strings", () => {
        const a = new Uint8ClampedArray([1, 0, 1, 0]);
        const b = new Uint8ClampedArray([1, 0, 1, 0]);
        expect(compareBitStrings(a, b)).toBe(true);
    });

    it("does not treat extra bytes in a shared ArrayBuffer as part of the value", () => {
        const backing = new ArrayBuffer(16);
        const view = new Uint8ClampedArray(backing, 4, 4);
        view.set([1, 0, 1, 0]);
        new Uint8ClampedArray(backing).fill(1);
        view.set([1, 0, 1, 0]);
        const other = new Uint8ClampedArray([1, 0, 1, 0]);
        expect(compareBitStrings(view, other)).toBe(true);
        expect(compareBitStrings(new Uint8ClampedArray(backing), other)).toBe(false);
    });

    it("returns false when the bit counts differ", () => {
        expect(compareBitStrings(
            new Uint8ClampedArray([1, 0, 1]),
            new Uint8ClampedArray([1, 0, 1, 0]),
        )).toBe(false);
    });
});
