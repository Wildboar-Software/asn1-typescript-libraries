import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
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

const RULE = "facsimileNumberSubstringsMatch";

/** Same insignificant-character removal as `telephoneNumberMatch`. */
const prepareTelephone: StringPreparer = (raw) => {
    const normalized = normalizeTelephoneNumber(raw);
    return normalized.length > 0 ? normalized : undefined;
};

/**
 * Telephone number from a `FacsimileTelephoneNumber` or a bare
 * `TelephoneNumber`. `parameters` is not part of the match.
 */
function readFacsimileNumber (el: ASN1Element): string {
    if (
        el.tagClass === ASN1TagClass.universal
        && el.tagNumber === ASN1UniversalType.sequence
    ) {
        return _decode_TelephoneNumber(el.sequence[0]);
    }
    return _decode_TelephoneNumber(el);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.14
 * `facsimileNumberSubstringsMatch`.
 *
 * Substring-matches the `telephoneNumber` of a stored
 * `FacsimileTelephoneNumber`. `parameters` is ignored. The number
 * is matched as for `telephoneNumberSubstringsMatch`. The assertion
 * syntax is `SubstringAssertion`. A filter component may be the
 * facsimile sequence or a bare telephone number.
 *
 * @param assertion Presented pieces, with hyphens and spaces removed.
 * @param value Stored facsimile number.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips hyphen and space removal.
 */
export
function facsimileNumberSubstringsMatchTyped (
    assertion: AssertedSubstring<string>[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const prepared = prepareStored(readFacsimileNumber(value), prepareTelephone, flags, RULE);
    if (prepared === undefined) {
        return undefined;
    }
    return matchPreparedString(assertion, prepared, value, flags, RULE);
}

facsimileNumberSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * Decode a `SubstringAssertion` without removing hyphens or spaces
 * from its pieces.
 */
export
function decodeFacsimileNumberSubstringsMatchAssertion (
    el: ASN1Element,
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeDirectoryAssertionPieces(el, RULE, flags);
}

/**
 * Decode the facsimile or telephone number `strings` of a substrings
 * filter item without removing hyphens or spaces.
 */
export
function decodeFacsimileNumberSubstringsMatchFilterPieces (
    items: FilterItem_substrings_strings_Item[],
    flags: number = 0,
): AssertedSubstring<string>[] {
    return decodeFilterPieces(items, readFacsimileNumber, RULE, flags);
}

/**
 * Remove hyphens and spaces from each presented piece once.
 */
export
function normalizeFacsimileNumberSubstringsMatchAssertion (
    assertion: readonly AssertedSubstring<string>[] | IterableIterator<AssertedSubstring<string>>,
    el?: ASN1Element,
): AssertedSubstring<string>[] {
    return normalizePieces(assertion, prepareTelephone, RULE, el);
}

/**
 * `facsimileNumberSubstringsMatch` as a `Matcher`.
 */
export
const facsimileNumberSubstringsMatch: Matcher = createSubstringsMatcher(
    decodeFacsimileNumberSubstringsMatchAssertion,
    facsimileNumberSubstringsMatchTyped,
    decodeFacsimileNumberSubstringsMatchFilterPieces,
    normalizeFacsimileNumberSubstringsMatchAssertion,
);

export default facsimileNumberSubstringsMatch;
