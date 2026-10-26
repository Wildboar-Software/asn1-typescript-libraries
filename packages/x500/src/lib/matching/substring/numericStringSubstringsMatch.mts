import type { ASN1Element } from "@wildboar/asn1";
import type { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import {
    readSubstringAssertion,
    type PreparedSubstring,
    type SubstringAssertionInput,
} from "../readValue.mjs";
import { matchStringPieces } from "./matchInOrder.mjs";
import {
    prepareNumericPieces,
    stripNumeric,
} from "./prepareSubstring.mjs";
import {
    attachFromFilter,
    readNumericStringComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

/**
 * `numericStringSubstringsMatch` on pieces and a numeric string.
 * All spaces are removed from both sides before the ordered scan.
 *
 * @param assertion Presented pieces, still containing spaces.
 * @param value Stored numeric string, still containing spaces.
 * @returns `true` when the digit pieces match in order without overlap.
 */
export
function numericStringSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    const pieces = prepareNumericPieces(assertion);
    const prepared = stripNumeric(value);
    if (!pieces || prepared.length === 0) {
        return false;
    }
    return matchStringPieces(pieces, prepared);
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
 * `assertion` is an encoded `SubstringAssertion` or the decoded array.
 * `value` is a numeric-string element or a JavaScript string.
 */
function numericStringSubstringsMatch (
    assertion: SubstringAssertionInput,
    value: ASN1Element | string,
): boolean {
    const stored = typeof value === "string" ? value : value.numericString;
    return numericStringSubstringsMatchTyped(
        readSubstringAssertion(assertion),
        stored,
    );
}

const numericStringSubstringsRule = attachFromFilter(
    numericStringSubstringsMatch,
    numericStringSubstringsFromFilter,
);

export { numericStringSubstringsRule as numericStringSubstringsMatch };

export default numericStringSubstringsRule;
