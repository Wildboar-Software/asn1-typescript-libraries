import EqualityMatcher from "../../types/EqualityMatcher";
import { ASN1Element } from "asn1-ts";
import {
    TimeSpecification,
    _decode_TimeSpecification,
} from "../../modules/SelectedAttributeTypes/TimeSpecification.ta";
import {
    TimeAssertion,
    _decode_TimeAssertion,
} from "../../modules/SelectedAttributeTypes/TimeAssertion.ta";
import type {
    Period,
} from "../../modules/SelectedAttributeTypes/Period.ta";
import { addHours } from "date-fns";
import boundariesOfPeriodOccurrence from "../../utils/boundariesOfPeriodOccurrence";

const MAX_DATE: Date = new Date(8640000000000000);

function xor (a: boolean, b: boolean): boolean {
    return ((a && !b) || (!a && b));
}

function timeFallsWithinPeriod (time: Date, period: Period, timezone: number = 0): boolean {
    const adjustedTime = addHours(time, timezone); // TODO: I am not sure this is correct.
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

function timeFallsWithinTimeSpecification (time: Date, spec: TimeSpecification): boolean {
    const result = ((): boolean => {
        const timezone: number | undefined = (spec.timeZone !== undefined)
            ? Number(spec.timeZone)
            : undefined;
        if ("absolute" in spec.time) {
            const start = addHours(spec.time.absolute.startTime, -(timezone ?? 0));
            const end = addHours(spec.time.absolute.endTime, -(timezone ?? 0));
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

function timeSpecificationContains (spec: TimeSpecification, start: Date, end: Date, entirely: boolean = false): boolean {
    const result = ((): boolean => {
        const timezone: number | undefined = (spec.timeZone !== undefined)
            ? Number(spec.timeZone)
            : undefined;
        if ("absolute" in spec.time) {
            const startSpec = addHours(spec.time.absolute.startTime, -(timezone ?? 0));
            const endSpec = addHours(spec.time.absolute.endTime, -(timezone ?? 0));
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
            return spec.time.periodic.some((period) => {
                const adjustedStart = addHours(start, timezone ?? 0); // TODO: I am not sure this is correct.
                const adjustedEnd = addHours(end, timezone ?? 0); // TODO: I am not sure this is correct.
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
                return (
                    entirely
                        ? (startWithinBounds && endWithinBounds)
                        : (startWithinBounds || endWithinBounds)
                );
            });
        } else {
            throw new Error(); // There is no other option.
        }
    })();
    return xor(result, spec.notThisTime);
}

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
