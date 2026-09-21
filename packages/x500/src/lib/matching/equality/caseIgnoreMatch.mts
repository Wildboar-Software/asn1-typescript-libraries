import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.1 `caseIgnoreMatch`.
 *
 * Equality match of `UnboundedDirectoryString` /
 * `DirectoryString` after string preparation (clause 7). Case is
 * ignored (upper-case folded as in clause 7.2) and insignificant
 * spaces are removed (clause 7.6). TRUE iff the prepared strings
 * have the same length and identical corresponding characters.
 *
 * Used as the equality rule for many selected attribute types
 * (e.g. `commonName`, `organizationName`).
 */
export
const caseIgnoreMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string | undefined = prepString(
        directoryStringToString(_decode_UDS(assertion)),
        { caseFold: true },
    );
    const v: string | undefined = prepString(
        directoryStringToString(_decode_UDS(value)),
        { caseFold: true },
    );
    if ((a === undefined) || (v === undefined)) {
        return false;
    }
    return (a === v);
}

export default caseIgnoreMatch;
