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
import {
    directoryAssertionPieces,
    filterPieces,
    matchPreparedString,
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
    const prepared = prepareStored(readFacsimileNumber(value), prepareTelephone, flags);
    if (prepared === undefined) {
        return undefined;
    }
    return matchPreparedString(assertion, prepared, value, flags);
}

facsimileNumberSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * `facsimileNumberSubstringsMatch` as a `Matcher`.
 */
export
const facsimileNumberSubstringsMatch: Matcher = createSubstringsMatcher(
    (el) => directoryAssertionPieces(el, prepareTelephone, RULE),
    facsimileNumberSubstringsMatchTyped,
    (items) => filterPieces(items, readFacsimileNumber, prepareTelephone, RULE),
);

export default facsimileNumberSubstringsMatch;
