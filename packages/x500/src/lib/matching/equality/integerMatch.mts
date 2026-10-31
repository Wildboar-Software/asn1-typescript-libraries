import type { ASN1Element, INTEGER } from "@wildboar/asn1";
import { readInteger } from "../readValue.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.2 `integerMatch`.
 *
 * TRUE iff a presented INTEGER or ENUMERATED value equals the
 * stored INTEGER or ENUMERATED value.
 *
 * @param assertion Presented INTEGER.
 * @param value Stored INTEGER, or that integer already decoded.
 */
export
function integerMatchTyped (
    assertion: INTEGER,
    value: INTEGER | ASN1Element,
): boolean | undefined {
    return readInteger(assertion) === readInteger(value);
}

integerMatchTyped satisfies TypedEquationFunction<INTEGER>;

/**
 * `integerMatch` as a `Matcher`.
 */
export
const integerMatch: Matcher = createEqualityMatcher(
    (el) => el.integer,
    integerMatchTyped,
);

export default integerMatch;
