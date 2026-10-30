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

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.1 `caseExactMatch`.
 *
 * Equality match of `UnboundedDirectoryString` /
 * `DirectoryString` after string preparation (clause 7). Case is
 * significant. Insignificant spaces are removed (clause 7.6). TRUE
 * iff the prepared strings have the same length and identical
 * corresponding characters.
 *
 * `assertion` and `value` are read independently. Each may be an
 * `ASN1Element`, a `DirectoryString` / `UnboundedDirectoryString`,
 * or a JavaScript `string`.
 */
export
function caseExactMatch (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
): boolean {
    return caseExactMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
        flags,
    );
}

/**
 * `caseExactMatch` on two strings that are already prepared.
 *
 * @param assertion Prepared presented string.
 * @param value Prepared stored string.
 * @returns `true` when the strings are equal.
 */
export
function caseExactMatchPrepped (assertion: string, value: string): boolean {
    return assertion === value;
}

/**
 * `caseExactMatch` on two strings. Preparation happens here unless
 * `flags` says that side is already prepared.
 *
 * @param assertion Presented string.
 * @param value Stored string.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip preparation of that side.
 * @returns `true` when the prepared strings are equal.
 */
export
function caseExactMatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): boolean {
    const a = assertionAlreadyPrepped(flags) ? assertion : prepString(assertion);
    const v = valueAlreadyPrepped(flags) ? value : prepString(value);
    if (a === undefined || v === undefined) {
        return false;
    }
    return caseExactMatchPrepped(a, v);
}

export default caseExactMatch;
