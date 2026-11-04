import { UpdateWindow } from "./UpdateWindow.ta.mjs";

const t = (iso: string): Date => new Date(iso);
const jan = t("2020-01-01T00:00:00.000Z");
const jun = t("2020-06-01T00:00:00.000Z");
const jul = t("2020-07-01T00:00:00.000Z");
const dec = t("2020-12-31T00:00:00.000Z");
const next = t("2021-01-01T00:00:00.000Z");

describe("UpdateWindow Range API", () => {
    const year = new UpdateWindow(jan, dec);
    const mid = new UpdateWindow(jun, next);
    const inverted = new UpdateWindow(dec, jan);

    it("contains a Date on the closed interval", () => {
        expect(year.contains(jan)).toBe(true);
        expect(year.contains(dec)).toBe(true);
        expect(year.contains(next)).toBe(false);
        expect(year.contains(new UpdateWindow(jun, jul))).toBe(true);
        expect(year.contains(mid)).toBe(false);
    });

    it("isEmpty is true only for inverted bounds", () => {
        expect(year.isEmpty()).toBe(false);
        expect(new UpdateWindow(jan, jan).isEmpty()).toBe(false);
        expect(inverted.isEmpty()).toBe(true);
        expect(inverted.contains(jun)).toBe(false);
    });

    it("intersection / union / isEqualTo copy VS Code Range", () => {
        expect(year.intersection(mid)?.isEqualTo(new UpdateWindow(jun, dec)))
            .toBe(true);
        expect(year.intersection(inverted)).toBeUndefined();
        expect(year.union(mid).isEqualTo(new UpdateWindow(jan, next))).toBe(true);
        expect(year.isEqualTo(new UpdateWindow(
            t("2020-01-01T00:00:00.000Z"),
            t("2020-12-31T00:00:00.000Z"),
        ))).toBe(true);
    });
});
