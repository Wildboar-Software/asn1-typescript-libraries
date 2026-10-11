import { Buffer } from "node:buffer";
import { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.5 `octetStringMatch`.
 *
 * TRUE iff the OCTET STRING values have the same length and
 * identical corresponding octets.
 *
 * Each argument may be an `ASN1Element` or a `Uint8Array`.
 */
export
function octetStringMatch (
    assertion: ASN1Element | Uint8Array,
    value: ASN1Element | Uint8Array,
): boolean {
    const presented = ASN1Element.isElement(assertion) ? assertion.octetString : assertion;
    const stored = ASN1Element.isElement(value) ? value.octetString : value;
    return Buffer.compare(presented, stored) === 0;
}

export default octetStringMatch;
