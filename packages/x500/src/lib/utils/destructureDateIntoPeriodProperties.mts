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
    /**
     * 1-based week number of the last Sunday-based week of the owning
     * month (4–5) or year (52–53). 0 when `weeks` is not used. Needed so
     * week 5/53 can alias that last week during matching.
     */
    numberOfLastWeek: number,
}

/**
 * @summary Map a local instant onto `Period` year/month/week/day units.
 * @description
 *
 * When `weeks` is present (and `dayOf` is not), week numbers follow X.520
 * clause 10.2 (first week has ≥4 days of the month or year; week 5/53 means
 * the last week). See `x520PeriodCalendar.mts` for Sunday–Saturday weeks.
 *
 * Year and month are those that **own** the week, not necessarily
 * `point.getFullYear()` / `getMonth()`. 1 Jan 2021 is December 2020’s last
 * week, so a January-only `Period` must not see it as month 1. `dayOf`
 * ignores `weeks` (X.520: named-day-of-month, not week-of-month).
 */
export
function destructureDateIntoPeriodProperties (period: Period, point: Date): DateDestructuredIntoPeriodMembers {
    const usesDayOf = Boolean(period.days && ("dayOf" in period.days));
    const day: number = ((): number => {
        // X.520: dayOf is an occurrence of NamedDay in a month; weeks is ignored.
        if (usesDayOf) {
            return point.getDate();
        }
        if (period.weeks) {
            // Days of the week: date-fns getDay() Sunday=0 → X.520 intDay Sunday=1.
            return getDay(point) + 1;
        } else if (period.months) {
            return point.getDate();
        } else if (period.years) {
            return getDayOfYear(point);
        } else {
            // Days with no coarser unit is not described in X.520
            // clause 10.2; inferred as days of the week from
            // example (b) `{ days intDay:{2} }` (every Monday).
            return getDay(point) + 1;
        }
    })();

    // Weeks of the month: owning month can differ from the calendar month of
    // `point` (Wednesday / ≥4-day rule). numberOfLastWeek lets week 5 mean
    // “last week”.
    if (!usesDayOf && period.weeks && period.months) {
        const ofMonth = x520WeekOfMonth(point);
        return {
            year: ofMonth.year,
            month: ofMonth.month,
            week: ofMonth.week,
            day,
            numberOfLastWeek: ofMonth.numberOfLastWeekOfMonth,
        };
    }

    // Weeks of the year: week-numbering year, not calendar year (1 Jan 2021
    // is the last week of 2020). Calendar month is still reported for any
    // months constraint that might appear without going through the
    // week-of-month branch above.
    if (!usesDayOf && period.weeks) {
        const ofYear = x520WeekOfYear(point);
        return {
            year: ofYear.year,
            month: point.getMonth() + 1,
            week: ofYear.week,
            day,
            numberOfLastWeek: ofYear.numberOfLastWeekOfYear,
        };
    }

    // No week component (or dayOf): week is unused; 0 is not a valid Period
    // week, so a leftover whitelist cannot accidentally match.
    return {
        year: point.getFullYear(),
        month: point.getMonth() + 1,
        week: 0,
        day,
        numberOfLastWeek: 0,
    };
}

export default destructureDateIntoPeriodProperties;
