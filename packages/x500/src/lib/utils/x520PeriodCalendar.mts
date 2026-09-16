/**
 * @file X.520 `Period` week numbering (clause 10.2).
 *
 * X.520 never says “ISO 8601 week”. It does give the same two rules ISO uses
 * to number weeks:
 *
 * - the **first week** of a month or year is the first week that contains
 *   **at least four days** of that month or year;
 * - **week 5** of a month and **week 53** of a year always mean the **last**
 *   such week, even if the month only has four weeks or the year only has 52.
 *
 * A “week” is seven consecutive days, so those rules are undefined until you
 * pick which weekday starts the week. ISO 8601 picks **Monday**. This module
 * uses date-fns ISO-week helpers (`startOfISOWeek`, `getISOWeek`, …) for that
 * choice — not because the Recommendation names ISO weeks, but because its
 * 4-day rule **is** the ISO week definition, and ISO weeks start on Monday.
 *
 * Why the start day matters — January 2021 (1 Jan was a Friday):
 *
 * ```
 *  December 2020               January 2021
 * Mo Tu We Th Fr Sa Su     Mo Tu We Th Fr Sa Su
 * 28 29 30 31  1  2  3      4  5  6  7  8  9 10
 * |<-- 3 January days -->| |<-- week 1 of Jan -->|
 * ```
 *
 * The Monday–Sunday week that contains 1 Jan has only Fri/Sat/Sun of January
 * (3 days), so it is **not** week 1 of January. It belongs to December 2020
 * (that week has four December days). Week 1 of January is Mon 4 – Sun 10,
 * which is also “the week containing the 4th” — the usual ISO shortcut for
 * “first week with ≥4 days of this month”.
 *
 * A Sunday-start week would give a different week 1 (Sun 3 – Sat 9). Same
 * 4-day rule, different calendar. We do not use Sunday-start weeks.
 *
 * A split week is owned by the month/year that contains its **Thursday**
 * (the 4th day of a Monday–Sunday week, hence the side with ≥4 days). That
 * is why 1 Jan 2021 reports December 2020, not January week 0.
 *
 * `Period` week **5** / **53** are aliases for that last real week, not a
 * separate bucket. February 2021 has four X.520 weeks; `weeks:{5}` still
 * matches 22–28 Feb.
 */
import {
    addDays,
    differenceInCalendarWeeks,
    endOfMonth,
    getISOWeek,
    getISOWeeksInYear,
    getISOWeekYear,
    startOfISOWeek,
    subWeeks,
} from "date-fns";

/** date-fns: `1` = Monday, matching ISO 8601 / X.520 week boundaries. */
const ISO_WEEK_STARTS_ON_MONDAY = { weekStartsOn: 1 as const };

/**
 * @summary Count how many days of a Monday–Sunday week fall in a calendar month.
 * @description
 *
 * Used to apply X.520’s “≥4 days of that month” test to a candidate last
 * week. `weekStart` must be a Monday (as `startOfISOWeek` returns).
 *
 * @param {Date} weekStart Monday 00:00 of the week.
 * @param {number} year Calendar year of the month.
 * @param {number} month 1-based month.
 * @returns {number} Number of days in `[1, 7]`.
 */
export
function countDaysOfMonthInISOWeek (weekStart: Date, year: number, month: number): number {
    let count: number = 0;
    for (let i: number = 0; i < 7; i++) {
        const day: Date = addDays(weekStart, i);
        if ((day.getFullYear() === year) && ((day.getMonth() + 1) === month)) {
            count++;
        }
    }
    return count;
}

/**
 * @summary Monday of the first X.520 week of a calendar month.
 * @description
 *
 * X.520 clause 10.2: the first week of a month is the first week that contains
 * at least four days of that month. For Monday-start weeks that is exactly
 * the week that contains the **4th** of the month (ISO’s usual shortcut).
 *
 * @param {number} year Calendar year.
 * @param {number} month 1-based month.
 * @returns {Date} Local Monday 00:00 of week 1 of the month.
 */
export
function startOfFirstX520WeekOfMonth (year: number, month: number): Date {
    return startOfISOWeek(new Date(year, month - 1, 4));
}

/**
 * @summary How many X.520 weeks a calendar month has (4 or 5).
 * @description
 *
 * Walk back from the Monday-start week that contains the last day of the
 * month until that week has ≥4 days in the month. The gap from week 1 to
 * that last week is 4 or 5. `Period` week 5 still aliases this last week
 * when the count is only 4 — that alias is applied in `x520WeekIsListed`,
 * not by returning 5 here.
 *
 * @param {number} year Calendar year.
 * @param {number} month 1-based month.
 * @returns {number} `4` or `5`.
 */
