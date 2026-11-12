import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
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
import { removeAllAsciiSpaceCharacters } from "../insignificant.mjs";

const RULE = "numericStringSubstringsMatch";

/**
 * Remove every space (X.520 clause 7.6.2). An empty result is
 * UNDEFINED, matching `numericStringSubstringsMatch` when the
 * string was only spaces.
 */
const prepareNumeric: StringPreparer = (raw) => {
    const stripped = removeAllAsciiSpaceCharacters(raw);
    return stripped.length > 0 ? stripped : undefined;
};

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.6
 * `numericStringSubstringsMatch`.
 *
 * Same partitioning as `caseIgnoreSubstringsMatch`, except every
 * space is removed from the assertion and the stored
 * `NumericString`. The assertion syntax is `SubstringAssertion`.
 * Filter components are numeric strings. `control` is ignored.
 *
 * @param assertion Presented pieces, with spaces already removed.
 * @param value Stored `NumericString`.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips space removal.
 */
export
function numericStringSubstringsMatchTyped (
    assertion: AssertedSubstring<string>[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const prepared = prepareStored(value.numericString, prepareNumeric, flags, RULE);
    if (prepared === undefined) {
        return undefined;
    }
    return matchPreparedString(assertion, prepared, value, flags, RULE);
}

numericStringSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * Decode a `SubstringAssertion` without removing spaces from its pieces.
 */
export
function decodeNumericStringSubstringsMatchAssertion (
    el: ASN1Element,
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeDirectoryAssertionPieces(el, RULE, flags);
}

/**
 * Decode the `NumericString` `strings` of a substrings filter item
 * without removing spaces.
 */
export
function decodeNumericStringSubstringsMatchFilterPieces (
    items: FilterItem_substrings_strings_Item[],
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeFilterPieces(items, (el) => el.numericString, RULE, flags);
}

/**
 * Remove every space from each presented piece once.
 */
export
function normalizeNumericStringSubstringsMatchAssertion (
    assertion: readonly AssertedSubstring<string>[] | IterableIterator<AssertedSubstring<string>>,
    el?: ASN1Element,
): AssertedSubstring<string>[] {
    return normalizePieces(assertion, prepareNumeric, RULE, el);
}

/**
 * `numericStringSubstringsMatch` as a `Matcher`.
 */
export
const numericStringSubstringsMatch: Matcher = createSubstringsMatcher(
    decodeNumericStringSubstringsMatchAssertion,
    numericStringSubstringsMatchTyped,
    decodeNumericStringSubstringsMatchFilterPieces,
    normalizeNumericStringSubstringsMatchAssertion,
);

export default numericStringSubstringsMatch;
