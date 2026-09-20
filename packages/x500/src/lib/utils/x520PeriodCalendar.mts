/**
 * @file X.520 `Period` week numbering (clause 10.2).
 *
 * X.520 (10/2019) p. 68–69 does **not** mention ISO 8601, Monday, or a
 * week that starts on 1 January. It says:
 *
 * - the first week of a month or year is the first week that contains
 *   **at least four days** of that month or year;
 * - week **5** of a month and week **53** of a year always mean the
 *   **last** such week.
 *
 * Those rules only make sense if a week is a fixed weekday block that can
 * start in the previous month or year. (If week 1 always started on the
 * 1st, it would always contain seven days of that month/year, and the
 * four-day sentence would do no work.)
 *
 * The Recommendation never names the first weekday. This module uses
 * **Sunday–Saturday**, because the same clause numbers days of the week
 * with INTEGER 1 = Sunday when `days` precedes `weeks`.
 *
 * Why the four-day rule matters — January 2021 (1 Jan was a Friday):
 *
 * ```
 *  December 2020              January 2021
 * Su Mo Tu We Th Fr Sa    Su Mo Tu We Th Fr Sa
 * 27 28 29 30 31  1  2     3  4  5  6  7  8  9
 * |<-- 2 January days -->| |<-- week 1 of Jan -->|
 * ```
 *
 * 1–2 Jan sit in a week with only two January days, so they are **not**
 * week 1 of January; that week belongs to December. Week 1 is the week
 * that contains the 4th (Sun 3 – Sat 9).
 *
 * A split week is owned by the month/year that contains its **Wednesday**
 * (the 4th day of a Sunday–Saturday week, hence the side with ≥4 days).
 *
 * `Period` week 5 / 53 are aliases for that last real week, not a
 * separate bucket.
 */
import {
    addDays,
    differenceInCalendarWeeks,
    endOfMonth,
    endOfWeek,
    endOfYear,
    startOfWeek,
    subWeeks,
} from "date-fns";

/**
 * X.520 clause 10.2 numbers `intDay` Sunday = 1 when `days` precedes
 * `weeks`. Weeks are therefore Sunday–Saturday. The Recommendation does
 * not specify this; it is the implementation choice that matches that
 * day numbering.
 */
const WEEK_STARTS_ON_SUNDAY = { weekStartsOn: 0 as const };

/**
 * @summary Sunday 00:00 of the Sunday-based week containing `point`.
 */
export
function startOfSundayBasedWeek (point: Date): Date {
    return startOfWeek(point, WEEK_STARTS_ON_SUNDAY);
}

/**
 * @summary Saturday end-of-day of the Sunday-based week containing `point`.
 */
export
function endOfSundayBasedWeek (point: Date): Date {
    return endOfWeek(point, WEEK_STARTS_ON_SUNDAY);
}

/**
 * @summary Count how many days of a Sunday–Saturday week fall in a month.
 * @param {Date} weekStart Sunday 00:00 of the week.
 * @param {number} year Calendar year of the month.
 * @param {number} month 1-based month.
 * @returns {number} Number of days in `[1, 7]`.
 */
export
function countDaysOfMonthInWeek (weekStart: Date, year: number, month: number): number {
    let count: number = 0;
    for (let i: number = 0; i < 7; i++) {
        const day: Date = addDays(weekStart, i);
        if ((day.getFullYear() === year) && ((day.getMonth() + 1) === month)) {
            count++;
        }
    }
    return count;
}

function countDaysOfYearInWeek (weekStart: Date, year: number): number {
    let count: number = 0;
    for (let i: number = 0; i < 7; i++) {
        if (addDays(weekStart, i).getFullYear() === year) {
            count++;
        }
    }
    return count;
}

/**
 * @summary Sunday of the first X.520 week of a calendar month.
 * @description
 *
 * Clause 10.2: first week = first week with at least four days of that
 * month. For Sunday-start weeks that is the week containing the 4th.
 *
 * @param {number} year Calendar year.
 * @param {number} month 1-based month.
 * @returns {Date} Local Sunday 00:00 of week 1 of the month.
 */
export
function startOfFirstX520WeekOfMonth (year: number, month: number): Date {
    return startOfSundayBasedWeek(new Date(year, month - 1, 4));
}

function startOfFirstX520WeekOfYear (year: number): Date {
    return startOfSundayBasedWeek(new Date(year, 0, 4));
}

/**
 * @summary How many Sunday-based X.520 weeks a calendar month has (4 or 5).
 * @description
 *
 * Last week = last Sunday-start week with ≥4 days in the month. `Period`
 * week 5 still aliases this last week when the count is only 4 — that
 * alias is applied in `isX520WeekListed`, not by returning 5 here.
 *
 * @param {number} year Calendar year.
 * @param {number} month 1-based month.
 * @returns {number} `4` or `5`.
 */
export
function sundayBasedWeeksInMonth (year: number, month: number): number {
    const first: Date = startOfFirstX520WeekOfMonth(year, month);
    let lastStart: Date = startOfSundayBasedWeek(endOfMonth(new Date(year, month - 1, 1)));
    if (countDaysOfMonthInWeek(lastStart, year, month) < 4) {
        lastStart = subWeeks(lastStart, 1);
    }
    return differenceInCalendarWeeks(lastStart, first, WEEK_STARTS_ON_SUNDAY) + 1;
}

