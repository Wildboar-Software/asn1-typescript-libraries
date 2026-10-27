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
import {
    matchStringPieces,
    prepareSubstringComponent,
} from "./matchInOrder.mjs";
import { substringAnchorsAreValid } from "./substringAnchors.mjs";
import {
    readIA5StringComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

const CASE_FOLD = { caseFold: true } as const;

/**
 * `caseIgnoreIA5SubstringsMatch` on strings that are already prepared.
 *
 * @param assertion Prepared pieces, including any `control`.
 * @param value Prepared stored IA5 string.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function caseIgnoreIA5SubstringsMatchPrepped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    return matchStringPieces(assertion, value) === true;
}

/**
 * `caseIgnoreIA5SubstringsMatch` on pieces and an IA5 string.
 * Preparation matches `caseIgnoreIA5Match`, including case folding.
 * A prohibited character in the assertion makes the match Undefined.
 *
 * @param assertion Presented pieces.
 * @param value Stored IA5 string.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip preparation of that side.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function caseIgnoreIA5SubstringsMatchTyped (
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
        return caseIgnoreIA5SubstringsMatchPrepped(assertion, stored);
    }
    return matchStringPieces(
        assertion,
        stored,
        (text) => prepareSubstringComponent(text, CASE_FOLD),
    );
}

/**
 * Convert a DAP substrings filter whose components are `IA5String`
 * into a `SubstringAssertion`. Each component is transcoded to UTF-8.
 *
 * @param item `FilterItem` substrings alternative.
 * @returns The assertion, or `undefined` when a component is not IA5.
 */
export
function caseIgnoreIA5SubstringsFromFilter (
    item: FilterItem_substrings,
): SubstringAssertion | undefined {
    return substringAssertionFromFilter(item, readIA5StringComponent);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.3
 * `caseIgnoreIA5SubstringsMatch` (LDAP-defined).
 *
 * Substring match of an IA5String after string preparation (clause 7),
 * with the same ordered, non-overlapping partition as
 * `caseIgnoreSubstringsMatch`. `control` is ignored.
 *
 * `assertion` is a `FilterItem` substrings alternative, an encoded
 * `SubstringAssertion`, or the decoded array. `value` is an IA5
 * element or a JavaScript string.
 */
export
function caseIgnoreIA5SubstringsMatch (
    assertion: SubstringAssertionInput | FilterItem_substrings,
    value?: ASN1Element | string,
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
): boolean | undefined {
    const decoded = assertion instanceof FilterItem_substrings
        ? caseIgnoreIA5SubstringsFromFilter(assertion)
        : assertion;
    if (!decoded) {
        return undefined;
    }
    if (value === undefined) {
        return false;
    }
    const stored = typeof value === "string" ? value : value.ia5String;
    return caseIgnoreIA5SubstringsMatchTyped(
        readSubstringAssertion(decoded),
        stored,
        flags,
    );
}

export default caseIgnoreIA5SubstringsMatch;
