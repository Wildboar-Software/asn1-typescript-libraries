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
import {
    directoryAssertionPieces,
    filterPieces,
    matchPreparedString,
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
    const prepared = prepareStored(_decode_TelephoneNumber(value), prepareTelephone, flags);
    if (prepared === undefined) {
        return undefined;
    }
    return matchPreparedString(assertion, prepared, value, flags);
}

telephoneNumberSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * `telephoneNumberSubstringsMatch` as a `Matcher`.
 */
export
const telephoneNumberSubstringsMatch: Matcher = createSubstringsMatcher(
    (el) => directoryAssertionPieces(el, prepareTelephone, RULE),
    telephoneNumberSubstringsMatchTyped,
    (items) => filterPieces(
        items,
        (el) => _decode_TelephoneNumber(el),
        prepareTelephone,
        RULE,
    ),
);

export default telephoneNumberSubstringsMatch;
