import type { ASN1Element } from "@wildboar/asn1";
import {
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_HIGH_WORK_BUDGET,
    type ContextMatcher,
} from "../../types/matching.mjs";
import { id_avc_temporal } from "../../modules/SelectedAttributeTypes/id-avc-temporal.va.mjs";
import { matchAnyContextValue } from "./matchAnyContextValue.mjs";
import { readDecoded } from "../readValue.mjs";
import {
    TimeSpecification,
    _decode_TimeSpecification,
} from "../../modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";
import {
    type TimeAssertion,
    _decode_TimeAssertion,
} from "../../modules/SelectedAttributeTypes/TimeAssertion.ta.mjs";
import type {
    Period,
} from "../../modules/SelectedAttributeTypes/Period.ta.mjs";
import { addHours } from "date-fns";

const MAX_DATE: Date = new Date(8640000000000000);
const MIN_DATE: Date = new Date(-8640000000000000);

function xor (a: boolean, b: boolean): boolean {
    return ((a && !b) || (!a && b));
}

/**
 * Return a Date whose *local* Y/M/D/h/m/s equal the civil time of `instant`
 * in a fixed offset from GMT. Independent of the host timezone.
 */
function civilDateInFixedOffset (instant: Date, offsetHours: number): Date {
    const shifted = new Date(instant.getTime() + (offsetHours * 3_600_000));
    return new Date(
        shifted.getUTCFullYear(),
        shifted.getUTCMonth(),
        shifted.getUTCDate(),
        shifted.getUTCHours(),
        shifted.getUTCMinutes(),
        shifted.getUTCSeconds(),
        shifted.getUTCMilliseconds(),
    );
}

function inSpecTimeZone (instant: Date, timeZone: number | undefined): Date {
    if (timeZone === undefined) {
        return new Date(instant);
    }
    return civilDateInFixedOffset(instant, timeZone);
}

/**
 * Cap on occurrence yields for `between` + `entirely`. Open-ended
 * assertions use `MAX_DATE`; a daily band could otherwise iterate
 * without bound.
 */
const MAX_ENTIRELY_COVER_STEPS = 1000;

/**
 * {@link MAX_ENTIRELY_COVER_STEPS} when `MATCH_FLAG_HIGH_WORK_BUDGET` is set.
 */
const MAX_ENTIRELY_COVER_STEPS_HIGH_WORK_BUDGET = 100_000;

/**
 * @summary Whether `[start, end]` ⊆ the union of `Period` occurrences.
 * @description
 *
 * X.520 clause 10.2 `between` with `entirely` TRUE: the asserted band
 * must lie inside the **stored times**. For `periodic`, that is the
 * union of all `Period` occurrences (the SET), not one occurrence of
 * one `Period`.
 *
 * Collect every occurrence that overlaps `[start, end]`, merge
 * overlapping and 1-second-adjacent spans at `DayTime` second
 * precision, and test that the merged union covers the assertion.
 * Work is proportional to the number of occurrences, not the number
 * of seconds in the band. A hole, or more than
 * {@link MAX_ENTIRELY_COVER_STEPS} occurrences, fails. Open-ended
 * assertions use `MAX_DATE`. `MATCH_FLAG_HIGH_WORK_BUDGET` raises the
 * cap to {@link MAX_ENTIRELY_COVER_STEPS_HIGH_WORK_BUDGET}.
 *
 * @param {Period[]} periods Stored `TimeSpecification.time.periodic`.
 * @param {Date} start Inclusive start of the asserted band (spec zone).
 * @param {Date} end Inclusive end of the asserted band (spec zone).
 * @returns {boolean} `true` iff every instant in `[start, end]` is
 *  covered.
 * @function
 * @author Cursor Grok 4.6
 */
