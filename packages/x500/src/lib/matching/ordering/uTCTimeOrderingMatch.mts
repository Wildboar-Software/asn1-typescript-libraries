import type { ASN1Element } from "@wildboar/asn1";
import {
    createOrderingMatcher,
    type Matcher,
    type TypedOrderingFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.2 `uTCTimeOrderingMatch`.
 *
 * Signed comparison of two UTCTime instants. Two-digit years 00–49
 * mean 2000–2049; 50–99 mean 1950–1999. Absent seconds are treated
 * as zero. Positive when the stored time is earlier than the
 * presented time.
 *
 * @param assertion Presented time.
 * @param value Stored UTCTime.
 */
export
function uTCTimeOrderingMatchTyped (
    assertion: Date,
    value: ASN1Element,
): number | undefined {
    return assertion.valueOf() - value.utcTime.valueOf();
}

uTCTimeOrderingMatchTyped satisfies TypedOrderingFunction<Date>;

/**
 * `uTCTimeOrderingMatch` as a `Matcher`. TRUE iff the stored UTCTime
 * is earlier than the presented time. `MATCH_FLAG_ORDERING_GREATER`
 * and `MATCH_FLAG_ORDERING_OR_EQUAL` select the other orderings.
 */
export
const uTCTimeOrderingMatch: Matcher = createOrderingMatcher(
    (el) => el.utcTime,
    uTCTimeOrderingMatchTyped,
);

export default uTCTimeOrderingMatch;
