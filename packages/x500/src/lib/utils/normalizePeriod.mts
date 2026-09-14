import { TRUE_BIT, type BIT_STRING, type INTEGER } from "@wildboar/asn1";
import { Period } from "../modules/SelectedAttributeTypes/Period.ta.mjs";
import {
    type Period_days,
} from "../modules/SelectedAttributeTypes/Period-days.ta.mjs";
import {
    type Period_weeks,
} from "../modules/SelectedAttributeTypes/Period-weeks.ta.mjs";
import {
    type Period_months,
} from "../modules/SelectedAttributeTypes/Period-months.ta.mjs";
import {
    DayTimeBand,
} from "../modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import {
    DayTime,
} from "../modules/SelectedAttributeTypes/DayTime.ta.mjs";
import {
    type NamedDay,
} from "../modules/SelectedAttributeTypes/NamedDay.ta.mjs";
import {
    type NamedDay_intNamedDays,
} from "../modules/SelectedAttributeTypes/NamedDay-intNamedDays.ta.mjs";
import {
    type XDayOf,
} from "../modules/SelectedAttributeTypes/XDayOf.ta.mjs";

const DAYS_OF_WEEK = [1, 2, 3, 4, 5, 6, 7];
const DAYS_OF_MONTH = Array.from({ length: 31 }, (_, i) => i + 1);
const DAYS_OF_YEAR = Array.from({ length: 366 }, (_, i) => i + 1);
const WEEKS_OF_MONTH = [1, 2, 3, 4, 5];
const WEEKS_OF_YEAR = Array.from({ length: 53 }, (_, i) => i + 1);
const MONTHS_OF_YEAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ALL_WEEKS: Period_weeks = { allWeeks: null };
const ALL_MONTHS: Period_months = { allMonths: null };

/**
 * Named-bit ranges from X.520 clause 10.2 `Period`.
 * `int*` values are 1-based; bit `n` corresponds to integer `n + 1`.
 */
const BIT_DAY_MAX = 6;
const BIT_WEEK_MAX = 4;
const BIT_MONTH_MAX = 11;
const BIT_NAMED_DAY_MAX = 6;

function toNumber(value: INTEGER): number {
    return Number(value);
}

function uniqueSorted(values: INTEGER[]): number[] {
    return Array.from(new Set(values.map(toNumber))).sort((a, b) => a - b);
}

function sameSet(actual: readonly INTEGER[], expected: readonly number[]): boolean {
    if (actual.length !== expected.length) {
        return false;
    }
    for (let i = 0; i < actual.length; i++) {
        if (Number(actual[i]) !== expected[i]) {
            return false;
        }
    }
    return true;
}

function bitsToInts(
    bits: BIT_STRING,
    maxBitIndex: number,
): number[] | undefined {
    const ints: number[] = [];
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] !== TRUE_BIT) {
            continue;
        }
        if (i > maxBitIndex) {
            return undefined;
        }
        ints.push(i + 1);
    }
    return uniqueSorted(ints);
}

function trimmedBits(bits: BIT_STRING): BIT_STRING {
    let lastTrue = -1;
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === TRUE_BIT) {
            lastTrue = i;
        }
    }
    if (lastTrue < 0) {
        return new Uint8ClampedArray(0);
    }
    return bits.slice(0, lastTrue + 1);
}

function isIntOrBitDay(days: Period_days): days is
    | { intDay: INTEGER[] }
    | { bitDay: BIT_STRING } {
    return ("intDay" in days) || ("bitDay" in days);
}

function isDayOf(days: Period_days): days is { dayOf: XDayOf } {
    return ("dayOf" in days);
}

function isIntOrBitWeek(weeks: Period_weeks): weeks is
    | { intWeek: INTEGER[] }
    | { bitWeek: BIT_STRING } {
    return ("intWeek" in weeks) || ("bitWeek" in weeks);
}

function isAllWeeks(weeks: Period_weeks): weeks is { allWeeks: null } {
    return ("allWeeks" in weeks);
}

function isIntOrBitMonth(months: Period_months): months is
    | { intMonth: INTEGER[] }
    | { bitMonth: BIT_STRING } {
    return ("intMonth" in months) || ("bitMonth" in months);
}

function isAllMonths(months: Period_months): months is { allMonths: null } {
    return ("allMonths" in months);
}

