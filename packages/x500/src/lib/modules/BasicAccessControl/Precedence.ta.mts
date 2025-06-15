/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Precedence */
/**
 * @summary Precedence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Precedence  ::=  INTEGER(0..255,...)
 * ```
 */
export type Precedence = INTEGER;
/* END_OF_SYMBOL_DEFINITION Precedence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Precedence */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Precedence */

/* START_OF_SYMBOL_DEFINITION _decode_Precedence */
export const _decode_Precedence = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Precedence */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Precedence */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Precedence */

/* START_OF_SYMBOL_DEFINITION _encode_Precedence */
export const _encode_Precedence = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Precedence */

/* eslint-enable */
