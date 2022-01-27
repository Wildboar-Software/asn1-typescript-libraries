import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta";
import directoryStringToString from "../../stringifiers/directoryStringToString";

export
const caseExactMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string = directoryStringToString(_decode_UDS(assertion)).trim();
    const v: string = directoryStringToString(_decode_UDS(value)).trim();
    return (a === v);
}

export default caseExactMatch;
