import { TRUE_BIT } from "@wildboar/asn1";
import type {
    Period,
} from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import { DayTimeBand } from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import {
    startOfDay,
    endOfMonth,
    addMonths,
    subWeeks,
    addWeeks,
    subDays,
    startOfYear,
    subMonths,
    getDaysInMonth,
    getDaysInYear,
    startOfMonth,
    endOfDay,
    addDays,
    endOfYear,
} from "date-fns";
import getDayOfMonthWhitelistFromXDayOf from "./getDayOfMonthWhitelistFromXDayOf.mjs";
import dateIsBetweenDayTimeBand from "./dateIsBetweenDayTimeBand.mjs";
import destructureDateIntoPeriodProperties from "./destructureDateIntoPeriodProperties.mjs";
import {
    endOfX520Week,
    startOfX520Week,
    x520WeekIsListed,
} from "./x520PeriodCalendar.mjs";

const MAX_DAY_OF_WEEK = 7;
const MAX_MONTH = 12;
/**
 * Cap when walking adjacent Sunday–Saturday weeks. We cannot just decrement
 * the week integer: week 5 is an alias, and week 1 of January is not
 * adjacent (in number-space) to week 5 of December. Stepping one week at
 * a time and re-destructuring handles month/year wrap. 60 is far more
 * than a contiguous allWeeks span would ever need.
 */
const MAX_WEEK_SPAN_ITERS = 60;

/**
 * `whitelistedWeeks.has(week)` is not enough: X.520 week 5 (of month) and
 * 53 (of year) mean “last week”, which may be 4 or 52. See x520PeriodCalendar.
 */
function periodAllowsWeek (
    whitelist: Set<number> | null,
    week: number,
    lastWeek: number,
    ofMonth: boolean,
): boolean {
    if (!whitelist) {
        return true;
    }
    return x520WeekIsListed(whitelist, week, lastWeek, ofMonth);
}

const ALL_WEEKS_IN_YEAR: Set<number> = new Set(Array(53).fill(0).map((_, i) => (i + 1)));
const ALL_WEEKS_IN_MONTH: Set<number> = new Set([ 1, 2, 3, 4, 5 ]);
const ALL_MONTHS_IN_YEAR: Set<number> = new Set([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]);

