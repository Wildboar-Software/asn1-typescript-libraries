import type { ASN1Element } from "@wildboar/asn1";
import {
    createOrderingMatcher,
    type Matcher,
    type TypedOrderingFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.4
 * `generalizedTimeOrderingMatch`.
 *
 * Signed comparison of two GeneralizedTime instants. Absent minutes
 * or seconds are treated as zero. Positive when the stored time is
 * earlier than the presented time.
 *
 * @param assertion Presented time.
 * @param value Stored GeneralizedTime.
 */
export
function generalizedTimeOrderingMatchTyped (
    assertion: Date,
    value: ASN1Element,
): number | undefined {
    return assertion.valueOf() - value.generalizedTime.valueOf();
}

generalizedTimeOrderingMatchTyped satisfies TypedOrderingFunction<Date>;

/**
 * `generalizedTimeOrderingMatch` as a `Matcher`. TRUE iff the stored
 * GeneralizedTime is earlier than the presented time.
 * `MATCH_FLAG_ORDERING_GREATER` and `MATCH_FLAG_ORDERING_OR_EQUAL`
 * select the other orderings.
 */
export
const generalizedTimeOrderingMatch: Matcher = createOrderingMatcher(
    (el) => el.generalizedTime,
    generalizedTimeOrderingMatchTyped,
);

export default generalizedTimeOrderingMatch;
