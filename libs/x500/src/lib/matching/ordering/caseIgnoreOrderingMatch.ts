import OrderingMatcher from "../../types/OrderingMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta";
import directoryStringToString from "../../stringifiers/directoryStringToString";

export
const caseIgnoreOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: string = directoryStringToString(_decode_UDS(assertion)).toLowerCase();
    const v: string = directoryStringToString(_decode_UDS(value)).toLowerCase();
    if (a === v) {
        return 0;
    }
    const min: number = Math.min(a.length, v.length);
    for (let i = 0; i < min; i++) {
        const charA = a.charCodeAt(i);
        const charV = v.charCodeAt(i);
        if (charA !== charV) {
            return (charV - charA);
        }
    }
    return (v.length - a.length);
}

export default caseIgnoreOrderingMatch;
