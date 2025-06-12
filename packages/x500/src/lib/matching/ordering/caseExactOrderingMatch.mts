import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element } from "asn1-ts";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";;

export
const caseExactOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: string = directoryStringToString(_decode_UDS(assertion)).trim();
    const v: string = directoryStringToString(_decode_UDS(value)).trim();
    return a.localeCompare(v);
}

export default caseExactOrderingMatch;
