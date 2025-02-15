import SubstringsMatcher from "../../types/SubstringsMatcher";
import SubstringSelection from "../../types/SubstringSelection";
import type { ASN1Element } from "asn1-ts";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
} from "../../modules/SelectedAttributeTypes/TelephoneNumber.ta";
import {
    SubstringAssertion,
    _decode_SubstringAssertion,
} from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta";
import directoryStringToString from "../../stringifiers/directoryStringToString";

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
        }
    });
}

export default telephoneNumberSubstringsMatch;
