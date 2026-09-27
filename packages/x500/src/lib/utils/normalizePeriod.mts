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

/**
 * @summary Sort and de-duplicate a `SET OF INTEGER`.
 * @description
 *
 * `Period` uses SET OF INTEGER for `intDay`, `intWeek`, `intMonth`, and
 * `years`. SET membership is unordered and unique.
 *
 * @param {INTEGER[]} values The SET members, in any order.
 * @returns {number[]} Unique values in ascending numeric order.
 * @function
 * @author Cursor Grok 4.6
 */
function uniqueSorted(values: INTEGER[]): number[] {
    return Array.from(new Set(values.map((value) => Number(value))))
        .sort((a, b) => a - b);
}

/**
 * @summary Whether two integer sequences are the same set, in order.
 * @description
 *
 * Callers pass already-sorted unique values. Used to detect a complete
 * unit (all days of week, all months, etc.) per X.520 clause 10.2.
 *
 * @param {INTEGER[]} actual The candidate set.
 * @param {number[]} expected The complete set for that unit.
 * @returns {boolean} `true` iff both sequences have the same numbers.
 * @function
 * @author Cursor Grok 4.6
 */
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

/**
 * @summary Map named bits to 1-based INTEGER values.
 * @description
 *
 * X.520 clause 10.2 NOTE 3: INTEGER and BIT STRING forms are
 * interchangeable. Bit 0 is Sunday / week1 / January; INTEGER 1 is the
 * same named value. Returns `undefined` if a TRUE bit lies outside the
 * named range, so the original BIT STRING can be kept.
 *
 * Bits are visited from 0 upward, so the result is already unique and
 * ascending.
 *
 * @param {BIT_STRING} bits Named bits (`TRUE_BIT` where set).
 * @param {number} maxBitIndex Highest named bit (inclusive).
 * @returns {number[] | undefined} Sorted 1-based ints, or `undefined`.
 * @function
 * @author Cursor Grok 4.6
 */
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
    return ints;
}

/**
 * @summary Drop trailing FALSE bits from a named BIT STRING.
 * @description
 *
 * X.690 11.2.2: trailing 0 bits of a named bit string are not
 * significant. Used when the BIT STRING cannot be converted to INTEGER.
 *
 * @param {BIT_STRING} bits The named bits.
 * @returns {BIT_STRING} Slice through the last `TRUE_BIT`.
 * @function
 * @author Cursor Grok 4.6
 */
function trimmedBits(bits: BIT_STRING): BIT_STRING {
    for (let i = bits.length - 1; i >= 0; i--) {
        if (bits[i] === TRUE_BIT) {
            return bits.slice(0, i + 1);
        }
    }
    return new Uint8ClampedArray(0);
}

/**
 * @summary Whether `days` is interpreted as days of the week.
 * @description
 *
 * X.520 clause 10.2: `days` is days-of-week if it precedes `weeks`, or
 * if it is the last specified coarser unit (example b: every Monday).
 * It is days-of-month if it precedes `months`, and days-of-year if it
 * precedes `years`.
 *
 * @param {Period_weeks | undefined} weeks The following `weeks` component.
 * @param {Period_months | undefined} months The following `months`
 *  component.
 * @param {INTEGER[] | undefined} years The following `years` component.
 * @returns {boolean} `true` iff `days` means Sunday=1 … Saturday=7.
 * @function
 * @author Cursor Grok 4.6
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

/**
 * @summary Whether `days` is interpreted as days of the month.
 * @description
 *
 * X.520 clause 10.2: if `days` precedes `months` (no `weeks`), INTEGER
 * values are 1..31, the day of the month.
 *
 * @param {Period_weeks | undefined} weeks The following `weeks` component.
 * @param {Period_months | undefined} months The following `months`
 *  component.
 * @returns {boolean} `true` iff `days` means day-of-month.
 * @function
 * @author Cursor Grok 4.6
 */
function daysAreOfMonth(
    weeks: Period_weeks | undefined,
    months: Period_months | undefined,
): boolean {
    return (!weeks && Boolean(months));
}

