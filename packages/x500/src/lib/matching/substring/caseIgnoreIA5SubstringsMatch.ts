import SubstringsMatcher from "../../types/SubstringsMatcher.js";
import SubstringSelection from "../../types/SubstringSelection.js";
import type { ASN1Element } from "asn1-ts";
import {
    SubstringAssertion,
    _decode_SubstringAssertion,
} from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.js";
import directoryStringToString from "../../stringifiers/directoryStringToString.js";;

export
const caseIgnoreIA5SubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const a: SubstringAssertion = _decode_SubstringAssertion(assertion);
    const v: string = value.ia5String;
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
            // We don't understand this match.
            return false;
        }
    });
}

export default caseIgnoreIA5SubstringsMatch;
