import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.8 `telephoneNumberMatch`.
 *
 * Equality of `TelephoneNumber` (clause 6.7.1). Same as
 * `caseIgnoreMatch` except hyphens and spaces are insignificant
 * and are removed during insignificant-character removal.
 */
export
const telephoneNumberMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: TelephoneNumber | undefined = prepString(_decode_TelephoneNumber(assertion), {
        caseFold: true,
        insignificant: "telephone",
    });
    const v: TelephoneNumber | undefined = prepString(_decode_TelephoneNumber(value), {
        caseFold: true,
        insignificant: "telephone",
    });
    if ((a === undefined) || (v === undefined)) {
        return false;
    }
    return (a === v);
}

export default telephoneNumberMatch;