/**
 * @summary Canonical `NamedDay`: ENUMERATED if one day, else BIT STRING.
 * @description
 *
 * `intNamedDays` Sunday=1 vs `bitNamedDays` sunday=0. A single named
 * day becomes `intNamedDays`. Multiple bits stay a BIT STRING with
 * trailing zeros removed.
 *
 * @param {NamedDay} day The CHOICE value.
 * @returns {NamedDay} Equivalent CHOICE in canonical form.
 * @function
 * @author Cursor Grok 4.6
 */
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

/**
 * @summary Canonicalize the `NamedDay` inside an `XDayOf` CHOICE.
 * @description
 *
 * X.520 clause 10.2: `first`…`fourth` are the Nth occurrence of that
 * named day in the month; `fifth` is always the last such named day of
 * the month. The occurrence alternative is preserved; only the
 * `NamedDay` encoding is normalized.
 *
 * @param {XDayOf} dayOf The occurrence CHOICE.
 * @returns {XDayOf} Same alternative, canonical `NamedDay`.
 * @function
 * @author Cursor Grok 4.6
 */
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

/**
 * @summary Canonicalize `Period.days`.
 * @description
 *
 * Converts `bitDay` to sorted `intDay` when every TRUE bit is a named
 * day. `dayOf` keeps its occurrence tag. Unrecognized CHOICE
 * alternatives are left unchanged.
 *
 * @param {Period_days | undefined} days The `days` component, if present.
 * @returns {Period_days | undefined} Canonical `days`, or `undefined`.
 * @function
 * @author Cursor Grok 4.6
 */
