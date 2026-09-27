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
import { prepString } from "../../utils/prepString.mjs";
import { partitionStringList } from "../../utils/substringPartition.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.8
 * `caseIgnoreListSubstringsMatch`.
 *
 * Presented `SubstringAssertion` is matched against the
 * concatenation of stored `UnboundedDirectoryString` values, using
 * `caseIgnoreSubstringsMatch`. An `initial`/`any`/`final` piece
 * must not span more than one stored string. Pieces still occur in
 * order.
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
 * lines. Case is folded during string preparation.
 *
 * @param assertion Presented substring pieces.
 * @param value Stored lines.
 * @returns `true` when the pieces partition the lines in order.
 */
export
function caseIgnoreListSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: readonly string[],
): boolean {
    const lines: string[] = [];
    for (const line of value) {
        const prepared = prepString(line, { caseFold: true });
        if (prepared === undefined) {
            return false;
        }
        lines.push(prepared);
    }
    const needles: PreparedSubstring[] = [];
    for (const piece of assertion) {
        if (piece.kind === "control") {
            continue;
        }
        if (piece.kind === "unknown") {
            return false;
        }
        const text = prepString(piece.value, { caseFold: true });
        if (text === undefined) {
            return false;
        }
        needles.push({ kind: piece.kind, value: text });
    }
    return partitionStringList(lines, needles);
}

export default caseIgnoreListSubstringsMatch;
