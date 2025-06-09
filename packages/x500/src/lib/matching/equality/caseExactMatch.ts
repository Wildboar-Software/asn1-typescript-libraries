import EqualityMatcher from "../../types/EqualityMatcher.js";
import type { ASN1Element } from "asn1-ts";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.js";
import directoryStringToString from "../../stringifiers/directoryStringToString.js";;
import { prepString } from "../../utils/prepString.js";

export
const caseExactMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string | undefined = prepString(directoryStringToString(_decode_UDS(assertion)));
    const v: string | undefined = prepString(directoryStringToString(_decode_UDS(value)));
    if (a === undefined) {
        return false;
        // throw new Error("667bfe02-8698-4d7a-8a47-16fe2657d91f: Invalid characters in caseExactMatch assertion.");
    }
    if (v === undefined) {
        return false;
    }
    return (a === v);
}

export default caseExactMatch;
