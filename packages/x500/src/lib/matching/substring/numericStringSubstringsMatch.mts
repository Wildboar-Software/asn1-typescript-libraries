import type { ASN1Element } from "@wildboar/asn1";
import { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import {
    readSubstringAssertion,
    type PreparedSubstring,
    type SubstringAssertionInput,
} from "../readValue.mjs";
import type { EqualityMatcherGetter } from "../../types/MatchFlags.mjs";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";
import { matchStringPieces } from "./matchInOrder.mjs";
import { substringAnchorsAreValid } from "./substringAnchors.mjs";
import {
    readNumericStringComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

function stripSpaces (text: string): string {
    return text.replace(/\s+/g, "");
}

/**
 * `numericStringSubstringsMatch` on digit strings that already have
 * spaces removed.
 *
 * @param assertion Prepared pieces, including any `control`.
 * @param value Stored digits, with spaces already removed.
 * @returns `true` when the digit pieces match in order without overlap.
 */
export
function numericStringSubstringsMatchPrepped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    return matchStringPieces(assertion, value) === true;
}

/**
 * `numericStringSubstringsMatch` on pieces and a numeric string.
 * All spaces are removed from both sides before the ordered scan.
 * A component that is only spaces is FALSE.
 *
 * @param assertion Presented pieces, still containing spaces.
 * @param value Stored numeric string, still containing spaces.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip space removal of that side.
 * @returns `true` when the digit pieces match in order without overlap.
 */
export
function numericStringSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
    flags: number = 0,
): boolean {
    if (!substringAnchorsAreValid(assertion)) {
        return false;
    }
    const stored = valueAlreadyPrepped(flags) ? value : stripSpaces(value);
    if (stored.length === 0) {
        return false;
    }
    if (assertionAlreadyPrepped(flags)) {
        return numericStringSubstringsMatchPrepped(assertion, stored);
    }
    return matchStringPieces(assertion, stored, stripSpaces) === true;
}

/**
 * Convert a DAP substrings filter whose components are `NumericString`
 * into a `SubstringAssertion`. Each component becomes a printable string.
 *
 * @param item `FilterItem` substrings alternative.
 * @returns The assertion, or `undefined` when a component is not numeric.
 */
export
function numericStringSubstringsFromFilter (
    item: FilterItem_substrings,
): SubstringAssertion | undefined {
    return substringAssertionFromFilter(item, readNumericStringComponent);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.6
 * `numericStringSubstringsMatch`.
 *
 * Same ordered, non-overlapping partition as `caseIgnoreSubstringsMatch`,
 * except every space is removed (clause 7.6.2). `control` is ignored.
 *
 * `assertion` is a `FilterItem` substrings alternative, an encoded
 * `SubstringAssertion`, or the decoded array. `value` is a numeric-string
 * element or a JavaScript string.
 */
export
function numericStringSubstringsMatch (
    assertion: SubstringAssertionInput | FilterItem_substrings,
    value?: ASN1Element | string,
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
): boolean | undefined {
    const decoded = assertion instanceof FilterItem_substrings
        ? numericStringSubstringsFromFilter(assertion)
        : assertion;
    if (!decoded) {
        return undefined;
    }
    if (value === undefined) {
        return false;
    }
    const stored = typeof value === "string" ? value : value.numericString;
    return numericStringSubstringsMatchTyped(
        readSubstringAssertion(decoded),
        stored,
        flags,
    );
}

export default numericStringSubstringsMatch;
