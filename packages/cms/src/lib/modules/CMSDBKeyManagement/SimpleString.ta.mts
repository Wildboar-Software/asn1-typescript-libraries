/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION SimpleString */
/**
 * @summary SimpleString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SimpleString     ::=  UTF8String(SIZE(1..MAX))
 * ```
 */
export type SimpleString = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION SimpleString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleString */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleString */

/* START_OF_SYMBOL_DEFINITION _decode_SimpleString */
export const _decode_SimpleString = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_SimpleString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleString */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleString */

/* START_OF_SYMBOL_DEFINITION _encode_SimpleString */
export const _encode_SimpleString = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_SimpleString */

/* eslint-enable */
