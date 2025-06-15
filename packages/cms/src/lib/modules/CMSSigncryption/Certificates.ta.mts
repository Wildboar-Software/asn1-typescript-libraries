/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Certificates */
/**
 * @summary Certificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Certificates     ::=  [XER:BASE64] OCTET STRING
 * ```
 */
export type Certificates = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Certificates */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Certificates */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Certificates */

/* START_OF_SYMBOL_DEFINITION _decode_Certificates */
export const _decode_Certificates = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_Certificates */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Certificates */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Certificates */

/* START_OF_SYMBOL_DEFINITION _encode_Certificates */
export const _encode_Certificates = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_Certificates */

/* eslint-enable */
