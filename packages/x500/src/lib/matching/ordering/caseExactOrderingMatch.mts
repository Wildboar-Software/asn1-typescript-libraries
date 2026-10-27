import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { compareCodePoints, prepString } from "../../utils/prepString.mjs";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.2
 * `caseExactOrderingMatch`.
 *
 * Directory ordering of `UnboundedDirectoryString` after removing
 * insignificant spaces (clause 7.6). TRUE in the Directory sense
 * iff the stored value is less than (appears earlier than) the
 * presented value under Unicode code-point collation. This
 * function returns a signed comparison (assertion vs stored).
 *
 * Language-specific collation is outside the scope of X.520.
 *
 * Each argument may be an `ASN1Element`, a directory string, or a
 * JavaScript string.
 */
export
function caseExactOrderingMatch (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
    flags: number = 0,
): number {
    return caseExactOrderingMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
        flags,
    );
}

/**
 * `caseExactOrderingMatch` on two strings that are already prepared.
 *
 * @param assertion Prepared presented string.
 * @param value Prepared stored string.
 * @returns Negative when `assertion` is less than `value`.
 */
export
function caseExactOrderingMatchPrepped (assertion: string, value: string): number {
    return compareCodePoints(assertion, value);
}

/**
 * `caseExactOrderingMatch` on two strings.
 *
 * @param assertion Presented string.
 * @param value Stored string.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip preparation of that side.
 * @returns Negative when `assertion` is less than `value`. A string that
 *  fails preparation sorts after any prepared string (`Array.sort`
 *  treats `NaN` as `+0`, so it cannot be used for this).
 */
export
function caseExactOrderingMatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): number {
    const a = assertionAlreadyPrepped(flags) ? assertion : prepString(assertion);
    if (a === undefined) {
        return 1;
    }
    const v = valueAlreadyPrepped(flags) ? value : prepString(value);
    if (v === undefined) {
        return -1;
    }
    return caseExactOrderingMatchPrepped(a, v);
}

export default caseExactOrderingMatch;
