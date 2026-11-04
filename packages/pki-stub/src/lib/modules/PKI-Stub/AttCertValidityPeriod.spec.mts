import { AttCertValidityPeriod } from "./AttCertValidityPeriod.ta.mjs";

const t = (iso: string): Date => new Date(iso);
const jan = t("2020-01-01T00:00:00.000Z");
const jun = t("2020-06-01T00:00:00.000Z");
const jul = t("2020-07-01T00:00:00.000Z");
const dec = t("2020-12-31T00:00:00.000Z");
const next = t("2021-01-01T00:00:00.000Z");

describe("AttCertValidityPeriod Range API", () => {
    const year = new AttCertValidityPeriod(jan, dec);
    const mid = new AttCertValidityPeriod(jun, next);
    const inverted = new AttCertValidityPeriod(dec, jan);

    it("contains a Date on the closed interval", () => {
        expect(year.contains(jan)).toBe(true);
        expect(year.contains(dec)).toBe(true);
        expect(year.contains(t("2019-12-31T23:59:59.999Z"))).toBe(false);
        expect(year.contains(new AttCertValidityPeriod(jun, jul))).toBe(true);
        expect(year.contains(mid)).toBe(false);
        expect(year.contains(inverted)).toBe(false);
    });

    it("isEqual / isEqualTo / isEmpty copy VS Code Range", () => {
        expect(year.isEqual(new AttCertValidityPeriod(jan, dec))).toBe(true);
        expect(year.isEqualTo(new AttCertValidityPeriod(jan, dec))).toBe(true);
        expect(year.isEmpty).toBe(false);
        expect(new AttCertValidityPeriod(jan, jan).isEmpty).toBe(true);
    });

    it("intersection / union / overlaps copy VS Code Range", () => {
        const overlap = year.intersection(mid);
        expect(overlap?.isEqualTo(new AttCertValidityPeriod(jun, dec)))
            .toBe(true);
        expect(year.intersection(inverted)).toBeUndefined();
        expect(year.overlaps(mid)).toBe(true);
        expect(year.union(mid).isEqualTo(new AttCertValidityPeriod(jan, next)))
            .toBe(true);
    });

    it("with() replaces start and/or end", () => {
        expect(year.with(jun).notBeforeTime.getTime()).toBe(jun.getTime());
        expect(year.with({ notAfterTime: jul }).notAfterTime.getTime())
            .toBe(jul.getTime());
        expect(year.with()).toBe(year);
    });
});
