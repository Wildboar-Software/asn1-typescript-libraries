import { Buffer } from "node:buffer";
import { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.6
 * `octetStringOrderingMatch`.
 *
 * Octets are compared left-to-right, MSB to LSB within an octet.
 * The first differing bit decides order (0 precedes 1). If one
 * string is a prefix of the other, the shorter precedes the
 * longer.
 *
 * Each argument may be an `ASN1Element` or a `Uint8Array`.
 */
export
function octetStringOrderingMatch (
    assertion: ASN1Element | Uint8Array,
    value: ASN1Element | Uint8Array,
): number {
    const presented = ASN1Element.isElement(assertion) ? assertion.octetString : assertion;
    const stored = ASN1Element.isElement(value) ? value.octetString : value;
    return Buffer.compare(presented, stored);
}

export default octetStringOrderingMatch;
