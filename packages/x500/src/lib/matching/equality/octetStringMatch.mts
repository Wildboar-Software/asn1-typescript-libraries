import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.5 `octetStringMatch`.
 *
 * TRUE iff the OCTET STRING values have the same length and
 * identical corresponding octets.
 */
export
const octetStringMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: Uint8Array = assertion.octetString;
    const v: Uint8Array = value.octetString;
    return !Buffer.compare(a, v);
}

export default octetStringMatch;
