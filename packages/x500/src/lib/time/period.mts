import {
    addDays,
    addHours,
    addMinutes,
    addSeconds,
    addWeeks,
    endOfDay,
    endOfMonth,
    endOfYear,
    getDaysInMonth,
    setDayOfYear,
    startOfDay,
    startOfMonth,
    startOfYear,
    subDays,
    subWeeks,
    getUnixTime,
    endOfWeek,
    type Day,
} from "date-fns";
import { Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import {
    startOfFirstX520WeekOfMonth,
    startOfFirstX520WeekOfYear,
} from "../utils/x520PeriodCalendar.mjs";
import { type BIT_STRING } from "@wildboar/asn1";
import { type XDayOf } from "../modules/SelectedAttributeTypes/XDayOf.ta.mjs";
import { destructureXDayOf } from "../utils/getDayOfMonthWhitelistFromXDayOf.mjs";
import { DayTimeBand } from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";

const X520_LAST_WEEK_OF_MONTH = 5;
const X520_LAST_WEEK_OF_YEAR = 53;
const MIN_GENERALIZED_TIME = new Date(0, 0, 1, 0, 0, 0, 0);
const MAX_GENERALIZED_TIME = new Date(9999, 11, 31, 23, 59, 59, 999);

// Joins abutting spans into a single contiguous span.
// Where "abutting" is defined as two spans covering adjacent seconds.
function *contiguator(
    fn: IterableIterator<[Date, Date]>,
): IterableIterator<[Date, Date]> {
    let contig: [Date, Date] | undefined;
    for (const span of fn) {
        if (contig !== undefined) { // If we have a previous span...
            // ...and if the previous span and the current span are adjacent...
            // >= to defensively handle spans overlapping somehow.
            // I confirmed that getUnixTime truncates milliseconds.
            if (getUnixTime(contig[1]) >= getUnixTime(span[0]) - 1) {
                // extend the previous span and continue.
                contig[1] = span[1];
                continue;
            } else {
                yield contig;
            }
        }
        contig = span;
    }
    if (contig !== undefined) {
        yield contig;
    }
}

function *years(p: Period): IterableIterator<number> {
    if (!p.years) {
        return;
    }
    const years = p.years
        .map((y) => Number(y))
        .sort((a, b) => a - b)
        ;
    let last = -1;
    for (const y of years) {
        if (y === last) {
            continue;
        }
        last = y; // dedupe logic.
        yield y;
    }
}

const ALL_MONTHS = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];

function *months(p: Period): IterableIterator<number> {
    if (!p.months) {
        yield *ALL_MONTHS.values();
        return;
    }
    if ("intMonth" in p.months) {
        const months = p
            .months
            .intMonth
            .map((m) => Number(m))
            .sort((a, b) => a - b)
            ;
        yield *months;
    }
    else if ("bitMonth" in p.months) {
        for (const [index, bit] of p.months.bitMonth.entries()) {
            if (bit) {
                yield index + 1;
            }
        }
    }
    else {
        yield *ALL_MONTHS.values();
    }
}

const ALL_WEEKS_OF_YEAR = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
];
const ALL_WEEKS_OF_MONTH = [ 1, 2, 3, 4, 5 ];

function *weeks(p: Period): IterableIterator<number> {
    if (!p.weeks) {
        return;
    }
    const ofMonth = !!p.months;
    const w: Period["weeks"] = p.weeks;
    if ("intWeek" in w) {
        const weeks = w
            .intWeek
            .map((w) => Number(w))
            .sort((a, b) => a - b)
            ;
        yield *weeks;
    }
    else if ("bitWeek" in w) {
        for (const [index, bit] of w.bitWeek.entries()) {
            if (bit) {
                yield index + 1;
            }
        }
    }
    else if (ofMonth) {
        yield *ALL_WEEKS_OF_MONTH.values();
    }
    else {
        yield *ALL_WEEKS_OF_YEAR.values();
    }
}

