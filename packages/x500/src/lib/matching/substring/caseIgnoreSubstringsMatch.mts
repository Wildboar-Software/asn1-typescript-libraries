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

const RULE = "caseIgnoreSubstringsMatch";

/** Case-fold, then remove insignificant spaces (clauses 7.2 and 7.6). */
const prepareIgnore: StringPreparer = (raw) => prepString(raw, { caseFold: true });

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseIgnoreSubstringsMatch`.
 *
 * Same partitioning as `caseExactSubstringsMatch`. Upper-case is
 * folded during string preparation (clause 7.2). `control` is
 * ignored. Preparation failure of a stored value is UNDEFINED.
 * An assertion that cannot be prepared throws `ASN1CharactersError`.
 *
 * @param assertion Presented pieces, already prepared and case-folded.
 * @param value Stored directory string.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseIgnoreSubstringsMatchTyped (
    assertion: AssertedSubstring<string>[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const prepared = (flags & MATCH_FLAG_VALUE_NORMALIZED)
        ? readDirectoryString(value)
        : readDirectoryString(value, { caseFold: true });
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

caseIgnoreSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * Decode a `SubstringAssertion` without preparing its pieces.
 */
export
function decodeCaseIgnoreSubstringsMatchAssertion (
    el: ASN1Element,
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeDirectoryAssertionPieces(el, RULE, flags);
}

/**
 * Decode the `strings` of a substrings filter item without preparing them.
 */
export
function decodeCaseIgnoreSubstringsMatchFilterPieces (
    items: FilterItem_substrings_strings_Item[],
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeDirectoryFilterPieces(items, RULE, flags);
}

/**
 * Prepare and case-fold each presented piece once.
 */
export
function normalizeCaseIgnoreSubstringsMatchAssertion (
    assertion: AssertedSubstring<string>[],
    el?: ASN1Element,
): AssertedSubstring<string>[] {
    if (el) {
        return prepareDirectoryPiecesFromElement(el, { caseFold: true }, RULE);
    }
    return normalizePieces(assertion, prepareIgnore, RULE, el);
}

/**
 * `caseIgnoreSubstringsMatch` as a `Matcher`. The assertion is a
 * `SubstringAssertion`, or the `strings` of a substrings filter
 * item (directory strings). `MATCH_FLAG_ASSERTION_NORMALIZED` skips
 * preparation of the assertion.
 */
export
const caseIgnoreSubstringsMatch: Matcher = createSubstringsMatcher(
    decodeCaseIgnoreSubstringsMatchAssertion,
    caseIgnoreSubstringsMatchTyped,
    decodeCaseIgnoreSubstringsMatchFilterPieces,
    normalizeCaseIgnoreSubstringsMatchAssertion,
);

export default caseIgnoreSubstringsMatch;
