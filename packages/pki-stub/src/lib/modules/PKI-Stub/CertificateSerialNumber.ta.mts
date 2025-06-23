/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
export const _decode_CertificateSerialNumber: $.ASN1Decoder<CertificateSerialNumber> = $._decodeBigInt;

/**
 * @summary Encodes a(n) CertificateSerialNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateSerialNumber, encoded as an ASN.1 Element.
 */
export const _encode_CertificateSerialNumber: $.ASN1Encoder<CertificateSerialNumber> = $._encodeBigInt;

/* eslint-enable */
