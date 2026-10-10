/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxPermittedIntegrityProtectionAlgorithmsLength } from "./maxPermittedIntegrityProtectionAlgorithmsLength.va.mjs";

/**
 * @summary PermittedIntegrityProtectionAlgorithms
 * @description
 *
 * Complete PermittedIntegrityProtectionAlgorithms from 3GPP TS 25.413, encoded
 * as mandated there. Padding bits, if needed, occupy the least significant bits
 * of the last octet. Size 1..9 octets.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PermittedIntegrityProtectionAlgorithms  ::= 
 *     OCTET STRING (SIZE (1..maxPermittedIntegrityProtectionAlgorithmsLength))
 * ```
 */
export
type PermittedIntegrityProtectionAlgorithms = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) PermittedIntegrityProtectionAlgorithms
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PermittedIntegrityProtectionAlgorithms = (el: _Element): PermittedIntegrityProtectionAlgorithms => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > maxPermittedIntegrityProtectionAlgorithmsLength) {
        throw new ASN1SizeError("PermittedIntegrityProtectionAlgorithms violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) PermittedIntegrityProtectionAlgorithms into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PermittedIntegrityProtectionAlgorithms, encoded as an ASN.1 Element.
 */
export const _encode_PermittedIntegrityProtectionAlgorithms = $._encodeOctetString;


/* eslint-enable */
