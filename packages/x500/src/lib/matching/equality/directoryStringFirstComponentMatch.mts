import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "asn1-ts";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";;
import { prepString } from "../../utils/prepString.mjs";

export
const directoryStringFirstComponentMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const v0 = value.sequence[0];
    if (!v0) {
        return false;
    }
    const a: string | undefined = prepString(directoryStringToString(_decode_UDS(assertion)));
    const v: string | undefined = prepString(directoryStringToString(_decode_UDS(v0)));
    if (a === undefined) {
        return false;
        // throw new Error("b9f14526-160b-4c83-b59c-a98ce4453f39: Invalid characters in directoryStringFirstComponentMatch assertion.");
    }
    if (v === undefined) {
        return false;
    }
    return (a.toLowerCase() === v.toLowerCase());
}

export default directoryStringFirstComponentMatch;
