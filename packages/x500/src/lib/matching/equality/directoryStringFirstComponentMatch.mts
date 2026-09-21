import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    _decode_UnboundedDirectoryString as _decode_UDS,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.4.3
 * `directoryStringFirstComponentMatch`.
 *
 * Compares a presented `UnboundedDirectoryString` with a SEQUENCE
 * whose first component is a mandatory `DirectoryString`. TRUE iff
 * that first component matches via `caseIgnoreMatch`. The
 * assertion syntax is derived from the first SEQUENCE component.
 */
export
const directoryStringFirstComponentMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const v0 = value.sequence[0];
    if (!v0) {
        return false;
    }
    const a: string | undefined = prepString(
        directoryStringToString(_decode_UDS(assertion)),
        { caseFold: true },
    );
    const v: string | undefined = prepString(
        directoryStringToString(_decode_UDS(v0)),
        { caseFold: true },
    );
    if ((a === undefined) || (v === undefined)) {
        return false;
    }
    return (a === v);
}

export default directoryStringFirstComponentMatch;
