import type { INTEGER } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { approximatelyEqualIntegers } from "../approximate.mjs";
import type { IntegerInput } from "../readValue.mjs";
import { readLeadingInteger } from "../readValue.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.4.1
 * `integerFirstComponentMatch`.
 *
 * Compares a presented INTEGER with a SEQUENCE whose first
 * component is a mandatory INTEGER. TRUE iff that first component
 * equals the presented integer.
 *
 * @param assertion Presented INTEGER.
 * @param value Stored SEQUENCE, or that leading integer already
 *  decoded (`ASN1Element`, `number`, or `bigint`).
 */
export
function integerFirstComponentMatchTyped (
    assertion: INTEGER,
    value: IntegerInput,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = readLeadingInteger(value);
    if (flags & MATCH_FLAG_APPROXIMATE) {
        return approximatelyEqualIntegers(assertion, stored);
    }
    // `==` matches a number with the same bigint without allocating.
    return assertion == stored;
}

integerFirstComponentMatchTyped satisfies TypedEquationFunction<INTEGER>;

/**
 * `integerFirstComponentMatch` as a `Matcher`.
 */
export
const integerFirstComponentMatch: Matcher = createEqualityMatcher(
    (el) => el.integer,
    integerFirstComponentMatchTyped,
    undefined,
    true,
);

export default integerFirstComponentMatch;
