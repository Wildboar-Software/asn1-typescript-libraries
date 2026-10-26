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
    prepareTelephonePieces,
    stripTelephone,
} from "./prepareSubstring.mjs";
import {
    attachFromFilter,
    readTelephoneNumberComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

/**
 * `telephoneNumberSubstringsMatch` on pieces and a telephone number.
 * Spaces and hyphens are removed from both sides before the scan.
 *
 * @param assertion Presented pieces, still containing spaces and hyphens.
 * @param value Stored telephone number.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function telephoneNumberSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    const pieces = prepareTelephonePieces(assertion);
    const prepared = stripTelephone(value);
    if (!pieces || prepared.length === 0) {
        return false;
    }
    return matchStringPieces(pieces, prepared);
}

/**
 * Convert a DAP substrings filter whose components are `TelephoneNumber`
 * into a `SubstringAssertion`.
 *
 * @param item `FilterItem` substrings alternative.
 * @returns The assertion, or `undefined` when a component is not printable.
 */
export
function telephoneNumberSubstringsFromFilter (
    item: FilterItem_substrings,
): SubstringAssertion | undefined {
    return substringAssertionFromFilter(item, readTelephoneNumberComponent);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.9
 * `telephoneNumberSubstringsMatch`.
 *
 * Same ordered, non-overlapping partition as `caseExactSubstringsMatch`,
 * except hyphens and spaces are insignificant. `control` is ignored.
 *
 * `assertion` is an encoded `SubstringAssertion` or the decoded array.
 * `value` is a printable-string element or a JavaScript string.
 */
function telephoneNumberSubstringsMatch (
    assertion: SubstringAssertionInput,
    value: ASN1Element | string,
): boolean {
    const stored = typeof value === "string" ? value : value.printableString;
    return telephoneNumberSubstringsMatchTyped(
        readSubstringAssertion(assertion),
        stored,
    );
}

const telephoneNumberSubstringsRule = attachFromFilter(
    telephoneNumberSubstringsMatch,
    telephoneNumberSubstringsFromFilter,
);

export { telephoneNumberSubstringsRule as telephoneNumberSubstringsMatch };

export default telephoneNumberSubstringsRule;
