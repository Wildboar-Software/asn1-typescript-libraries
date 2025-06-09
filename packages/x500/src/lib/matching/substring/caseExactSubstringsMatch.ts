import SubstringsMatcher from "../../types/SubstringsMatcher.js";
import SubstringSelection from "../../types/SubstringSelection.js";
import type { ASN1Element } from "asn1-ts";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.js";
import directoryStringToString from "../../stringifiers/directoryStringToString.js";;

export
const caseExactSubstringsMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    const sel: SubstringSelection = selection ?? SubstringSelection.any_;
    const a: string = directoryStringToString(_decode_UDS(assertion));
    const v: string = directoryStringToString(_decode_UDS(value));
    switch (sel) {
        case (SubstringSelection.initial): {
            return v.startsWith(a);
        }
        case (SubstringSelection.any_): {
            return (v.indexOf(a) > -1);
        }
        case (SubstringSelection.final): {
            return v.endsWith(a);
        }
        default: {
            return false;
        }
    }

}

export default caseExactSubstringsMatch;
