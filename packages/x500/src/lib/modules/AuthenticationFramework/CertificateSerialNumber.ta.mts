/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CertificateSerialNumber
 * @description
 *
 * INTEGER unique per issuer (need not be sequential). X.509 allows a
 * negative value; RFC 5280 requires a positive INTEGER of at most 20
 * octets. Bound here as `OCTET_STRING` (two's-complement contents). Compare
 * as INTEGER, not raw bytes if encodings differ.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateSerialNumber  ::=  INTEGER
 * ```
 */
export type CertificateSerialNumber = OCTET_STRING;


export const _decode_CertificateSerialNumber = $._decodeBigInt;


export const _encode_CertificateSerialNumber = $._encodeBigInt;


/* eslint-enable */
