import type { ASN1Element, INTEGER } from "@wildboar/asn1";
import { readInteger } from "../readValue.mjs";
import {
    createOrderingMatcher,
    type Matcher,
    type TypedOrderingFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.3 `integerOrderingMatch`.
 *
 * Signed comparison of a presented INTEGER with a stored INTEGER.
 * Positive when the stored value is less than the presented value.
 * The difference is taken in `bigint` so values outside
 * `Number.MAX_SAFE_INTEGER` keep their order.
 *
 * @param assertion Presented INTEGER.
 * @param value Stored INTEGER, or that integer already decoded.
 */
export
function integerOrderingMatchTyped (
    assertion: INTEGER,
    value: INTEGER | ASN1Element,
): number | undefined {
    return Number(readInteger(assertion) - readInteger(value));
}

integerOrderingMatchTyped satisfies TypedOrderingFunction<INTEGER>;

/**
 * `integerOrderingMatch` as a `Matcher`. TRUE iff the stored INTEGER
 * is less than the presented INTEGER. `MATCH_FLAG_ORDERING_GREATER`
 * and `MATCH_FLAG_ORDERING_OR_EQUAL` select the other orderings.
 */
export
const integerOrderingMatch: Matcher = createOrderingMatcher(
    (el) => el.integer,
    integerOrderingMatchTyped,
);

export default integerOrderingMatch;
