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
    return octetStringOrderingMatchTyped(
        ASN1Element.isElement(assertion) ? assertion.octetString : assertion,
        ASN1Element.isElement(value) ? value.octetString : value,
    );
}

/**
 * `octetStringOrderingMatch` on two byte strings.
 *
 * @param assertion Presented octets.
 * @param value Stored octets.
 * @returns Negative when `assertion` precedes `value`.
 */
export
function octetStringOrderingMatchTyped (
    assertion: Uint8Array,
    value: Uint8Array,
): number {
    return Buffer.compare(assertion, value);
}

export default octetStringOrderingMatch;
