import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { prepString } from "../../utils/prepString.mjs";
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
    prepareStored,
    type StringPreparer,
} from "./prepareSubstrings.mjs";

const RULE = "caseIgnoreIA5SubstringsMatch";

/** Same preparation as `caseIgnoreIA5Match`. */
const prepareIgnore: StringPreparer = (raw) => prepString(raw, { caseFold: true });

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.3
 * `caseIgnoreIA5SubstringsMatch` (LDAP-defined).
 *
 * Substring match of an IA5String value using the same preparation
 * and partitioning as `caseIgnoreSubstringsMatch`. The assertion
 * syntax is `SubstringAssertion` (directory strings). Filter
 * components are IA5 strings. `control` is ignored. Preparation
 * failure of a stored value is UNDEFINED.
 *
 * @param assertion Presented pieces, already prepared and case-folded.
 * @param value Stored IA5String.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseIgnoreIA5SubstringsMatchTyped (
    assertion: AssertedSubstring<string>[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const prepared = prepareStored(value.ia5String, prepareIgnore, flags, RULE);
    if (prepared === undefined) {
        return undefined;
    }
    return matchPreparedString(assertion, prepared, value, flags, RULE);
}

caseIgnoreIA5SubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * Decode a `SubstringAssertion` without preparing its pieces.
 */
export
function decodeCaseIgnoreIA5SubstringsMatchAssertion (
    el: ASN1Element,
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeDirectoryAssertionPieces(el, RULE, flags);
}

/**
 * Decode the IA5 `strings` of a substrings filter item without
 * preparing them.
 */
export
function decodeCaseIgnoreIA5SubstringsMatchFilterPieces (
    items: FilterItem_substrings_strings_Item[],
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeFilterPieces(items, (el) => el.ia5String, RULE, flags);
}

/**
 * Prepare and case-fold each presented piece once.
 */
export
function normalizeCaseIgnoreIA5SubstringsMatchAssertion (
    assertion: readonly AssertedSubstring<string>[] | IterableIterator<AssertedSubstring<string>>,
    el?: ASN1Element,
): AssertedSubstring<string>[] {
    return normalizePieces(assertion, prepareIgnore, RULE, el);
}

/**
 * `caseIgnoreIA5SubstringsMatch` as a `Matcher`.
 */
export
const caseIgnoreIA5SubstringsMatch: Matcher = createSubstringsMatcher(
    decodeCaseIgnoreIA5SubstringsMatchAssertion,
    caseIgnoreIA5SubstringsMatchTyped,
    decodeCaseIgnoreIA5SubstringsMatchFilterPieces,
    normalizeCaseIgnoreIA5SubstringsMatchAssertion,
);

export default caseIgnoreIA5SubstringsMatch;
