import { Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import destructureDateIntoPeriodProperties from "./destructureDateIntoPeriodProperties.mjs";

describe("destructureDateIntoPeriodProperties", () => {
    it("treats days-only intDay as day-of-week (X.520 every Monday example)", () => {
        const p = new Period(
            undefined,
            { intDay: [ 2 ] },
        );
        const monday = new Date(2026, 0, 5, 12, 0, 0);
        expect(monday.getDay()).toBe(1);
        expect(destructureDateIntoPeriodProperties(p, monday).day).toBe(2);

        const dayOfYearTwo = new Date(2026, 0, 2, 12, 0, 0);
        expect(dayOfYearTwo.getDay()).toBe(5);
        expect(destructureDateIntoPeriodProperties(p, dayOfYearTwo).day).toBe(6);
    });

    it("still treats days+years as day-of-year", () => {
        // Day 32 cannot be a day-of-week (1-7) or day-of-month (1-31).
        const p = new Period(
            undefined,
            { intDay: [ 32 ] },
            undefined,
            undefined,
            [ 2026 ],
        );
        const feb1 = new Date(2026, 1, 1, 12, 0, 0);
        expect(destructureDateIntoPeriodProperties(p, feb1).day).toBe(32);
    });
});
