/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Version */
/**
 * @summary Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version   ::=   INTEGER  {  v1(0) }
 * ```
 */
export type Version = INTEGER;
/* END_OF_SYMBOL_DEFINITION Version */

/* START_OF_SYMBOL_DEFINITION Version_v1 */
/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export const v1: Version = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Version */

/* START_OF_SYMBOL_DEFINITION _decode_Version */
export const _decode_Version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Version */

/* START_OF_SYMBOL_DEFINITION _encode_Version */
export const _encode_Version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Version */

/* eslint-enable */
