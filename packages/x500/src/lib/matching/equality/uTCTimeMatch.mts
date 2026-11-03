import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * UTC seconds since the epoch. A fractional second is dropped, including
 * milliseconds carried on a `Date`. Floor division keeps a time before
 * 1970 in its UTC second.
 */
function utcSeconds (time: Date): number {
    return Math.floor(time.getTime() / 1000);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.1 `uTCTimeMatch`.
 *
 * TRUE iff both UTCTime values represent the same time to a precision
 * of one second. If seconds are absent, they are treated as zero.
 * Milliseconds carried on a `Date` do not distinguish two values.
 *
 * @param assertion Presented time.
 * @param value Stored UTCTime, or that instant already decoded.
 */
export
function uTCTimeMatchTyped (
    assertion: Date,
    value: Date | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = ASN1Element.isElement(value) ? value.utcTime : value;
    const diff = utcSeconds(assertion) - utcSeconds(stored);
    if (flags & MATCH_FLAG_APPROXIMATE) {
        return diff >= -1 && diff <= 1;
    }
    return diff === 0;
}

uTCTimeMatchTyped satisfies TypedEquationFunction<Date>;

/**
 * `uTCTimeMatch` as a `Matcher`.
 */
export
const uTCTimeMatch: Matcher = createEqualityMatcher(
    (el) => el.utcTime,
    uTCTimeMatchTyped,
);

export default uTCTimeMatch;
