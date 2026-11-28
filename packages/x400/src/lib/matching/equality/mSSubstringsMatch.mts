import {
    ASN1ConstructionError,
    ASN1TagClass,
    ASN1UniversalType,
    type ASN1Element,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import type { FilterItem_substrings_strings_Item } from "@wildboar/x500/DirectoryAbstractService";
import {
    createEqualityMatcher,
    MATCH_FLAG_ASSERTION_VALIDATED,
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
    validateAnchors,
    type StringPreparer,
} from "@wildboar/x500/matching/substring";
import { _decode_SubstringAssertion } from "@wildboar/x400/MSMatchingRules";
import {
    decodeMSStringElement,
    msStringToString,
    normalizeMSString,
} from "./orAddressUtilities.mjs";

const RULE = "mSSubstringsMatch";

export const prepareMSIgnore: StringPreparer = (raw) => {
    const s = normalizeMSString(raw, true);
    return s.length === 0 ? undefined : s;
};

/**
 * ITU-T Rec. X.413 (06/1999), clause 12.2.3 `mSSubstringsMatch`.
 */
export
function mSSubstringsMatchTyped (
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

mSSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

export
function decodeMSSubstringsMatchAssertion (
    el: ASN1Element,
    flags: number = 0,
): AssertedSubstring<string>[] {
    if (
        (el.tagClass !== ASN1TagClass.universal)
        || (el.tagNumber !== ASN1UniversalType.sequence)
    ) {
        throw new ASN1ConstructionError(`${RULE}: expected SEQUENCE`, el);
    }
    const decoded = _decode_SubstringAssertion(el);
    const out: AssertedSubstring<string>[] = new Array(decoded.length);
    for (let i = 0; i < decoded.length; i++) {
        const item = decoded[i];
        if ("initial" in item) {
            out[i] = { initial: nonEmptyPiece(msStringToString(item.initial), RULE, el) };
        } else if ("any_" in item) {
            out[i] = { any_: nonEmptyPiece(msStringToString(item.any_), RULE, el) };
        } else if ("final" in item) {
            out[i] = { final: nonEmptyPiece(msStringToString(item.final), RULE, el) };
        } else {
            throw new Error(`${RULE}: unrecognized substring alternative`);
        }
    }
    // NOTE: `validateAnchors` allows `control` attributes before `initial`
    // (relevant for `decodeMSSubstringsMatchFilterPieces` below), and rejects
    // assertions containing no `initial`, `any`, or `final` piece. Although
    // the specifications do not formally allow `control` before `initial`,
    // permitting it respects the intent of `control` and does no harm.
    validateAnchors(out, RULE, !(flags & MATCH_FLAG_ASSERTION_VALIDATED));
    return out;
}

export
function decodeMSSubstringsMatchFilterPieces (
    items: FilterItem_substrings_strings_Item[],
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeFilterPieces(items, decodeMSStringElement, RULE, flags);
}

export
function normalizeMSSubstringsMatchAssertion (
    assertion: AssertedSubstring<string>[],
    el?: ASN1Element,
): AssertedSubstring<string>[] {
    return normalizePieces(assertion, prepareMSIgnore, RULE, el);
}

export
const mSSubstringsMatch: Matcher = createEqualityMatcher(
    decodeMSSubstringsMatchAssertion,
    mSSubstringsMatchTyped,
    decodeMSSubstringsMatchFilterPieces,
    true,
    normalizeMSSubstringsMatchAssertion,
);

export default mSSubstringsMatch;
