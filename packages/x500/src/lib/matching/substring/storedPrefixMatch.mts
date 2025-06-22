import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";;
import { prepString } from "../../utils/prepString.mjs";

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
