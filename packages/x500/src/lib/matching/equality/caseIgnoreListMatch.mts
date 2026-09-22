import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.7 `caseIgnoreListMatch`.
 *
 * Equality of a SEQUENCE OF `UnboundedDirectoryString` (e.g.
 * postal address lines). TRUE iff both sequences have the same
 * number of strings and corresponding strings match as for
 * `caseIgnoreMatch` (case and insignificant spaces ignored).
 */
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
        const a: string | undefined = prepString(
            directoryStringToString(_decode_UDS(aElements[i])),
            { caseFold: true },
        );
        const v: string | undefined = prepString(
            directoryStringToString(_decode_UDS(vElements[i])),
            { caseFold: true },
        );
        if ((a === undefined) || (v === undefined) || (a !== v)) {
            return false;
        }
    }
    return true;
}

export default caseIgnoreListMatch;
