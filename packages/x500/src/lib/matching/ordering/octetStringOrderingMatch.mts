import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.6
 * `octetStringOrderingMatch`.
 *
 * Octets are compared left-to-right, MSB to LSB within an octet.
 * The first differing bit decides order (0 precedes 1). If one
 * string is a prefix of the other, the shorter precedes the
 * longer.
 */
export
const octetStringOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    return Buffer.compare(assertion.octetString, value.octetString);
}

export default octetStringOrderingMatch;
