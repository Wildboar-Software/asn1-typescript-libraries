/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CertificateSerialNumber
 * @description
 *
 * INTEGER assigned by the issuer; unique for that issuer (issuer name plus
 * serial number identify a certificate). Serial numbers need not be sequential.
 *
 * X.509 allows a negative INTEGER. IETF RFC 5280 requires a positive number of
 * at most 20 octets. This TypeScript binding uses an `OCTET_STRING` (the two's
 * complement contents) so values larger than `number` can be represented.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateSerialNumber ::= INTEGER
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
