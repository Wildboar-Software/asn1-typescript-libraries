import { TimeAssertion_between } from "./TimeAssertion-between.ta.mjs";

const t = (iso: string): Date => new Date(iso);
const jan = t("2020-01-01T00:00:00.000Z");
const jun = t("2020-06-01T00:00:00.000Z");
const jul = t("2020-07-01T00:00:00.000Z");
const dec = t("2020-12-31T00:00:00.000Z");

describe("TimeAssertion_between Range API", () => {
    const year = new TimeAssertion_between(jan, dec);
    const mid = new TimeAssertion_between(jun, t("2021-01-01T00:00:00.000Z"));
    const openEnd = new TimeAssertion_between(jul);
    const entirely = new TimeAssertion_between(jan, dec, true);

    it("contains a Date on the closed interval", () => {
        expect(year.contains(jan)).toBe(true);
        expect(year.contains(dec)).toBe(true);
        expect(year.contains(t("2019-12-31T23:59:59.999Z"))).toBe(false);
    });

    it("missing endTime is open-ended", () => {
        expect(openEnd.contains(t("2099-01-01T00:00:00.000Z"))).toBe(true);
        expect(year.contains(openEnd)).toBe(false);
        expect(openEnd.contains(year)).toBe(false);
    });

    it("isEqualTo applies DEFAULT entirely FALSE", () => {
        expect(year.isEqualTo(new TimeAssertion_between(jan, dec, false)))
            .toBe(true);
        expect(year.isEqualTo(entirely)).toBe(false);
        expect(year.entirelyValue()).toBe(false);
        expect(entirely.entirelyValue()).toBe(true);
    });

    it("intersection / union keep this.entirely", () => {
        const overlap = entirely.intersection(mid);
        expect(overlap?.startTime.getTime()).toBe(jun.getTime());
        expect(overlap?.endTime?.getTime()).toBe(dec.getTime());
        expect(overlap?.entirely).toBe(true);
        expect(year.union(openEnd).endTime).toBeUndefined();
        expect(year.union(openEnd).entirely).toBeUndefined();
    });

    it("with() can replace entirely", () => {
        expect(year.with({ entirely: true }).entirely).toBe(true);
        expect(year.with()).toBe(year);
    });
});
