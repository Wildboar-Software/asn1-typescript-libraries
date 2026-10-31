import type { ASN1Element } from "@wildboar/asn1";
import {
    createOrderingMatcher,
    type Matcher,
    type TypedOrderingFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.5
 * `numericStringOrderingMatch`.
 *
 * Same as `caseIgnoreOrderingMatch` except all spaces are removed
 * (clause 7.6.2). The signed result is negative when the presented
 * numeric string is less than the stored string.
 *
 * @param assertion Presented numeric string.
 * @param value Stored `NumericString`.
 */
export
function numericStringOrderingMatchTyped (
    assertion: string,
    value: ASN1Element,
): number | undefined {
    const a: string = assertion.replace(/\s+/g, "");
    const v: string = value.numericString.replace(/\s+/g, "");
    return a.localeCompare(v);
}

numericStringOrderingMatchTyped satisfies TypedOrderingFunction<string>;

/**
 * `numericStringOrderingMatch` as a `Matcher`. TRUE iff the stored
 * `NumericString` is less than the presented value.
 * `MATCH_FLAG_ORDERING_GREATER` and `MATCH_FLAG_ORDERING_OR_EQUAL`
 * select the other orderings.
 */
export
const numericStringOrderingMatch: Matcher = createOrderingMatcher(
    (el) => el.numericString,
    numericStringOrderingMatchTyped,
);

export default numericStringOrderingMatch;
