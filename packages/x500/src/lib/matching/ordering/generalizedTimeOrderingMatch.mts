import { ASN1Element } from "@wildboar/asn1";
import {
    createOrderingMatcher,
    type Matcher,
    type TypedOrderingFunction,
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
 * Rec. ITU-T X.520 (10/2019), clause 8.3.4
 * `generalizedTimeOrderingMatch`.
 *
 * Signed comparison of two GeneralizedTime values to a precision of
 * one second. Absent minutes or seconds are treated as zero. A
 * fractional second does not order one value before the other.
 * Positive when the stored time is earlier than the presented time.
 *
 * @param assertion Presented time.
 * @param value Stored GeneralizedTime, or that instant already decoded.
 */
export
function generalizedTimeOrderingMatchTyped (
    assertion: Date,
    value: Date | ASN1Element,
): number | undefined {
    const stored = ASN1Element.isElement(value) ? value.generalizedTime : value;
    return utcSeconds(assertion) - utcSeconds(stored);
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
