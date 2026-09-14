import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.13 `facsimileNumberMatch`.
 *
 * Compares a presented `TelephoneNumber` with the first element of
 * a facsimile sequence (`telephoneNumber`). The `parameters`
 * element is not evaluated. Matching of that number is as for
 * `telephoneNumberMatch`.
 */
export
const facsimileNumberMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: TelephoneNumber = _decode_TelephoneNumber(assertion).replace(/\D/g, "");
    const v: TelephoneNumber = _decode_TelephoneNumber(value.sequence[0]).replace(/\D/g, "");
    return (a === v);
}

export default facsimileNumberMatch;
