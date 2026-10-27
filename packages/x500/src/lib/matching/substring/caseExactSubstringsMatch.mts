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

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseExactSubstringsMatch` on pieces and a stored string.
 * Insignificant spaces are removed; case is significant.
 *
 * @param assertion Presented pieces, not yet prepared.
 * @param value Stored directory string, not yet prepared.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function caseExactSubstringsMatchTyped (
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
            const prepared = prepString(piece.value);
            return prepared ? { kind: piece.kind, value: prepared } : undefined;
        });
    const pieces = mapped.filter((piece): piece is { kind: "initial" | "any" | "final"; value: string } => !!piece);
    if (pieces.length !== mapped.length) {
        return false;
    }
    const prepared = prepString(value);
    if (prepared === undefined) {
        return false;
    }
    return matchStringPieces(pieces, prepared);
}

/**
 * Convert a DAP substrings filter whose components are directory
 * strings into a `SubstringAssertion` for `caseExactSubstringsMatch`.
 *
 * @param item `FilterItem` substrings alternative.
 * @returns The assertion, or `undefined` when the filter is unusable.
 */
export
function caseExactSubstringsFromFilter (
    item: FilterItem_substrings,
): SubstringAssertion | undefined {
    return substringAssertionFromFilter(
        item,
        readUnboundedDirectoryStringComponent,
    );
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3 `caseExactSubstringsMatch`.
 *
 * Same partitioning as `caseIgnoreSubstringsMatch`, except case is
 * significant. Insignificant spaces are removed (clause 7.6).
 * `control` is ignored.
 *
 * `assertion` is a `FilterItem` substrings alternative, an encoded
 * `SubstringAssertion`, or the decoded array. `value` is an element,
 * a directory string, or a JavaScript string.
 */
export
function caseExactSubstringsMatch (
    assertion: SubstringAssertionInput | FilterItem_substrings,
    value?: DirectoryStringInput,
): boolean | undefined {
    const decoded = assertion instanceof FilterItem_substrings
        ? caseExactSubstringsFromFilter(assertion)
        : assertion;
    if (!decoded) {
        return undefined;
    }
    if (value === undefined) {
        return false;
    }
    return caseExactSubstringsMatchTyped(
        readSubstringAssertion(decoded),
        readDirectoryString(value),
    );
}

export default caseExactSubstringsMatch;
