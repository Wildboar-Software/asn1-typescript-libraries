/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Versions */
/**
 * @summary Versions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Versions  ::=  BIT STRING {v1(0), v2(1)}
 * ```
 */
export type Versions = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Versions */

/* START_OF_SYMBOL_DEFINITION Versions_v1 */
/**
 * @summary Versions_v1
 * @constant
 */
export const Versions_v1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Versions_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary v1
 * @constant
 */
export const v1: number = Versions_v1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION Versions_v2 */
/**
 * @summary Versions_v2
 * @constant
 */
export const Versions_v2: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Versions_v2 */

/* START_OF_SYMBOL_DEFINITION v2 */
/**
 * @summary v2
 * @constant
 */
export const v2: number = Versions_v2; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION v2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Versions */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Versions */

/* START_OF_SYMBOL_DEFINITION _decode_Versions */
export const _decode_Versions = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_Versions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Versions */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Versions */

/* START_OF_SYMBOL_DEFINITION _encode_Versions */
export const _encode_Versions = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_Versions */

/* eslint-enable */