function periodsEntirelyCoverInterval (
    periods: Period[],
    start: Date,
    end: Date,
    flags: number = 0,
): boolean {
    if (start.valueOf() > end.valueOf()) {
        return false;
    }
    const maxSteps: number = (flags & MATCH_FLAG_HIGH_WORK_BUDGET)
        ? MAX_ENTIRELY_COVER_STEPS_HIGH_WORK_BUDGET
        : MAX_ENTIRELY_COVER_STEPS;
    const startSec: number = Math.floor(start.valueOf() / 1000);
    const endSec: number = Math.floor(end.valueOf() / 1000);
    const intervals: [ number, number ][] = [];
    let steps: number = 0;
    for (const period of periods) {
        for (const [ lower, upper ] of period.occurrences(start, end)) {
            steps += 1;
            if (steps > maxSteps) {
                if (flags & MATCH_FLAG_DEBUG) {
                    console.error(
                        `@wildboar/x500: debug: temporalContext: exceeded ${maxSteps} cover steps`,
                    );
                }
                return false;
            }
            const lo: number = Math.floor(lower.valueOf() / 1000);
            const hi: number = Math.floor(upper.valueOf() / 1000);
            if (hi < startSec) {
                continue;
            }
            if (lo > endSec) {
                break;
            }
            if ((lo <= startSec) && (hi >= endSec)) {
                return true;
            }
            intervals.push([ lo, hi ]);
        }
    }
    if (intervals.length === 0) {
        return false;
    }
    intervals.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));
    let nextNeeded: number = startSec;
    for (const [ lo, hi ] of intervals) {
        if (lo > nextNeeded) {
            return false;
        }
        if ((hi + 1) > nextNeeded) {
            nextNeeded = hi + 1;
        }
        if (nextNeeded > endSec) {
            return true;
        }
    }
    return nextNeeded > endSec;
}
/** True if `time` falls in one occurrence of `period` (clause 10.2). */
function timeFallsWithinPeriod (time: Date, period: Period, timezone: number | undefined): boolean {
    const adjustedTime = inSpecTimeZone(time, timezone);
    const boundaries: [ Date, Date ] | null = period.occurrences(adjustedTime).next().value ?? null;
    if (!boundaries) {
        return false;
    }
    const [ lower, upper ] = boundaries;
    return (
        (adjustedTime.valueOf() >= lower.valueOf())
        && (adjustedTime.valueOf() <= upper.valueOf())
    );
}

/** `now`/`at` evaluation: the instant must lie in the specification. */
function timeFallsWithinTimeSpecification (
    time: Date,
    spec: TimeSpecification,
    constantTime: boolean = false,
): boolean {
    const result = ((): boolean => {
        const timezone: number | undefined = (spec.timeZone !== undefined)
            ? Number(spec.timeZone)
            : undefined;
        if ("absolute" in spec.time) {
            const start = spec.time.absolute.startTime
                ? addHours(spec.time.absolute.startTime, -(timezone ?? 0))
                : MIN_DATE;
            const end = spec.time.absolute.endTime
                ? addHours(spec.time.absolute.endTime, -(timezone ?? 0))
                : MAX_DATE;
            return (
                (time.valueOf() >= start.valueOf())
                && (time.valueOf() <= end.valueOf())
            );
        } else if ("periodic" in spec.time) {
            let matched = false;
            for (const period of spec.time.periodic) {
                if (timeFallsWithinPeriod(time, period, timezone)) {
                    if (!constantTime) {
                        return true;
                    }
                    matched = true;
                }
            }
            return matched;
        } else {
            throw new Error(); // There is no other option.
        }
    })();
    return xor(result, spec.notThisTime ?? TimeSpecification._default_value_for_notThisTime);
}

/**
 * `between` evaluation: overlap, or containment when `entirely` is
 * TRUE. Periodic `entirely` is a subset of the union of all `Period`
 * occurrences, not of a single occurrence. `notThisTime` inverts the
 * result (clause 10.2).
 */
