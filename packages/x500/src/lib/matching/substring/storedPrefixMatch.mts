import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { approximatelyEqualStrings } from "../approximate.mjs";
import { prepString } from "../../utils/prepString.mjs";
import {
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
} from "../../types/matching.mjs";

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
    return storedPrefixMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
        flags,
    );
}

/**
 * `storedPrefixMatch` on two strings. `value` is the stored prefix.
 *
 * @param assertion Presented string.
 * @param value Stored prefix.
 * @param flags `MATCH_FLAG_CONSTANT_TIME`, `MATCH_FLAG_DEBUG`, and `MATCH_FLAG_VALUE_NORMALIZED`.
 * @returns `true` when the stored string is a prefix.
 */
export
function storedPrefixMatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): boolean {
    const preparedA = prepString(assertion, { caseFold: true });
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
        if (ctStartsWith(preparedA, preparedV)) {
            return true;
        }
        if (flags & MATCH_FLAG_APPROXIMATE) {
            const lenV = preparedV.length;
            let matched = false;
            for (const k of [lenV - 1, lenV, lenV + 1]) {
                if (k >= 0 && k <= preparedA.length && approximatelyEqualStrings(preparedA.slice(0, k), preparedV)) {
                    matched = true;
                }
            }
            return matched;
        }
        return false;
    }
    if (preparedA.startsWith(preparedV)) {
        return true;
    }
    if (flags & MATCH_FLAG_APPROXIMATE) {
        const lenV = preparedV.length;
        for (const k of [lenV - 1, lenV, lenV + 1]) {
            if (k >= 0 && k <= preparedA.length && approximatelyEqualStrings(preparedA.slice(0, k), preparedV)) {
                return true;
            }
        }
    }
    return false;
}

export default storedPrefixMatch;
