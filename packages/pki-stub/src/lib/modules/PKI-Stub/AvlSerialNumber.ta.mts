/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "jsr:@wildboar/asn1@11";
import * as $ from "jsr:@wildboar/asn1@11/functional";

/**
 * @summary AvlSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvlSerialNumber  ::=  INTEGER (0..MAX)
 * ```
 */
export type AvlSerialNumber = OCTET_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) AvlSerialNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvlSerialNumber} The decoded data structure.
 */
export function _decode_AvlSerialNumber(el: _Element): AvlSerialNumber {
    return $._decodeBigInt(el);
}

/**
 * @summary Encodes a(n) AvlSerialNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvlSerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_AvlSerialNumber(value: AvlSerialNumber, elGetter: $.ASN1Encoder<AvlSerialNumber>): _Element {
    return $._encodeBigInt(value, elGetter);
}


/* eslint-enable */
