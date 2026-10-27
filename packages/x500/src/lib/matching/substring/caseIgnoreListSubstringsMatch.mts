import { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import { prepString } from "../../utils/prepString.mjs";
import type { DirectoryStringListInput } from "../readValue.mjs";
import {
    readDirectoryStringList,
    readSubstringAssertion,
    type PreparedSubstring,
    type SubstringAssertionInput,
} from "../readValue.mjs";
import { matchStringListPieces } from "./matchInOrder.mjs";
import { substringAnchorsAreValid } from "./substringAnchors.mjs";
import {
    readCaseIgnoreListComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

const CASE_FOLD = { caseFold: true } as const;

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
    if (!substringAnchorsAreValid(assertion)) {
        return false;
    }
    const mapped = assertion
        .filter((piece): piece is { kind: "initial" | "any" | "final"; value: string } => (
            piece.kind === "initial" || piece.kind === "any" || piece.kind === "final"
        ))
        .map((piece) => {
            const prepared = prepString(piece.value, CASE_FOLD);
            return prepared ? { kind: piece.kind, value: prepared } : undefined;
        });
    const pieces = mapped.filter((piece): piece is { kind: "initial" | "any" | "final"; value: string } => !!piece);
    if (pieces.length !== mapped.length || value.length === 0) {
        return false;
    }
    const lines = value.map((line) => prepString(line, CASE_FOLD));
    if (lines.some((line) => line === undefined)) {
        return false;
    }
    return matchStringListPieces(pieces, lines as string[]);
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
 * `assertion` is a `FilterItem` substrings alternative, an encoded
 * `SubstringAssertion`, or the decoded array. `value` is an element,
 * a `PostalAddress` / `CaseIgnoreList`, or an array of directory
 * strings and/or JavaScript strings.
 */
export
function caseIgnoreListSubstringsMatch (
    assertion: SubstringAssertionInput | FilterItem_substrings,
    value?: DirectoryStringListInput,
): boolean | undefined {
    const decoded = assertion instanceof FilterItem_substrings
        ? caseIgnoreListSubstringsFromFilter(assertion)
        : assertion;
    if (!decoded) {
        return undefined;
    }
    if (value === undefined) {
        return false;
    }
    return caseIgnoreListSubstringsMatchTyped(
        readSubstringAssertion(decoded),
        readDirectoryStringList(value),
    );
}

export default caseIgnoreListSubstringsMatch;
