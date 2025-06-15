/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION TokenInfo_version */
/**
 * @summary TokenInfo_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenInfo-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TokenInfo_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION TokenInfo_version */

/* START_OF_SYMBOL_DEFINITION TokenInfo_version_v1 */
/**
 * @summary TokenInfo_version_v1
 * @constant
 * @type {number}
 */
export const TokenInfo_version_v1: TokenInfo_version = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TokenInfo_version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary TokenInfo_version_v1
 * @constant
 * @type {number}
 */
export const v1: TokenInfo_version = TokenInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenInfo_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TokenInfo_version */

/* START_OF_SYMBOL_DEFINITION _decode_TokenInfo_version */
export const _decode_TokenInfo_version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TokenInfo_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenInfo_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TokenInfo_version */

/* START_OF_SYMBOL_DEFINITION _encode_TokenInfo_version */
export const _encode_TokenInfo_version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TokenInfo_version */

/* eslint-enable */
