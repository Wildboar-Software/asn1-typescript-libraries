/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CertificateSerialNumber */
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
/* END_OF_SYMBOL_DEFINITION CertificateSerialNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateSerialNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateSerialNumber */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateSerialNumber */
export const _decode_CertificateSerialNumber = $._decodeBigInt;
/* END_OF_SYMBOL_DEFINITION _decode_CertificateSerialNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateSerialNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateSerialNumber */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateSerialNumber */
export const _encode_CertificateSerialNumber = $._encodeBigInt;

/* END_OF_SYMBOL_DEFINITION _encode_CertificateSerialNumber */

/* eslint-enable */
