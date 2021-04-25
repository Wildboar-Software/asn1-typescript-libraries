import SubstringsMatcher from "../../types/SubstringsMatcher";
import SubstringSelection from "../../types/SubstringSelection";
import type { ASN1Element } from "asn1-ts";
import {
    OctetSubstringAssertion,
    _decode_OctetSubstringAssertion,
} from "../../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta";

export
const octetStringSubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const v: Uint8Array = value.octetString;
    const osa: OctetSubstringAssertion = _decode_OctetSubstringAssertion(assertion);
    return osa.every((o) => { // REVIEW: Not really clear whether this should be .every() or .some().
        if ("initial" in o) {
            if (v.length < o.initial.length) {
                return false;
            }
            for (let i = 0; i < o.initial.length; i++) {
                if (o.initial[i] !== v[i]) {
                    return false;
                }
            }
            return true;
        } else if ("any_" in o) {
            const any_ = Buffer.from(o.any_).toString("base64");
            const base64 = Buffer.from(v).toString("base64");
            return (base64.indexOf(any_) > -1);
        } else if ("final" in o) {
            if (v.length < o.final.length) {
                return false;
            }
            for (let i = (v.length - o.final.length); i < o.final.length; i++) {
                if (o.final[i] !== v[i]) {
                    return false;
                }
            }
            return true;
        } else {
            throw new Error();
        }
    });
}

export default octetStringSubstringsMatch;
