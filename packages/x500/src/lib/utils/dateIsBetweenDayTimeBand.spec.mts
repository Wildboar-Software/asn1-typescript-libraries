import { DayTimeBand } from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { DayTime } from "../modules/SelectedAttributeTypes/DayTime.ta.mjs";
import { Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import dateIsBetweenDayTimeBand from "./dateIsBetweenDayTimeBand.mjs";
import boundariesOfPeriodOccurrence from "./boundariesOfPeriodOccurrence.mjs";

describe("dateIsBetweenDayTimeBand", () => {
    it("matches a same-day band inclusively", () => {
        const dtb = new DayTimeBand(
            new DayTime(9, 0, 0),
            new DayTime(17, 0, 0),
        );
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 9, 0, 0))).toBe(true);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 12, 0, 0))).toBe(true);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 17, 0, 0))).toBe(true);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 8, 59, 59))).toBe(false);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 17, 0, 1))).toBe(false);
    });

    it("matches an overnight band that wraps past midnight", () => {
        const dtb = new DayTimeBand(
            new DayTime(22, 0, 0),
            new DayTime(6, 0, 0),
        );
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 22, 0, 0))).toBe(true);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 23, 30, 0))).toBe(true);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 0, 0, 0))).toBe(true);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 6, 0, 0))).toBe(true);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 12, 0, 0))).toBe(false);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 21, 59, 59))).toBe(false);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 6, 0, 1))).toBe(false);
    });

    it("returns overnight occurrence bounds spanning midnight", () => {
        const p = new Period(
            [
                new DayTimeBand(
                    new DayTime(22, 0, 0),
                    new DayTime(6, 0, 0),
                ),
            ],
        );
        const evening = new Date(2021, 5, 10, 23, 0, 0);
        const eveningBounds = boundariesOfPeriodOccurrence(p, evening);
        expect(eveningBounds).not.toBeNull();
        expect(eveningBounds![0]).toEqual(new Date(2021, 5, 10, 22, 0, 0));
        expect(eveningBounds![1]).toEqual(new Date(2021, 5, 11, 6, 0, 0));

        const morning = new Date(2021, 5, 11, 3, 0, 0);
        const morningBounds = boundariesOfPeriodOccurrence(p, morning);
        expect(morningBounds).not.toBeNull();
        expect(morningBounds![0]).toEqual(new Date(2021, 5, 10, 22, 0, 0));
        expect(morningBounds![1]).toEqual(new Date(2021, 5, 11, 6, 0, 0));
    });
});
