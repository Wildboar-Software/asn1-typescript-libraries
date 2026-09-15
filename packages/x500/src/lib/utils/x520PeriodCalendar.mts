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

const ISO_WEEK_STARTS_ON_MONDAY = { weekStartsOn: 1 as const };

/**
 * @summary Count how many days of an ISO week fall in a calendar month.
 * @param {Date} weekStart Monday 00:00 of the ISO week.
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
 * at least four days of that month. For Monday-start weeks this is the ISO week
 * that contains the 4th of the month.
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
 * The last week of the month is the last Monday-start week with at least four
 * days in that month. Week 5 in a `Period` aliases this last week even when
 * the month only has four such weeks.
 *
 * @param {number} year Calendar year.
 * @param {number} month 1-based month.
 * @returns {number} `4` or `5`.
 */
export
function x520WeeksInMonth (year: number, month: number): number {
    const first: Date = startOfFirstX520WeekOfMonth(year, month);
    let lastStart: Date = startOfISOWeek(endOfMonth(new Date(year, month - 1, 1)));
    if (countDaysOfMonthInISOWeek(lastStart, year, month) < 4) {
        lastStart = subWeeks(lastStart, 1);
    }
    return differenceInCalendarWeeks(lastStart, first, ISO_WEEK_STARTS_ON_MONDAY) + 1;
}

export
interface X520WeekOfMonth {
    year: number;
    month: number;
    week: number;
    lastWeek: number;
}

/**
 * @summary X.520 week-of-month for a local instant.
 * @description
 *
 * The week is owned by the month that contains its Thursday (the month with at
 * least four days of that ISO week). Days 1–3 of a month that belong to the
 * previous month’s last week therefore report that previous month.
 *
 * @param {Date} point Local instant.
 * @returns {X520WeekOfMonth} Owning year/month, 1-based week, and last week number.
 */
export
function x520WeekOfMonth (point: Date): X520WeekOfMonth {
    const weekStart: Date = startOfISOWeek(point);
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
    year: number;
    week: number;
    lastWeek: number;
}

/**
 * @summary X.520 week-of-year for a local instant (ISO week date).
 * @description
 *
 * The first week of a year is the first week with at least four days of that
 * year (ISO week 1). Week 53 in a `Period` aliases the last ISO week even when
 * the year has only 52 weeks.
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
