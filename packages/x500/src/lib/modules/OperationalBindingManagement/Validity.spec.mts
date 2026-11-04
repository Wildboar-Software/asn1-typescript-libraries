import { Validity } from "./Validity.ta.mjs";

const t = (iso: string): Date => new Date(iso);
const jan = t("2020-01-01T00:00:00.000Z");
const jun = t("2020-06-01T00:00:00.000Z");
const dec = t("2020-12-31T00:00:00.000Z");
const next = t("2021-01-01T00:00:00.000Z");

function at (start: Date, end: Date): Validity {
    return new Validity(
        { time: { generalizedTime: start } },
        { time: { generalizedTime: end } },
    );
}

describe("OperationalBinding Validity Range API", () => {
    const year = at(jan, dec);
    const mid = at(jun, next);
    const fromNow = new Validity();
    const untilTime = new Validity(
        undefined,
        { time: { utcTime: dec } },
    );

    it("now / explicitTermination are unbounded", () => {
        expect(fromNow.contains(t("1970-01-01T00:00:00.000Z"))).toBe(true);
        expect(fromNow.contains(t("2099-01-01T00:00:00.000Z"))).toBe(true);
        expect(fromNow.isEmpty()).toBe(false);
        expect(fromNow.isEqualTo(new Validity(
            { now: null },
            { explicitTermination: null },
        ))).toBe(true);
        expect(untilTime.contains(t("1970-01-01T00:00:00.000Z"))).toBe(true);
        expect(untilTime.contains(next)).toBe(false);
    });

    it("contains a Date on the closed time interval", () => {
        expect(year.contains(jan)).toBe(true);
        expect(year.contains(dec)).toBe(true);
        expect(year.contains(next)).toBe(false);
        expect(year.contains(at(jun, dec))).toBe(true);
        expect(year.contains(mid)).toBe(false);
    });

    it("intersection / union copy VS Code Range", () => {
        expect(year.intersection(mid)?.isEqualTo(at(jun, dec))).toBe(true);
        expect(year.union(mid).isEqualTo(at(jan, next))).toBe(true);
        expect(year.union(fromNow).isEqualTo(fromNow)).toBe(true);
        expect(year.intersection(fromNow)?.isEqualTo(year)).toBe(true);
    });

    it("with() replaces CHOICE bounds", () => {
        const later = year.with({
            validFrom: { time: { generalizedTime: jun } },
        });
        expect(later.contains(jan)).toBe(false);
        expect(year.with()).toBe(year);
    });
});
