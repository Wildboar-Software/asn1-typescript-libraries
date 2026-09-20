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

/** Decoded `Period` membership sets. `null` on a set = unconstrained. */
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

/**
 * @summary Next year in `years` that is strictly after `afterYear`.
 * @description
 *
 * Jumps a cursor out of a year that `Period.years` does not list,
 * instead of walking day by day to 1 January of the next listed year.
 *
 * @param {Set<number>} years Listed `Period.years` values.
 * @param {number} afterYear Calendar year that is not listed (or already
 *  consumed).
 * @returns {number | null} Smallest listed year greater than
 *  `afterYear`, or `null` if none remain.
 * @function
 * @author Cursor Grok 4.6
 */
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

/**
 * @summary Local start instant of `band` on civil day `day`.
 * @description
 *
 * Combines `day`'s Y/M/D with {@link DayTimeBand.startToSeconds}. An
 * omitted start is midnight (X.520 `DayTimeBand` DEFAULT).
 *
 * @param {Date} day Any instant on the civil day (local).
 * @param {DayTimeBand} band The band whose start clock is applied.
 * @returns {Date} Local date-time at that band start.
 * @function
 * @author Cursor Grok 4.6
 */
function startOfBandOnDay (day: Date, band: DayTimeBand): Date {
    return new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        0,
        0,
        band.startToSeconds(),
    );
}

/**
 * @summary Decode `Period` CHOICE fields into membership sets.
 * @description
 *
 * `null` on a set means that element was omitted (unconstrained), or
 * `weeks` is ignored because `days` is `dayOf`. `dayOf` leaves `days`
 * null here and is expanded per civil day. `allMonths` / `allWeeks`
 * become the full 1..12 / 1..5 (or 1..53) sets. Unrecognized CHOICE
 * alternatives throw.
 *
 * `weeksAreOfMonth` is true when `months` is present (weeks of month).
 * `daysAreWeekdays` is true when `weeks` is present, or when neither
 * `months` nor `years` is (X.520 example: every Monday). `timesOfDay`
 * is a SET, so bands are sorted with {@link DayTimeBand.compare}.
 *
 * @param {Period} period Stored periodic specification.
 * @returns {PeriodWhitelists} Sets and flags used by the calendar walk.
 * @function
 * @author Cursor Grok 4.6
 */
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
        throw new Error("Unrecognized Period.months CHOICE alternative.");
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
        throw new Error("Unrecognized Period.weeks CHOICE alternative.");
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
        throw new Error("Unrecognized Period.days CHOICE alternative.");
    })();
    // `timesOfDay` is SET OF DayTimeBand: members have no order.
    const bands: DayTimeBand[] | null = period.timesOfDay?.length
        ? [ ...period.timesOfDay ].sort((a, b) => a.compare(b))
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

/**
 * @summary Day-number whitelist that applies to civil day `point`.
 * @description
 *
 * `dayOf` is an occurrence of a named weekday in a month, so the set
 * of calendar dates depends on that month (see
 * {@link getDayOfMonthWhitelistFromXDayOf}). Other `days` CHOICE
 * alternatives are static and come from the decoded whitelist.
 *
 * @param {Period} period Stored periodic specification.
 * @param {Date} point Instant whose month is used for `dayOf`.
 * @param {PeriodWhitelists} decoded Output of {@link decodeWhitelists}.
 * @returns {Set<number> | null} Allowed day numbers, or `null` if
 *  unconstrained.
 * @function
 * @author Cursor Grok 4.6
 */
function dayNumbersForPoint (period: Period, point: Date, decoded: PeriodWhitelists): Set<number> | null {
    if (decoded.usesDayOf && period.days && ("dayOf" in period.days)) {
        return getDayOfMonthWhitelistFromXDayOf(period.days.dayOf, point);
    }
    return decoded.days;
}

