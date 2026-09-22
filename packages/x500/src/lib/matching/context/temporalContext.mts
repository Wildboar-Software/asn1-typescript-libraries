import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    type TimeSpecification,
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
 * Cap on greedy-cover steps for `between` + `entirely`. Open-ended
 * assertions use `MAX_DATE`; each step is one occurrence, so a daily
 * band could otherwise iterate without bound.
 */
const MAX_ENTIRELY_COVER_STEPS = 1000;

/**
 * @summary Instant one second after `instant`.
 * @description
 *
 * X.520 clause 10.2 `DayTime` is second-precision. The cover walk
 * advances by this amount after an occurrence end so
 * we can select a later `DayTimeBand` (band matching ignores milliseconds).
 *
 * @param {Date} instant Inclusive end of the current covering occurrence.
 * @returns {Date} `instant` plus one second.
 * @function
 * @author Cursor Grok 4.6
 */
function secondAfter (instant: Date): Date {
    return new Date(instant.valueOf() + 1000);
}

/**
 * @summary Latest inclusive occurrence end that covers `t`.
 * @description
 *
 * Among the stored `periodic` SET, take the farthest inclusive end of
 * any `Period` occurrence that contains `t`. `null` means `t` is a
 * hole in the union (X.520 clause 10.2).
 *
 * Occurrence bounds already include the `DayTimeBand` that contains
 * `t`. Later bands of the same `Period` are found on the next walk
 * step.
 *
 * @param {Period[]} periods Stored `TimeSpecification.time.periodic`.
 * @param {Date} t Instant that must lie in the union.
 * @returns {Date | null} Farthest inclusive end, or `null` if none
 *  cover `t`.
 * @function
 * @author Cursor Grok 4.6
 */
function farthestOccurrenceEndCovering (periods: Period[], t: Date): Date | null {
    let farthest: Date | null = null;
    for (const period of periods) {
        const boundaries: [ Date, Date ] | null = period.occurrences(t).next().value ?? null;
        if (!boundaries) {
            continue;
        }
        const [lower, upper] = boundaries;
        if (lower > t) {
            continue;
        }
        if ((farthest === null) || (upper.valueOf() > farthest.valueOf())) {
            farthest = upper;
        }
    }
    return farthest;
}

/**
 * @summary Whether `[start, end]` ⊆ the union of `Period` occurrences.
 * @description
 *
 * X.520 clause 10.2 `between` with `entirely` TRUE: the asserted band
 * must lie inside the **stored times**. For `periodic`, that is the
 * union of all `Period` occurrences (the SET), not one occurrence of
 * one `Period`.
 *
 * Walk `t` from `start`; at each `t` take the farthest covering
 * occurrence end and continue at the next second. A hole, or more
 * than {@link MAX_ENTIRELY_COVER_STEPS} steps, fails. Open-ended
 * assertions use `MAX_DATE`.
 *
 * @param {Period[]} periods Stored `TimeSpecification.time.periodic`.
 * @param {Date} start Inclusive start of the asserted band (spec zone).
 * @param {Date} end Inclusive end of the asserted band (spec zone).
 * @returns {boolean} `true` iff every instant in `[start, end]` is
 *  covered.
 * @function
 * @author Cursor Grok 4.6
 */
function periodsEntirelyCoverInterval (periods: Period[], start: Date, end: Date): boolean {
    if (start.valueOf() > end.valueOf()) {
        return false;
    }
    let t: Date = start;
    let steps: number = 0;
    while (t.valueOf() <= end.valueOf()) {
        steps += 1;
        if (steps > MAX_ENTIRELY_COVER_STEPS) {
            return false;
        }
        const farthestEnd: Date | null = farthestOccurrenceEndCovering(periods, t);
        if (farthestEnd === null) {
            // No period covered that instant (a hole in the union).
            return false;
        }
        t = secondAfter(farthestEnd);
    }
    return true;
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
function timeFallsWithinTimeSpecification (time: Date, spec: TimeSpecification): boolean {
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
            return spec.time.periodic.some((period) => timeFallsWithinPeriod(time, period, timezone));
        } else {
            throw new Error(); // There is no other option.
        }
    })();
    return xor(result, spec.notThisTime);
}

/**
 * `between` evaluation: overlap, or containment when `entirely` is
 * TRUE. Periodic `entirely` is a subset of the union of all `Period`
 * occurrences, not of a single occurrence. `notThisTime` inverts the
 * result (clause 10.2).
 */
function timeSpecificationContains (spec: TimeSpecification, start: Date, end: Date, entirely: boolean = false): boolean {
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
                return periodsEntirelyCoverInterval(spec.time.periodic, adjustedStart, adjustedEnd);
            }
            return spec.time.periodic.some((period) => {
                const boundaries: [ Date, Date ] | null = period.occurrences(adjustedStart).next().value ?? null;
                if (!boundaries) {
                    return false;
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
                return (startWithinBounds || endWithinBounds);
            });
        } else {
            throw new Error(); // There is no other option.
        }
    })();
    return xor(result, spec.notThisTime);
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
 */
export
const evaluateTemporalContext: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: TimeAssertion = _decode_TimeAssertion(assertion);
    const v: TimeSpecification = _decode_TimeSpecification(value);
    if ("now" in a) {
        const now = new Date();
        return timeFallsWithinTimeSpecification(now, v);
    } else if ("at" in a) {
        return timeFallsWithinTimeSpecification(a.at, v);
    } else if ("between" in a) {
        return timeSpecificationContains(v, a.between.startTime, a.between.endTime ?? MAX_DATE, a.between.entirely);
    } else {
        return false;
    }
}

export default evaluateTemporalContext;
