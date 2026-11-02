import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { stringsEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Remove every space (X.520 clause 7.6.2).
 */
function stripSpaces (numeric: string): string {
    return numeric.replace(/\s+/g, "");
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.4 `numericStringMatch`.
 *
 * Equality of `NumericString` after removing all spaces (clause
 * 7.6.2). Otherwise the same as `caseIgnoreMatch`.
 *
 * @param assertion Presented numeric string, with spaces already removed.
 * @param value Stored `NumericString`, or that string with spaces
 *  already removed. `MATCH_FLAG_VALUE_NORMALIZED` skips removal.
 */
export
function numericStringMatchTyped (
    assertion: string,
    value: string | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = typeof value === "string" ? value : value.numericString;
    const stored = (flags & MATCH_FLAG_VALUE_NORMALIZED) ? raw : stripSpaces(raw);
    return stringsEqual(assertion, stored, flags & MATCH_FLAG_CONSTANT_TIME);
}

numericStringMatchTyped satisfies TypedEquationFunction<string>;

/**
 * `numericStringMatch` as a `Matcher`.
 */
export
const numericStringMatch: Matcher = createEqualityMatcher(
    (el) => stripSpaces(el.numericString),
    numericStringMatchTyped,
);

export default numericStringMatch;
