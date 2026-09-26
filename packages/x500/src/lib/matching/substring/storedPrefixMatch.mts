import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Clause 7.2 maps these controls to SPACE. `prepString` deletes every
 * `Cc` character, so they are rewritten before that call.
 */
const controlsMappedToSpace: RegExp = /[\u0009\u000A\u000B\u000C\u000D\u0085]/g;

/**
 * Prepare one string for `storedPrefixMatch` (clause 7).
 *
 * Case is folded. Leading and trailing spaces are removed, and
 * consecutive whitespace is one SPACE. A string of only spaces stays
 * a single SPACE (clause 7.6.1); a string that preparation empties
 * for any other reason is prohibited (clause 7.4).
 */
function prepare (input: string): string | undefined {
    const spaced: string = input.replace(controlsMappedToSpace, " ");
    const prepared: string | undefined = prepString(spaced);
    if (prepared === undefined) {
        return undefined;
    }
    if (prepared.length === 0) {
        const onlySpaces: boolean = spaced.length > 0 && spaced.trim().length === 0;
        return onlySpaces ? " " : undefined;
    }
    return prepared.toLowerCase();
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
    const preparedA = prepare(assertion);
    const preparedV = prepare(value);
    if (preparedA === undefined || preparedV === undefined) {
        return false;
    }
    return preparedA.startsWith(preparedV);
}

export default storedPrefixMatch;
