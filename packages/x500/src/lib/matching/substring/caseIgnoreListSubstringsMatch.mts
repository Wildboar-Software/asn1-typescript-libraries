import type { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import type { DirectoryStringListInput } from "../readValue.mjs";
import {
    readDirectoryStringList,
    readSubstringAssertion,
    type PreparedSubstring,
    type SubstringAssertionInput,
} from "../readValue.mjs";
import { matchStringListPieces } from "./matchInOrder.mjs";
import {
    prepareDirectoryLines,
    prepareDirectoryPieces,
} from "./prepareSubstring.mjs";
import {
    attachFromFilter,
    readCaseIgnoreListComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

/**
 * `caseIgnoreListSubstringsMatch` on pieces and stored lines.
 * Each line is prepared as for `caseIgnoreMatch`. A piece must not
 * cross a line boundary, and pieces do not overlap.
 *
 * @param assertion Presented pieces, not yet prepared.
 * @param value Stored lines, not yet prepared.
 * @returns `true` when every piece matches inside one line, in order.
 */
export
function caseIgnoreListSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: readonly string[],
): boolean {
    const pieces = prepareDirectoryPieces(assertion, true);
    const lines = prepareDirectoryLines(value);
    if (!pieces || !lines) {
        return false;
    }
    return matchStringListPieces(pieces, lines);
}

/**
 * Convert a DAP substrings filter for a directory-string list.
 * A one-line `PostalAddress` contributes that line. A multi-line
 * component is rejected, because one assertion piece is one string.
 *
 * @param item `FilterItem` substrings alternative.
 * @returns The assertion, or `undefined` when a component is unusable.
 */
export
function caseIgnoreListSubstringsFromFilter (
    item: FilterItem_substrings,
): SubstringAssertion | undefined {
    return substringAssertionFromFilter(item, readCaseIgnoreListComponent);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.8
 * `caseIgnoreListSubstringsMatch`.
 *
 * The stored `UnboundedDirectoryString` values are concatenated with
 * no separator and then matched as `caseIgnoreSubstringsMatch`, except
 * that no presented piece may span two stored strings.
 *
 * `assertion` is an encoded `SubstringAssertion` or the decoded array.
 * `value` is an element, a `PostalAddress` / `CaseIgnoreList`, or an
 * array of directory strings and/or JavaScript strings.
 */
function caseIgnoreListSubstringsMatch (
    assertion: SubstringAssertionInput,
    value: DirectoryStringListInput,
): boolean {
    return caseIgnoreListSubstringsMatchTyped(
        readSubstringAssertion(assertion),
        readDirectoryStringList(value),
    );
}

const caseIgnoreListSubstringsRule = attachFromFilter(
    caseIgnoreListSubstringsMatch,
    caseIgnoreListSubstringsFromFilter,
);

export { caseIgnoreListSubstringsRule as caseIgnoreListSubstringsMatch };

export default caseIgnoreListSubstringsRule;
