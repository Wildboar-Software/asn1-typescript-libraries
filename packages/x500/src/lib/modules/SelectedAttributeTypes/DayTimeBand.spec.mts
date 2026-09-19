import { DayTime } from "./DayTime.ta.mjs";
import { DayTimeBand } from "./DayTimeBand.ta.mjs";

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

describe("DayTimeBand.startToSeconds() / endToSeconds()", () => {
    it("applies DEFAULT start and end", () => {
        const wholeDay = new DayTimeBand();
        expect(wholeDay.startToSeconds()).toBe(0);
        expect(wholeDay.endToSeconds()).toBe(86399);
    });

    it("uses the present start and end", () => {
        const band = new DayTimeBand(new DayTime(9), new DayTime(17, 30, 1));
        expect(band.startToSeconds()).toBe(9 * 3600);
        expect(band.endToSeconds()).toBe((17 * 3600) + (30 * 60) + 1);
    });
});

describe("DayTimeBand.contains() / overlaps() / intersection() / union()", () => {
    const morning = new DayTimeBand(new DayTime(9), new DayTime(12));
    const midday = new DayTimeBand(new DayTime(11), new DayTime(14));
    const afternoon = new DayTimeBand(new DayTime(13), new DayTime(17));
    const inverted = new DayTimeBand(new DayTime(17), new DayTime(9));

    it("contains a time on the closed interval", () => {
        expect(morning.contains(new DayTime(9))).toBe(true);
        expect(morning.contains(new DayTime(12))).toBe(true);
        expect(morning.contains(new DayTime(8, 59, 59))).toBe(false);
        expect(morning.contains(new DayTime(12, 0, 1))).toBe(false);
    });

    it("contains a nested band but not a protruding one", () => {
        expect(morning.contains(
            new DayTimeBand(new DayTime(10), new DayTime(11)),
        )).toBe(true);
        expect(morning.contains(midday)).toBe(false);
        expect(morning.contains(inverted)).toBe(false);
    });

    it("isEmpty is true only for inverted bounds", () => {
        expect(morning.isEmpty()).toBe(false);
        expect(new DayTimeBand(new DayTime(9), new DayTime(9)).isEmpty())
            .toBe(false);
        expect(inverted.isEmpty()).toBe(true);
        expect(inverted.contains(new DayTime(12))).toBe(false);
    });

    it("overlaps when closed ranges share a second", () => {
        expect(morning.overlaps(midday)).toBe(true);
        expect(morning.overlaps(afternoon)).toBe(false);
        expect(morning.overlaps(
            new DayTimeBand(new DayTime(12), new DayTime(13)),
        )).toBe(true);
        expect(morning.overlaps(inverted)).toBe(false);
    });

    it("intersection is the overlapping closed interval", () => {
        const overlap = morning.intersection(midday);
        expect(overlap).toBeDefined();
        expect(overlap!.startDayTime!.isEqualTo(new DayTime(11))).toBe(true);
        expect(overlap!.endDayTime!.isEqualTo(new DayTime(12))).toBe(true);
        expect(morning.intersection(afternoon)).toBeUndefined();
        expect(morning.intersection(inverted)).toBeUndefined();
    });

    it("union spans both bands and fills a gap", () => {
        const spanning = morning.union(afternoon);
        expect(spanning.startDayTime!.isEqualTo(new DayTime(9))).toBe(true);
        expect(spanning.endDayTime!.isEqualTo(new DayTime(17))).toBe(true);
    });

    it("union omits DEFAULT start and end", () => {
        const fromMidnight = new DayTimeBand(undefined, new DayTime(8));
        const toMidnight = new DayTimeBand(new DayTime(17), undefined);
        const whole = fromMidnight.union(toMidnight);
        expect(whole.startDayTime).toBeUndefined();
        expect(whole.endDayTime).toBeUndefined();
        expect(whole.isStartOfDay()).toBe(true);
        expect(whole.isEndOfDay()).toBe(true);
    });
});

describe("DayTimeBand.with()", () => {
    const morning = new DayTimeBand(new DayTime(9), new DayTime(12));

    it("replaces start and/or end", () => {
        const laterStart = morning.with(new DayTime(10));
        expect(laterStart.startDayTime!.isEqualTo(new DayTime(10))).toBe(true);
        expect(laterStart.endDayTime!.isEqualTo(new DayTime(12))).toBe(true);
        const earlierEnd = morning.with({ endDayTime: new DayTime(11) });
        expect(earlierEnd.endDayTime!.isEqualTo(new DayTime(11))).toBe(true);
        expect(morning.with()).toBe(morning);
    });
});

describe("DayTimeBand.isAdjacentTo() / merge() / flatten()", () => {
    const morning = new DayTimeBand(new DayTime(9), new DayTime(12));
    const midday = new DayTimeBand(new DayTime(11), new DayTime(14));
    const afternoon = new DayTimeBand(new DayTime(13), new DayTime(17));
    const late = new DayTimeBand(new DayTime(18), new DayTime(20));
    const fromMidnightA = new DayTimeBand(undefined, new DayTime(8));
    const fromMidnightB = new DayTimeBand(undefined, new DayTime(12));
    const toMidnightA = new DayTimeBand(new DayTime(17), undefined);
    const toMidnightB = new DayTimeBand(new DayTime(20), undefined);

    it("returns 1 or -1 for the bound that abuts, else 0", () => {
        const untilNoon = new DayTimeBand(new DayTime(9), new DayTime(12));
        const fromNextSecond = new DayTimeBand(
            new DayTime(12, 0, 1),
            new DayTime(17),
        );
        expect(untilNoon.isAdjacentTo(fromNextSecond)).toBe(1);
        expect(fromNextSecond.isAdjacentTo(untilNoon)).toBe(-1);
        expect(untilNoon.overlaps(fromNextSecond)).toBe(false);
        expect(morning.isAdjacentTo(afternoon)).toBe(0);
        expect(morning.isAdjacentTo(midday)).toBe(0);
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

    it("flatten() drops inverted bands and leaves disjoint spans", () => {
        const inverted = new DayTimeBand(new DayTime(22), new DayTime(6));
        const flattened = DayTimeBand.flatten([ late, inverted, morning ]);
        expect(flattened).toHaveLength(2);
        expect(flattened[0].isEqualTo(morning)).toBe(true);
        expect(flattened[1].isEqualTo(late)).toBe(true);
    });
});
