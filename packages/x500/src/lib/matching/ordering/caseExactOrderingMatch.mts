import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";

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
): number {
    return caseExactOrderingMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
    );
}

/**
 * `caseExactOrderingMatch` on two strings.
 *
 * @param assertion Presented string.
 * @param value Stored string.
 * @returns Negative when `assertion` is less than `value`.
 */
export
function caseExactOrderingMatchTyped (assertion: string, value: string): number {
    const a: string = assertion.trim();
    const v: string = value.trim();
    return a.localeCompare(v);
}

export default caseExactOrderingMatch;
