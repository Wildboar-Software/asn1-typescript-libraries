import type SubstringSelection from "../../types/SubstringSelection.mjs";
import type {
    DirectoryStringListInput,
    PreparedSubstring,
    SubstringAssertionInput,
} from "../readValue.mjs";
import {
    readDirectoryStringList,
    readSubstringAssertion,
} from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.8
 * `caseIgnoreListSubstringsMatch`.
 *
 * Presented `SubstringAssertion` is matched against the
 * concatenation of stored `UnboundedDirectoryString` values, using
 * `caseIgnoreSubstringsMatch`. An `initial`/`any`/`final` piece
 * must not span more than one stored string.
 *
 * `assertion` is an element or a `SubstringAssertion` (directory
 * strings or JavaScript strings). `value` is an element, a
 * `PostalAddress` / `CaseIgnoreList`, or an array of strings.
 * `selection` is accepted for `SubstringsMatcher` and is not used;
 * the assertion carries initial, any, and final itself.
 */
export
function caseIgnoreListSubstringsMatch (
    assertion: SubstringAssertionInput,
    value: DirectoryStringListInput,
    _selection?: SubstringSelection,
): boolean {
    return caseIgnoreListSubstringsMatchTyped(
        readSubstringAssertion(assertion),
        readDirectoryStringList(value),
    );
}

/**
 * `caseIgnoreListSubstringsMatch` on prepared pieces and stored
 * lines. `initial` is tested against the first line and `final`
 * against the last. `any` may match any line.
 *
 * @param assertion Presented substring pieces.
 * @param value Stored lines.
 * @returns `true` when every piece matches.
 */
export
function caseIgnoreListSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: readonly string[],
): boolean {
    if (value.length === 0) {
        return false;
    }
    const firstStr: string = value[0];
    const lastStr: string = value[value.length - 1];
    for (const substr of assertion) {
        if (substr.kind === "any") {
            const s: string = substr.text;
            let matched: boolean = false;
            for (const str of value) {
                if (str.indexOf(s) >= 0) {
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                return false;
            }
        } else if (substr.kind === "initial") {
            if (!firstStr.startsWith(substr.text)) {
                return false;
            }
        } else if (substr.kind === "final") {
            if (!lastStr.endsWith(substr.text)) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

export default caseIgnoreListSubstringsMatch;
