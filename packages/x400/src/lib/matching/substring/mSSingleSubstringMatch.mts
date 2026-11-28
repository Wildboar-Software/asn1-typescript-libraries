import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { FilterItem_substrings_strings_Item } from "@wildboar/x500/DirectoryAbstractService";
import {
    createEqualityMatcher,
    MATCH_FLAG_VALUE_NORMALIZED,
    type AssertedSubstring,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import {
    decodeFilterPieces,
    matchPreparedString,
    nonEmptyPiece,
    normalizePieces,
} from "@wildboar/x500/matching/substring";
import { prepareMSIgnore } from "../equality/mSSubstringsMatch.mjs";
import { decodeMSStringElement, normalizeMSString } from "../equality/orAddressUtilities.mjs";

const RULE = "mSSingleSubstringMatch";

/**
 * ITU-T Rec. X.413 (06/1999), clause 12.2.4 `mSSingleSubstringMatch`.
 *
 * Identical to `mSSubstringsMatch` except that an `MSString` assertion is
 * treated as the sole `any` component (`initial` and `final` absent).
 */
export
function mSSingleSubstringMatchTyped (
    assertion: AssertedSubstring<string>[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = decodeMSStringElement(value);
    const prepared = (flags & MATCH_FLAG_VALUE_NORMALIZED)
        ? raw
        : normalizeMSString(raw, true);
    return matchPreparedString(assertion, prepared, value, flags, RULE);
}

mSSingleSubstringMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

export
function decodeMSSingleSubstringMatchAssertion (
    el: ASN1Element,
): AssertedSubstring<string>[] {
    return [ { any_: nonEmptyPiece(decodeMSStringElement(el), RULE, el) } ];
}

export
function decodeMSSingleSubstringMatchFilterPieces (
    items: FilterItem_substrings_strings_Item[],
    flags: number = 0,
): AssertedSubstring<string>[] {
    // NOTE: `decodeFilterPieces` validates anchors via `validateAnchors`, which
    // permits `control` attributes before `initial`. Even though the specs do
    // not formally allow `control` before `initial`, permitting it respects the
    // intent of `control` and does no harm.
    return decodeFilterPieces(items, decodeMSStringElement, RULE, flags);
}

export
function normalizeMSSingleSubstringMatchAssertion (
    assertion: AssertedSubstring<string>[],
    el?: ASN1Element,
): AssertedSubstring<string>[] {
    return normalizePieces(assertion, prepareMSIgnore, RULE, el);
}

export
const mSSingleSubstringMatch: Matcher = createEqualityMatcher(
    decodeMSSingleSubstringMatchAssertion,
    mSSingleSubstringMatchTyped,
    decodeMSSingleSubstringMatchFilterPieces,
    true,
    normalizeMSSingleSubstringMatchAssertion,
);

export default mSSingleSubstringMatch;
