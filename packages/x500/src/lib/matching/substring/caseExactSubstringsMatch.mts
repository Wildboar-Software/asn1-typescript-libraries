import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";
import {
    createSubstringsMatcher,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
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
    prepareDirectoryPiecesFromElement,
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
    const prepared = (flags & MATCH_FLAG_VALUE_NORMALIZED)
        ? readDirectoryString(value)
        : readDirectoryString(value, {});
    if (prepared === undefined || prepared.length === 0) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                `@wildboar/x500: debug: ${RULE}: stored value failed string preparation`,
            );
        }
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
    if (el) {
        return prepareDirectoryPiecesFromElement(el, {}, RULE);
    }
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
