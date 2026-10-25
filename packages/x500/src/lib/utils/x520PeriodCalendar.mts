import { startOfWeek } from "date-fns";

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

export
function startOfFirstX520WeekOfYear (year: number): Date {
    return startOfSundayBasedWeek(new Date(year, 0, 4));
}