function sundayBasedWeeksInYear (year: number): number {
    const first: Date = startOfFirstX520WeekOfYear(year);
    let lastStart: Date = startOfSundayBasedWeek(endOfYear(new Date(year, 0, 1)));
    if (countDaysOfYearInWeek(lastStart, year) < 4) {
        lastStart = subWeeks(lastStart, 1);
    }
    return differenceInCalendarWeeks(lastStart, first, WEEK_STARTS_ON_SUNDAY) + 1;
}

export
interface X520WeekOfMonth {
    /** Calendar year of the month that owns this Sunday–Saturday week. */
    year: number;
    /** 1-based month that owns this week (Wednesday’s month). */
    month: number;
    /** 1-based X.520 week of that month (1..numberOfLastWeekOfMonth). */
    week: number;
    /** 1-based week number of the last Sunday-based week of that month (4 or 5). */
    numberOfLastWeekOfMonth: number;
}

/**
 * @summary X.520 week-of-month for a local instant.
 * @description
 *
 * The week is owned by the month that contains its Wednesday (the month
 * with at least four days of that Sunday–Saturday week). Days 1–3 of a
 * month that belong to the previous month’s last week therefore report
 * that previous month — so `{ months: January, weeks: 1 }` does not
 * match 1 Jan 2021.
 *
 * @param {Date} point Local instant.
 * @returns {X520WeekOfMonth} Owning year/month, 1-based week, and last week number.
 */
export
function x520WeekOfMonth (point: Date): X520WeekOfMonth {
    const weekStart: Date = startOfSundayBasedWeek(point);
    // Wednesday = Sunday + 3 = the day that puts ≥4 days on this side of
    // the month boundary.
    const wednesday: Date = addDays(weekStart, 3);
    const year: number = wednesday.getFullYear();
    const month: number = wednesday.getMonth() + 1;
    const first: Date = startOfFirstX520WeekOfMonth(year, month);
    const week: number = differenceInCalendarWeeks(
        weekStart,
        first,
        WEEK_STARTS_ON_SUNDAY,
    ) + 1;
    return {
        year,
        month,
        week,
        numberOfLastWeekOfMonth: sundayBasedWeeksInMonth(year, month),
    };
}

export
interface X520WeekOfYear {
    /** Week-numbering year (may differ from `point.getFullYear()`). */
    year: number;
    /** Week 1..numberOfLastWeekOfYear (52 or 53). */
    week: number;
    /** 1-based week number of the last Sunday-based week of that year (52 or 53). */
    numberOfLastWeekOfYear: number;
}

/**
 * @summary X.520 week-of-year for a local instant.
 * @description
 *
 * Same four-day rule as weeks of the month, applied to the calendar year.
 * 1 Jan can fall in week 52/53 of the previous year. Week 53 in a
 * `Period` aliases the last real week even when that year has only 52
 * weeks (`isX520WeekListed`).
 *
 * @param {Date} point Local instant.
 * @returns {X520WeekOfYear} Week-numbering year, week, and weeks in that year.
 */
export
function x520WeekOfYear (point: Date): X520WeekOfYear {
    const weekStart: Date = startOfSundayBasedWeek(point);
    const wednesday: Date = addDays(weekStart, 3);
    const year: number = wednesday.getFullYear();
    const first: Date = startOfFirstX520WeekOfYear(year);
    const week: number = differenceInCalendarWeeks(
        weekStart,
        first,
        WEEK_STARTS_ON_SUNDAY,
    ) + 1;
    return {
        year,
        week,
        numberOfLastWeekOfYear: sundayBasedWeeksInYear(year),
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
 * @param {number} numberOfLastWeek Last real week of that month (4–5) or year (52–53).
 * @param {boolean} weekOfMonth `true` if `Period.months` is present.
 * @returns {boolean} `true` if the week is listed, including 5/53 last-week aliases.
 */
export
function isX520WeekListed (
    whitelist: Set<number>,
    week: number,
    numberOfLastWeek: number,
    weekOfMonth: boolean,
): boolean {
    if (whitelist.has(week)) {
        return true;
    }
    if (weekOfMonth && whitelist.has(5) && (week === numberOfLastWeek)) {
        return true;
    }
    if (!weekOfMonth && whitelist.has(53) && (week === numberOfLastWeek)) {
        return true;
    }
    return false;
}

/**
 * @summary Whether a `Period.weeks` set (or its absence) allows this week.
 * @description
 *
 * `null` means `weeks` was omitted, so every week is allowed. Otherwise
 * this is {@link isX520WeekListed}: week 5 of a month and week 53 of a
 * year alias the last real week.
 *
 * @param {Set<number> | null} whitelist Week numbers, or `null` if unconstrained.
 * @param {number} week The X.520 week of the month or year.
 * @param {number} numberOfLastWeek Last real week of that month or year.
 * @param {boolean} weekOfMonth `true` if `Period.months` is present.
 * @returns {boolean} `true` if the week is allowed.
 * @function
 * @author Cursor Grok 4.6
 */
export
function periodAllowsWeek (
    whitelist: Set<number> | null,
    week: number,
    numberOfLastWeek: number,
    weekOfMonth: boolean,
): boolean {
    if (!whitelist) {
        return true;
    }
    return isX520WeekListed(whitelist, week, numberOfLastWeek, weekOfMonth);
}
