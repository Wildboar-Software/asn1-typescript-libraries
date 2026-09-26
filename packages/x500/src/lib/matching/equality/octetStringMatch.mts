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
    return octetStringMatchTyped(
        ASN1Element.isElement(assertion) ? assertion.octetString : assertion,
        ASN1Element.isElement(value) ? value.octetString : value,
    );
}

/**
 * `octetStringMatch` on two byte strings.
 *
 * @param assertion Presented octets.
 * @param value Stored octets.
 * @returns `true` when the octets are identical.
 */
export
function octetStringMatchTyped (assertion: Uint8Array, value: Uint8Array): boolean {
    return Buffer.compare(assertion, value) === 0;
}

export default octetStringMatch;
