import { TRUE_BIT } from "@wildboar/asn1";
import type { Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import { DayTimeBand } from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import {
    addDays,
    addWeeks,
    getDay,
    startOfDay,
} from "date-fns";
import boundariesOfPeriodOccurrence from "./boundariesOfPeriodOccurrence.mjs";
import getDayOfMonthWhitelistFromXDayOf from "./getDayOfMonthWhitelistFromXDayOf.mjs";
import destructureDateIntoPeriodProperties from "./destructureDateIntoPeriodProperties.mjs";
import {
    periodAllowsWeek,
    startOfSundayBasedWeek,
} from "./x520PeriodCalendar.mjs";
import { secondAfter } from "./secondAfter.mjs";

/**
 * ASN.1 GeneralizedTime four-digit-year ceiling: 9999-12-31 23:59:59 local.
 * Default window end for {@link occurrencesOfPeriod} / `Period.occurrences`.
 */
export const MAX_GENERALIZED_TIME: Date = new Date(9999, 11, 31, 23, 59, 59);

const ALL_MONTHS: Set<number> = new Set([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]);
const ALL_WEEKS_IN_MONTH: Set<number> = new Set([ 1, 2, 3, 4, 5 ]);
const ALL_WEEKS_IN_YEAR: Set<number> = new Set(
    Array.from({ length: 53 }, (_, i) => (i + 1)),
);

/**
 * Cap on civil-day steps inside one `nextOccurrenceStart` call. Year and
 * month jumps should make this generous; it only stops a Period that never
 * matches from walking to 9999 one day at a time.
 */
const MAX_NEXT_START_ITERS = 4000;

interface PeriodWhitelists {
    years: Set<number> | null;
    months: Set<number> | null;
    weeks: Set<number> | null;
    days: Set<number> | null;
    usesDayOf: boolean;
    weeksAreOfMonth: boolean;
    daysAreWeekdays: boolean;
    bands: DayTimeBand[] | null;
}

function nextListedYear (
    years: Set<number>,
    afterYear: number,
): number | null {
    let best: number | null = null;
    for (const year of years) {
        if (year > afterYear) {
            if ((best === null) || (year < best)) {
                best = year;
            }
        }
    }
    return best;
}

function bandStartScore (band: DayTimeBand): number {
    return (
        (Number(band.startDayTime?.hour ?? 0) * 3600)
        + (Number(band.startDayTime?.minute ?? 0) * 60)
        + Number(band.startDayTime?.second ?? 0)
    );
}

function startOfBandOnDay (day: Date, band: DayTimeBand): Date {
    return new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        Number(band.startDayTime?.hour ?? 0),
        Number(band.startDayTime?.minute ?? 0),
        Number(band.startDayTime?.second ?? 0),
    );
}

function decodeWhitelists (period: Period): PeriodWhitelists {
    const usesDayOf = Boolean(period.days && ("dayOf" in period.days));
    const years: Set<number> | null = period.years
        ? new Set(period.years.map((year) => Number(year)))
        : null;
    const months: Set<number> | null = ((): Set<number> | null => {
        if (!period.months) {
            return null;
        }
        if ("intMonth" in period.months) {
            return new Set(period.months.intMonth.map((month) => Number(month)));
        }
        if ("bitMonth" in period.months) {
            return new Set(
                period.months.bitMonth
                    .map((b, i) => ((b === TRUE_BIT) ? (i + 1) : 0))
                    .filter((v) => Boolean(v)),
            );
        }
        if ("allMonths" in period.months) {
            return ALL_MONTHS;
        }
        throw new Error();
    })();
    const weeks: Set<number> | null = ((): Set<number> | null => {
        if (usesDayOf || !period.weeks) {
            return null;
        }
        if ("intWeek" in period.weeks) {
            return new Set(period.weeks.intWeek.map((week) => Number(week)));
        }
        if ("bitWeek" in period.weeks) {
            return new Set(
                period.weeks.bitWeek
                    .map((b, i) => ((b === TRUE_BIT) ? (i + 1) : 0))
                    .filter((v) => Boolean(v)),
            );
        }
        if ("allWeeks" in period.weeks) {
            return period.months ? ALL_WEEKS_IN_MONTH : ALL_WEEKS_IN_YEAR;
        }
        throw new Error();
    })();
    const days: Set<number> | null = ((): Set<number> | null => {
        if (!period.days) {
            return null;
        }
        if ("intDay" in period.days) {
            return new Set(period.days.intDay.map((day) => Number(day)));
        }
        if ("bitDay" in period.days) {
            return new Set(
                period.days.bitDay
                    .map((b, i) => ((b === TRUE_BIT) ? (i + 1) : 0))
                    .filter((v) => Boolean(v)),
            );
        }
        if ("dayOf" in period.days) {
            return null;
        }
        throw new Error();
    })();
    const bands: DayTimeBand[] | null = period.timesOfDay?.length
        ? [ ...period.timesOfDay ].sort((a, b) => (bandStartScore(a) - bandStartScore(b)))
        : null;
    return {
        years,
        months,
        weeks,
        days,
        usesDayOf,
        weeksAreOfMonth: Boolean(period.months),
        daysAreWeekdays: Boolean(period.weeks) || (!period.months && !period.years),
        bands,
    };
}

