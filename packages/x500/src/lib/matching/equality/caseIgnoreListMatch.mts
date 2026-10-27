import type { DirectoryStringListInput } from "../readValue.mjs";
import { readDirectoryStringList } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";
import type { EqualityMatcherGetter } from "../../types/MatchFlags.mjs";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";

const CASE_FOLD = { caseFold: true } as const;

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.7 `caseIgnoreListMatch`.
 *
 * Equality of a SEQUENCE OF `UnboundedDirectoryString` (e.g.
 * postal address lines). TRUE iff both sequences have the same
 * number of strings and corresponding strings match as for
 * `caseIgnoreMatch` (case and insignificant spaces ignored).
 *
 * Each argument may be an `ASN1Element`, a `PostalAddress` or
 * `CaseIgnoreList`, or an array of directory strings and/or
 * JavaScript strings.
 */
export
function caseIgnoreListMatch (
    assertion: DirectoryStringListInput,
    value: DirectoryStringListInput,
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
): boolean {
    return caseIgnoreListMatchTyped(
        readDirectoryStringList(assertion),
        readDirectoryStringList(value),
        flags,
    );
}

/**
 * `caseIgnoreListMatch` on two lists of strings that are already
 * prepared and case-folded.
 *
 * @param assertion Prepared presented lines.
 * @param value Prepared stored lines.
 * @returns `true` when every corresponding line matches.
 */
export
function caseIgnoreListMatchPrepped (
    assertion: readonly string[],
    value: readonly string[],
): boolean {
    if (assertion.length !== value.length) {
        return false;
    }
    for (let i = 0; i < assertion.length; i++) {
        if (assertion[i] !== value[i]) {
            return false;
        }
    }
    return true;
}

/**
 * `caseIgnoreListMatch` on two lists of strings. Each line is
 * prepared with case folding, matching `caseIgnoreMatch`, unless
 * `flags` says that side is already prepared.
 *
 * @param assertion Presented lines.
 * @param value Stored lines.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip preparation of that side.
 * @returns `true` when every corresponding line matches.
 */
export
function caseIgnoreListMatchTyped (
    assertion: readonly string[],
    value: readonly string[],
    flags: number = 0,
): boolean {
    if (assertion.length !== value.length) {
        return false;
    }
    if (assertionAlreadyPrepped(flags) && valueAlreadyPrepped(flags)) {
        return caseIgnoreListMatchPrepped(assertion, value);
    }
    const assertionPrepped = assertionAlreadyPrepped(flags);
    const valuePrepped = valueAlreadyPrepped(flags);
    for (let i = 0; i < assertion.length; i++) {
        const a = assertionPrepped ? assertion[i] : prepString(assertion[i], CASE_FOLD);
        const v = valuePrepped ? value[i] : prepString(value[i], CASE_FOLD);
        if (a === undefined || v === undefined || a !== v) {
            return false;
        }
    }
    return true;
}

export default caseIgnoreListMatch;
