import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { compareCodePoints, prepString } from "../../utils/prepString.mjs";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";

const CASE_FOLD = { caseFold: true } as const;

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.2
 * `caseIgnoreOrderingMatch`.
 *
 * Same as `caseExactOrderingMatch` except upper-case is folded
 * during string preparation (clause 7.2). Insignificant spaces are
 * ignored (clause 7.6). Directory TRUE iff the stored value is
 * less than the presented value under Unicode code-point order.
 *
 * Each argument may be an `ASN1Element`, a directory string, or a
 * JavaScript string. A negative result means `assertion` sorts
 * before `value`.
 */
export
function caseIgnoreOrderingMatch (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
    flags: number = 0,
): number {
    return caseIgnoreOrderingMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
        flags,
    );
}

/**
 * `caseIgnoreOrderingMatch` on two strings that are already prepared
 * and case-folded.
 *
 * @param assertion Prepared presented string.
 * @param value Prepared stored string.
 * @returns Negative when `assertion` is less than `value`.
 */
export
function caseIgnoreOrderingMatchPrepped (assertion: string, value: string): number {
    return compareCodePoints(assertion, value);
}

/**
 * `caseIgnoreOrderingMatch` on two strings.
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
function caseIgnoreOrderingMatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): number {
    const a = assertionAlreadyPrepped(flags) ? assertion : prepString(assertion, CASE_FOLD);
    if (a === undefined) {
        return 1;
    }
    const v = valueAlreadyPrepped(flags) ? value : prepString(value, CASE_FOLD);
    if (v === undefined) {
        return -1;
    }
    return caseIgnoreOrderingMatchPrepped(a, v);
}

export default caseIgnoreOrderingMatch;
