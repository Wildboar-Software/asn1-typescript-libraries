import {
    countDaysOfMonthInISOWeek,
    startOfFirstX520WeekOfMonth,
    x520WeekIsListed,
    x520WeekOfMonth,
    x520WeekOfYear,
    x520WeeksInMonth,
} from "./x520PeriodCalendar.mjs";
import { startOfISOWeek } from "date-fns";

describe("x520PeriodCalendar", () => {
    // 1 Jan 2021 was Friday. Monday-start week of the 4th is Mon 4 – Sun 10.
    it("treats the week containing the 4th as week 1 of the month", () => {
        const first = startOfFirstX520WeekOfMonth(2021, 1);
        expect(first.getFullYear()).toBe(2021);
        expect(first.getMonth()).toBe(0);
        expect(first.getDate()).toBe(4);
        expect(x520WeekOfMonth(new Date(2021, 0, 4, 12)).week).toBe(1);
        expect(x520WeekOfMonth(new Date(2021, 0, 10, 12)).week).toBe(1);
    });

    // Mon 28 Dec 2020 – Sun 3 Jan 2021 has only 3 January days → December 2020.
    it("does not count 1 Jan 2021 as week 1 of January (only three January days in that ISO week)", () => {
        const owned = x520WeekOfMonth(new Date(2021, 0, 1, 12));
        expect(owned.year).toBe(2020);
        expect(owned.month).toBe(12);
        expect(owned.week).toBe(owned.lastWeek);
        expect(countDaysOfMonthInISOWeek(startOfISOWeek(new Date(2021, 0, 1)), 2021, 1)).toBe(3);
    });

    it("treats week 5 as an alias for the last week of a 4-week February", () => {
        // Feb 2021: week 1 = 1–7 Feb, last X.520 week = Mon 22 – Sun 28 (= 4).
        expect(x520WeeksInMonth(2021, 2)).toBe(4);
        const last = x520WeekOfMonth(new Date(2021, 1, 28, 12));
        expect(last.month).toBe(2);
        expect(last.week).toBe(4);
        expect(x520WeekIsListed(new Set([5]), last.week, last.lastWeek, true)).toBe(true);
        expect(x520WeekIsListed(new Set([5]), 1, last.lastWeek, true)).toBe(false);
    });

    it("uses ISO weeks of the year and aliases 53 to the last week", () => {
        const newYears = x520WeekOfYear(new Date(2021, 0, 1, 12));
        expect(newYears.year).toBe(2020);
        expect(newYears.week).toBe(53);
        const late2021 = x520WeekOfYear(new Date(2021, 11, 28, 12));
        expect(late2021.year).toBe(2021);
        expect(late2021.week).toBe(52);
        expect(late2021.lastWeek).toBe(52);
        expect(x520WeekIsListed(new Set([53]), 52, 52, false)).toBe(true);
        expect(x520WeekIsListed(new Set([53]), 51, 52, false)).toBe(false);
    });
});
