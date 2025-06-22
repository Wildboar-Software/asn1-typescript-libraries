import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";;
import { prepString } from "../../utils/prepString.mjs";

export
const caseIgnoreMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string | undefined = prepString(directoryStringToString(_decode_UDS(assertion)));
    const v: string | undefined = prepString(directoryStringToString(_decode_UDS(value)));
    if (a === undefined) {
        return false;
        // throw new Error("cdf4ca97-db0c-450c-87e7-74d826b9ed2a: Invalid characters in caseIgnoreMatch assertion.");
    }
    if (v === undefined) {
        return false;
    }
    // The specification specifically says that you lowercase prior to comparison.
    return (a.toLowerCase() === v.toLowerCase());
}

export default caseIgnoreMatch;
