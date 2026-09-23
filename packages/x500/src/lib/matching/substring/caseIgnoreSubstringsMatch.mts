import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseIgnoreSubstringsMatch`.
 *
 * Same as `caseExactSubstringsMatch` except upper-case is folded
 * during string preparation (clause 7.2). `control` elements are
 * ignored.
 *
 * `assertion` and `value` may each be an element, a directory
 * string, or a JavaScript string.
 */
export
function caseIgnoreSubstringsMatch (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
    selection?: SubstringSelection,
): boolean {
    return caseIgnoreSubstringsMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
        selection ?? SubstringSelection.any_,
    );
}

/**
 * `caseIgnoreSubstringsMatch` on two strings. Case is folded here.
 *
 * @param assertion Presented substring.
 * @param value Stored string.
 * @param selection Which part of `value` must contain `assertion`.
 * @returns `true` when the selected containment holds.
 */
export
function caseIgnoreSubstringsMatchTyped (
    assertion: string,
    value: string,
    selection: SubstringSelection,
): boolean {
    const a: string = assertion.toLowerCase();
    const v: string = value.toLowerCase();
    switch (selection) {
        case (SubstringSelection.initial): {
            return v.startsWith(a);
        }
        case (SubstringSelection.any_): {
            return (v.indexOf(a) > -1);
        }
        case (SubstringSelection.final): {
            return v.endsWith(a);
        }
        default: {
            return false;
        }
    }
}

export default caseIgnoreSubstringsMatch;