export
function x520WeeksInMonth (year: number, month: number): number {
    const first: Date = startOfFirstX520WeekOfMonth(year, month);
    // Candidate: the Monday-start week that contains the last calendar day.
    let lastStart: Date = startOfISOWeek(endOfMonth(new Date(year, month - 1, 1)));
    // If that week only spills 1–3 days into this month, it belongs to next
    // month; the previous Monday is the real last week of this month.
    if (countDaysOfMonthInISOWeek(lastStart, year, month) < 4) {
        lastStart = subWeeks(lastStart, 1);
    }
    return differenceInCalendarWeeks(lastStart, first, ISO_WEEK_STARTS_ON_MONDAY) + 1;
}

export
interface X520WeekOfMonth {
    /** Calendar year of the month that owns this Monday–Sunday week. */
    year: number;
    /** 1-based month that owns this week (Thursday’s month). */
    month: number;
    /** 1-based X.520 week of that month (1..lastWeek, never the 5-alias). */
    week: number;
    /** Real last week number of that month (4 or 5). */
    lastWeek: number;
}

/**
 * @summary X.520 week-of-month for a local instant.
 * @description
 *
 * The week is owned by the month that contains its Thursday (the month with
 * at least four days of that Monday–Sunday week). Days 1–3 of a month that
 * belong to the previous month’s last week therefore report that previous
 * month — so `{ months: January, weeks: 1 }` does not match 1 Jan 2021.
 *
 * @param {Date} point Local instant.
 * @returns {X520WeekOfMonth} Owning year/month, 1-based week, and last week number.
 */
export
function x520WeekOfMonth (point: Date): X520WeekOfMonth {
    const weekStart: Date = startOfISOWeek(point);
    // Thursday = Monday + 3 = the day that puts ≥4 days on this side of
    // the month boundary (ISO 8601 “week belongs to the year of its Thursday”).
    const thursday: Date = addDays(weekStart, 3);
    const year: number = thursday.getFullYear();
    const month: number = thursday.getMonth() + 1;
    const first: Date = startOfFirstX520WeekOfMonth(year, month);
    const week: number = differenceInCalendarWeeks(
        weekStart,
        first,
        ISO_WEEK_STARTS_ON_MONDAY,
    ) + 1;
    return {
        year,
        month,
        week,
        lastWeek: x520WeeksInMonth(year, month),
    };
}

export
interface X520WeekOfYear {
    /** ISO week-numbering year (may differ from `point.getFullYear()`). */
    year: number;
    /** ISO week 1..lastWeek (52 or 53). */
    week: number;
    /** 52 or 53; `Period` week 53 aliases this when it is 52. */
    lastWeek: number;
}

/**
 * @summary X.520 week-of-year for a local instant (ISO week date).
 * @description
 *
 * X.520’s “first week of a year has ≥4 days of that year” is ISO week 1
 * (`getISOWeek`). 1 Jan can fall in week 52/53 of the previous ISO year
 * (`getISOWeekYear`). Week 53 in a `Period` aliases the last ISO week even
 * when that year has only 52 weeks (`x520WeekIsListed`).
 *
 * @param {Date} point Local instant.
 * @returns {X520WeekOfYear} ISO week-numbering year, week, and weeks in that year.
 */
export
function x520WeekOfYear (point: Date): X520WeekOfYear {
    return {
        year: getISOWeekYear(point),
        week: getISOWeek(point),
        lastWeek: getISOWeeksInYear(point),
    };
}

/**
 * @summary Whether a 1-based week number is selected by a `Period` week set.
 * @description
 *
 * Direct membership is not enough: X.520 says week 5 of a month (when
 * `months` is present) and week 53 of a year (otherwise) always refer to
 * the last week. A 4-week February listed as `{5}` must match week 4; a
 * 52-week year listed as `{53}` must match week 52. Other weeks are not
 * aliased — `{5}` does not match week 1 of that February.
 *
 * @param {Set<number>} whitelist Week numbers from `intWeek` / `bitWeek` / `allWeeks`.
 * @param {number} week The X.520 week of the month or year.
 * @param {number} lastWeek Last real week of that month (4–5) or year (52–53).
 * @param {boolean} weekOfMonth `true` if `Period.months` is present.
 * @returns {boolean} `true` if the week is listed, including 5/53 last-week aliases.
 */
export
function x520WeekIsListed (
    whitelist: Set<number>,
    week: number,
    lastWeek: number,
    weekOfMonth: boolean,
): boolean {
    if (whitelist.has(week)) {
        return true;
    }
    if (weekOfMonth && whitelist.has(5) && (week === lastWeek)) {
        return true;
    }
    if (!weekOfMonth && whitelist.has(53) && (week === lastWeek)) {
        return true;
    }
    return false;
}