/**
 * X.520 10.2: `days` is days-of-week if it precedes `weeks`, or if it is the
 * last specified coarser unit (example b: every Monday). It is days-of-month
 * if it precedes `months`, and days-of-year if it precedes `years`.
 */
function daysAreOfWeek(
    weeks: Period_weeks | undefined,
    months: Period_months | undefined,
    years: INTEGER[] | undefined,
): boolean {
    if (weeks) {
        return true;
    }
    if (months || (years && years.length)) {
        return false;
    }
    return true;
}

function daysAreOfMonth(
    weeks: Period_weeks | undefined,
    months: Period_months | undefined,
): boolean {
    return (!weeks && Boolean(months));
}

function normalizeNamedDay(day: NamedDay): NamedDay {
    if ("intNamedDays" in day) {
        return day;
    }
    if (!("bitNamedDays" in day)) {
        return day;
    }
    const ints = bitsToInts(day.bitNamedDays, BIT_NAMED_DAY_MAX);
    if (!ints) {
        return { bitNamedDays: trimmedBits(day.bitNamedDays) };
    }
    if (ints.length === 1) {
        return { intNamedDays: ints[0] as NamedDay_intNamedDays };
    }
    const bits = new Uint8ClampedArray(ints[ints.length - 1]);
    for (const value of ints) {
        bits[value - 1] = TRUE_BIT;
    }
    return { bitNamedDays: bits };
}

function normalizeXDayOf(dayOf: XDayOf): XDayOf {
    if ("first" in dayOf) {
        return { first: normalizeNamedDay(dayOf.first) };
    }
    if ("second" in dayOf) {
        return { second: normalizeNamedDay(dayOf.second) };
    }
    if ("third" in dayOf) {
        return { third: normalizeNamedDay(dayOf.third) };
    }
    if ("fourth" in dayOf) {
        return { fourth: normalizeNamedDay(dayOf.fourth) };
    }
    if ("fifth" in dayOf) {
        return { fifth: normalizeNamedDay(dayOf.fifth) };
    }
    return dayOf;
}

function normalizeDays(
    days: Period_days | undefined,
): Period_days | undefined {
    if (!days) {
        return undefined;
    }
    if (isDayOf(days)) {
        return { dayOf: normalizeXDayOf(days.dayOf) };
    }
    if ("intDay" in days) {
        return { intDay: uniqueSorted(days.intDay) };
    }
    if ("bitDay" in days) {
        const ints = bitsToInts(days.bitDay, BIT_DAY_MAX);
        if (!ints) {
            return { bitDay: trimmedBits(days.bitDay) };
        }
        return { intDay: ints };
    }
    return days;
}

function normalizeWeeks(
    weeks: Period_weeks | undefined,
): Period_weeks | undefined {
    if (!weeks) {
        return undefined;
    }
    if (isAllWeeks(weeks)) {
        return ALL_WEEKS;
    }
    if ("intWeek" in weeks) {
        return { intWeek: uniqueSorted(weeks.intWeek) };
    }
    if ("bitWeek" in weeks) {
        const ints = bitsToInts(weeks.bitWeek, BIT_WEEK_MAX);
        if (!ints) {
            return { bitWeek: trimmedBits(weeks.bitWeek) };
        }
        return { intWeek: ints };
    }
    return weeks;
}

function normalizeMonths(
    months: Period_months | undefined,
): Period_months | undefined {
    if (!months) {
        return undefined;
    }
    if (isAllMonths(months)) {
        return ALL_MONTHS;
    }
    if ("intMonth" in months) {
        return { intMonth: uniqueSorted(months.intMonth) };
    }
    if ("bitMonth" in months) {
        const ints = bitsToInts(months.bitMonth, BIT_MONTH_MAX);
        if (!ints) {
            return { bitMonth: trimmedBits(months.bitMonth) };
        }
        return { intMonth: ints };
    }
    return months;
}

function collapseCompleteDays(
    days: Period_days | undefined,
    weeks: Period_weeks | undefined,
    months: Period_months | undefined,
    years: INTEGER[] | undefined,
): Period_days | undefined {
    if (!days || !isIntOrBitDay(days) || !("intDay" in days)) {
        return days;
    }
    const ints = days.intDay;
    if (daysAreOfWeek(weeks, months, years)) {
        return sameSet(ints, DAYS_OF_WEEK) ? undefined : days;
    }
    if (daysAreOfMonth(weeks, months)) {
        return sameSet(ints, DAYS_OF_MONTH) ? undefined : days;
    }
    return sameSet(ints, DAYS_OF_YEAR) ? undefined : days;
}

