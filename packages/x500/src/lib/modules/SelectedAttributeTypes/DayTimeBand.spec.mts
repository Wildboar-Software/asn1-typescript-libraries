import { DayTime } from "./DayTime.ta.mjs";
import { DayTimeBand } from "./DayTimeBand.ta.mjs";

describe("DayTime.compare() / isEqualTo()", () => {
    it("treats missing minute and second as DEFAULT 0", () => {
        expect(new DayTime(9).isEqualTo(new DayTime(9, 0, 0))).toBe(true);
        expect(new DayTime(9).compare(new DayTime(9, 0, 0))).toBe(0);
    });

    it("orders by hour, then minute, then second", () => {
        expect(new DayTime(8).compare(new DayTime(9)) < 0).toBe(true);
        expect(new DayTime(9, 1).compare(new DayTime(9, 2)) < 0).toBe(true);
        expect(new DayTime(9, 0, 1).compare(new DayTime(9, 0, 2)) < 0).toBe(true);
        expect(new DayTime(17).compare(new DayTime(9)) > 0).toBe(true);
    });
});

describe("DayTimeBand", () => {
    it("START_OF_DAY / END_OF_DAY match the ASN.1 DEFAULTs", () => {
        expect(DayTimeBand.START_OF_DAY.isEqualTo(
            DayTimeBand._default_value_for_startDayTime,
        )).toBe(true);
        expect(DayTimeBand.END_OF_DAY.isEqualTo(
            DayTimeBand._default_value_for_endDayTime,
        )).toBe(true);
        expect(DayTimeBand.START_OF_DAY.hour).toBe(0);
        expect(DayTimeBand.END_OF_DAY.hour).toBe(23);
        expect(DayTimeBand.END_OF_DAY.minute).toBe(59);
        expect(DayTimeBand.END_OF_DAY.second).toBe(59);
    });

    it("isStartOfDay() is true for absent start and {hour 0}", () => {
        expect(new DayTimeBand().isStartOfDay()).toBe(true);
        expect(new DayTimeBand(new DayTime(0)).isStartOfDay()).toBe(true);
        expect(new DayTimeBand(new DayTime(0, 0, 0)).isStartOfDay()).toBe(true);
        expect(new DayTimeBand(new DayTime(1)).isStartOfDay()).toBe(false);
    });

    it("isEndOfDay() is true only for 23:59:59, not {hour 23}", () => {
        expect(new DayTimeBand().isEndOfDay()).toBe(true);
        expect(new DayTimeBand(
            undefined,
            new DayTime(23, 59, 59),
        ).isEndOfDay()).toBe(true);
        expect(new DayTimeBand(undefined, new DayTime(23)).isEndOfDay())
            .toBe(false);
    });

    it("isEqualTo() applies start and end DEFAULTs", () => {
        const implicit = new DayTimeBand();
        const explicit = new DayTimeBand(
            DayTimeBand.START_OF_DAY,
            DayTimeBand.END_OF_DAY,
        );
        expect(implicit.isEqualTo(explicit)).toBe(true);
        expect(implicit.compare(explicit)).toBe(0);
        expect(new DayTimeBand(new DayTime(9)).isEqualTo(implicit)).toBe(false);
    });
});
