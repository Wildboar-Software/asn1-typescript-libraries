import type { ASN1Element } from "@wildboar/asn1";
import { prepString } from "../../utils/prepString.mjs";
import type { EqualityMatcherGetter } from "../../types/MatchFlags.mjs";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";

const CASE_FOLD = { caseFold: true } as const;

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.2
 * `caseIgnoreIA5Match` (LDAP-defined).
 *
 * Compares IA5String values after string preparation (clause 7.2).
 * TRUE iff the prepared strings have the same number of characters
 * and corresponding characters have the same code point after case
 * mapping.
 *
 * Each argument may be an `ASN1Element` or a string.
 */
export
function caseIgnoreIA5Match (
    assertion: ASN1Element | string,
    value: ASN1Element | string,
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
): boolean {
    return caseIgnoreIA5MatchTyped(
        typeof assertion === "string" ? assertion : assertion.ia5String,
        typeof value === "string" ? value : value.ia5String,
        flags,
    );
}

/**
 * `caseIgnoreIA5Match` on two IA5 strings that are already prepared
 * and case-folded.
 *
 * @param assertion Prepared presented string.
 * @param value Prepared stored string.
 * @returns `true` when the strings are equal.
 */
export
function caseIgnoreIA5MatchPrepped (assertion: string, value: string): boolean {
    return assertion === value;
}

/**
 * `caseIgnoreIA5Match` on two IA5 strings.
 *
 * @param assertion Presented string.
 * @param value Stored string.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip preparation of that side.
 * @returns `true` when the prepared strings are equal ignoring case.
 */
export
function caseIgnoreIA5MatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): boolean {
    const a = assertionAlreadyPrepped(flags) ? assertion : prepString(assertion, CASE_FOLD);
    const v = valueAlreadyPrepped(flags) ? value : prepString(value, CASE_FOLD);
    if (a === undefined || v === undefined) {
        return false;
    }
    return caseIgnoreIA5MatchPrepped(a, v);
}

export default caseIgnoreIA5Match;
