import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";

export
const telephoneNumberMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: TelephoneNumber = _decode_TelephoneNumber(assertion).replace(/\D/g, "");
    const v: TelephoneNumber = _decode_TelephoneNumber(value).replace(/\D/g, "");
    return (a === v);
}

export default telephoneNumberMatch;
