import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";

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
): boolean {
    return storedPrefixMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
    );
}

/**
 * `storedPrefixMatch` on two strings. `value` is the stored prefix.
 *
 * @param assertion Presented string.
 * @param value Stored prefix.
 * @returns `true` when the stored string is a prefix.
 */
export
function storedPrefixMatchTyped (assertion: string, value: string): boolean {
    const preparedA = prepString(assertion, { caseFold: true });
    const preparedV = prepString(value, { caseFold: true });
    if (preparedA === undefined || preparedV === undefined) {
        return false;
    }
    return preparedA.startsWith(preparedV);
}

export default storedPrefixMatch;
