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

/** True if `time` falls in one occurrence of `period` (clause 10.2). */
function timeFallsWithinPeriod (time: Date, period: Period, timezone: number = 0): boolean {
    const adjustedTime = addHours(time, -timezone);
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
 * TRUE. `notThisTime` complements the stored time set (clause 10.2).
 */
function timeSpecificationContains (spec: TimeSpecification, start: Date, end: Date, entirely: boolean = false): boolean {
    const timezone: number | undefined = (spec.timeZone !== undefined)
        ? Number(spec.timeZone)
        : undefined;
    let overlaps = false;
    let contained = false;
    if ("absolute" in spec.time) {
        const startSpec = spec.time.absolute.startTime
            ? addHours(spec.time.absolute.startTime, -(timezone ?? 0))
            : MIN_DATE;
        const endSpec = spec.time.absolute.endTime
            ? addHours(spec.time.absolute.endTime, -(timezone ?? 0))
            : MAX_DATE;
        contained = (
            (start.valueOf() >= startSpec.valueOf())
            && (end.valueOf() <= endSpec.valueOf())
        );
        overlaps = !(
            (start.valueOf() > endSpec.valueOf())
            || (end.valueOf() < startSpec.valueOf())
        );
    } else if ("periodic" in spec.time) {
        for (const period of spec.time.periodic) {
            const adjustedStart = addHours(start, timezone ?? 0);
            const adjustedEnd = addHours(end, timezone ?? 0);
            const boundaries: [ Date, Date ] | null = boundariesOfPeriodOccurrence(period, adjustedStart);
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
                overlaps = true;
            }
            if (startWithinBounds && endWithinBounds) {
                contained = true;
            }
        }
    } else {
        throw new Error();
    }
    if (!spec.notThisTime) {
        return entirely ? contained : overlaps;
    }
    // Stored value is the complement of the expressed times.
    // entirely ⊆ ¬S  ⇔  A ∩ S = ∅
    // overlap ¬S     ⇔  ¬(A ⊆ S)
    return entirely ? !overlaps : !contained;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 10.2 `temporalContext`.
 *
 * Associates an attribute value with a `TimeSpecification`
 * (absolute span or periodic set; optional timezone and
 * `notThisTime` negation). A `TimeAssertion` matches if the times
 * overlap: `now`/`at` must fall within the stored specification;
 * `between` overlaps unless `entirely` is TRUE, in which case the
 * whole asserted band must lie inside the stored times. `notThisTime`
 * complements the stored set (it is not a boolean XOR of the matcher). Missing
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
