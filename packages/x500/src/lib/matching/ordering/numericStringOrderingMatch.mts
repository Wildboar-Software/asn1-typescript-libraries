import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { compareCodePoints } from "../../utils/prepString.mjs";
import {
    createOrderingMatcher,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedOrderingFunction,
} from "../../types/matching.mjs";

/**
 * Remove every space (X.520 clause 7.6.2).
 */
function stripSpaces (numeric: string): string {
    return numeric.replace(/\s+/g, "");
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.5
 * `numericStringOrderingMatch`.
 *
 * Same as `caseIgnoreOrderingMatch` except all spaces are removed
 * (clause 7.6.2). The signed result is negative when the presented
 * numeric string is less than the stored string under Unicode
 * code-point order, the same collation as `caseIgnoreOrderingMatch`.
 *
 * @param assertion Presented numeric string, with spaces already
 *  removed.
 * @param value Stored `NumericString`, or that string with spaces
 *  already removed. `MATCH_FLAG_VALUE_NORMALIZED` skips removal.
 */
export
function numericStringOrderingMatchTyped (
    assertion: string,
    value: string | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): number | undefined {
    const raw = typeof value === "string" ? value : value.numericString;
    const stored = (flags & MATCH_FLAG_VALUE_NORMALIZED) ? raw : stripSpaces(raw);
    return compareCodePoints(assertion, stored);
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
    (el) => stripSpaces(el.numericString),
    numericStringOrderingMatchTyped,
);

export default numericStringOrderingMatch;
