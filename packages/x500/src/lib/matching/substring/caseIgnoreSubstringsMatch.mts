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

const CASE_FOLD = { caseFold: true } as const;

/**
 * `caseIgnoreSubstringsMatch` on strings that are already prepared.
 * Case is already folded. The scan does not allocate a piece list.
 *
 * @param assertion Prepared pieces, including any `control`.
 * @param value Prepared stored directory string.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function caseIgnoreSubstringsMatchPrepped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    return matchStringPieces(assertion, value) === true;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseIgnoreSubstringsMatch` on pieces and a stored string.
 * Case is folded and insignificant spaces are removed here.
 * A prohibited character in the assertion makes the match Undefined.
 *
 * @param assertion Presented pieces.
 * @param value Stored directory string.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip preparation of that side.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function caseIgnoreSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
    flags: number = 0,
): boolean | undefined {
    if (!substringAnchorsAreValid(assertion)) {
        return false;
    }
    let stored = value;
    if (!valueAlreadyPrepped(flags)) {
        const prepared = prepareSubstringComponent(value, CASE_FOLD);
        if (prepared === undefined) {
            return undefined;
        }
        if (prepared.length === 0) {
            return false;
        }
        stored = prepared;
    }
    if (assertionAlreadyPrepped(flags)) {
        return caseIgnoreSubstringsMatchPrepped(assertion, stored);
    }
    return matchStringPieces(
        assertion,
        stored,
        (text) => prepareSubstringComponent(text, CASE_FOLD),
    );
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
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
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
        flags,
    );
}

export default caseIgnoreSubstringsMatch;
