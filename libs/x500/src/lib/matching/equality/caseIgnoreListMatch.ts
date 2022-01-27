import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta";
import directoryStringToString from "../../stringifiers/directoryStringToString";

export
const caseIgnoreListMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const aElements = assertion.sequence;
    const vElements = value.sequence;
    if (aElements.length !== vElements.length) {
        return false;
    }
    const a: string[] = aElements.map((a) => directoryStringToString(_decode_UDS(a)).trim().toLowerCase());
    const v: string[] = vElements.map((v) => directoryStringToString(_decode_UDS(v)).trim().toLowerCase());
    return a.every((x, i) => (x === v[i]));
}

export default caseIgnoreListMatch;