function dayNumbersForPoint (period: Period, point: Date, decoded: PeriodWhitelists): Set<number> | null {
    if (decoded.usesDayOf && period.days && ("dayOf" in period.days)) {
        return getDayOfMonthWhitelistFromXDayOf(period.days.dayOf, point);
    }
    return decoded.days;
}

function civilDayAllowed (period: Period, point: Date, decoded: PeriodWhitelists): boolean {
    const {
        year,
        month,
        week,
        day,
        numberOfLastWeek,
    } = destructureDateIntoPeriodProperties(period, point);
    const dayNumbers = dayNumbersForPoint(period, point, decoded);
    return (
        (!decoded.years || decoded.years.has(year))
        && (!decoded.months || decoded.months.has(month))
        && periodAllowsWeek(decoded.weeks, week, numberOfLastWeek, decoded.weeksAreOfMonth)
        && (!dayNumbers || dayNumbers.has(day))
    );
}

function firstStartOnAllowedDay (
    day: Date,
    decoded: PeriodWhitelists,
    notBefore: Date,
): Date | null {
    if (decoded.bands) {
        for (const band of decoded.bands) {
            const start = startOfBandOnDay(day, band);
            if (start.valueOf() >= notBefore.valueOf()) {
                return start;
            }
        }
        return null;
    }
    const start = startOfDay(day);
    return (start.valueOf() >= notBefore.valueOf()) ? start : null;
}

function skipDisallowedYearMonth (
    cursor: Date,
    decoded: PeriodWhitelists,
    endInstant: Date,
): Date | null {
    let year = cursor.getFullYear();
    let month = cursor.getMonth() + 1;
    if (year > 9999) {
        return null;
    }
    if (decoded.years && !decoded.years.has(year)) {
        const nextYear = nextListedYear(decoded.years, year);
        if (
            (nextYear === null)
            || (nextYear > endInstant.getFullYear())
            || (nextYear > 9999)
        ) {
            return null;
        }
        return new Date(nextYear, 0, 1);
    }
    if (decoded.months && !decoded.months.has(month)) {
        for (let n = 0; n < 24; n++) {
            month += 1;
            if (month > 12) {
                month = 1;
                year += 1;
                if (decoded.years && !decoded.years.has(year)) {
                    const nextYear = nextListedYear(decoded.years, year - 1);
                    if (
                        (nextYear === null)
                        || (nextYear > endInstant.getFullYear())
                    ) {
                        return null;
                    }
                    year = nextYear;
                    month = 1;
                }
            }
            if (year > 9999) {
                return null;
            }
            if (new Date(year, month - 1, 1).valueOf() > endInstant.valueOf()) {
                return null;
            }
            if (!decoded.months.has(month)) {
                continue;
            }
            if (decoded.years && !decoded.years.has(year)) {
                continue;
            }
            return new Date(year, month - 1, 1);
        }
        return null;
    }
    return cursor;
}