function collapseCompleteWeeks(
    weeks: Period_weeks | undefined,
    months: Period_months | undefined,
): Period_weeks | undefined {
    if (!weeks || !isIntOrBitWeek(weeks) || !("intWeek" in weeks)) {
        return weeks;
    }
    if (months) {
        return sameSet(weeks.intWeek, WEEKS_OF_MONTH) ? ALL_WEEKS : weeks;
    }
    return sameSet(weeks.intWeek, WEEKS_OF_YEAR) ? ALL_WEEKS : weeks;
}

function collapseCompleteMonths(
    months: Period_months | undefined,
): Period_months | undefined {
    if (!months || !isIntOrBitMonth(months) || !("intMonth" in months)) {
        return months;
    }
    return sameSet(months.intMonth, MONTHS_OF_YEAR) ? ALL_MONTHS : months;
}

/**
 * Drop `allWeeks` only when that would not change how `days` is read.
 * `allWeeks` exists so `days` can stay days-of-week when `months` or `years`
 * would otherwise be the next element (X.520 10.2).
 */
function canOmitAllWeeks(
    days: Period_days | undefined,
    months: Period_months | undefined,
    years: INTEGER[] | undefined,
): boolean {
    if (days && isIntOrBitDay(days) && (months || (years && years.length))) {
        return false;
    }
    return true;
}

/**
 * Drop `allMonths` only when that would not change how `days` or `weeks`
 * is read. `allMonths` lets `weeks` mean weeks-of-month, or `days` mean
 * days-of-month, for every month (X.520 10.2, example e).
 */
function canOmitAllMonths(
    days: Period_days | undefined,
    weeks: Period_weeks | undefined,
): boolean {
    if (weeks && isIntOrBitWeek(weeks)) {
        return false;
    }
    if (days && isIntOrBitDay(days) && !weeks) {
        return false;
    }
    return true;
}

function dayTimeStartScore(time: DayTime | undefined): number {
    const start = DayTimeBand._default_value_for_startDayTime;
    return (
        (Number(time?.hour ?? start.hour) * 3600)
        + (Number(time?.minute ?? start.minute ?? 0) * 60)
        + Number(time?.second ?? start.second ?? 0)
    );
}

function dayTimeEndScore(time: DayTime | undefined): number {
    const end = DayTimeBand._default_value_for_endDayTime;
    if (!time) {
        return (
            (Number(end.hour) * 3600)
            + (Number(end.minute ?? 59) * 60)
            + Number(end.second ?? 59)
        );
    }
    return (
        (Number(time.hour) * 3600)
        + (Number(time.minute ?? DayTime._default_value_for_minute) * 60)
        + Number(time.second ?? DayTime._default_value_for_second)
    );
}

function isDefaultStart(time: DayTime | undefined): boolean {
    return dayTimeStartScore(time) === dayTimeStartScore(undefined);
}

function isDefaultEnd(time: DayTime | undefined): boolean {
    const end = DayTimeBand._default_value_for_endDayTime;
    const defaultEndScore = (
        (Number(end.hour) * 3600)
        + (Number(end.minute ?? 59) * 60)
        + Number(end.second ?? 59)
    );
    return dayTimeEndScore(time) === defaultEndScore;
}

function normalizeDayTime(time: DayTime): DayTime {
    const minute = (time.minute === undefined)
        || (Number(time.minute) === Number(DayTime._default_value_for_minute))
        ? undefined
        : time.minute;
    const second = (time.second === undefined)
        || (Number(time.second) === Number(DayTime._default_value_for_second))
        ? undefined
        : time.second;
    return new DayTime(
        time.hour,
        minute,
        second,
        time._unrecognizedExtensionsList,
    );
}

function normalizeDayTimeBand(band: DayTimeBand): DayTimeBand {
    const start = (band.startDayTime === undefined) || isDefaultStart(band.startDayTime)
        ? undefined
        : normalizeDayTime(band.startDayTime);
    const end = (band.endDayTime === undefined) || isDefaultEnd(band.endDayTime)
        ? undefined
        : normalizeDayTime(band.endDayTime);
    return new DayTimeBand(
        start,
        end,
        band._unrecognizedExtensionsList,
    );
}

