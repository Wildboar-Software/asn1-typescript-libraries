/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Address */
/**
 * @summary Address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Address     ::=  UTF8String
 * ```
 */
export type Address = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION Address */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Address */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Address */

/* START_OF_SYMBOL_DEFINITION _decode_Address */
export const _decode_Address = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_Address */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Address */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Address */

/* START_OF_SYMBOL_DEFINITION _encode_Address */
export const _encode_Address = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_Address */

/* eslint-enable */
