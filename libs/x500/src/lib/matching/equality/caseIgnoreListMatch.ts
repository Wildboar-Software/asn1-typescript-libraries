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
    const a: string[] = assertion.sequence.map((a) => directoryStringToString(_decode_UDS(a)).toLowerCase());
    const v: string[] = value.sequence.map((v) => directoryStringToString(_decode_UDS(v)).toLowerCase());
    if (a.length !== v.length) {
        return false;
    }
    return a.every((x, i) => (x === v[i]));
}

export default caseIgnoreListMatch;