function isFullDayBand(band: DayTimeBand): boolean {
    return isDefaultStart(band.startDayTime) && isDefaultEnd(band.endDayTime);
}

function normalizeTimesOfDay(
    bands: DayTimeBand[] | undefined,
): DayTimeBand[] | undefined {
    if (!bands || (bands.length === 0)) {
        return undefined;
    }
    const normalized = bands
        .map(normalizeDayTimeBand)
        .sort((a, b) => {
            const startDiff = dayTimeStartScore(a.startDayTime)
                - dayTimeStartScore(b.startDayTime);
            if (startDiff !== 0) {
                return startDiff;
            }
            return dayTimeEndScore(a.endDayTime) - dayTimeEndScore(b.endDayTime);
        });
    const unique: DayTimeBand[] = [];
    const seen = new Set<string>();
    for (const band of normalized) {
        const key = `${dayTimeStartScore(band.startDayTime)}:${dayTimeEndScore(band.endDayTime)}`;
        if (seen.has(key)) {
            continue;
        }
        seen.add(key);
        unique.push(band);
    }
    if ((unique.length === 1) && isFullDayBand(unique[0])) {
        return undefined;
    }
    return unique;
}

/**
 * @summary Canonicalize a `Period` for equality comparison
 * @description
 *
 * Applies the equivalences in
 * [ITU-T X.520 (10/2019)](https://www.itu.int/rec/T-REC-X.520/en)
 * clause 10.2 so two `Period` values that denote the same times compare equal.
 *
 * In particular:
 *
 * - `intDay` / `bitDay`, `intWeek` / `bitWeek`, `intMonth` / `bitMonth`,
 *   and `intNamedDays` / `bitNamedDays` (when a single named day is set)
 *   are reduced to the INTEGER / ENUMERATED form. Named-bit trailing zeros
 *   are dropped.
 * - `SET OF INTEGER` members are sorted and de-duplicated.
 * - A complete set of days, weeks, or months is treated as "all of that
 *   unit", which X.520 says is the meaning of an omitted component (or of
 *   `allWeeks` / `allMonths`).
 * - `allWeeks` and `allMonths` are omitted only when dropping them would
 *   not change how a preceding `days` or `weeks` component is interpreted.
 *   `allWeeks` must be kept when `days` is days-of-week and `months` or
 *   `years` follows; `allMonths` must be kept when `days` is days-of-month
 *   (example e) or `weeks` is weeks-of-month.
 * - If `dayOf` is used, `weeks` is dropped (X.520: not meaningful, ignored).
 * - `DayTime` / `DayTimeBand` DEFAULT values are omitted; a single band
 *   covering the whole day is treated as omitted `timesOfDay`.
 * - `timesOfDay` bands are sorted (it is a SET).
 *
 * This does **not** rewrite week 5 / 53 or `fifth` NamedDay; those are
 * "last of that month/year" at evaluation time, not alternate encodings.
 *
 * @param period The `Period` to canonicalize.
 * @returns A new `Period` with the same temporal meaning.
 * @function
 */
export
function normalizePeriod(period: Period): Period {
    let days = normalizeDays(period.days);
    let weeks = normalizeWeeks(period.weeks);
    let months = normalizeMonths(period.months);
    const years = period.years?.length
        ? uniqueSorted(period.years)
        : period.years;

    // X.520 10.2: if `dayOf` is specified, `weeks` is ignored.
    if (days && isDayOf(days)) {
        weeks = undefined;
    }

    days = collapseCompleteDays(days, weeks, months, years);
    weeks = collapseCompleteWeeks(weeks, months);
    months = collapseCompleteMonths(months);

    if (months && isAllMonths(months) && canOmitAllMonths(days, weeks)) {
        months = undefined;
    }
    if (weeks && isAllWeeks(weeks) && canOmitAllWeeks(days, months, years)) {
        weeks = undefined;
    }

    return new Period(
        normalizeTimesOfDay(period.timesOfDay),
        days,
        weeks,
        months,
        years,
        period._unrecognizedExtensionsList,
    );
}

export default normalizePeriod;
