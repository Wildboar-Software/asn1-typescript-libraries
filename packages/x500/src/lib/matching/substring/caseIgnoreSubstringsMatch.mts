import { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import { prepString } from "../../utils/prepString.mjs";
import type { DirectoryStringInput } from "../readValue.mjs";
import {
    readDirectoryString,
    readSubstringAssertion,
    type PreparedSubstring,
    type SubstringAssertionInput,
} from "../readValue.mjs";
import { matchStringPieces } from "./matchInOrder.mjs";
import { substringAnchorsAreValid } from "./substringAnchors.mjs";
import {
    readUnboundedDirectoryStringComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

const CASE_FOLD = { caseFold: true } as const;

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseIgnoreSubstringsMatch` on prepared pieces and a stored string.
 * Case is folded and insignificant spaces are removed here.
 *
 * @param assertion Presented pieces, not yet prepared.
 * @param value Stored directory string, not yet prepared.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function caseIgnoreSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
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
    if (pieces.length !== mapped.length) {
        return false;
    }
    const prepared = prepString(value, CASE_FOLD);
    if (prepared === undefined) {
        return false;
    }
    return matchStringPieces(pieces, prepared);
}

/**
 * Convert a DAP substrings filter whose components are directory
 * strings into a `SubstringAssertion`.
 *
 * @param item `FilterItem` substrings alternative.
 * @returns The assertion, or `undefined` when the filter is unusable.
 */
export
function caseIgnoreSubstringsFromFilter (
    item: FilterItem_substrings,
): SubstringAssertion | undefined {
    return substringAssertionFromFilter(
        item,
        readUnboundedDirectoryStringComponent,
    );
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3 `caseIgnoreSubstringsMatch`.
 *
 * TRUE when the stored `DirectoryString` can be partitioned so the
 * presented `initial`, `any`, and `final` pieces match successive
 * portions in order, without overlap. Case is ignored and
 * insignificant spaces are removed (clause 7). `control` is ignored.
 *
 * `assertion` is a `FilterItem` substrings alternative, an encoded
 * `SubstringAssertion`, or the decoded array. `value` is an element,
 * a directory string, or a JavaScript string. `undefined` means a
 * filter item could not be converted.
 */
export
function caseIgnoreSubstringsMatch (
    assertion: SubstringAssertionInput | FilterItem_substrings,
    value?: DirectoryStringInput,
): boolean | undefined {
    const decoded = assertion instanceof FilterItem_substrings
        ? caseIgnoreSubstringsFromFilter(assertion)
        : assertion;
    if (!decoded) {
        return undefined;
    }
    if (value === undefined) {
        return false;
    }
    return caseIgnoreSubstringsMatchTyped(
        readSubstringAssertion(decoded),
        readDirectoryString(value),
    );
}

export default caseIgnoreSubstringsMatch;
