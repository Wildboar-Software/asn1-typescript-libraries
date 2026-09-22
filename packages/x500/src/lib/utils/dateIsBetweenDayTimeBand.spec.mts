import { DayTimeBand } from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { DayTime } from "../modules/SelectedAttributeTypes/DayTime.ta.mjs";
import { Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import dateIsBetweenDayTimeBand from "./dateIsBetweenDayTimeBand.mjs";

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

    it("does not treat start after end as an overnight wrap", () => {
        const dtb = new DayTimeBand(
            new DayTime(22, 0, 0),
            new DayTime(6, 0, 0),
        );
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 22, 0, 0))).toBe(false);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 23, 30, 0))).toBe(false);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 0, 0, 0))).toBe(false);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 6, 0, 0))).toBe(false);
        expect(dateIsBetweenDayTimeBand(dtb, new Date(2021, 0, 1, 12, 0, 0))).toBe(false);
        const p = new Period([ dtb ]);
    });

    // Overnight `between` with `entirely` TRUE is covered (skipped) in
    // `temporalContext.spec.mts`. X.520 clause 10.2 is not clear if or
    // how overnight timebands are represented.
});
