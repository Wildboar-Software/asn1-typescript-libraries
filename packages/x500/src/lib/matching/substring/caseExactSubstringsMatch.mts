import { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import type { DirectoryStringInput } from "../readValue.mjs";
import {
    readDirectoryString,
    readSubstringAssertion,
    type PreparedSubstring,
    type SubstringAssertionInput,
} from "../readValue.mjs";
import type { EqualityMatcherGetter } from "../../types/MatchFlags.mjs";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";
import {
    matchStringPieces,
    prepareSubstringComponent,
} from "./matchInOrder.mjs";
import { substringAnchorsAreValid } from "./substringAnchors.mjs";
import {
    readUnboundedDirectoryStringComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

/**
 * `caseExactSubstringsMatch` on strings that are already prepared.
 * The scan does not allocate a piece list and does not call `prepString`.
 *
 * @param assertion Prepared pieces, including any `control`.
 * @param value Prepared stored directory string.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function caseExactSubstringsMatchPrepped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    return matchStringPieces(assertion, value) === true;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseExactSubstringsMatch` on pieces and a stored string.
 * Insignificant spaces are removed; case is significant.
 * A prohibited character in the assertion makes the match Undefined.
 *
 * @param assertion Presented pieces.
 * @param value Stored directory string.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip preparation of that side.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function caseExactSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
    flags: number = 0,
): boolean | undefined {
    if (!substringAnchorsAreValid(assertion)) {
        return false;
    }
    let stored = value;
    if (!valueAlreadyPrepped(flags)) {
        const prepared = prepareSubstringComponent(value);
        if (prepared === undefined) {
            return undefined;
        }
        if (prepared.length === 0) {
            return false;
        }
        stored = prepared;
    }
    if (assertionAlreadyPrepped(flags)) {
        return caseExactSubstringsMatchPrepped(assertion, stored);
    }
    return matchStringPieces(assertion, stored, (text) => prepareSubstringComponent(text));
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
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
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
        flags,
    );
}

export default caseExactSubstringsMatch;
