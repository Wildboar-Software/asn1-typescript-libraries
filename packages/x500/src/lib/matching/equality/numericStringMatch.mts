import type { ASN1Element } from "@wildboar/asn1";
import type { EqualityMatcherGetter } from "../../types/MatchFlags.mjs";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.4 `numericStringMatch`.
 *
 * Equality of `NumericString` after removing all spaces (clause
 * 7.6.2). Otherwise the same as `caseIgnoreMatch` (case is
 * irrelevant because the characters are numeric).
 *
 * Each argument may be an `ASN1Element` or a string.
 */
export
function numericStringMatch (
    assertion: ASN1Element | string,
    value: ASN1Element | string,
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
): boolean {
    return numericStringMatchTyped(
        typeof assertion === "string" ? assertion : assertion.numericString,
        typeof value === "string" ? value : value.numericString,
        flags,
    );
}

/**
 * `numericStringMatch` on two numeric strings that already have
 * spaces removed.
 *
 * @param assertion Prepared presented digits.
 * @param value Prepared stored digits.
 * @returns `true` when the digit sequences are equal.
 */
export
function numericStringMatchPrepped (assertion: string, value: string): boolean {
    return assertion === value;
}

/**
 * `numericStringMatch` on two numeric strings. Spaces are removed
 * here unless `flags` says that side is already prepared.
 *
 * @param assertion Presented numeric string.
 * @param value Stored numeric string.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip space removal of that side.
 * @returns `true` when the digit sequences are equal.
 */
export
function numericStringMatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): boolean {
    const a = assertionAlreadyPrepped(flags) ? assertion : assertion.replace(/\s+/g, "");
    const v = valueAlreadyPrepped(flags) ? value : value.replace(/\s+/g, "");
    return numericStringMatchPrepped(a, v);
}

export default numericStringMatch;
