import { TimeSpecification_time_absolute } from "./TimeSpecification-time-absolute.ta.mjs";

const t = (iso: string): Date => new Date(iso);
const jan = t("2020-01-01T00:00:00.000Z");
const jun = t("2020-06-01T00:00:00.000Z");
const jul = t("2020-07-01T00:00:00.000Z");
const dec = t("2020-12-31T00:00:00.000Z");

describe("TimeSpecification_time_absolute Range API", () => {
    const year = new TimeSpecification_time_absolute(jan, dec);
    const mid = new TimeSpecification_time_absolute(jun, t("2021-01-01T00:00:00.000Z"));
    const instant = new TimeSpecification_time_absolute(jun, jun);
    const inverted = new TimeSpecification_time_absolute(dec, jan);
    const openEnd = new TimeSpecification_time_absolute(jul, undefined);

    it("contains a Date on the closed interval, including an instant", () => {
        expect(year.contains(jan)).toBe(true);
        expect(year.contains(dec)).toBe(true);
        expect(instant.contains(jun)).toBe(true);
        expect(instant.contains(jul)).toBe(false);
        expect(instant.isEmpty()).toBe(false);
    });

    it("missing endTime is open-ended", () => {
        expect(openEnd.contains(t("2099-01-01T00:00:00.000Z"))).toBe(true);
        expect(openEnd.contains(jun)).toBe(false);
    });

    it("intersection / union / isEqualTo copy VS Code Range", () => {
        expect(year.intersection(mid)?.isEqualTo(
            new TimeSpecification_time_absolute(jun, dec),
        )).toBe(true);
        expect(year.intersection(inverted)).toBeUndefined();
        expect(year.union(openEnd).endTime).toBeUndefined();
        expect(year.isEqualTo(new TimeSpecification_time_absolute(jan, dec)))
            .toBe(true);
    });
});