function normalizeDays(
    days: Period_days | undefined,
): Period_days | undefined {
    if (!days) {
        return undefined;
    }
    if ("dayOf" in days) {
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

/**
 * @summary Canonicalize `Period.weeks`.
 * @description
 *
 * Converts `bitWeek` to sorted `intWeek` when every TRUE bit is a named
 * week. `allWeeks` is left as `allWeeks`.
 *
 * @param {Period_weeks | undefined} weeks The `weeks` component, if present.
 * @returns {Period_weeks | undefined} Canonical `weeks`, or `undefined`.
 * @function
 * @author Cursor Grok 4.6
 */
function normalizeWeeks(
    weeks: Period_weeks | undefined,
): Period_weeks | undefined {
    if (!weeks) {
        return undefined;
    }
    if ("allWeeks" in weeks) {
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

/**
 * @summary Canonicalize `Period.months`.
 * @description
 *
 * Converts `bitMonth` to sorted `intMonth` when every TRUE bit is a
 * named month. `allMonths` is left as `allMonths`.
 *
 * @param {Period_months | undefined} months The `months` component, if
 *  present.
 * @returns {Period_months | undefined} Canonical `months`, or `undefined`.
 * @function
 * @author Cursor Grok 4.6
 */
function normalizeMonths(
    months: Period_months | undefined,
): Period_months | undefined {
    if (!months) {
        return undefined;
    }
    if ("allMonths" in months) {
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

/**
 * @summary Omit `days` when it already names every day of its unit.
 * @description
 *
 * X.520 clause 10.2: if `days` is not specified, all days are valid
 * within the next element. A complete set (1..7 of the week, 1..31 of
 * the month, or 1..366 of the year) is that same meaning.
 *
 * @param {Period_days | undefined} days Canonical `days`.
 * @param {Period_weeks | undefined} weeks Following `weeks`, if any.
 * @param {Period_months | undefined} months Following `months`, if any.
 * @param {INTEGER[] | undefined} years Following `years`, if any.
 * @returns {Period_days | undefined} `undefined` if the set is complete.
 * @function
 * @author Cursor Grok 4.6
 */
function collapseCompleteDays(
    days: Period_days | undefined,
    weeks: Period_weeks | undefined,
    months: Period_months | undefined,
    years: INTEGER[] | undefined,
): Period_days | undefined {
    if (!days || !("intDay" in days)) {
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

/**
 * @summary Replace a complete week set with `allWeeks`.
 * @description
 *
 * X.520 clause 10.2: if `weeks` precedes `months`, INTEGER 1..5 are
 * weeks of the month; otherwise INTEGER 1..53 are weeks of the year.
 * A complete set is `allWeeks` (all weeks within the next element).
 * `{1,2,3,4,5}` without `months` is **not** `allWeeks`.
 *
 * @param {Period_weeks | undefined} weeks Canonical `weeks`.
 * @param {Period_months | undefined} months Following `months`, if any.
 * @returns {Period_weeks | undefined} `allWeeks` if the set is complete.
 * @function
 * @author Cursor Grok 4.6
 */
function collapseCompleteWeeks(
    weeks: Period_weeks | undefined,
    months: Period_months | undefined,
): Period_weeks | undefined {
    if (!weeks || !("intWeek" in weeks)) {
        return weeks;
    }
    if (months) {
        return sameSet(weeks.intWeek, WEEKS_OF_MONTH) ? ALL_WEEKS : weeks;
    }
    return sameSet(weeks.intWeek, WEEKS_OF_YEAR) ? ALL_WEEKS : weeks;
}

/**
 * @summary Replace months 1..12 with `allMonths`.
 * @description
 *
 * X.520 clause 10.2: INTEGER 1 = January … 12 = December. If `months`
 * is not specified, all months of the year are valid, which is also
 * `allMonths`.
 *
 * @param {Period_months | undefined} months Canonical `months`.
 * @returns {Period_months | undefined} `allMonths` if 1..12 are all present.
 * @function
 * @author Cursor Grok 4.6
 */
function collapseCompleteMonths(
    months: Period_months | undefined,
): Period_months | undefined {
    if (!months || !("intMonth" in months)) {
        return months;
    }
    return sameSet(months.intMonth, MONTHS_OF_YEAR) ? ALL_MONTHS : months;
}

/**
 * @summary Whether `allWeeks` can be dropped without changing `days`.
 * @description
 *
 * X.520 clause 10.2: `allWeeks` exists so `days` can remain
 * days-of-week when `months` or `years` would otherwise be the next
 * element. Dropping it in that case would make `intDay:{2}` mean the
 * 2nd of the month or day 2 of the year instead of Monday.
 *
 * @param {Period_days | undefined} days Canonical `days`.
 * @param {Period_months | undefined} months Following `months`, if any.
 * @param {INTEGER[] | undefined} years Following `years`, if any.
 * @returns {boolean} `true` if omitting `allWeeks` is safe.
 * @function
 * @author Cursor Grok 4.6
 */
function canOmitAllWeeks(
    days: Period_days | undefined,
    months: Period_months | undefined,
    years: INTEGER[] | undefined,
): boolean {
    if (
        days
        && (("intDay" in days) || ("bitDay" in days))
        && (months || (years && years.length))
    ) {
        return false;
    }
    return true;
}

/**
 * @summary Whether `allMonths` can be dropped without changing `days`/`weeks`.
 * @description
 *
 * X.520 clause 10.2 example e: `{ days intDay:{1}, months allMonths }`
 * is the first day of every month. Dropping `allMonths` would make
 * `intDay:{1}` mean every Sunday. Likewise, `intWeek` with `allMonths`
 * is weeks-of-month, not weeks-of-year.
 *
 * @param {Period_days | undefined} days Canonical `days`.
 * @param {Period_weeks | undefined} weeks Canonical `weeks`.
 * @returns {boolean} `true` if omitting `allMonths` is safe.
 * @function
 * @author Cursor Grok 4.6
 */
function canOmitAllMonths(
    days: Period_days | undefined,
    weeks: Period_weeks | undefined,
): boolean {
    if (weeks && (("intWeek" in weeks) || ("bitWeek" in weeks))) {
        return false;
    }
    if (days && (("intDay" in days) || ("bitDay" in days)) && !weeks) {
        return false;
    }
    return true;
}

/**
 * @summary Omit `DayTime` minute/second when they equal DEFAULT 0.
 * @param {DayTime} time A start or end time of day.
 * @returns {DayTime} Same hour; defaulted fields left `undefined`.
 * @function
 * @author Cursor Grok 4.6
 */
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

/**
 * @summary Omit `DayTimeBand` start/end when they equal their DEFAULTs.
 * @param {DayTimeBand} band One member of `timesOfDay`.
 * @returns {DayTimeBand} Canonical band.
 * @function
 * @author Cursor Grok 4.6
 */
function normalizeDayTimeBand(band: DayTimeBand): DayTimeBand {
    const start = band.isStartOfDay()
        ? undefined
        : normalizeDayTime(band.startDayTime!);
    const end = band.isEndOfDay()
        ? undefined
        : normalizeDayTime(band.endDayTime!);
    return new DayTimeBand(
        start,
        end,
        band._unrecognizedExtensionsList,
    );
}

/**
 * @summary Canonicalize `timesOfDay`: flatten, sort, drop a full-day band.
 * @description
 *
 * `timesOfDay` is `SET SIZE (1..MAX) OF DayTimeBand`. Overlapping and
 * adjacent bands are merged so the SET is a list of disjoint coverage.
 * That leaves at most one midnight-starting band and at most one
 * 23:59:59-ending band (or a single whole-day band).
 *
 * If any remaining band is the whole day (00:00:00–23:59:59), the
 * component is omitted: X.520 clause 10.2 says that missing
 * `timesOfDay` already means all times of the day.
 *
 * Otherwise DEFAULT start/end are omitted and members stay sorted by
 * start then end.
 *
 * @param {DayTimeBand[] | undefined} bands The SET, if present.
 * @returns {DayTimeBand[] | undefined} Canonical SET, or `undefined`.
 * @function
 * @author Cursor Grok 4.6
 */
function normalizeTimesOfDay(
    bands: DayTimeBand[] | undefined,
): DayTimeBand[] | undefined {
    if (!bands || (bands.length === 0)) {
        return undefined;
    }
    const flattened = DayTimeBand.flatten(bands);
    const count = flattened.length;
    const normalized: DayTimeBand[] = new Array(count);
    for (let i = 0; i < count; i++) {
        const band = flattened[i];
        if (band.isStartOfDay() && band.isEndOfDay()) {
            return undefined;
        }
        normalized[i] = normalizeDayTimeBand(band);
    }
    return normalized;
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
 * - `DayTime` / `DayTimeBand` DEFAULT values are omitted; a band covering
 *   the whole day is treated as omitted `timesOfDay`.
 * - `timesOfDay` bands are sorted (it is a SET). Overlapping and
 *   adjacent bands are flattened into disjoint coverage.
 *
 * This does **not** rewrite week 5 / 53 or `fifth` NamedDay; those are
 * "last of that month/year" at evaluation time, not alternate encodings.
 *
 * @param {Period} period The `Period` to canonicalize.
 * @returns {Period} A new `Period` with the same temporal meaning.
 * @function
 * @author Cursor Grok 4.6
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
    if (days && ("dayOf" in days)) {
        weeks = undefined;
    }

    // Collapse complete sets while the next coarser unit is still
    // present. `intDay` 1..31 is "all days of the month" only if
    // `months` is present; `intWeek` 1..5 is `allWeeks` only if
    // `months` is present. `collapseCompleteMonths` rewrites 1..12 to
    // `allMonths` and does **not** drop `months`. Do not omit
    // `allMonths` / `allWeeks` before these three calls, and do not
    // reorder them to drop a coarser unit first.
    days = collapseCompleteDays(days, weeks, months, years);
    weeks = collapseCompleteWeeks(weeks, months);
    months = collapseCompleteMonths(months);

    // Omit `allMonths` before `allWeeks`. Dropping a redundant
    // `allMonths` can make a remaining `allWeeks` omittable (days stay
    // days-of-week with no following `months`). Reversing these two
    // would leave a useless `allWeeks` when both were `all*`.
    if (months && ("allMonths" in months) && canOmitAllMonths(days, weeks)) {
        months = undefined;
    }
    if (weeks && ("allWeeks" in weeks) && canOmitAllWeeks(days, months, years)) {
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