function timeSpecificationContains (
    spec: TimeSpecification,
    start: Date,
    end: Date,
    entirely: boolean = false,
    flags: number = 0,
): boolean {
    const constantTime = Boolean(flags & MATCH_FLAG_CONSTANT_TIME);
    const result = ((): boolean => {
        const timezone: number | undefined = (spec.timeZone !== undefined)
            ? Number(spec.timeZone)
            : undefined;
        if ("absolute" in spec.time) {
            const startSpec = spec.time.absolute.startTime
                ? addHours(spec.time.absolute.startTime, -(timezone ?? 0))
                : MIN_DATE;
            const endSpec = spec.time.absolute.endTime
                ? addHours(spec.time.absolute.endTime, -(timezone ?? 0))
                : MAX_DATE;
            if (entirely) {
                return (
                    (start.valueOf() >= startSpec.valueOf())
                    && (end.valueOf() <= endSpec.valueOf())
                );
            } else {
                return (!(
                    (start.valueOf() > endSpec.valueOf())
                    || (end.valueOf() < startSpec.valueOf())
                ));
            }
        } else if ("periodic" in spec.time) {
            const adjustedStart = inSpecTimeZone(start, timezone);
            const adjustedEnd = inSpecTimeZone(end, timezone);
            if (entirely) {
                return periodsEntirelyCoverInterval(spec.time.periodic, adjustedStart, adjustedEnd, flags);
            }
            let matched = false;
            for (const period of spec.time.periodic) {
                const boundaries: [ Date, Date ] | null = period.occurrences(adjustedStart).next().value ?? null;
                if (!boundaries) {
                    continue;
                }
                const [ lower, upper ] = boundaries;
                const startWithinBounds: boolean = (
                    (adjustedStart.valueOf() >= lower.valueOf())
                    && (adjustedStart.valueOf() <= upper.valueOf())
                );
                const endWithinBounds: boolean = (
                    (adjustedEnd.valueOf() >= lower.valueOf())
                    && (adjustedEnd.valueOf() <= upper.valueOf())
                );
                if (startWithinBounds || endWithinBounds) {
                    if (!constantTime) {
                        return true;
                    }
                    matched = true;
                }
            }
            return matched;
        } else {
            throw new Error(); // There is no other option.
        }
    })();
    return xor(result, spec.notThisTime ?? TimeSpecification._default_value_for_notThisTime);
}

/**
 * `temporalContext` on a decoded `TimeAssertion` and
 * `TimeSpecification`.
 *
 * @param a Presented time assertion.
 * @param v Stored time specification.
 * @param flags `MATCH_FLAG_CONSTANT_TIME`, `MATCH_FLAG_DEBUG`, and
 *  `MATCH_FLAG_HIGH_WORK_BUDGET`.
 * @returns `true` when the assertion overlaps the specification.
 */
export
function evaluateTemporalContextTyped (
    a: TimeAssertion,
    v: TimeSpecification,
    flags: number = 0,
): boolean {
    const constantTime = Boolean(flags & MATCH_FLAG_CONSTANT_TIME);
    if ("now" in a) {
        const now = new Date();
        return timeFallsWithinTimeSpecification(now, v, constantTime);
    } else if ("at" in a) {
        return timeFallsWithinTimeSpecification(a.at, v, constantTime);
    } else if ("between" in a) {
        return timeSpecificationContains(
            v,
            a.between.startTime,
            a.between.endTime ?? MAX_DATE,
            a.between.entirely,
            flags,
        );
    } else {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: temporalContext: unrecognized TimeAssertion alternative",
            );
        }
        return false;
    }
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 10.2 `temporalContext`.
 *
 * Associates an attribute value with a `TimeSpecification`
 * (absolute span or periodic set; optional timezone and
 * `notThisTime` negation). A `TimeAssertion` matches if the times
 * overlap: `now`/`at` must fall within the stored specification;
 * `between` overlaps unless `entirely` is TRUE, in which case the
 * whole asserted band must lie inside the stored times (for
 * `periodic`, the union of all `Period` occurrences). Missing
 * timezone is interpreted in the DSA's zone. Periodic SET OF is a
 * logical OR.
 *
 * `assertion` may be an element, a `TimeAssertion`, or a `Date`
 * (the `at` alternative). `value` may be an element or a
 * `TimeSpecification`.
 */
export
function evaluateTemporalContext (
    assertion: ASN1Element | TimeAssertion | Date,
    value: ASN1Element | TimeSpecification,
    flags: number = 0,
): boolean {
    const a: TimeAssertion = assertion instanceof Date
        ? { at: assertion }
        : readDecoded(assertion, _decode_TimeAssertion);
    return evaluateTemporalContextTyped(a, readDecoded(value, _decode_TimeSpecification), flags);
}

/**
 * `temporalContext` as a `ContextMatcher`. TRUE iff any stored
 * `TimeSpecification` overlaps the presented `TimeAssertion`.
 * An invalid stored value is skipped. An empty value list is FALSE.
 */
export
const temporalContext: ContextMatcher = (
    assertion,
    values,
    _getEqualityMatcher,
    flags = 0,
) => {
    const presented = _decode_TimeAssertion(assertion);
    return matchAnyContextValue(
        values,
        (value) => evaluateTemporalContext(presented, value, flags),
        id_avc_temporal,
        flags,
    );
};

export default temporalContext;
