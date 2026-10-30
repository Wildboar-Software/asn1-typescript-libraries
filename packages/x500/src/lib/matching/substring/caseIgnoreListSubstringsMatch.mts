import { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import type { DirectoryStringListInput } from "../readValue.mjs";
import {
    readDirectoryStringList,
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
    matchStringListPieces,
    prepareSubstringComponent,
} from "./matchInOrder.mjs";
import { substringAnchorsAreValid } from "./substringAnchors.mjs";
import {
    readCaseIgnoreListComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

const CASE_FOLD = { caseFold: true } as const;

/**
 * `caseIgnoreListSubstringsMatch` on pieces and lines that are
 * already prepared. Each piece must lie inside one line.
 *
 * @param assertion Prepared pieces, including any `control`.
 * @param lines Prepared stored lines.
 * @returns `true` when every piece matches inside one line, in order.
 */
export
function caseIgnoreListSubstringsMatchPrepped (
    assertion: readonly PreparedSubstring[],
    lines: readonly string[],
): boolean {
    return matchStringListPieces(assertion, lines) === true;
}

/**
 * `caseIgnoreListSubstringsMatch` on pieces and stored lines.
 * Each line is prepared as for `caseIgnoreMatch`. A piece must not
 * cross a line boundary, and pieces do not overlap.
 * A prohibited character makes the match Undefined.
 *
 * @param assertion Presented pieces.
 * @param value Stored lines.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip preparation of that side.
 * @returns `true` when every piece matches inside one line, in order.
 */
export
function caseIgnoreListSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: readonly string[],
    flags: number = 0,
): boolean | undefined {
    if (!substringAnchorsAreValid(assertion) || value.length === 0) {
        return false;
    }
    let lines = value;
    if (!valueAlreadyPrepped(flags)) {
        const prepared: string[] = [];
        for (let i = 0; i < value.length; i++) {
            const line = prepareSubstringComponent(value[i], CASE_FOLD);
            if (line === undefined) {
                return undefined;
            }
            if (line.length === 0) {
                return false;
            }
            prepared.push(line);
        }
        lines = prepared;
    }
    if (assertionAlreadyPrepped(flags)) {
        return caseIgnoreListSubstringsMatchPrepped(assertion, lines);
    }
    return matchStringListPieces(
        assertion,
        lines,
        (text) => prepareSubstringComponent(text, CASE_FOLD),
    );
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
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
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
        flags,
    );
}

export default caseIgnoreListSubstringsMatch;
