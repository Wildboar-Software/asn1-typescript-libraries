import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";;

export
const caseIgnoreOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: string = directoryStringToString(_decode_UDS(assertion)).trim().toLowerCase();
    const v: string = directoryStringToString(_decode_UDS(value)).trim().toLowerCase();
    return a.localeCompare(v);
}

export default caseIgnoreOrderingMatch;
