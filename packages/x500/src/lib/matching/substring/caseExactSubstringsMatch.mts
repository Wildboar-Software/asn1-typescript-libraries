import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseExactSubstringsMatch`.
 *
 * TRUE if the stored `DirectoryString` can be partitioned so that
 * presented `initial`/`any`/`final` substrings match distinct
 * portions in order (`initial` prefixes, `final` suffixes). Case
 * is significant; insignificant spaces are removed (clause 7.6).
 * At most one `initial` and one `final`; `control` is ignored.
 * Corresponding characters (including combining sequences) must
 * be identical.
 *
 * `assertion` and `value` may each be an element, a directory
 * string, or a JavaScript string. This entry point compares one
 * substring component; `selection` chooses initial, any, or final.
 */
export
function caseExactSubstringsMatch (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
    selection?: SubstringSelection,
): boolean {
    return caseExactSubstringsMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
        selection ?? SubstringSelection.any_,
    );
}

/**
 * `caseExactSubstringsMatch` on two strings.
 *
 * @param assertion Presented substring.
 * @param value Stored string.
 * @param selection Which part of `value` must contain `assertion`.
 * @returns `true` when the selected containment holds.
 */
export
function caseExactSubstringsMatchTyped (
    assertion: string,
    value: string,
    selection: SubstringSelection,
): boolean {
    switch (selection) {
        case (SubstringSelection.initial): {
            return value.startsWith(assertion);
        }
        case (SubstringSelection.any_): {
            return (value.indexOf(assertion) > -1);
        }
        case (SubstringSelection.final): {
            return value.endsWith(assertion);
        }
        default: {
            return false;
        }
    }
}

export default caseExactSubstringsMatch;
