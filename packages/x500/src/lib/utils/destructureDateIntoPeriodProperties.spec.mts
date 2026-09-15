import { Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import destructureDateIntoPeriodProperties from "./destructureDateIntoPeriodProperties.mjs";
import boundariesOfPeriodOccurrence from "./boundariesOfPeriodOccurrence.mjs";

describe("destructureDateIntoPeriodProperties", () => {
    it("treats days-only intDay as day-of-week (X.520 every Monday example)", () => {
        const p = new Period(
            undefined,
            { intDay: [ 2 ] },
        );
        const monday = new Date(2026, 0, 5, 12, 0, 0);
        expect(monday.getDay()).toBe(1);
        expect(destructureDateIntoPeriodProperties(p, monday).day).toBe(2);
        expect(boundariesOfPeriodOccurrence(p, monday)).not.toBeNull();

        const dayOfYearTwo = new Date(2026, 0, 2, 12, 0, 0);
        expect(dayOfYearTwo.getDay()).toBe(5);
        expect(destructureDateIntoPeriodProperties(p, dayOfYearTwo).day).toBe(6);
        expect(boundariesOfPeriodOccurrence(p, dayOfYearTwo)).toBeNull();
    });

    it("still treats days+years as day-of-year", () => {
        const p = new Period(
            undefined,
            { intDay: [ 2 ] },
            undefined,
            undefined,
            [ 2026 ],
        );
        const jan2 = new Date(2026, 0, 2, 12, 0, 0);
        expect(destructureDateIntoPeriodProperties(p, jan2).day).toBe(2);
        expect(boundariesOfPeriodOccurrence(p, jan2)).not.toBeNull();
    });
});
