/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ECParameters_version */
/**
 * @summary ECParameters_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECParameters-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ECParameters_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION ECParameters_version */

/* START_OF_SYMBOL_DEFINITION ECParameters_version_ecpVerl */
/**
 * @summary ECParameters_version_ecpVerl
 * @constant
 * @type {number}
 */
export const ECParameters_version_ecpVerl: ECParameters_version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ECParameters_version_ecpVerl */

/* START_OF_SYMBOL_DEFINITION ecpVerl */
/**
 * @summary ECParameters_version_ecpVerl
 * @constant
 * @type {number}
 */
export const ecpVerl: ECParameters_version = ECParameters_version_ecpVerl; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ecpVerl */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECParameters_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECParameters_version */

/* START_OF_SYMBOL_DEFINITION _decode_ECParameters_version */
export const _decode_ECParameters_version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ECParameters_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECParameters_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECParameters_version */

/* START_OF_SYMBOL_DEFINITION _encode_ECParameters_version */
export const _encode_ECParameters_version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ECParameters_version */

/* eslint-enable */
