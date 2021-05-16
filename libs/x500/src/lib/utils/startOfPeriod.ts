import { TRUE_BIT } from "asn1-ts";
import type {
    Period,
} from "../modules/SelectedAttributeTypes/Period.ta";
import {
    DayTime,
    DayTimeBand,
} from "../modules/SelectedAttributeTypes/DayTimeBand.ta";
import {
    startOfDay,
    endOfMonth,
    addMonths,
    subWeeks,
    addWeeks,
    subDays,
    startOfYear,
    subYears,
    subMonths,
    getDaysInMonth,
    getDaysInYear,
    startOfMonth,
} from "date-fns";
import getDayOfMonthWhitelistFromXDayOf from "./getDayOfMonthWhitelistFromXDayOf";
import dateIsBetweenDayTimeBand from "./dateIsBetweenDayTimeBand";
import validatePeriod from "./validatePeriod";
import destructureDateIntoPeriodProperties from "./destructureDateIntoPeriodProperties";

const MAX_DAY_OF_WEEK = 7;
const MAX_WEEK_OF_YEAR = 53;
const MAX_MONTH = 12;
const ALL_WEEKS_IN_YEAR: Set<number> = new Set(Array(53).fill(0).map((_, i) => (i + 1)));
const ALL_WEEKS_IN_MONTH: Set<number> = new Set([ 1, 2, 3, 4, 5 ]);
const ALL_MONTHS_IN_YEAR: Set<number> = new Set([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]);

/**
 * ### Assumptions
 *
 * - Not all possible values for a given unit of precision in a `Period` are specified.
 * - `DayTimeBand`s do not overlap.
 * - `DayTimeBand`s are not adjacent (other than at minima and maxima)
 *
 * ### Algorithm
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
 * @param period {Period} The `Period` data structure that defines the period itself.
 * @param point {Date} The point in time used to select an occurence of the `Period`
 * @returns {Date | null} A `Date` whose value is the lower bound of the
 *  period's occurrence if the point in time falls within the bounds of an
 *  occurrence or `null` if it does not fall within the bounds of any occurrence.
 */
