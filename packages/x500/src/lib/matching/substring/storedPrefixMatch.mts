import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";
import {
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
} from "../../types/matching.mjs";

const PREP_IGNORE = { caseFold: true } as const;

function ctStartsWith (haystack: string, prefix: string): boolean {
    const pLen = prefix.length;
    const hLen = haystack.length;
    let mismatch = pLen <= hLen ? 0 : 1;
    for (let i = 0; i < pLen; i++) {
        const hc = hLen === 0 ? 0 : haystack.charCodeAt(i < hLen ? i : 0);
        mismatch |= hc ^ prefix.charCodeAt(i);
    }
    return mismatch === 0;
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
    flags: number = 0,
): boolean {
    const assertionNormalized = (flags & MATCH_FLAG_ASSERTION_NORMALIZED) !== 0;
    const valueNormalized = (flags & MATCH_FLAG_VALUE_NORMALIZED) !== 0;
    const preparedA = assertionNormalized
        ? readDirectoryString(assertion)
        : readDirectoryString(assertion, PREP_IGNORE);
    const preparedV = valueNormalized
        ? readDirectoryString(value)
        : readDirectoryString(value, PREP_IGNORE);
    if (preparedA === undefined || preparedV === undefined) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: storedPrefixMatch: string preparation failed",
            );
        }
        return false;
    }
    return storedPrefixMatchTyped(
        preparedA,
        preparedV,
        flags | MATCH_FLAG_ASSERTION_NORMALIZED | MATCH_FLAG_VALUE_NORMALIZED,
    );
}

/**
 * `storedPrefixMatch` on two strings. `value` is the stored prefix.
 *
 * @param assertion Presented string.
 * @param value Stored prefix.
 * @param flags `MATCH_FLAG_CONSTANT_TIME`, `MATCH_FLAG_DEBUG`,
 *  `MATCH_FLAG_ASSERTION_NORMALIZED`, and `MATCH_FLAG_VALUE_NORMALIZED`.
 *  The normalized flags skip preparation of the assertion and the stored
 *  prefix, respectively.
 * @returns `true` when the stored string is a prefix.
 */
export
function storedPrefixMatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): boolean {
    const preparedA = (flags & MATCH_FLAG_ASSERTION_NORMALIZED)
        ? assertion
        : prepString(assertion, { caseFold: true });
    const preparedV = (flags & MATCH_FLAG_VALUE_NORMALIZED)
        ? value
        : prepString(value, { caseFold: true });
    if (preparedA === undefined || preparedV === undefined) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: storedPrefixMatch: string preparation failed",
            );
        }
        return false;
    }
    if (flags & MATCH_FLAG_CONSTANT_TIME) {
        return ctStartsWith(preparedA, preparedV);
    }
    return preparedA.startsWith(preparedV);
}

export default storedPrefixMatch;
