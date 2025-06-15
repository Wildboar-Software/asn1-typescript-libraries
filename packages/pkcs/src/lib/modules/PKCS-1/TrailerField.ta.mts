/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION TrailerField */
/**
 * @summary TrailerField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrailerField  ::=  INTEGER { trailerFieldBC(1) }
 * ```
 */
export type TrailerField = INTEGER;
/* END_OF_SYMBOL_DEFINITION TrailerField */

/* START_OF_SYMBOL_DEFINITION TrailerField_trailerFieldBC */
/**
 * @summary TrailerField_trailerFieldBC
 * @constant
 * @type {number}
 */
export const TrailerField_trailerFieldBC: TrailerField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TrailerField_trailerFieldBC */

/* START_OF_SYMBOL_DEFINITION trailerFieldBC */
/**
 * @summary TrailerField_trailerFieldBC
 * @constant
 * @type {number}
 */
export const trailerFieldBC: TrailerField = TrailerField_trailerFieldBC; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION trailerFieldBC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TrailerField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TrailerField */

/* START_OF_SYMBOL_DEFINITION _decode_TrailerField */
export const _decode_TrailerField = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TrailerField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TrailerField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TrailerField */

/* START_OF_SYMBOL_DEFINITION _encode_TrailerField */
export const _encode_TrailerField = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TrailerField */

/* eslint-enable */