export
function startOfPeriod (period: Period, point: Date): Date | null {

    if (!validatePeriod(period)) {
        throw new Error();
    }

    const whitelistedYears: Set<number> | null = period.years
        ? new Set(period.years)
        : null;

    const whitelistedMonths: Set<number> | null = ((): Set<number> | null => {
        if (!period.months) {
            return null;
        }
        if ("intMonth" in period.months) {
            return new Set(period.months.intMonth);
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
        if (!period.weeks) {
            return null;
        }
        if ("intWeek" in period.weeks) {
            return new Set(period.weeks.intWeek);
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
            return new Set(period.days.intDay);
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

    const {
        year: pointYear,
        month: pointMonth,
        week: pointWeek,
        day: pointDay,
    } = destructureDateIntoPeriodProperties(period, point);
    const applicableTimeband: DayTimeBand | undefined = period.timesOfDay
        ? period.timesOfDay.find((tod): boolean => dateIsBetweenDayTimeBand(tod, point))
        : undefined;

    if (
        (whitelistedYears && !whitelistedYears.has(pointYear))
        || (whitelistedMonths && !whitelistedMonths.has(pointMonth))
        || (whitelistedWeeks && !whitelistedWeeks.has(pointWeek))
        || (whitelistedDays && !whitelistedDays.has(pointDay))
        || (period.timesOfDay && !applicableTimeband)
    ) {
        return null;
    }

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
            } = destructureDateIntoPeriodProperties(period, prev);
            const previousDayIsPermitted = (
                (!whitelistedDays || whitelistedDays.has(yesterDay))
                && (!whitelistedWeeks || whitelistedWeeks.has(yesterWeek))
                && (!whitelistedMonths || whitelistedMonths.has(yesterMonth))
                && (!whitelistedYears || whitelistedYears.has(yesterYear))
            );
            if (previousDayIsPermitted && endOfDayBand) {
                return new Date(
                    prev.getFullYear(),
                    prev.getMonth(),
                    prev.getDate(),
                    endOfDayBand.startDayTime?.hour ?? 0,
                    endOfDayBand.startDayTime?.minute ?? 0,
                    endOfDayBand.startDayTime?.second ?? 0,
                );
            }
        }
        return new Date(
            point.getFullYear(),
            point.getMonth(),
            point.getDate(),
            applicableTimeband.startDayTime?.hour ?? 0,
            applicableTimeband.startDayTime?.minute ?? 0,
            applicableTimeband.startDayTime?.second ?? 0,
        );
    } else if (whitelistedDays) {
        let currentMin = startOfDay(point);
        let i: number = pointDay;
        while (whitelistedDays.has(i - 1)) {
            currentMin = subDays(currentMin, 1);
            i--;
        }
        if (i !== 1) {
            return currentMin;
        }
        if (period.weeks) {
            const prev = subWeeks(currentMin, 1);
            const {
                year: yesterYear,
                month: yesterMonth,
                week: yesterWeek,
            } = destructureDateIntoPeriodProperties(period, prev);
            const previousWeekPermitted = (
                (!whitelistedWeeks || whitelistedWeeks.has(yesterWeek))
                && (!whitelistedMonths || whitelistedMonths.has(yesterMonth))
                && (!whitelistedYears || whitelistedYears.has(yesterYear))
            );
            if (!previousWeekPermitted) {
                return currentMin;
            }
            i = MAX_DAY_OF_WEEK;
            while (whitelistedDays.has(i)) {
                currentMin = subDays(currentMin, 1);
                i--;
            }
            return currentMin;
        } else if (period.months) {
            const prev = subMonths(currentMin, 1);
            const {
                year: yesterYear,
                month: yesterMonth,
            } = destructureDateIntoPeriodProperties(period, prev);
            const previousMonthPermitted = (
                (!whitelistedMonths || whitelistedMonths.has(yesterMonth))
                && (!whitelistedYears || whitelistedYears.has(yesterYear))
            );
            if (!previousMonthPermitted) {
                return currentMin;
            }
            i = getDaysInMonth(prev);
            while (whitelistedDays.has(i)) {
                currentMin = subDays(currentMin, 1);
                i--;
            }
            return currentMin;
        } else {
            const prev = subYears(currentMin, 1);
            const {
                year: yesterYear,
            } = destructureDateIntoPeriodProperties(period, prev);
            const previousYearPermitted = (!whitelistedYears || whitelistedYears.has(yesterYear));
            if (!previousYearPermitted) {
                return currentMin;
            }
            i = getDaysInYear(prev);
            while (whitelistedDays.has(i)) {
                currentMin = subDays(currentMin, 1);
                i--;
            }
            return currentMin;
        }
    } else if (whitelistedWeeks) {
        let currentMin = period.months
            ? addWeeks(startOfMonth(point), (pointWeek - 1))
            : addWeeks(startOfYear(point), (pointWeek - 1));
        let i: number = pointWeek;
        while (whitelistedWeeks.has(i - 1)) { // We need to check for rollover.
            currentMin = subWeeks(currentMin, 1);
            i--;
        }
        if (i > 1) {
            return currentMin;
        }
        if (period.months) {
            const prev = subMonths(currentMin, 1);
            const {
                year: yesterYear,
                month: yesterMonth,
            } = destructureDateIntoPeriodProperties(period, prev);
            const previousMonthPermitted = (
                (!whitelistedMonths || whitelistedMonths.has(yesterMonth))
                && (!whitelistedYears || whitelistedYears.has(yesterYear))
            );
            if (!previousMonthPermitted) {
                return currentMin;
            }
            const daysInMonth = getDaysInMonth(prev);
            if (whitelistedWeeks.has(5)) {
                currentMin = subWeeks(endOfMonth(prev), 1);
            } else if (daysInMonth > 28) {
                return currentMin;
            }
            i = 4;
            while (whitelistedWeeks.has(i)) {
                currentMin = addWeeks(startOfMonth(currentMin), (i - 1));
                i--;
            }
            return currentMin;
        } else if (period.years) {
            const prev = subYears(currentMin, 1);
            const { year: yesterYear } = destructureDateIntoPeriodProperties(period, prev);
            const previousYearPermitted = (!whitelistedYears || whitelistedYears.has(yesterYear));
            if (!previousYearPermitted) {
                return currentMin;
            }
            i = MAX_WEEK_OF_YEAR;
            while (whitelistedWeeks.has(i)) {
                currentMin = subWeeks(currentMin, 1);
                i--;
            }
            return currentMin;
        } else {
            throw new Error();
        }
    } else if (whitelistedMonths) {
        let currentMin = startOfMonth(point);
        let i: number = pointMonth;
        while (whitelistedMonths.has(i - 1)) {
            currentMin = startOfMonth(subWeeks(currentMin, 1));
            i--;
        }
        if (i > 1) {
            return currentMin;
        }
        const prev = subMonths(currentMin, 1);
        const { year: yesterYear } = destructureDateIntoPeriodProperties(period, prev);
        const previousYearPermitted = (!whitelistedYears || whitelistedYears.has(yesterYear));
        if (!previousYearPermitted) {
            return currentMin;
        }
        i = MAX_MONTH;
        while (whitelistedMonths.has(i)) {
            currentMin = addMonths(startOfYear(prev), (i - 1));
            i--;
        }
        return currentMin;
    } else if (whitelistedYears) {
        let currentMin = startOfYear(point);
        let i: number = pointYear;
        while (whitelistedYears.has(i - 1)) {
            currentMin = startOfYear(subMonths(currentMin, 1));
            i--;
        }
        return currentMin;
    } else {
        throw new Error();
    }
}

export default startOfPeriod;
