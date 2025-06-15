/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION TimeZone */
/**
 * @summary TimeZone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeZone  ::=  INTEGER(-12..12)
 * ```
 */
export type TimeZone = INTEGER;
/* END_OF_SYMBOL_DEFINITION TimeZone */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeZone */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeZone */

/* START_OF_SYMBOL_DEFINITION _decode_TimeZone */
export const _decode_TimeZone = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TimeZone */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeZone */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeZone */

/* START_OF_SYMBOL_DEFINITION _encode_TimeZone */
export const _encode_TimeZone = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TimeZone */

/* eslint-enable */
