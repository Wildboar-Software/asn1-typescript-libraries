import {
    countDaysOfMonthInWeek,
    startOfFirstX520WeekOfMonth,
    startOfSundayBasedWeek,
    isX520WeekListed,
    periodAllowsWeek,
    x520WeekOfMonth,
    x520WeekOfYear,
    sundayBasedWeeksInMonth,
} from "./x520PeriodCalendar.mjs";

describe("x520PeriodCalendar", () => {
    // 1 Jan 2021 was Friday. Sunday-start week of the 4th is Sun 3 – Sat 9.
    it("treats the week containing the 4th as week 1 of the month", () => {
        const first = startOfFirstX520WeekOfMonth(2021, 1);
        expect(first.getFullYear()).toBe(2021);
        expect(first.getMonth()).toBe(0);
        expect(first.getDate()).toBe(3);
        expect(x520WeekOfMonth(new Date(2021, 0, 4, 12)).week).toBe(1);
        expect(x520WeekOfMonth(new Date(2021, 0, 9, 12)).week).toBe(1);
    });

    // Sun 27 Dec 2020 – Sat 2 Jan 2021 has only 2 January days → December 2020.
    it("does not count 1 Jan 2021 as week 1 of January (fewer than four January days in that week)", () => {
        const owned = x520WeekOfMonth(new Date(2021, 0, 1, 12));
        expect(owned.year).toBe(2020);
        expect(owned.month).toBe(12);
        expect(owned.week).toBe(owned.numberOfLastWeekOfMonth);
        expect(countDaysOfMonthInWeek(startOfSundayBasedWeek(new Date(2021, 0, 1)), 2021, 1)).toBe(2);
    });

    it("treats week 5 as an alias for the last week of a 4-week February", () => {
        // Feb 2021 last X.520 week = Sun 21 – Sat 27 (= 4). 28 Feb is March.
        expect(sundayBasedWeeksInMonth(2021, 2)).toBe(4);
        const last = x520WeekOfMonth(new Date(2021, 1, 27, 12));
        expect(last.month).toBe(2);
        expect(last.week).toBe(4);
        expect(isX520WeekListed(new Set([5]), last.week, last.numberOfLastWeekOfMonth, true)).toBe(true);
        expect(isX520WeekListed(new Set([5]), 1, last.numberOfLastWeekOfMonth, true)).toBe(false);
    });

    it("numbers weeks of the year with the four-day rule and aliases 53 to the last week", () => {
        const newYears = x520WeekOfYear(new Date(2021, 0, 1, 12));
        expect(newYears.year).toBe(2020);
        expect(newYears.week).toBe(newYears.numberOfLastWeekOfYear);
        const late2021 = x520WeekOfYear(new Date(2021, 11, 28, 12));
        expect(late2021.year).toBe(2021);
        expect(late2021.week).toBe(late2021.numberOfLastWeekOfYear);
        expect(isX520WeekListed(new Set([53]), late2021.week, late2021.numberOfLastWeekOfYear, false)).toBe(true);
        expect(isX520WeekListed(new Set([53]), late2021.week - 1, late2021.numberOfLastWeekOfYear, false)).toBe(false);
    });

    it("treats a null week whitelist as unconstrained and otherwise delegates aliases", () => {
        expect(periodAllowsWeek(null, 1, 4, true)).toBe(true);
        expect(periodAllowsWeek(null, 52, 52, false)).toBe(true);
        expect(periodAllowsWeek(new Set([5]), 4, 4, true)).toBe(true);
        expect(periodAllowsWeek(new Set([5]), 1, 4, true)).toBe(false);
        expect(periodAllowsWeek(new Set([1]), 1, 4, true)).toBe(true);
    });
});
