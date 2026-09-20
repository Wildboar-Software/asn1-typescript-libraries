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
import boundariesOfPeriodOccurrence from "../../utils/boundariesOfPeriodOccurrence.mjs";

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
const MAX_ENTIRELY_COVER_STEPS = 100_000;

function secondAfter (instant: Date): Date {
    return new Date(instant.valueOf() + 1000);
}

/**
 * Latest inclusive end among occurrences (any `Period` in the SET) that
 * contain `t`. `null` if `t` is a hole in the union.
 *
 * Occurrence bounds already include the `DayTimeBand` that contains
 * `t`. Later bands of the same `Period` are found on the next walk
 * step (X.520 `DayTime` is second-precision).
 */
function farthestOccurrenceEndCovering (periods: Period[], t: Date): Date | null {
    let farthest: Date | null = null;
    for (const period of periods) {
        const boundaries: [ Date, Date ] | null = boundariesOfPeriodOccurrence(period, t);
        if (!boundaries) {
            continue;
        }
        const upper: Date = boundaries[1];
        if ((farthest === null) || (upper.valueOf() > farthest.valueOf())) {
            farthest = upper;
        }
    }
    return farthest;
}

/**
 * `entirely` TRUE: `[start, end]` ⊆ union of all `Period` occurrences
 * (clause 10.2). Walk `t` from `start`; at each `t` take the farthest
 * covering occurrence end and continue at the next second.
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
            return false;
        }
        if (farthestEnd.valueOf() >= end.valueOf()) {
            return true;
        }
        const next: Date = secondAfter(farthestEnd);
        if (next.valueOf() <= t.valueOf()) {
            return false;
        }
        t = next;
    }
    return true;
}
/** True if `time` falls in one occurrence of `period` (clause 10.2). */
function timeFallsWithinPeriod (time: Date, period: Period, timezone: number | undefined): boolean {
    const adjustedTime = inSpecTimeZone(time, timezone);
    const boundaries: [ Date, Date ] | null = boundariesOfPeriodOccurrence(period, adjustedTime);
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
                const boundaries: [ Date, Date ] | null = boundariesOfPeriodOccurrence(period, adjustedStart);
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
