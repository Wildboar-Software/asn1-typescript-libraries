import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    _decode_UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { directoryStringToString } from "../../stringifiers/directoryStringToString.mjs";
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
    decodeDirectoryFilterPieces,
    matchPreparedString,
    normalizePieces,
    prepareStored,
    type StringPreparer,
} from "./prepareSubstrings.mjs";

const RULE = "caseExactSubstringsMatch";

/** Insignificant spaces removed; case is significant (clause 7.6). */
const prepareExact: StringPreparer = (raw) => prepString(raw);

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseExactSubstringsMatch`.
 *
 * TRUE when the stored `DirectoryString` can be partitioned so the
 * presented `initial` / `any` / `final` pieces match successive
 * portions in order. Pieces do not overlap. Case is significant.
 * Insignificant spaces are removed (clause 7.6). `control` is
 * ignored. Preparation failure of a stored value is UNDEFINED.
 * An assertion that cannot be prepared throws `ASN1CharactersError`.
 *
 * @param assertion Presented pieces, already prepared.
 * @param value Stored directory string.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseExactSubstringsMatchTyped (
    assertion: AssertedSubstring<string>[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = directoryStringToString(_decode_UnboundedDirectoryString(value));
    const prepared = prepareStored(raw, prepareExact, flags, RULE);
    if (prepared === undefined) {
        return undefined;
    }
    return matchPreparedString(assertion, prepared, value, flags, RULE);
}

caseExactSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * Decode a `SubstringAssertion` without preparing its pieces.
 */
export
function decodeCaseExactSubstringsMatchAssertion (
    el: ASN1Element,
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeDirectoryAssertionPieces(el, RULE, flags);
}

/**
 * Decode the `strings` of a substrings filter item without preparing them.
 */
export
function decodeCaseExactSubstringsMatchFilterPieces (
    items: FilterItem_substrings_strings_Item[],
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeDirectoryFilterPieces(items, RULE, flags);
}

/**
 * Prepare each presented piece once.
 */
export
function normalizeCaseExactSubstringsMatchAssertion (
    assertion: AssertedSubstring<string>[],
    el?: ASN1Element,
): AssertedSubstring<string>[] {
    return normalizePieces(assertion, prepareExact, RULE, el);
}

/**
 * `caseExactSubstringsMatch` as a `Matcher`. The assertion is a
 * `SubstringAssertion`, or the `strings` of a substrings filter
 * item (directory strings). `MATCH_FLAG_ASSERTION_NORMALIZED` skips
 * preparation of the assertion.
 */
export
const caseExactSubstringsMatch: Matcher = createSubstringsMatcher(
    decodeCaseExactSubstringsMatchAssertion,
    caseExactSubstringsMatchTyped,
    decodeCaseExactSubstringsMatchFilterPieces,
    normalizeCaseExactSubstringsMatchAssertion,
);

export default caseExactSubstringsMatch;
