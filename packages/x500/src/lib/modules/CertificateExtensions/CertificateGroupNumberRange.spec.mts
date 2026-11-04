import { CertificateGroupNumberRange } from "./CertificateGroupNumberRange.ta.mjs";

describe("CertificateGroupNumberRange Range API", () => {
    const low = new CertificateGroupNumberRange(1, 10);
    const mid = new CertificateGroupNumberRange(8, 20);
    const high = new CertificateGroupNumberRange(15, 30);
    const inverted = new CertificateGroupNumberRange(10, 1);

    it("contains a serial on the closed interval", () => {
        expect(low.contains(1)).toBe(true);
        expect(low.contains(10)).toBe(true);
        expect(low.contains(0)).toBe(false);
        expect(low.contains(11)).toBe(false);
        expect(low.contains(1n)).toBe(true);
    });

    it("contains a nested range but not a protruding one", () => {
        expect(low.contains(new CertificateGroupNumberRange(2, 9))).toBe(true);
        expect(low.contains(mid)).toBe(false);
        expect(low.contains(inverted)).toBe(false);
    });

    it("isEmpty is true only for inverted bounds", () => {
        expect(low.isEmpty()).toBe(false);
        expect(new CertificateGroupNumberRange(5, 5).isEmpty()).toBe(false);
        expect(inverted.isEmpty()).toBe(true);
    });

    it("isEqualTo compares numerically", () => {
        expect(low.isEqualTo(new CertificateGroupNumberRange(1n, 10n)))
            .toBe(true);
        expect(low.isEqualTo(mid)).toBe(false);
    });

    it("intersection / union copy VS Code Range", () => {
        const overlap = low.intersection(mid);
        expect(overlap?.isEqualTo(new CertificateGroupNumberRange(8, 10)))
            .toBe(true);
        expect(low.intersection(high)).toBeUndefined();
        expect(low.union(high).isEqualTo(
            new CertificateGroupNumberRange(1, 30),
        )).toBe(true);
    });

    it("isAdjacentTo / flatten merge abutting serials", () => {
        const untilTen = new CertificateGroupNumberRange(1, 10);
        const fromEleven = new CertificateGroupNumberRange(11, 20);
        expect(untilTen.isAdjacentTo(fromEleven)).toBe(1);
        expect(fromEleven.isAdjacentTo(untilTen)).toBe(-1);
        expect(untilTen.overlaps(fromEleven)).toBe(false);
        const late = new CertificateGroupNumberRange(25, 30);
        const flattened = CertificateGroupNumberRange.flatten([
            late,
            fromEleven,
            untilTen,
            inverted,
        ]);
        expect(flattened).toHaveLength(2);
        expect(flattened[0].isEqualTo(new CertificateGroupNumberRange(1, 20)))
            .toBe(true);
        expect(flattened[1].isEqualTo(late)).toBe(true);
    });

    it("with() replaces start and/or end", () => {
        expect(low.with(2).startingNumber).toBe(2);
        expect(low.with({ endingNumber: 9 }).endingNumber).toBe(9);
        expect(low.with()).toBe(low);
    });
});
