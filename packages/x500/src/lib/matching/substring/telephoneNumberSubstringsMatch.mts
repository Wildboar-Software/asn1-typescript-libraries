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
    readTelephoneNumberComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

function stripTelephone (text: string): string {
    return text.replace(/[- ]/g, "");
}

/**
 * `telephoneNumberSubstringsMatch` on numbers that already have
 * spaces and hyphens removed.
 *
 * @param assertion Prepared pieces, including any `control`.
 * @param value Stored number, already normalized.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function telephoneNumberSubstringsMatchPrepped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    return matchStringPieces(assertion, value) === true;
}

/**
 * `telephoneNumberSubstringsMatch` on pieces and a telephone number.
 * Spaces and hyphens are removed from both sides before the scan.
 *
 * @param assertion Presented pieces, still containing spaces and hyphens.
 * @param value Stored telephone number.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip hyphen and space removal of that side.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function telephoneNumberSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
    flags: number = 0,
): boolean {
    if (!substringAnchorsAreValid(assertion)) {
        return false;
    }
    const stored = valueAlreadyPrepped(flags) ? value : stripTelephone(value);
    if (stored.length === 0) {
        return false;
    }
    if (assertionAlreadyPrepped(flags)) {
        return telephoneNumberSubstringsMatchPrepped(assertion, stored);
    }
    return matchStringPieces(assertion, stored, stripTelephone) === true;
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
 * `assertion` is a `FilterItem` substrings alternative, an encoded
 * `SubstringAssertion`, or the decoded array. `value` is a printable-string
 * element or a JavaScript string.
 */
export
function telephoneNumberSubstringsMatch (
    assertion: SubstringAssertionInput | FilterItem_substrings,
    value?: ASN1Element | string,
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
): boolean | undefined {
    const decoded = assertion instanceof FilterItem_substrings
        ? telephoneNumberSubstringsFromFilter(assertion)
        : assertion;
    if (!decoded) {
        return undefined;
    }
    if (value === undefined) {
        return false;
    }
    const stored = typeof value === "string" ? value : value.printableString;
    return telephoneNumberSubstringsMatchTyped(
        readSubstringAssertion(decoded),
        stored,
        flags,
    );
}

export default telephoneNumberSubstringsMatch;
