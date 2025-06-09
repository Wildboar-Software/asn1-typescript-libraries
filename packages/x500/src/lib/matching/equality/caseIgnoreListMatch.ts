import EqualityMatcher from "../../types/EqualityMatcher.js";
import type { ASN1Element } from "asn1-ts";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.js";
import directoryStringToString from "../../stringifiers/directoryStringToString.js";;
import { prepString } from "../../utils/prepString.js";

export
const caseIgnoreListMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const aElements = assertion.sequenceOf;
    const vElements = value.sequenceOf;
    if (aElements.length !== vElements.length) {
        return false;
    }
    for (let i = 0; i < aElements.length; i++) {
        const a: string | undefined = prepString(directoryStringToString(_decode_UDS(aElements[i])).toLowerCase());
        const v: string | undefined = prepString(directoryStringToString(_decode_UDS(vElements[i])).toLowerCase());
        if (a === undefined) {
            return false;
            // throw new Error(
                // `0a2f86ed-6db0-46bb-b9ab-b023920b66da: Invalid characters in caseIgnoreListMatch assertion, line ${(i + 1)}.`
            // );
        }
        if (v === undefined) {
            return false;
        }
        if (a !== v) {
            return false;
        }
    }
    return true;
}

export default caseIgnoreListMatch;
