import type { ASN1Element } from "@wildboar/asn1";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.5
 * `numericStringOrderingMatch`.
 *
 * Same as `caseIgnoreOrderingMatch` except all spaces are removed
 * (clause 7.6.2). Directory TRUE iff the stored `NumericString` is
 * less than the presented value.
 *
 * Each argument may be an `ASN1Element` or a string.
 */
export
function numericStringOrderingMatch (
    assertion: ASN1Element | string,
    value: ASN1Element | string,
    flags: number = 0,
): number {
    return numericStringOrderingMatchTyped(
        typeof assertion === "string" ? assertion : assertion.numericString,
        typeof value === "string" ? value : value.numericString,
        flags,
    );
}

/**
 * `numericStringOrderingMatch` on two numeric strings that already
 * have spaces removed.
 *
 * @param assertion Prepared presented digits.
 * @param value Prepared stored digits.
 * @returns Negative when `assertion` is less than `value`.
 */
export
function numericStringOrderingMatchPrepped (assertion: string, value: string): number {
    return assertion.localeCompare(value);
}

/**
 * `numericStringOrderingMatch` on two numeric strings.
 *
 * @param assertion Presented numeric string.
 * @param value Stored numeric string.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip space removal of that side.
 * @returns Negative when `assertion` is less than `value`.
 */
export
function numericStringOrderingMatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): number {
    const a = assertionAlreadyPrepped(flags) ? assertion : assertion.replace(/\s+/g, "");
    const v = valueAlreadyPrepped(flags) ? value : value.replace(/\s+/g, "");
    return numericStringOrderingMatchPrepped(a, v);
}

export default numericStringOrderingMatch;
