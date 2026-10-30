import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";
import type { EqualityMatcherGetter } from "../../types/MatchFlags.mjs";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";

const CASE_FOLD = { caseFold: true } as const;

/**
 * `storedPrefixMatch` on two strings that are already prepared.
 * `value` is the stored prefix.
 *
 * @param assertion Prepared presented string.
 * @param value Prepared stored prefix.
 * @returns `true` when the stored string is a prefix.
 */
export
function storedPrefixMatchPrepped (assertion: string, value: string): boolean {
    return assertion.startsWith(value);
}

/**
 * `storedPrefixMatch` on two strings. `value` is the stored prefix.
 * Preparation that fails is FALSE.
 *
 * @param assertion Presented string.
 * @param value Stored prefix.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip preparation of that side.
 * @returns `true` when the stored string is a prefix.
 */
export
function storedPrefixMatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): boolean {
    const preparedA = assertionAlreadyPrepped(flags)
        ? assertion
        : prepString(assertion, CASE_FOLD);
    const preparedV = valueAlreadyPrepped(flags)
        ? value
        : prepString(value, CASE_FOLD);
    if (preparedA === undefined || preparedV === undefined) {
        return false;
    }
    return storedPrefixMatchPrepped(preparedA, preparedV);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.9 `storedPrefixMatch`.
 *
 * TRUE iff the stored attribute value is an initial substring of the
 * presented value. Corresponding characters are identical except for
 * case. Insignificant spaces are ignored (clause 7.6.1): leading and
 * trailing spaces are removed, and inner whitespace is one space.
 * Typical use: a stored area code against a presented telephone number.
 *
 * Each argument may be an `ASN1Element`, a directory string, or a
 * JavaScript string.
 */
export
function storedPrefixMatch (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
): boolean {
    return storedPrefixMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
        flags,
    );
}

export default storedPrefixMatch;
