import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import type {
    FacsimileTelephoneNumber,
} from "../../modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import { telephoneNumberMatchTyped } from "./telephoneNumberMatch.mjs";
import { normalizeTelephoneNumber } from "../insignificant.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/** Element, decoded facsimile number, or the telephone number string. */
type FacsimileNumberInput = ASN1Element | FacsimileTelephoneNumber | string;

/**
 * Telephone number from a `TelephoneNumber`, a
 * `FacsimileTelephoneNumber` (its `telephoneNumber` component), or
 * that string already. Facsimile `parameters` are ignored.
 */
function readFacsimileNumber (value: FacsimileNumberInput): string {
    if (typeof value === "string") {
        return value;
    }
    if (!ASN1Element.isElement(value)) {
        return value.telephoneNumber;
    }
    if (
        value.tagClass === ASN1TagClass.universal
        && value.tagNumber === ASN1UniversalType.sequence
    ) {
        return _decode_TelephoneNumber(value.sequence[0]);
    }
    return value.printableString;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.13 `facsimileNumberMatch`.
 *
 * Compares the telephone number in a presented value with the
 * telephone number in a stored value. The `parameters` element of
 * a `FacsimileTelephoneNumber` is not evaluated. Matching of that
 * number is as for `telephoneNumberMatch`.
 *
 * @param assertion Presented number, with hyphens and spaces already removed.
 * @param value Stored facsimile or telephone number. A decoded
 *  `FacsimileTelephoneNumber` is accepted.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips hyphen and space removal.
 */
export
function facsimileNumberMatchTyped (
    assertion: string,
    value: FacsimileNumberInput,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    return telephoneNumberMatchTyped(
        assertion,
        readFacsimileNumber(value),
        getEqualityMatcher,
        flags,
    );
}

facsimileNumberMatchTyped satisfies TypedEquationFunction<string>;

/**
 * Decode the telephone number of the presented facsimile or telephone
 * number without removing hyphens or spaces.
 */
export
function decodeFacsimileNumberMatchAssertion (el: ASN1Element): string {
    return readFacsimileNumber(el);
}

/**
 * Remove hyphens and spaces from the presented telephone number.
 */
export
function normalizeFacsimileNumberMatchAssertion (assertion: string): string {
    return normalizeTelephoneNumber(assertion);
}

/**
 * `facsimileNumberMatch` as a `Matcher`.
 * `MATCH_FLAG_ASSERTION_NORMALIZED` skips hyphen and space removal from
 * the assertion.
 */
export
const facsimileNumberMatch: Matcher = createEqualityMatcher(
    decodeFacsimileNumberMatchAssertion,
    facsimileNumberMatchTyped,
    undefined,
    true,
    normalizeFacsimileNumberMatchAssertion,
);

export default facsimileNumberMatch;
