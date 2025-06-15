/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CMSVersion */
/**
 * @summary CMSVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMSVersion     ::=  INTEGER {v0(0)} (0..MAX)
 * ```
 */
export type CMSVersion = INTEGER;
/* END_OF_SYMBOL_DEFINITION CMSVersion */

/* START_OF_SYMBOL_DEFINITION CMSVersion_v0 */
/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const CMSVersion_v0: CMSVersion = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CMSVersion_v0 */

/* START_OF_SYMBOL_DEFINITION v0 */
/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const v0: CMSVersion = CMSVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v0 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CMSVersion */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CMSVersion */

/* START_OF_SYMBOL_DEFINITION _decode_CMSVersion */
export const _decode_CMSVersion = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_CMSVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CMSVersion */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CMSVersion */

/* START_OF_SYMBOL_DEFINITION _encode_CMSVersion */
export const _encode_CMSVersion = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_CMSVersion */

/* eslint-enable */
