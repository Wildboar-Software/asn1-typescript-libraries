import type { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
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
import { prepareDirectoryPieces } from "./prepareSubstring.mjs";
import {
    attachFromFilter,
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
    const pieces = prepareDirectoryPieces(assertion, false);
    const prepared = prepString(value);
    if (!pieces || prepared === undefined) {
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
 * `assertion` is an encoded `SubstringAssertion` or the decoded array.
 * `value` is an element, a directory string, or a JavaScript string.
 */
function caseExactSubstringsMatch (
    assertion: SubstringAssertionInput,
    value: DirectoryStringInput,
): boolean {
    return caseExactSubstringsMatchTyped(
        readSubstringAssertion(assertion),
        readDirectoryString(value),
    );
}

const caseExactSubstringsRule = attachFromFilter(
    caseExactSubstringsMatch,
    caseExactSubstringsFromFilter,
);

export { caseExactSubstringsRule as caseExactSubstringsMatch };

export default caseExactSubstringsRule;
