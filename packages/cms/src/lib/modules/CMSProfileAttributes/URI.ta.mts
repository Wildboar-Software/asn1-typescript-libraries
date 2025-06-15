/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION URI */
/**
 * @summary URI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URI  ::=  UTF8String(SIZE(1..MAX))
 * ```
 */
export type URI = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION URI */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_URI */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_URI */

/* START_OF_SYMBOL_DEFINITION _decode_URI */
export const _decode_URI = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_URI */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_URI */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_URI */

/* START_OF_SYMBOL_DEFINITION _encode_URI */
export const _encode_URI = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_URI */

/* eslint-enable */
