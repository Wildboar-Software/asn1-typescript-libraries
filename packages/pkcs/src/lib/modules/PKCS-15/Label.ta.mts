/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Label */
/**
 * @summary Label
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Label  ::=  UTF8String (SIZE(0..pkcs15-ub-label))
 * ```
 */
export type Label = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION Label */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Label */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Label */

/* START_OF_SYMBOL_DEFINITION _decode_Label */
export const _decode_Label = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_Label */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Label */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Label */

/* START_OF_SYMBOL_DEFINITION _encode_Label */
export const _encode_Label = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_Label */

/* eslint-enable */
