/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CipheringAlgorithm
 * @description
 *
 * One octet: permitted algorithms in encryption information as in 3GPP TS
 * 48.008. Bits 8–1: no encryption, GSM A5/1 through A5/7 (3GPP TS 29.002
 * V19.1.0 clause 17.7.12).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CipheringAlgorithm  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type CipheringAlgorithm = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) CipheringAlgorithm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CipheringAlgorithm = (el: _Element): CipheringAlgorithm => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("CipheringAlgorithm violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CipheringAlgorithm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CipheringAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_CipheringAlgorithm = $._encodeOctetString;


/* eslint-enable */
