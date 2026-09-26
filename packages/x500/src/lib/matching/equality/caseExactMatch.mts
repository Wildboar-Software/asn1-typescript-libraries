import type {
    DirectoryStringInput,
} from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";

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
): boolean {
    return caseExactMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
    );
}

/**
 * `caseExactMatch` on two strings. Preparation happens here.
 *
 * @param assertion Presented string.
 * @param value Stored string.
 * @returns `true` when the prepared strings are equal.
 */
export
function caseExactMatchTyped (assertion: string, value: string): boolean {
    const a: string | undefined = prepString(assertion);
    const v: string | undefined = prepString(value);
    if (a === undefined) {
        return false;
    }
    if (v === undefined) {
        return false;
    }
    return (a === v);
}

export default caseExactMatch;
