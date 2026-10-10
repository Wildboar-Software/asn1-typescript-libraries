/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxPermittedEncryptionAlgorithmsLength } from "./maxPermittedEncryptionAlgorithmsLength.va.mjs";

/**
 * @summary PermittedEncryptionAlgorithms
 * @description
 *
 * Complete PermittedEncryptionAlgorithms from 3GPP TS 25.413, encoded as
 * mandated there. Padding bits, if needed, occupy the least significant bits of
 * the last octet. Size 1..9 octets.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.6.14 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PermittedEncryptionAlgorithms  ::= 
 *     OCTET STRING (SIZE (1..maxPermittedEncryptionAlgorithmsLength))
 * ```
 */
export
type PermittedEncryptionAlgorithms = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) PermittedEncryptionAlgorithms
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PermittedEncryptionAlgorithms = (el: _Element): PermittedEncryptionAlgorithms => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > maxPermittedEncryptionAlgorithmsLength) {
        throw new ASN1SizeError("PermittedEncryptionAlgorithms violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) PermittedEncryptionAlgorithms into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PermittedEncryptionAlgorithms, encoded as an ASN.1 Element.
 */
export const _encode_PermittedEncryptionAlgorithms = $._encodeOctetString;


/* eslint-enable */
