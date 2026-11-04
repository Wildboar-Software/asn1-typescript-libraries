import { Validity } from "./Validity.ta.mjs";

const t = (iso: string): Date => new Date(iso);
const jan = t("2020-01-01T00:00:00.000Z");
const jun = t("2020-06-01T00:00:00.000Z");
const dec = t("2020-12-31T00:00:00.000Z");
const next = t("2021-01-01T00:00:00.000Z");

describe("Validity Range API", () => {
    const year = new Validity(
        { utcTime: jan },
        { generalizedTime: dec },
    );
    const mid = new Validity(
        { generalizedTime: jun },
        { utcTime: next },
    );
    const inverted = new Validity(
        { generalizedTime: dec },
        { utcTime: jan },
    );

    it("contains a Date on the closed interval", () => {
        expect(year.contains(jan)).toBe(true);
        expect(year.contains(dec)).toBe(true);
        expect(year.contains(next)).toBe(false);
        expect(year.contains(inverted)).toBe(false);
    });

    it("isEqualTo aliases isEqual", () => {
        const same = new Validity(
            { generalizedTime: jan },
            { utcTime: dec },
        );
        expect(year.isEqual(same)).toBe(true);
        expect(year.isEqualTo(same)).toBe(true);
        expect(year.isEmpty).toBe(false);
        expect(new Validity({ utcTime: jan }, { utcTime: jan }).isEmpty)
            .toBe(true);
        expect(inverted.isEmpty).toBe(true);
        expect(year.overlaps(mid)).toBe(true);
        expect(year.overlaps(inverted)).toBe(false);
    });

    it("with copies VS Code Range and keeps an unchanged Time choice", () => {
        expect(year.with()).toBe(year);
        expect(year.with(jan, dec)).toBe(year);
        const later = year.with(undefined, next);
        expect(later.notBefore).toBe(year.notBefore);
        expect(later.notAfterAsDate().getTime()).toBe(next.getTime());
        expect("utcTime" in later.notAfter).toBe(true);
    });

    it("intersection / union copy VS Code Range", () => {
        const overlap = year.intersection(mid);
        expect(overlap?.notBeforeAsDate().getTime()).toBe(jun.getTime());
        expect(overlap?.notAfterAsDate().getTime()).toBe(dec.getTime());
        expect(year.union(mid).notBeforeAsDate().getTime()).toBe(jan.getTime());
        expect(year.union(mid).notAfterAsDate().getTime()).toBe(next.getTime());
        const touch = year.intersection(new Validity(
            { generalizedTime: dec },
            { utcTime: next },
        ));
        expect(touch?.notBeforeAsDate().getTime()).toBe(dec.getTime());
        expect(touch?.notAfterAsDate().getTime()).toBe(dec.getTime());
        expect(touch?.isEmpty).toBe(true);
    });
});