function startOfX520Week(p: Period, year: number, month?: number, week?: number): Date {
    let start: Date;
    if (p.months) {
        // weeks of the month.
        if (week === X520_LAST_WEEK_OF_MONTH) {
            if (month === 12) {
                year++;
                month = 1;
            } else {
                month++;
            }
            start = startOfFirstX520WeekOfMonth(year, month);
            start = subWeeks(start, 1);
        } else {
            start = startOfFirstX520WeekOfMonth(year, month);
            start = addWeeks(start, week - 1);
        }
    } else {
        // weeks of the year.
        if (week === X520_LAST_WEEK_OF_YEAR) {
            start = startOfFirstX520WeekOfYear(year + 1);
            start = subWeeks(start, 1);
        } else {
            start = startOfFirstX520WeekOfYear(year);
            start = addWeeks(start, week - 1);
        }
    }
    return start;
}

function *intDays(p: Period, days: number[], year: number, month?: number, week?: number): IterableIterator<Date> {
    if (p.weeks && week) {
        // intDays is days of the week.
        let dow = 0;
        for (const d of days) {
            if (d < 1 || d > 7) {
                continue;
            }
            // bitmap: zero-allocation approach.
            // NOTE: integers are 1-indexed in the standard.
            dow |= (1 << (d - 1));
        }
        const start = startOfX520Week(p, year, month, week);
        for (let i = 0; i < 7; i++) {
            const d = addDays(start, i);
            if (dow & (1 << d.getDay())) {
                yield d;
            }
        }
    }
    else if (p.months && month) {
        // intDays is days of the month.
        let dom = 0;
        for (const d of days) {
            if (d < 1 || d > 31) {
                continue;
            }
            // bitmap: zero-allocation approach.
            dom |= (1 << (d - 1));
        }
        const dim = getDaysInMonth(new Date(year, month - 1, 1));
        for (let i = 0; i < dim; i++) {
            if (dom & (1 << i)) {
                yield new Date(year, month - 1, i + 1);
            }
        }
    }
    else {
        // intDays is days of the year.
        const sorted = days.sort((a, b) => a - b); // mutates, but I think this is fine.
        let last = -1;
        const base = new Date(year, 0, 1);
        for (const d of sorted) {
            if (d < 1 || d > 366) {
                continue;
            }
            if (d === last) {
                continue;
            }
            last = d;
            yield setDayOfYear(base, d);
        }
    }
}

function *bitDays(p: Period, daysOfWeek: BIT_STRING, year: number, month?: number, week?: number): IterableIterator<Date> {
    let start: Date;
    let end: Date;
    // start-to-start because for loop below is exclusive-end.
    if (week) {
        start = startOfX520Week(p, year, month, week);
        end = addWeeks(start, 1);
    } else if (month) {
        start = startOfMonth(new Date(year, month - 1, 1));
        end = startOfMonth(new Date(year, month, 1));
    } else {
        start = startOfYear(new Date(year, 0, 1));
        end = startOfYear(new Date(year + 1, 0, 1));
    }
    for (let d = start; d < end; d = addDays(d, 1)) {
        if (daysOfWeek[d.getDay()]) {
            yield d;
        }
    }
}

function *xDaysOfMonth(occurrence: number, daymask: number, year: number, month?: number): IterableIterator<Date> {
    let start = startOfMonth(new Date(year, month - 1, 1));
    if (occurrence === X520_LAST_WEEK_OF_MONTH) {
        /* Within the weeks component, week 5 means "last week" of the month,
        and weeks are not exactly aligned with the month: they bleed over into
        the next month. But in daysOf, the point is to count the number of
        occurrences of that named day, not that day of the week. The
        specifications make no references to "week" when describing what
        XDaysOf means. So I think the correct approach in this case is to
        fast-forward to the end of the month and count the days backwards. */
        start = endOfMonth(start);
        for (let i = 6; i >= 0; i--) {
            const d = subDays(start, i);
            if (daymask & (1 << d.getDay())) {
                yield d;
            }
        }
        return;
    } else {
        start = addWeeks(start, occurrence - 1);
    }
    let end = addDays(start, 6);
    end = endOfDay(end); // end - start = 6.99999... days
    for (let d = start; d <= end; d = addDays(d, 1)) {
        if (daymask & (1 << d.getDay())) {
            yield d;
        }
    }
}

