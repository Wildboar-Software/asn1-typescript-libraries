import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta";
import directoryStringToString from "../../stringifiers/directoryStringToString";

export
const directoryStringFirstComponentMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string = directoryStringToString(_decode_UDS(assertion)).trim().toLowerCase();
    const v: string = directoryStringToString(_decode_UDS(value.sequence[0])).trim().toLowerCase();
    return (a === v);
}

export default directoryStringFirstComponentMatch;
