/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION RegToken */
/**
 * @summary RegToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegToken  ::=  UTF8String
 * ```
 */
export type RegToken = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION RegToken */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegToken */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegToken */

/* START_OF_SYMBOL_DEFINITION _decode_RegToken */
export const _decode_RegToken = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_RegToken */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegToken */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegToken */

/* START_OF_SYMBOL_DEFINITION _encode_RegToken */
export const _encode_RegToken = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_RegToken */

/* eslint-enable */