/**
 * @function boundariesOfPeriodOccurrence
 * @summary Returns the bounds of the occurrence in a period in which a point in time occurs.
 * @description
 *
 * This function returns the upper and lower bounds of an occurrence (one of a
 * recurring series of time intervals) in a `Period`, where the specific
 * occurrence is selected by the `point` argument. If the `point` in time does
 * not fall within the bounds of any occurrence of the `Period`, this function
 * returns `null`.
 *
 * ### Architecture
 *
 * This function used to be split into two functions: `startOfPeriod()` and
 * `endOfPeriod()`, but it was merged into one, because there is a somewhat
 * large overhead before the function actually begins traversing the timespan,
 * and because you usually want the end of the period whenever you want the
 * start of the period, anyway.
 *
 * This function returns bounds that may be inaccurate by one second.
 *
 * This function uses local time exclusively.
 *
 * ### Assumptions
 *
 * - Not all possible values for a given unit of precision in a `Period` are specified.
 * - `DayTimeBand`s do not overlap.
 * - `DayTimeBand`s are not adjacent (other than at minima and maxima)
 *
 * ### Algorithm
 *
 * For simplicity, the following will describe only the algorithm for
 * determining the lower bound of an occurrence of a period, since finding the
 * upper bound will be essentially the same, except we increment instead of
 * decrement.
 *
 * 1. Validation.
 * 2. Decode the `Period`'s properties into `Set`s of `number`s.
 * 3. Determine if the point in time falls within any occurrence of the period
 *    at all.
 * 4. Set the point in time to the current minimum; this number will serve as
 *    the currently identified lowest we can go while still staying within the
 *    bounds of an occurrence of the period.
 * 5. We _assume_ that all values for a given unit (e.g. values 1 through 12 for
 *    `months`) are not present (why even specify it if so?). Given this
 *    assumption, it would not be possible to advance more than 1 unit of the
 *    next most coarse denomination of time, which means that the most precise
 *    denomination of time will define the lower bound of the occurrence.
 * 6. With the most precise denomination identified, iterate downwards through
 *    its possible values, updating the current lower bound until the next value
 *    is not permitted.
 * 7. If this countdown results in us reaching 1 for the most precise
 *    denomination of time, we have to keep going, because the span may still be
 *    contiguous into a lower value of a coarser denomination. For instance, if
 *    months 1, 2 and 12 are permitted for all years, and `point` has a month of
 *    2, the occurrence of the period really begins on month 12 of the previous
 *    year. To perform this "rolling back," we check if this "rolled-back" value
 *    still satisfies all of the constraints of the `Period`. If it does, we
 *    continue counting down through the previous day / week / month / year.
 *
 * When `weeks` is present, a week is a Sunday–Saturday block (X.520 clause
 * 10.2’s “≥4 days of this month/year” rule; see x520PeriodCalendar.mts).
 * Occurrence bounds are therefore `startOfX520Week` … `endOfX520Week`, not
 * `addWeeks(startOfMonth, n)`. Adjacent-week walking re-runs
 * `destructureDateIntoPeriodProperties` so week 5/53 aliases and
 * Wednesday-owned months stay correct across boundaries.
 *
 * @param period {Period} The `Period` data structure that defines the period itself.
 * @param point {Date} The point in time used to select an occurence of the `Period`
 * @returns {Date | null} A `Date` whose value is the lower bound of the
 *  period's occurrence if the point in time falls within the bounds of an
 *  occurrence or `null` if it does not fall within the bounds of any occurrence.
 */
