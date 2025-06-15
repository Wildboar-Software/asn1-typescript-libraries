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


export const _decode_CertificateSerialNumber = $._decodeBigInt;


export const _encode_CertificateSerialNumber = $._encodeBigInt;


/* eslint-enable */
