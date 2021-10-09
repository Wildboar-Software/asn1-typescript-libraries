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
    return a.localeCompare(v);
}

export default caseIgnoreOrderingMatch;
