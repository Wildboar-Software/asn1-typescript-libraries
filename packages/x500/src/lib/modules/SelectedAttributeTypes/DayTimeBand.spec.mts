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

describe("DayTime.toSeconds() / fromSeconds()", () => {
    it("maps midnight and 23:59:59 to 0 and 86399", () => {
        expect(new DayTime(0).toSeconds()).toBe(0);
        expect(new DayTime(23, 59, 59).toSeconds()).toBe(86399);
        expect(DayTime.fromSeconds(0).isEqualTo(new DayTime(0))).toBe(true);
        expect(DayTime.fromSeconds(86399).isEqualTo(new DayTime(23, 59, 59)))
            .toBe(true);
    });

    it("round-trips a time that uses minute and second", () => {
        const original = new DayTime(14, 30, 5);
        expect(DayTime.fromSeconds(original.toSeconds()).isEqualTo(original))
            .toBe(true);
    });

    it("rejects a second-of-day outside 0..86399", () => {
        expect(() => DayTime.fromSeconds(-1)).toThrow();
        expect(() => DayTime.fromSeconds(86400)).toThrow();
        expect(() => DayTime.fromSeconds(1.5)).toThrow();
    });
});

describe("DayTimeBand.overlaps() / isAdjacentTo() / merge() / flatten()", () => {
    const morning = new DayTimeBand(new DayTime(9), new DayTime(12));
    const midday = new DayTimeBand(new DayTime(11), new DayTime(14));
    const afternoon = new DayTimeBand(new DayTime(13), new DayTime(17));
    const late = new DayTimeBand(new DayTime(18), new DayTime(20));
    const fromMidnightA = new DayTimeBand(undefined, new DayTime(8));
    const fromMidnightB = new DayTimeBand(undefined, new DayTime(12));
    const toMidnightA = new DayTimeBand(new DayTime(17), undefined);
    const toMidnightB = new DayTimeBand(new DayTime(20), undefined);

    it("overlaps when closed ranges share a second", () => {
        expect(morning.overlaps(midday)).toBe(true);
        expect(morning.overlaps(afternoon)).toBe(false);
        expect(morning.overlaps(
            new DayTimeBand(new DayTime(12), new DayTime(13)),
        )).toBe(true);
    });

    it("isAdjacentTo when bands are one second apart", () => {
        const untilNoon = new DayTimeBand(new DayTime(9), new DayTime(12));
        const fromNextSecond = new DayTimeBand(
            new DayTime(12, 0, 1),
            new DayTime(17),
        );
        expect(untilNoon.isAdjacentTo(fromNextSecond)).toBe(true);
        expect(untilNoon.overlaps(fromNextSecond)).toBe(false);
        expect(morning.isAdjacentTo(afternoon)).toBe(false);
    });

    it("merge() takes the earlier start and later end", () => {
        const union = morning.merge(midday);
        expect(union.startDayTime!.isEqualTo(new DayTime(9))).toBe(true);
        expect(union.endDayTime!.isEqualTo(new DayTime(14))).toBe(true);
    });

    it("merge() omits DEFAULT start and end", () => {
        const union = fromMidnightA.merge(toMidnightA);
        expect(union.startDayTime).toBeUndefined();
        expect(union.endDayTime).toBeUndefined();
        expect(union.isStartOfDay()).toBe(true);
        expect(union.isEndOfDay()).toBe(true);
    });

    it("flatten() merges overlapping start-of-day bands into one", () => {
        const flattened = DayTimeBand.flatten([ fromMidnightA, fromMidnightB ]);
        expect(flattened).toHaveLength(1);
        expect(flattened[0].isStartOfDay()).toBe(true);
        expect(flattened[0].endDayTime!.isEqualTo(new DayTime(12))).toBe(true);
    });

    it("flatten() merges overlapping end-of-day bands into one", () => {
        const flattened = DayTimeBand.flatten([ toMidnightB, toMidnightA ]);
        expect(flattened).toHaveLength(1);
        expect(flattened[0].isEndOfDay()).toBe(true);
        expect(flattened[0].startDayTime!.isEqualTo(new DayTime(17))).toBe(true);
    });

    it("flatten() unions a chain of overlaps and keeps a gapped band", () => {
        const flattened = DayTimeBand.flatten([
            late,
            afternoon,
            midday,
            morning,
        ]);
        expect(flattened).toHaveLength(2);
        expect(flattened[0].startDayTime!.isEqualTo(new DayTime(9))).toBe(true);
        expect(flattened[0].endDayTime!.isEqualTo(new DayTime(17))).toBe(true);
        expect(flattened[1].isEqualTo(late)).toBe(true);
    });

    it("flatten() merges bands that only abut by one second", () => {
        const untilNoon = new DayTimeBand(new DayTime(9), new DayTime(12));
        const fromNextSecond = new DayTimeBand(
            new DayTime(12, 0, 1),
            new DayTime(17),
        );
        const flattened = DayTimeBand.flatten([ fromNextSecond, untilNoon ]);
        expect(flattened).toHaveLength(1);
        expect(flattened[0].startDayTime!.isEqualTo(new DayTime(9))).toBe(true);
        expect(flattened[0].endDayTime!.isEqualTo(new DayTime(17))).toBe(true);
    });
});
