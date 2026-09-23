import SubstringsMatcher from "../../types/SubstringsMatcher.mjs";
import SubstringSelection from "../../types/SubstringSelection.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";;
import { prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.9 `storedPrefixMatch`.
 *
 * TRUE iff the *stored* `UnboundedDirectoryString` is an initial
 * substring of the *presented* value (reversed from ordinary
 * substring match). Case and insignificant spaces are ignored
 * (clause 7.6). Typical use: stored area codes vs a presented
 * telephone number.
 */
export
const storedPrefixMatch: SubstringsMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
): boolean => {
    let a: string = directoryStringToString(_decode_UDS(assertion));
    let v: string = directoryStringToString(_decode_UDS(value));
    if (v.startsWith(a)) {
        return true;
    }
    const preparedA = prepString(a);
    const preparedV = prepString(v);
    if (preparedA === undefined || preparedV === undefined) {
        return false;
    }
    if (preparedA.length > preparedV.length) {
        return false;
    }
    return preparedV.toUpperCase().startsWith(preparedA.toUpperCase());
}

export default storedPrefixMatch;