function advanceOneCivilUnit (cursor: Date, decoded: PeriodWhitelists): Date {
    if (decoded.weeks && !decoded.usesDayOf) {
        return addDays(startOfSundayBasedWeek(cursor), 7);
    }
    if (decoded.daysAreWeekdays && decoded.days && !decoded.usesDayOf) {
        for (let i = 1; i <= 7; i++) {
            const candidate = addDays(cursor, i);
            if (decoded.days.has(getDay(candidate) + 1)) {
                return startOfDay(candidate);
            }
        }
    }
    return addDays(startOfDay(cursor), 1);
}

/**
 * First occurrence start at or after `t` that is not inside an occurrence
 * containing `t` (caller already observed a gap at `t`).
 */
function nextOccurrenceStart (
    period: Period,
    t: Date,
    endInstant: Date,
    decoded: PeriodWhitelists,
): Date | null {
    if (civilDayAllowed(period, t, decoded)) {
        const sameDay = firstStartOnAllowedDay(t, decoded, t);
        if (sameDay && (sameDay.valueOf() <= endInstant.valueOf())) {
            return sameDay;
        }
    }
    let cursor = addDays(startOfDay(t), 1);
    for (let n = 0; n < MAX_NEXT_START_ITERS; n++) {
        if (cursor.valueOf() > endInstant.valueOf()) {
            return null;
        }
        const skipped = skipDisallowedYearMonth(cursor, decoded, endInstant);
        if (!skipped) {
            return null;
        }
        if (skipped.valueOf() > cursor.valueOf()) {
            cursor = skipped;
            continue;
        }
        if (civilDayAllowed(period, cursor, decoded)) {
            const start = firstStartOnAllowedDay(cursor, decoded, t);
            if (start && (start.valueOf() <= endInstant.valueOf())) {
                return start;
            }
        }
        cursor = advanceOneCivilUnit(cursor, decoded);
    }
    return null;
}

/**
 * @summary Occurrences of `period` that intersect `[startInstant, endInstant]`.
 * @description
 *
 * Lazy inclusive `[start, end]` pairs, same shape as
 * {@link boundariesOfPeriodOccurrence}. If `startInstant` lies in an
 * occurrence, that pair is first even when its start is earlier.
 * `endInstant` is required here; `Period.occurrences` defaults it to
 * {@link MAX_GENERALIZED_TIME}.
 *
 * @param {Period} period Stored periodic specification.
 * @param {Date} startInstant Inclusive window start (local).
 * @param {Date} endInstant Inclusive window end (local).
 * @returns {IterableIterator<[Date, Date]>} Occurrence pairs.
 * @function
 * @author Cursor Grok 4.6
 */
export
function* occurrencesOfPeriod (
    period: Period,
    startInstant: Date,
    endInstant: Date,
): IterableIterator<[ Date, Date ]> {
    if (startInstant.valueOf() > endInstant.valueOf()) {
        return;
    }
    let decoded: PeriodWhitelists;
    try {
        decoded = decodeWhitelists(period);
    } catch {
        return;
    }
    let t: Date = startInstant;
    while (t.valueOf() <= endInstant.valueOf()) {
        let bounds: [ Date, Date ] | null;
        try {
            bounds = boundariesOfPeriodOccurrence(period, t);
        } catch {
            return;
        }
        if (bounds) {
            if (bounds[0].valueOf() > endInstant.valueOf()) {
                return;
            }
            yield bounds;
            const next = secondAfter(bounds[1]);
            if (next.valueOf() <= t.valueOf()) {
                return;
            }
            t = next;
            continue;
        }
        const nextStart = nextOccurrenceStart(period, t, endInstant, decoded);
        if (
            !nextStart
            || (nextStart.valueOf() > endInstant.valueOf())
            || (nextStart.valueOf() <= t.valueOf())
        ) {
            return;
        }
        t = nextStart;
    }
}

export default occurrencesOfPeriod;
