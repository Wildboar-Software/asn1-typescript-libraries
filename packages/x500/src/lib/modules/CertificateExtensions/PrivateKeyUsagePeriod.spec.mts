import { PrivateKeyUsagePeriod } from "./PrivateKeyUsagePeriod.ta.mjs";

const t = (iso: string): Date => new Date(iso);
const jan = t("2020-01-01T00:00:00.000Z");
const jun = t("2020-06-01T00:00:00.000Z");
const jul = t("2020-07-01T00:00:00.000Z");
const dec = t("2020-12-31T00:00:00.000Z");
const next = t("2021-01-01T00:00:00.000Z");

describe("PrivateKeyUsagePeriod Range API", () => {
    const year = new PrivateKeyUsagePeriod(jan, dec);
    const mid = new PrivateKeyUsagePeriod(jun, next);
    const late = new PrivateKeyUsagePeriod(jul, next);
    const inverted = new PrivateKeyUsagePeriod(dec, jan);
    const openStart = new PrivateKeyUsagePeriod(undefined, dec);
    const openEnd = new PrivateKeyUsagePeriod(jul, undefined);

    it("contains a Date on the closed interval", () => {
        expect(year.contains(jan)).toBe(true);
        expect(year.contains(dec)).toBe(true);
        expect(year.contains(t("2019-12-31T23:59:59.999Z"))).toBe(false);
        expect(year.contains(t("2020-12-31T00:00:00.001Z"))).toBe(false);
    });

    it("contains a nested period but not a protruding one", () => {
        expect(year.contains(new PrivateKeyUsagePeriod(jun, jul))).toBe(true);
        expect(year.contains(mid)).toBe(false);
        expect(year.contains(inverted)).toBe(false);
    });

    it("omitted bounds are unbounded", () => {
        expect(openStart.contains(t("1970-01-01T00:00:00.000Z"))).toBe(true);
        expect(openEnd.contains(t("2099-01-01T00:00:00.000Z"))).toBe(true);
        expect(openStart.contains(next)).toBe(false);
    });

    it("isEmpty is true only for inverted bounds", () => {
        expect(year.isEmpty()).toBe(false);
        expect(new PrivateKeyUsagePeriod(jan, jan).isEmpty()).toBe(false);
        expect(inverted.isEmpty()).toBe(true);
        expect(openStart.isEmpty()).toBe(false);
    });

    it("isEqualTo compares instants, including omitted bounds", () => {
        expect(year.isEqualTo(new PrivateKeyUsagePeriod(jan, dec))).toBe(true);
        expect(openStart.isEqualTo(new PrivateKeyUsagePeriod(undefined, dec)))
            .toBe(true);
        expect(openStart.isEqualTo(year)).toBe(false);
    });

    it("intersection / union copy VS Code Range", () => {
        const overlap = year.intersection(mid);
        expect(overlap).toBeDefined();
        expect(overlap!.isEqualTo(new PrivateKeyUsagePeriod(jun, dec)))
            .toBe(true);
        expect(year.intersection(late)?.isEqualTo(
            new PrivateKeyUsagePeriod(jul, dec),
        )).toBe(true);
        expect(year.intersection(inverted)).toBeUndefined();
        const spanning = year.union(late);
        expect(spanning.isEqualTo(new PrivateKeyUsagePeriod(jan, next)))
            .toBe(true);
        expect(openStart.union(openEnd).notBefore).toBeUndefined();
        expect(openStart.union(openEnd).notAfter).toBeUndefined();
    });

    it("with() replaces start and/or end and returns this if unchanged", () => {
        const laterStart = year.with(jun);
        expect(laterStart.notBefore?.getTime()).toBe(jun.getTime());
        expect(laterStart.notAfter?.getTime()).toBe(dec.getTime());
        const earlierEnd = year.with({ notAfter: jul });
        expect(earlierEnd.notAfter?.getTime()).toBe(jul.getTime());
        expect(year.with()).toBe(year);
    });
});
