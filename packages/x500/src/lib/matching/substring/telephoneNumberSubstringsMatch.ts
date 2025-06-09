import SubstringsMatcher from "../../types/SubstringsMatcher.js";
import SubstringSelection from "../../types/SubstringSelection.js";
import type { ASN1Element } from "asn1-ts";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta.js";
import {
    SubstringAssertion,
    _decode_SubstringAssertion,
} from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.js";
import directoryStringToString from "../../stringifiers/directoryStringToString.js";;

export
const telephoneNumberSubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const a: SubstringAssertion = _decode_SubstringAssertion(assertion);
    const v: TelephoneNumber = _decode_TelephoneNumber(value).replace(/\D/g, "");
    return a.every((str) => {
        if ("initial" in str) {
            const ass: string = directoryStringToString(str.initial);
            return v.startsWith(ass);
        } else if ("any_" in str) {
            const ass: string = directoryStringToString(str.any_);
            return (v.indexOf(ass) > -1);
        } else if ("final" in str) {
            const ass: string = directoryStringToString(str.final);
            return v.endsWith(ass);
        } else {
            // FIXME: This is not the correct behavior. This should return UNDEFINED.
            // We don't understand this match.
            return false;
        }
    });
}

export default telephoneNumberSubstringsMatch;
