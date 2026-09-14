import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    SubstringAssertion,
    _decode_SubstringAssertion,
} from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";;

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.3
 * `caseIgnoreIA5SubstringsMatch` (LDAP-defined).
 *
 * Substring match of an IA5String stored value against a
 * `SubstringAssertion` after string preparation (clause 7.2). Same
 * partitioning rules as `caseIgnoreSubstringsMatch` (clause
 * 8.1.3).
 */
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
