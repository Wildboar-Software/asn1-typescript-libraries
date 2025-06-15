/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION IntEmail */
/**
 * @summary IntEmail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntEmail  ::=  UTF8String (CONSTRAINED BY { -- Conforms to the format of an (internationalized) email address. -- })
 * ```
 */
export type IntEmail = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION IntEmail */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IntEmail */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IntEmail */

/* START_OF_SYMBOL_DEFINITION _decode_IntEmail */
export const _decode_IntEmail = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_IntEmail */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IntEmail */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IntEmail */

/* START_OF_SYMBOL_DEFINITION _encode_IntEmail */
export const _encode_IntEmail = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_IntEmail */

/* eslint-enable */
