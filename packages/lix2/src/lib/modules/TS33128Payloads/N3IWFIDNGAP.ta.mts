/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary N3IWFIDNGAP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N3IWFIDNGAP  ::=  BIT STRING (SIZE(16))
 * ```
 */
export
type N3IWFIDNGAP = BIT_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) N3IWFIDNGAP
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_N3IWFIDNGAP = $._decodeBitString;

/**
 * @summary Encodes a(n) N3IWFIDNGAP into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The N3IWFIDNGAP, encoded as an ASN.1 Element.
 */
export const _encode_N3IWFIDNGAP = $._encodeBitString;


/* eslint-enable */
