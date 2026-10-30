import type {
    DirectoryStringInput,
} from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";
import type { EqualityMatcherGetter } from "../../types/MatchFlags.mjs";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";

const CASE_FOLD = { caseFold: true } as const;

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.1 `caseIgnoreMatch`.
 *
 * Equality match of `UnboundedDirectoryString` /
 * `DirectoryString` after string preparation (clause 7). Case is
 * ignored (upper-case folded as in clause 7.2) and insignificant
 * spaces are removed (clause 7.6). TRUE iff the prepared strings
 * have the same length and identical corresponding characters.
 *
 * Used as the equality rule for many selected attribute types
 * (e.g. `commonName`, `organizationName`).
 *
 * `assertion` and `value` are read independently. Each may be an
 * `ASN1Element`, a `DirectoryString` / `UnboundedDirectoryString`,
 * or a JavaScript `string`.
 */
export
function caseIgnoreMatch (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
): boolean {
    return caseIgnoreMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
        flags,
    );
}

/**
 * `caseIgnoreMatch` on two strings that are already prepared and
 * case-folded.
 *
 * @param assertion Prepared presented string.
 * @param value Prepared stored string.
 * @returns `true` when the strings are equal.
 */
export
function caseIgnoreMatchPrepped (assertion: string, value: string): boolean {
    return assertion === value;
}

/**
 * `caseIgnoreMatch` on two strings. String preparation and case
 * folding happen here so this function stays monomorphic, unless
 * `flags` says that side is already prepared.
 *
 * @param assertion Presented string.
 * @param value Stored string.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip preparation of that side.
 * @returns `true` when the prepared strings are equal ignoring case.
 */
export
function caseIgnoreMatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): boolean {
    const a = assertionAlreadyPrepped(flags) ? assertion : prepString(assertion, CASE_FOLD);
    const v = valueAlreadyPrepped(flags) ? value : prepString(value, CASE_FOLD);
    if (a === undefined || v === undefined) {
        return false;
    }
    return caseIgnoreMatchPrepped(a, v);
}

export default caseIgnoreMatch;