export
function boundariesOfPeriodOccurrence (period: Period, point: Date): [ Date, Date ] | null {

    const usesDayOf = Boolean(period.days && ("dayOf" in period.days));

    const whitelistedYears: Set<number> | null = period.years
        ? new Set(period.years.map(Number))
        : null;

    const whitelistedMonths: Set<number> | null = ((): Set<number> | null => {
        if (!period.months) {
            return null;
        }
        if ("intMonth" in period.months) {
            return new Set(period.months.intMonth.map(Number));
        } else if ("bitMonth" in period.months) {
            return new Set(
                period.months.bitMonth
                    .map((b, i) => ((b === TRUE_BIT) ? (i + 1) : 0))
                    .filter((v) => Boolean(v))
            );
        } else if ("allMonths" in period.months) {
            return ALL_MONTHS_IN_YEAR;
        } else {
            throw new Error();
        }
    })();

    const whitelistedWeeks: Set<number> | null = ((): Set<number> | null => {
        if (usesDayOf || !period.weeks) {
            return null;
        }
        if ("intWeek" in period.weeks) {
            return new Set(period.weeks.intWeek.map(Number));
        } else if ("bitWeek" in period.weeks) {
            return new Set(
                period.weeks.bitWeek
                    .map((b, i) => ((b === TRUE_BIT) ? (i + 1) : 0))
                    .filter((v) => Boolean(v))
            );
        } else if ("allWeeks" in period.weeks) {
            if (period.months) {
                return ALL_WEEKS_IN_MONTH;
            } else {
                return ALL_WEEKS_IN_YEAR;
            }
        } else {
            throw new Error();
        }
    })();

    const whitelistedDays: Set<number> | null = ((): Set<number> | null => {
        if (!period.days) {
            return null;
        }
        if ("intDay" in period.days) {
            return new Set(period.days.intDay.map(Number));
        } else if ("bitDay" in period.days) {
            return new Set(
                period.days.bitDay
                    .map((b, i) => ((b === TRUE_BIT) ? (i + 1) : 0))
                    .filter((v) => Boolean(v))
            );
        } else if ("dayOf" in period.days) {
            return getDayOfMonthWhitelistFromXDayOf(period.days.dayOf, point);
        } else {
            throw new Error();
        }
    })();

    const startOfDayBand: DayTimeBand | undefined = period.timesOfDay
        ?.find((tod: DayTimeBand): boolean => (
            ((tod.startDayTime?.hour ?? DayTimeBand._default_value_for_startDayTime.hour) === 0)
            && ((tod.startDayTime?.minute ?? DayTimeBand._default_value_for_startDayTime.minute ?? 0) === 0)
            && ((tod.startDayTime?.second ?? DayTimeBand._default_value_for_startDayTime.second ?? 0) === 0)
        ));
    const endOfDayBand: DayTimeBand | undefined = period.timesOfDay
        ?.find((tod: DayTimeBand): boolean => (
            ((tod.endDayTime?.hour ?? DayTimeBand._default_value_for_endDayTime.hour) === 23)
            && ((tod.endDayTime?.minute ?? DayTimeBand._default_value_for_endDayTime.minute ?? 59) === 59)
            && ((tod.endDayTime?.second ?? DayTimeBand._default_value_for_endDayTime.second ?? 59) === 59)
        ));

    // X.520: if months is present, weeks are 1..5 of that month; otherwise
    // weeks are 1..53 of the year. This also selects the 5 vs 53 alias.
    const weeksAreOfMonth: boolean = Boolean(period.months);
    const {
        year: pointYear,
        month: pointMonth,
        week: pointWeek,
        day: pointDay,
        lastWeek: pointLastWeek,
    } = destructureDateIntoPeriodProperties(period, point);
    const applicableTimeband: DayTimeBand | undefined = period.timesOfDay
        ? period.timesOfDay.find((tod): boolean => dateIsBetweenDayTimeBand(tod, point))
        : undefined;

    const maxDay: number = ((): number => {
        if (period.weeks && !usesDayOf) {
            return 7;
        } else if (period.months) {
            return getDaysInMonth(point);
        } else {
            return getDaysInYear(point);
        }
    })();

    if (
        (whitelistedYears && !whitelistedYears.has(pointYear))
        || (whitelistedMonths && !whitelistedMonths.has(pointMonth))
        || !periodAllowsWeek(whitelistedWeeks, pointWeek, pointLastWeek, weeksAreOfMonth)
        || (whitelistedDays && !whitelistedDays.has(pointDay))
        || (period.timesOfDay && !applicableTimeband)
    ) {
        return null;
    }

    let min: Date = new Date(point);
    let max: Date = new Date(point);
    /**
     * This block finds the most precise unit of time specified by the period,
     * and counts downward in that unit, checking if that particular value of
     * that unit is permitted by the period.
     */
    if (applicableTimeband) {
        if (startOfDayBand) {
            const prev: Date = subDays(point, 1);
            const {
                year: yesterYear,
                month: yesterMonth,
                week: yesterWeek,
                day: yesterDay,
                lastWeek: yesterLastWeek,
            } = destructureDateIntoPeriodProperties(period, prev);
            const previousDayIsPermitted = (
                (!whitelistedDays || whitelistedDays.has(yesterDay))
                && periodAllowsWeek(whitelistedWeeks, yesterWeek, yesterLastWeek, weeksAreOfMonth)
                && (!whitelistedMonths || whitelistedMonths.has(yesterMonth))
                && (!whitelistedYears || whitelistedYears.has(yesterYear))
            );
            if (previousDayIsPermitted && endOfDayBand) {
                min = new Date(
                    prev.getFullYear(),
                    prev.getMonth(),
                    prev.getDate(),
                    Number(endOfDayBand.startDayTime?.hour ?? 0),
                    Number(endOfDayBand.startDayTime?.minute ?? 0),
                    Number(endOfDayBand.startDayTime?.second ?? 0),
                );
            } else {
                min = new Date(
                    point.getFullYear(),
                    point.getMonth(),
                    point.getDate(),
                    Number(applicableTimeband.startDayTime?.hour ?? 0),
                    Number(applicableTimeband.startDayTime?.minute ?? 0),
                    Number(applicableTimeband.startDayTime?.second ?? 0),
                );
            }
        } else {
            min = new Date(
                point.getFullYear(),
                point.getMonth(),
                point.getDate(),
                Number(applicableTimeband.startDayTime?.hour ?? 0),
                Number(applicableTimeband.startDayTime?.minute ?? 0),
                Number(applicableTimeband.startDayTime?.second ?? 0),
            );
        }

        if (endOfDayBand) {
            const next: Date = addDays(point, 1);
            const {
                year: nextYear,
                month: nextMonth,
                week: nextWeek,
                day: nextDay,
                lastWeek: nextLastWeek,
            } = destructureDateIntoPeriodProperties(period, next);
            const nextDayIsPermitted = (
                (!whitelistedDays || whitelistedDays.has(nextDay))
                && periodAllowsWeek(whitelistedWeeks, nextWeek, nextLastWeek, weeksAreOfMonth)
                && (!whitelistedMonths || whitelistedMonths.has(nextMonth))
                && (!whitelistedYears || whitelistedYears.has(nextYear))
            );
            if (nextDayIsPermitted && startOfDayBand) {
                max = new Date(
                    next.getFullYear(),
                    next.getMonth(),
                    next.getDate(),
                    Number(startOfDayBand.endDayTime?.hour ?? 23),
                    Number(startOfDayBand.endDayTime?.minute ?? 59),
                    Number(startOfDayBand.endDayTime?.second ?? 59),
                );
            } else {
                max = new Date(
                    point.getFullYear(),
                    point.getMonth(),
                    point.getDate(),
                    Number(applicableTimeband.endDayTime?.hour ?? 23),
                    Number(applicableTimeband.endDayTime?.minute ?? 59),
                    Number(applicableTimeband.endDayTime?.second ?? 59),
                );
            }
        } else {
            max = new Date(
                point.getFullYear(),
                point.getMonth(),
                point.getDate(),
                Number(applicableTimeband.endDayTime?.hour ?? 23),
                Number(applicableTimeband.endDayTime?.minute ?? 59),
                Number(applicableTimeband.endDayTime?.second ?? 59),
            );
        }

        return [ min, max ];
    } else if (whitelistedDays) {
        min = startOfDay(point);
        max = endOfDay(point);
        let i: number = pointDay;
        while (whitelistedDays.has(i - 1)) {
            const candidate: Date = subDays(min, 1);
            // When days are weekdays, walking back from Sunday (intDay 1)
            // via the i === 1 wrap lands on Saturday of the previous
            // Sunday–Saturday week. The in-loop check also stops a span
            // that would otherwise cross a week the Period does not list.
            if (period.weeks) {
                const {
                    year: candYear,
                    month: candMonth,
                    week: candWeek,
                    lastWeek: candLastWeek,
                } = destructureDateIntoPeriodProperties(period, candidate);
                if (
                    !periodAllowsWeek(whitelistedWeeks, candWeek, candLastWeek, weeksAreOfMonth)
                    || (whitelistedMonths && !whitelistedMonths.has(candMonth))
                    || (whitelistedYears && !whitelistedYears.has(candYear))
                ) {
                    break;
                }
            }
            min = candidate;
            i--;
        }
        let j: number = pointDay;
        while (whitelistedDays.has(j + 1)) {
            const candidate: Date = addDays(max, 1);
            // Same guard forward: the calendar day after Saturday is Sunday of
            // the next week, which may be a different X.520 week-of-month.
            if (period.weeks) {
                const {
                    year: candYear,
                    month: candMonth,
                    week: candWeek,
                    lastWeek: candLastWeek,
                } = destructureDateIntoPeriodProperties(period, candidate);
                if (
                    !periodAllowsWeek(whitelistedWeeks, candWeek, candLastWeek, weeksAreOfMonth)
                    || (whitelistedMonths && !whitelistedMonths.has(candMonth))
                    || (whitelistedYears && !whitelistedYears.has(candYear))
                ) {
                    break;
                }
            }
            max = candidate;
            j++;
        }
        if (i === 1) {
            const prev = subDays(min, 1);
            if (period.weeks && !usesDayOf) {
                const {
                    year: yesterYear,
                    month: yesterMonth,
                    week: yesterWeek,
                    lastWeek: yesterLastWeek,
                } = destructureDateIntoPeriodProperties(period, prev);
                const previousWeekPermitted = (
                    periodAllowsWeek(whitelistedWeeks, yesterWeek, yesterLastWeek, weeksAreOfMonth)
                    && (!whitelistedMonths || whitelistedMonths.has(yesterMonth))
                    && (!whitelistedYears || whitelistedYears.has(yesterYear))
                );
                if (previousWeekPermitted) {
                    i = MAX_DAY_OF_WEEK;
                    while (whitelistedDays.has(i)) {
                        min = subDays(min, 1);
                        i--;
                    }
                }
            } else if (period.months) {
                const {
                    year: yesterYear,
                    month: yesterMonth,
                } = destructureDateIntoPeriodProperties(period, prev);
                const previousMonthPermitted = (
                    (!whitelistedMonths || whitelistedMonths.has(yesterMonth))
                    && (!whitelistedYears || whitelistedYears.has(yesterYear))
                );
                if (previousMonthPermitted) {
                    i = getDaysInMonth(prev);
                    while (whitelistedDays.has(i)) {
                        min = subDays(min, 1);
                        i--;
                    }
                }
            } else {
                const {
                    year: yesterYear,
                } = destructureDateIntoPeriodProperties(period, prev);
                const previousYearPermitted = (!whitelistedYears || whitelistedYears.has(yesterYear));
                if (previousYearPermitted) {
                    i = getDaysInYear(prev);
                    while (whitelistedDays.has(i)) {
                        min = subDays(min, 1);
                        i--;
                    }
                }
            }
        }
        if (j >= maxDay) {
            const next = addDays(max, 1);
            if (period.weeks && !usesDayOf) {
                const {
                    year: nextYear,
                    month: nextMonth,
                    week: nextWeek,
                    lastWeek: nextLastWeek,
                } = destructureDateIntoPeriodProperties(period, next);
                const nextWeekPermitted = (
                    periodAllowsWeek(whitelistedWeeks, nextWeek, nextLastWeek, weeksAreOfMonth)
                    && (!whitelistedMonths || whitelistedMonths.has(nextMonth))
                    && (!whitelistedYears || whitelistedYears.has(nextYear))
                );
                if (nextWeekPermitted) {
                    j = 1;
                    while (whitelistedDays.has(j)) {
                        max = addDays(max, 1);
                        j++;
                    }
                }
            } else if (period.months) {
                /**
                 * Overflow is possible, because the whitelist may contain more
                 * whitelisted days than the month has.
                 */
                if ((max.getMonth() + 1) > pointMonth) {
                    max = endOfMonth(subWeeks(max, 1));
                }
                const {
                    year: nextYear,
                    month: nextMonth,
                } = destructureDateIntoPeriodProperties(period, next);
                const nextMonthPermitted = (
                    (!whitelistedMonths || whitelistedMonths.has(nextMonth))
                    && (!whitelistedYears || whitelistedYears.has(nextYear))
                );
                if (nextMonthPermitted) {
                    const daysInNextMonth: number = getDaysInMonth(next);
                    j = 1;
                    while (whitelistedDays.has(j) && (j <= daysInNextMonth)) {
                        max = addDays(max, 1);
                        j++;
                    }
                }
            } else {
                /**
                 * Overflow is possible, because the whitelist may contain more
                 * whitelisted days than the year has.
                 */
                if (max.getFullYear() > pointYear) {
                    max = endOfYear(subMonths(max, 1));
                }
                const {
                    year: nextYear,
                } = destructureDateIntoPeriodProperties(period, next);
                const nextYearPermitted = (!whitelistedYears || whitelistedYears.has(nextYear));
                if (nextYearPermitted) {
                    const daysInNextYear: number = getDaysInYear(next);
                    j = 1;
                    while (whitelistedDays.has(j) && (j <= daysInNextYear)) {
                        max = addDays(max, 1);
                        j++;
                    }
                }
            }
        }
        return [ min, max ];
    } else if (whitelistedWeeks) {
        // One X.520 week is Sunday 00:00 .. Saturday end-of-day in local time,
        // not a 7-day slice from the 1st of the calendar month/year (the old
        // ceil(date/7) alignment).
        min = startOfX520Week(point);
        max = endOfX520Week(point);
        // Expand through neighbouring weeks while they remain permitted.
        // Re-destructure each candidate: week numbers are not a flat 1..5
        // sequence across months, and week 5/53 may alias lastWeek.
        for (let n: number = 0; n < MAX_WEEK_SPAN_ITERS; n++) {
            const prev: Date = subWeeks(min, 1);
            const {
                year: prevYear,
                month: prevMonth,
                week: prevWeek,
                lastWeek: prevLastWeek,
            } = destructureDateIntoPeriodProperties(period, prev);
            if (
                !periodAllowsWeek(whitelistedWeeks, prevWeek, prevLastWeek, weeksAreOfMonth)
                || (whitelistedMonths && !whitelistedMonths.has(prevMonth))
                || (whitelistedYears && !whitelistedYears.has(prevYear))
            ) {
                break;
            }
            min = startOfX520Week(prev);
        }
        for (let n: number = 0; n < MAX_WEEK_SPAN_ITERS; n++) {
            const next: Date = addWeeks(max, 1);
            const {
                year: nextYear,
                month: nextMonth,
                week: nextWeek,
                lastWeek: nextLastWeek,
            } = destructureDateIntoPeriodProperties(period, next);
            if (
                !periodAllowsWeek(whitelistedWeeks, nextWeek, nextLastWeek, weeksAreOfMonth)
                || (whitelistedMonths && !whitelistedMonths.has(nextMonth))
                || (whitelistedYears && !whitelistedYears.has(nextYear))
            ) {
                break;
            }
            max = endOfX520Week(next);
        }
    } else if (whitelistedMonths) {
        min = startOfMonth(point);
        max = endOfMonth(point);
        let i: number = pointMonth;
        while (whitelistedMonths.has(i - 1)) {
            min = startOfMonth(subWeeks(min, 1));
            i--;
        }
        let j: number = pointMonth;
        while (whitelistedMonths.has(j + 1)) {
            max = endOfMonth(addWeeks(max, 1));
            j++;
        }
        if (i === 1) {
            const prev = subMonths(min, 1);
            const { year: yesterYear } = destructureDateIntoPeriodProperties(period, prev);
            const previousYearPermitted = (!whitelistedYears || whitelistedYears.has(yesterYear));
            if (previousYearPermitted) {
                i = MAX_MONTH;
                while (whitelistedMonths.has(i)) {
                    min = addMonths(startOfYear(prev), (i - 1));
                    i--;
                }
            }
        }
        if (j >= MAX_MONTH) {
            const next = addMonths(max, 1);
            const { year: nextYear } = destructureDateIntoPeriodProperties(period, next);
            const nextYearPermitted = (!whitelistedYears || whitelistedYears.has(nextYear));
            if (nextYearPermitted) {
                j = 1;
                while (whitelistedMonths.has(j)) {
                    max = endOfMonth(new Date(next.getFullYear(), j - 1, 1));
                    j++;
                }
            }
        }
    } else if (whitelistedYears) {
        min = startOfYear(point);
        max = endOfYear(point);
        let i: number = pointYear;
        while (whitelistedYears.has(i - 1)) {
            min = startOfYear(subMonths(min, 1));
            i--;
        }
        let j: number = pointYear;
        while (whitelistedYears.has(j + 1)) {
            max = endOfYear(addMonths(max, 1));
            j++;
        }
    } else {
        throw new Error();
    }
    return [ min, max ];
}

export default boundariesOfPeriodOccurrence;
