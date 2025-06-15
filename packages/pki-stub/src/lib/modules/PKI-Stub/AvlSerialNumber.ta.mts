/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

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
export function _decode_AvlSerialNumber(el: _Element) {
    return $._decodeBigInt(el);
}

/**
 * @summary Encodes a(n) AvlSerialNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvlSerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_AvlSerialNumber(
    value: AvlSerialNumber,
    elGetter: $.ASN1Encoder<AvlSerialNumber>
) {
    return $._encodeBigInt(value, elGetter);
}


/* eslint-enable */