/**
 * @summary Whether `point`'s civil day is selected by `period`.
 * @description
 *
 * Checks year, month, week (including 5/53 last-week aliases), and
 * day. Does not apply `timesOfDay`; a matching day may still have no
 * remaining band later than the walk cursor.
 *
 * @param {Period} period Stored periodic specification.
 * @param {Date} point Instant whose civil day is tested (local).
 * @param {PeriodWhitelists} decoded Output of {@link decodeWhitelists}.
 * @returns {boolean} `true` if that civil day is allowed.
 * @function
 * @author Cursor Grok 4.6
 */
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

/**
 * @summary First occurrence start on `day` that is not before `notBefore`.
 * @description
 *
 * `timesOfDay` is a SET, so members need not be in start order. This
 * takes the earliest band start that is `>= notBefore` (decode also
 * sorts with {@link DayTimeBand.compare}). Without bands, the start
 * is midnight of that civil day. `null` means every start on this day
 * is already earlier than `notBefore`.
 *
 * @param {Date} day Instant on the allowed civil day (local).
 * @param {PeriodWhitelists} decoded Output of {@link decodeWhitelists}.
 * @param {Date} notBefore Inclusive earliest start the caller will
 *  accept.
 * @returns {Date | null} That start, or `null` if none remain on
 *  `day`.
 * @function
 * @author Cursor Grok 4.6
 */
function firstStartOnAllowedDay (
    day: Date,
    decoded: PeriodWhitelists,
    notBefore: Date,
): Date | null {
    if (decoded.bands) {
        let earliest: Date | null = null;
        for (const band of decoded.bands) {
            const start = startOfBandOnDay(day, band);
            if (start.valueOf() < notBefore.valueOf()) {
                continue;
            }
            if ((earliest === null) || (start.valueOf() < earliest.valueOf())) {
                earliest = start;
            }
        }
        return earliest;
    }
    const start = startOfDay(day);
    return (start.valueOf() >= notBefore.valueOf()) ? start : null;
}

/**
 * @summary Jump `cursor` to the next listed year/month, if needed.
 * @description
 *
 * If the cursor's year or month is not in the whitelist, return the
 * first instant of the next listed year/month that is still within
 * the window. Year 10000 and later is out of GeneralizedTime. If the
 * cursor is already allowed, it is returned unchanged.
 *
 * @param {Date} cursor Current walk position (local).
 * @param {PeriodWhitelists} decoded Output of {@link decodeWhitelists}.
 * @param {Date} endInstant Inclusive window end (local).
 * @returns {Date | null} Same cursor, a later first-of-month, or
 *  `null` if none remain in the window.
 * @function
 * @author Cursor Grok 4.6
 */
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

/**
 * @summary Advance `cursor` by one week, weekday, or civil day.
 * @description
 *
 * When `weeks` is listed (and `dayOf` is not), step to the next
 * Sunday-based week. When days are weekdays, step to the next listed
 * weekday. Otherwise step one civil day. Year/month jumps are
 * {@link skipDisallowedYearMonth}'s job.
 *
 * @param {Date} cursor Current walk position (local).
 * @param {PeriodWhitelists} decoded Output of {@link decodeWhitelists}.
 * @returns {Date} The next candidate civil-day start.
 * @function
 * @author Cursor Grok 4.6
 */
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
 * @summary First occurrence start at or after `t` while `t` is a gap.
 * @description
 *
 * Caller already saw that `t` is not inside an occurrence. If `t`'s
 * civil day is allowed, a later `DayTimeBand` on that day may still
 * start at or after `t`. Otherwise walk civil units (with year/month
 * jumps) until a start `<= endInstant` is found or
 * {@link MAX_NEXT_START_ITERS} is exhausted.
 *
 * @param {Period} period Stored periodic specification.
 * @param {Date} t Instant known to lie in a gap (local).
 * @param {Date} endInstant Inclusive window end (local).
 * @param {PeriodWhitelists} decoded Output of {@link decodeWhitelists}.
 * @returns {Date | null} Next occurrence start, or `null` if none
 *  remain in the window.
 * @function
 * @author Cursor Grok 4.6
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
