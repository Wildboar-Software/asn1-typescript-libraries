/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AttributeName */
/**
 * @summary AttributeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeName  ::=  UTF8String(SIZE (1..MAX))
 * ```
 */
export type AttributeName = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION AttributeName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeName */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeName */
export const _decode_AttributeName = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_AttributeName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeName */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeName */
export const _encode_AttributeName = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_AttributeName */

/* eslint-enable */
