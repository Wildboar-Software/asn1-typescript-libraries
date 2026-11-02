import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import {
    createSubstringsMatcher,
    type AssertedSubstring,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import type {
    FilterItem_substrings_strings_Item,
} from "../../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import {
    decodeDirectoryAssertionPieces,
    decodeFilterPieces,
    matchPreparedString,
    normalizePieces,
    normalizeTelephoneNumber,
    prepareStored,
    type StringPreparer,
} from "./prepareSubstrings.mjs";

const RULE = "telephoneNumberSubstringsMatch";

/** Same insignificant-character removal as `telephoneNumberMatch`. */
const prepareTelephone: StringPreparer = (raw) => {
    const normalized = normalizeTelephoneNumber(raw);
    return normalized.length > 0 ? normalized : undefined;
};

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.9
 * `telephoneNumberSubstringsMatch`.
 *
 * Same partitioning as `caseExactSubstringsMatch`, except hyphens
 * and spaces are insignificant. `+` and other characters remain,
 * as in `telephoneNumberMatch`. The assertion syntax is
 * `SubstringAssertion`. Filter components are telephone numbers
 * (`PrintableString`). `control` is ignored.
 *
 * @param assertion Presented pieces, with hyphens and spaces removed.
 * @param value Stored `TelephoneNumber`.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips hyphen and space removal.
 */
export
function telephoneNumberSubstringsMatchTyped (
    assertion: AssertedSubstring<string>[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const prepared = prepareStored(_decode_TelephoneNumber(value), prepareTelephone, flags, RULE);
    if (prepared === undefined) {
        return undefined;
    }
    return matchPreparedString(assertion, prepared, value, flags, RULE);
}

telephoneNumberSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * Decode a `SubstringAssertion` without removing hyphens or spaces
 * from its pieces.
 */
export
function decodeTelephoneNumberSubstringsMatchAssertion (
    el: ASN1Element,
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeDirectoryAssertionPieces(el, RULE, flags);
}

/**
 * Decode the `TelephoneNumber` `strings` of a substrings filter item
 * without removing hyphens or spaces.
 */
export
function decodeTelephoneNumberSubstringsMatchFilterPieces (
    items: FilterItem_substrings_strings_Item[],
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeFilterPieces(items, (el) => _decode_TelephoneNumber(el), RULE, flags);
}

/**
 * Remove hyphens and spaces from each presented piece once.
 */
export
function normalizeTelephoneNumberSubstringsMatchAssertion (
    assertion: AssertedSubstring<string>[],
    el?: ASN1Element,
): AssertedSubstring<string>[] {
    return normalizePieces(assertion, prepareTelephone, RULE, el);
}

/**
 * `telephoneNumberSubstringsMatch` as a `Matcher`.
 * `MATCH_FLAG_ASSERTION_NORMALIZED` skips hyphen and space removal from
 * the assertion.
 */
export
const telephoneNumberSubstringsMatch: Matcher = createSubstringsMatcher(
    decodeTelephoneNumberSubstringsMatchAssertion,
    telephoneNumberSubstringsMatchTyped,
    decodeTelephoneNumberSubstringsMatchFilterPieces,
    normalizeTelephoneNumberSubstringsMatchAssertion,
);

export default telephoneNumberSubstringsMatch;
