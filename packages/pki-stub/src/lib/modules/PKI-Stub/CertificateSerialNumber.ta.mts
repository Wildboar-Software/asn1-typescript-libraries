/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary CertificateSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateSerialNumber  ::=  INTEGER
 * ```
 */
export type CertificateSerialNumber = OCTET_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateSerialNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateSerialNumber} The decoded data structure.
 */
export function _decode_CertificateSerialNumber(el: _Element) {
    return $._decodeBigInt(el);
}

/**
 * @summary Encodes a(n) CertificateSerialNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateSerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_CertificateSerialNumber(
    value: CertificateSerialNumber,
    elGetter: $.ASN1Encoder<CertificateSerialNumber>
) {
    return $._encodeBigInt(value, elGetter);
}


/* eslint-enable */
