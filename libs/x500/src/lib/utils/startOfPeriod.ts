import { TRUE_BIT } from "asn1-ts";
import type {
    Period,
} from "../modules/SelectedAttributeTypes/Period.ta";
import {
    DayTime,
    DayTimeBand,
} from "../modules/SelectedAttributeTypes/DayTimeBand.ta";
import { startOfDay, endOfMonth, addMonths, getWeekOfMonth, getWeek, subWeeks, startOfWeek, addDays, addWeeks, getDay, subDays, getDayOfYear, startOfYear, subYears, subMonths, getDaysInMonth, getDaysInYear, startOfMonth, addYears, endOfYear, endOfDay } from "date-fns";
import getDayOfMonthWhitelistFromXDayOf from "./getDayOfMonthWhitelistFromXDayOf";
import dateIsBetweenDayTimeBand from "./dateIsBetweenDayTimeBand";

const MAX_DAY_OF_WEEK = 7;
const MAX_WEEK_OF_YEAR = 53;
const MAX_MONTH = 12;
const ALL_WEEKS_IN_YEAR: Set<number> = new Set(Array(53).fill(0).map((_, i) => (i + 1)));
const ALL_WEEKS_IN_MONTH: Set<number> = new Set([ 1, 2, 3, 4, 5 ]);
const ALL_MONTHS_IN_YEAR: Set<number> = new Set([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]);

interface DestructuredPoint {
    year: number,
    month: number,
    week: number,
    day: number,
}

function destructurePoint (period: Period, point: Date): DestructuredPoint {
    const year: number = point.getFullYear();
    const month: number = point.getMonth() + 1;
    const week: number = (period.months)
        ? Math.ceil(point.getDate() / 7)
        : Math.ceil(getDayOfYear(point) / 7);
    const day: number = ((): number => {
        if (period.weeks) {
            return getDay(point) + 1;
        } else if (period.months) {
            return point.getDate();
        } else if (period.years) {
            return getDayOfYear(point);
        } else {
            throw new Error();
        }
    })();
    return {
        year,
        month,
        week,
        day,
    };
}

// TODO: Check non-sense numbers (0, negative, or too large)
// TODO: Check non-sense sets (13 months to a year, etc.)

/**
 * ### Assumptions
 *
 * - Not all possible values for a given unit of precision in a `Period` are specified.
 * - `DayTimeBand`s do not overlap.
 *
 * @param period
 * @param point
 * @returns
 */
export
function startOfPeriod (period: Period, point: Date): Date | null {

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
            && ((tod.startDayTime?.minute ?? DayTimeBand._default_value_for_startDayTime.minute) === 0)
            && ((tod.startDayTime?.second ?? DayTimeBand._default_value_for_startDayTime.second) === 0)
        ));
    const endOfDayBand: DayTimeBand | undefined = period.timesOfDay
        ?.find((tod: DayTimeBand): boolean => (
            ((tod.endDayTime?.hour ?? DayTimeBand._default_value_for_endDayTime.hour) === 23)
            && ((tod.endDayTime?.minute ?? DayTimeBand._default_value_for_endDayTime.minute) === 59)
            && ((tod.endDayTime?.second ?? DayTimeBand._default_value_for_endDayTime.second) === 59)
        ));
    const startOfDayPermitted = startOfDayBand ?? !period.timesOfDay;
    const endOfDayPermitted = endOfDayBand ?? !period.timesOfDay;

    const {
        year: pointYear,
        month: pointMonth,
        week: pointWeek,
        day: pointDay,
    } = destructurePoint(period, point);
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
     *
     * This is not true when `timesOfDay` is the most specific unit specified.
     * In this case, we can just return the lower bound of the applicable
     * time band, unless the timeband touches the lower boundary of the day
     * (and therefore has the possibility of continuing to the previous day)
     */
    if (applicableTimeband) {
        if (startOfDayPermitted) {
            /**
             * This involves checking that not only the previous day is
             * whitelisted, but also that, if the previous week, month, and
             * year are, if we rollover to a previous unit. For instance, if the
             * point is January 1st, 2021, we have to check that December, 31st,
             * 2020 is permitted.
             */
            const prev: Date = subDays(point, 1);
            const {
                year: yesterYear,
                month: yesterMonth,
                week: yesterWeek,
                day: yesterDay,
            } = destructurePoint(period, prev);
            const previousDayIsPermitted = (
                (!whitelistedDays || whitelistedDays.has(yesterDay))
                && (!whitelistedWeeks || whitelistedWeeks.has(yesterWeek))
                && (!whitelistedMonths || whitelistedMonths.has(yesterMonth))
                && (!whitelistedYears || whitelistedYears.has(yesterYear))
            );
            if (previousDayIsPermitted && endOfDayPermitted) {
                return new Date(
                    prev.getFullYear(),
                    prev.getMonth(),
                    prev.getDate(),
                    endOfDayBand?.startDayTime?.hour ?? DayTimeBand._default_value_for_startDayTime.hour,
                    endOfDayBand?.startDayTime?.minute ?? DayTimeBand._default_value_for_startDayTime.minute,
                    endOfDayBand?.startDayTime?.second ?? DayTimeBand._default_value_for_startDayTime.second,
                );
            }
        }
        return new Date(
            point.getFullYear(),
            point.getMonth(),
            point.getDate(),
            applicableTimeband.startDayTime?.hour ?? DayTimeBand._default_value_for_startDayTime.hour,
            applicableTimeband.startDayTime?.minute ?? DayTimeBand._default_value_for_startDayTime.minute,
            applicableTimeband.startDayTime?.second ?? DayTimeBand._default_value_for_startDayTime.second,
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
            } = destructurePoint(period, prev);
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
            } = destructurePoint(period, prev);
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
            } = destructurePoint(period, prev);
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
        // Look for the smallest of the contiguous days, looping back if
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
            } = destructurePoint(period, prev);
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
            const { year: yesterYear } = destructurePoint(period, prev);
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
        const { year: yesterYear } = destructurePoint(period, prev);
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
    } else {
        let currentMin = startOfYear(point);
        let i: number = pointYear;
        while (whitelistedYears?.has(i - 1)) {
            currentMin = startOfYear(subMonths(currentMin, 1));
            i--;
        }
        return currentMin;
    }
}

export default startOfPeriod;
