import SubstringsMatcher from "../../types/SubstringsMatcher.js";
import SubstringSelection from "../../types/SubstringSelection.js";
import type { ASN1Element } from "asn1-ts";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.js";
import directoryStringToString from "../../stringifiers/directoryStringToString.js";;
import { prepString } from "../../utils/prepString.js";

// This is technically a substring matching rule, even though the selection is
// ignored. See ITU Recommendation Q.1551's `providerId` attribute type as
// evidence.
export
const storedPrefixMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const a: string = prepString(directoryStringToString(_decode_UDS(assertion))).toUpperCase();
    const v: string = prepString(directoryStringToString(_decode_UDS(value))).toUpperCase();
    return v.startsWith(a);
}

export default storedPrefixMatch;
