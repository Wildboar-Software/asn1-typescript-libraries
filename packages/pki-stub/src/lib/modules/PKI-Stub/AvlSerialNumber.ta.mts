/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
export const _decode_AvlSerialNumber: $.ASN1Decoder<AvlSerialNumber> = $._decodeBigInt;

/**
 * @summary Encodes a(n) AvlSerialNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvlSerialNumber, encoded as an ASN.1 Element.
 */
export const _encode_AvlSerialNumber: $.ASN1Encoder<AvlSerialNumber> = $._encodeBigInt;

/* eslint-enable */
