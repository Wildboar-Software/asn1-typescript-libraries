/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Version */
/**
 * @summary Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version  ::=  BIT STRING {
 *   v1 (0)  -- version 1
 *   }
 * ```
 */
export type Version = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Version */

/* START_OF_SYMBOL_DEFINITION Version_v1 */
/**
 * @summary Version_v1
 * @constant
 */
export const Version_v1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary v1
 * @constant
 */
export const v1: number = Version_v1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Version */

/* START_OF_SYMBOL_DEFINITION _decode_Version */
export const _decode_Version = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_Version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Version */

/* START_OF_SYMBOL_DEFINITION _encode_Version */
export const _encode_Version = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_Version */

/* eslint-enable */
