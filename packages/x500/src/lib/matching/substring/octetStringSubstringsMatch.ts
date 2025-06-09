import SubstringsMatcher from "../../types/SubstringsMatcher.js";
import SubstringSelection from "../../types/SubstringSelection.js";
import type { ASN1Element } from "asn1-ts";
import {
    OctetSubstringAssertion,
    _decode_OctetSubstringAssertion,
} from "../../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta.js";

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
            return !Buffer.compare(v.subarray(0, o.initial.length), o.initial);
        } else if ("any_" in o) {
            return (Buffer.from(v.buffer).indexOf(o.any_) > -1);
        } else if ("final" in o) {
            return Buffer.from(v.buffer).compare(o.final, 0, 0, (v.length - o.final.length), v.length);
        } else {
            return false;
        }
    });
}

export default octetStringSubstringsMatch;
