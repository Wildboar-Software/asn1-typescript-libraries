import type {
    Period,
} from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import {
    getDay,
    getDayOfYear,
} from "date-fns";
import {
    x520WeekOfMonth,
    x520WeekOfYear,
} from "./x520PeriodCalendar.mjs";

export
interface DateDestructuredIntoPeriodMembers {
    year: number,
    month: number,
    week: number,
    day: number,
    lastWeek: number,
}

/**
 * @summary Map a local instant onto `Period` year/month/week/day units.
 * @description
 *
 * When `weeks` is present, week numbers follow X.520 clause 10.2 (first week
 * has ≥4 days of the month or year; week 5/53 means the last week). The year
 * and month are those that own the ISO week, not necessarily the calendar
 * components of `point`.
 */
export
function destructureDateIntoPeriodProperties (period: Period, point: Date): DateDestructuredIntoPeriodMembers {
    const day: number = ((): number => {
        if (period.weeks) {
            return getDay(point) + 1;
        } else if (period.months) {
            return point.getDate();
        } else {
            return getDayOfYear(point);
        }
    })();

    if (period.weeks && period.months) {
        const ofMonth = x520WeekOfMonth(point);
        return {
            year: ofMonth.year,
            month: ofMonth.month,
            week: ofMonth.week,
            day,
            lastWeek: ofMonth.lastWeek,
        };
    }

    if (period.weeks) {
        const ofYear = x520WeekOfYear(point);
        return {
            year: ofYear.year,
            month: point.getMonth() + 1,
            week: ofYear.week,
            day,
            lastWeek: ofYear.lastWeek,
        };
    }

    return {
        year: point.getFullYear(),
        month: point.getMonth() + 1,
        week: 0,
        day,
        lastWeek: 0,
    };
}

export default destructureDateIntoPeriodProperties;
