/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION HMAC */
/**
 * @summary HMAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HMAC  ::=  OCTET STRING
 * ```
 */
export type HMAC = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION HMAC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HMAC */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HMAC */

/* START_OF_SYMBOL_DEFINITION _decode_HMAC */
export const _decode_HMAC = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_HMAC */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HMAC */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HMAC */

/* START_OF_SYMBOL_DEFINITION _encode_HMAC */
export const _encode_HMAC = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_HMAC */

/* eslint-enable */
