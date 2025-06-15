/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION TSTInfo_version */
/**
 * @summary TSTInfo_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TSTInfo-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TSTInfo_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION TSTInfo_version */

/* START_OF_SYMBOL_DEFINITION TSTInfo_version_v1 */
/**
 * @summary TSTInfo_version_v1
 * @constant
 * @type {number}
 */
export const TSTInfo_version_v1: TSTInfo_version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TSTInfo_version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary TSTInfo_version_v1
 * @constant
 * @type {number}
 */
export const v1: TSTInfo_version = TSTInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TSTInfo_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TSTInfo_version */

/* START_OF_SYMBOL_DEFINITION _decode_TSTInfo_version */
export const _decode_TSTInfo_version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TSTInfo_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TSTInfo_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TSTInfo_version */

/* START_OF_SYMBOL_DEFINITION _encode_TSTInfo_version */
export const _encode_TSTInfo_version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TSTInfo_version */

/* eslint-enable */