function *xDays(xday: XDayOf, year: number, month?: number): IterableIterator<Date> {
    // Quote from ITU-T X.520 (2019):
    // > If the dayOf choice for days is specified, then the weeks element of
    // > Period is not meaningful if present, and is ignored.
    const [ occurrence, nd ] = destructureXDayOf(xday);
    let daymask = 0;
    if ("intNamedDays" in nd) {
        if (nd.intNamedDays < 1 || nd.intNamedDays > 7) {
            throw new Error("Invalid day of week");
        }
        daymask = (1 << (nd.intNamedDays - 1));
    } else {
        for (let i = 0; i < 7; i++) {
            if (nd.bitNamedDays[i]) {
                daymask |= (1 << i);
            }
        }
    }
    if (month) {
        yield *xDaysOfMonth(occurrence, daymask, year, month);
    } else {
        for (let i = 0; i < 12; i++) {
            yield *xDaysOfMonth(occurrence, daymask, year, i + 1);
        }
    }
}

function *allDays(p: Period, year: number, month?: number, week?: number): IterableIterator<Date> {
    if (p.weeks) {
        const w = startOfX520Week(p, year, month, week);
        const end = addWeeks(w, 1);
        for (let d = w; d < end; d = addDays(d, 1)) {
            yield d;
        }
    } else if (p.months) {
        const m = new Date(year, month - 1, 1);
        const end = endOfMonth(m);
        for (let d = m; d < end; d = addDays(d, 1)) {
            yield d;
        }
    } else if (p.years) {
        const y = new Date(year, 0, 1);
        const end = new Date(year + 1, 0, 1);
        for (let d = y; d < end; d = addDays(d, 1)) {
            yield d;
        }
    }
}

function *days(p: Period, year: number, month?: number, week?: number): IterableIterator<Date> {
    if (!p.days) {
        yield *allDays(p, year, month, week);
    } else if ("intDay" in p.days) {
        const days = p.days.intDay
            .map((d) => Number(d))
            .sort((a, b) => a - b)
            ;
        yield *intDays(p, days, year, month, week);
    } else if ("bitDay" in p.days) {
        yield *bitDays(p, p.days.bitDay, year, month, week);
    } else if ("dayOf" in p.days) {
        const xday = p.days.dayOf;
        yield *xDays(xday, year, month);
    }
}

function *timeBands(date: Date, bands: DayTimeBand[], startInstant?: Date): IterableIterator<[Date, Date]> {
    for (const band of bands) {
        const sod = startOfDay(date);
        const sob = band.startDayTime ?? DayTimeBand._default_value_for_startDayTime;
        const eob = band.endDayTime ?? DayTimeBand._default_value_for_endDayTime;
        let start = addHours(sod, Number(sob.hour));
        let end = addHours(sod, Number(eob.hour));
        if (sob.minute) {
            start = addMinutes(start, Number(sob.minute));
        }
        if (eob.minute) {
            end = addMinutes(end, Number(eob.minute));
        }
        if (sob.second) {
            start = addSeconds(start, Number(sob.second));
        }
        if (eob.second) {
            end = addSeconds(end, Number(eob.second));
        }
        if (startInstant && end < startInstant) {
            continue;
        }
        if (start > end) {
            continue;
        }
        yield [start, end];
    }
}

function *occurrencesWithinWeeks(
    p: Period,
    year: number,
    month?: number,
    startInstant?: Date,
    bands?: DayTimeBand[],
): IterableIterator<[Date, Date]> {
    const weeksIsFinestResolution = (p.weeks && !p.days && !p.timesOfDay);
    for (const week of weeks(p)) {
        if (weeksIsFinestResolution) {
            const start = startOfX520Week(p, year, month, week);
            const end = endOfWeek(start, { weekStartsOn: start.getDay() as Day });
            yield [start, end];
            continue;
        }
        for (const day of days(p, year, month, week)) {
            if (startInstant && endOfDay(day) < startInstant) {
                continue;
            }
            if (p.timesOfDay) {
                yield *timeBands(day, bands, startInstant);
            } else {
                yield [startOfDay(day), endOfDay(day)];
            }
        }
    }
}

