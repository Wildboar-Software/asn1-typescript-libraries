import { boundToIntegerBytes } from "../../utils/rangeAlgebra.mjs";
import { NumberRange } from "./NumberRange.ta.mjs";

function n (value: number | bigint): Uint8Array {
    const bytes = boundToIntegerBytes(BigInt(value));
    if (bytes === undefined) {
        throw new Error("expected INTEGER bytes");
    }
    return bytes;
}

describe("NumberRange Range API", () => {
    const low = new NumberRange(n(1), n(10));
    const mid = new NumberRange(n(8), n(20));
    const high = new NumberRange(n(15), n(30));
    const inverted = new NumberRange(n(10), n(1));
    const openStart = new NumberRange(undefined, n(10));
    const mod5 = new NumberRange(n(0), n(2), n(5));

    it("contains a serial on the half-open interval", () => {
        expect(low.contains(1)).toBe(true);
        expect(low.contains(9)).toBe(true);
        expect(low.contains(10)).toBe(false);
        expect(low.contains(0)).toBe(false);
        expect(low.contains(n(9))).toBe(true);
    });

    it("applies modulus before the range check", () => {
        expect(mod5.contains(0)).toBe(true);
        expect(mod5.contains(1)).toBe(true);
        expect(mod5.contains(2)).toBe(false);
        expect(mod5.contains(5)).toBe(true);
        expect(mod5.contains(6)).toBe(true);
        expect(mod5.contains(7)).toBe(false);
        expect(mod5.contains(-5)).toBe(true);
        expect(mod5.contains(-1)).toBe(false);
    });

    it("contains another range only when moduli match", () => {
        expect(low.contains(new NumberRange(n(2), n(9)))).toBe(true);
        expect(low.contains(mid)).toBe(false);
        expect(low.contains(inverted)).toBe(false);
        expect(low.contains(mod5)).toBe(false);
        expect(mod5.contains(new NumberRange(n(0), n(1), n(5)))).toBe(true);
    });

    it("isEmpty is true for inverted or zero-width exclusive ranges", () => {
        expect(low.isEmpty()).toBe(false);
        expect(new NumberRange(n(5), n(5)).isEmpty()).toBe(true);
        expect(inverted.isEmpty()).toBe(true);
        expect(openStart.isEmpty()).toBe(false);
    });

    it("isEqualTo compares numerically, including modulus", () => {
        expect(low.isEqualTo(new NumberRange(n(1n), n(10n)))).toBe(true);
        expect(mod5.isEqualTo(new NumberRange(n(0), n(2), n(5)))).toBe(true);
        expect(mod5.isEqualTo(low)).toBe(false);
    });

    it("intersection / union copy VS Code Range on the same modulus", () => {
        const overlap = low.intersection(mid);
        expect(overlap?.isEqualTo(new NumberRange(n(8), n(10)))).toBe(true);
        expect(low.intersection(high)).toBeUndefined();
        expect(low.intersection(new NumberRange(n(10), n(20)))).toBeUndefined();
        expect(low.union(high).isEqualTo(new NumberRange(n(1), n(30))))
            .toBe(true);
        expect(low.intersection(mod5)).toBeUndefined();
        expect(() => low.union(mod5)).toThrow(/modulus/);
    });

    it("isAdjacentTo / flatten respect exclusive ends and modulus", () => {
        const untilTen = new NumberRange(n(1), n(10));
        const fromTen = new NumberRange(n(10), n(20));
        expect(untilTen.isAdjacentTo(fromTen)).toBe(1);
        expect(untilTen.overlaps(fromTen)).toBe(false);
        const late = new NumberRange(n(25), n(30));
        const flattened = NumberRange.flatten([
            late,
            fromTen,
            untilTen,
            inverted,
            mod5,
        ]);
        expect(flattened).toHaveLength(3);
        expect(flattened[0].isEqualTo(mod5)).toBe(true);
        expect(flattened[1].isEqualTo(new NumberRange(n(1), n(20)))).toBe(true);
        expect(flattened[2].isEqualTo(late)).toBe(true);
    });

    it("with() replaces start and/or end", () => {
        expect(low.with(n(2)).contains(1)).toBe(false);
        expect(low.with({ endingNumber: n(9) }).contains(8)).toBe(true);
        expect(low.with()).toBe(low);
    });
});
