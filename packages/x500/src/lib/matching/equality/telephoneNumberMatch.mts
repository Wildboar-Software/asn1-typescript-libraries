import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";

function normalizeTelephoneNumber (telephoneNumber: TelephoneNumber): string {
    return telephoneNumber.replace(/[- ]/g, "");
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.8 `telephoneNumberMatch`.
 *
 * Equality of `TelephoneNumber` (clause 6.7.1). Same as
 * `caseIgnoreMatch` except hyphens and spaces are insignificant
 * and are removed during insignificant-character removal.
 * 
 * DEVIATION: We do not lowercase the telephone number, because it is forbidden
 * from containing alphabetic characters anyway.
 */
export
const telephoneNumberMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string = normalizeTelephoneNumber(
        _decode_TelephoneNumber(assertion),
    );
    const v: string = normalizeTelephoneNumber(
        _decode_TelephoneNumber(value),
    );
    return (a === v);
}

export default telephoneNumberMatch;