function *daysOfWeeks(
    p: Period,
    year: number,
    week: number,
    startInstant?: Date,
    bands?: DayTimeBand[],
): IterableIterator<[Date, Date]> {
    for (const day of days(p, year, undefined, week)) {
        if (startInstant && endOfDay(day) < startInstant) {
            continue;
        }
        if (p.timesOfDay) {
            yield *timeBands(day, bands, startInstant);
        } else {
            yield [startOfDay(day), endOfDay(day)];
        }
    }
}

function *occurrencesWithinYear(
    p: Period,
    year: number,
    bands?: DayTimeBand[],
    startInstant?: Date,
): IterableIterator<[Date, Date]> {
    const weeksIsFinestResolution = (p.weeks && !p.days && !p.timesOfDay);
    // FIXME: I don't think you should need this if statement entirely.
    if (!p.months) {
        if (weeksIsFinestResolution) {
            // Weeks of the year.
            yield *occurrencesWithinWeeks(p, year, undefined, startInstant, bands);
            return;
        }
        if (p.days) {
            if (!p.weeks) {
                // Days of the year
                // TODO: Factor out this code: it is duplicated four times!
                for (const day of days(p, year)) {
                    if (startInstant && endOfDay(day) < startInstant) {
                        continue;
                    }
                    if (p.timesOfDay) {
                        yield *timeBands(day, bands, startInstant);
                    } else {
                        yield [startOfDay(day), endOfDay(day)];
                    }
                }
                return;
            } else {
                for (const week of weeks(p)) {
                    yield *daysOfWeeks(p, year, week, startInstant, bands);
                }
                return;
            }
        }
    }
    for (const month of months(p)) {
        if (
            startInstant
            && (endOfMonth(new Date(year, month - 1, 1)) < startInstant)
        ) {
            // Ignore months falling before the startInstant.
            continue;
        }
        if (p.weeks) {
            yield *occurrencesWithinWeeks(p, year, month, startInstant, bands);
        } else if (p.days) {
            for (const day of days(p, year, month)) {
                if (startInstant && endOfDay(day) < startInstant) {
                    continue;
                }
                if (p.timesOfDay) {
                    yield *timeBands(day, bands, startInstant);
                } else {
                    yield [startOfDay(day), endOfDay(day)];
                }
            }
        } else if (p.timesOfDay) {
            const dom = getDaysInMonth(new Date(year, month - 1, 1));
            for (let day = 1; day <= dom; day++) {
                const d = new Date(year, month - 1, day);
                yield *timeBands(d, bands, startInstant);
            }
        }
        else {
            // Just return whole months.
            const refdate = new Date(year, month - 1, 1);
            yield [startOfMonth(refdate), endOfMonth(refdate)];
        }
    }
}

function *occurrencesInfinitely(p: Period, startInstant: Date): IterableIterator<[Date, Date]> {
    if (p.isEmpty()) {
        yield [MIN_GENERALIZED_TIME, MAX_GENERALIZED_TIME];
        return;
    }
    // This is calculated here to avoid recalculating it for each year.
    const bands = p.timesOfDay
        ? DayTimeBand.flatten(p.timesOfDay)
        : undefined;
    if (p.years) {
        const startYear = startInstant.getFullYear();
        for (const year of years(p)) {
            if (year < startYear) {
                continue;
            }
            // If we are returning years alone...
            if (!p.months && !p.weeks && !p.days) {
                const d = new Date(year, 0, 1);
                yield [d, endOfYear(d)];
            } else {
                yield *occurrencesWithinYear(p, year, bands, startInstant);
            }
        }
    } else {
        let year = startInstant.getFullYear();
        while (year <= 9999) {
            yield *occurrencesWithinYear(p, year, bands, startInstant);
            year++;
        }
    }
}

export
function *occurrences(p: Period, startInstant: Date, endInstant: Date = MAX_GENERALIZED_TIME): IterableIterator<[Date, Date]> {
    for (const occur of contiguator(occurrencesInfinitely(p, startInstant))) {
        if (occur[0] > endInstant) {
            break;
        }
        yield occur;
    }
}
