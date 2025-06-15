/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION LimitProblem */
/**
 * @summary LimitProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LimitProblem  ::=  INTEGER {
 *   timeLimitExceeded           (0),
 *   sizeLimitExceeded           (1),
 *   administrativeLimitExceeded (2) }
 * ```
 */
export type LimitProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION LimitProblem */

/* START_OF_SYMBOL_DEFINITION LimitProblem_timeLimitExceeded */
/**
 * @summary LimitProblem_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const LimitProblem_timeLimitExceeded: LimitProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION LimitProblem_timeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION timeLimitExceeded */
/**
 * @summary LimitProblem_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const timeLimitExceeded: LimitProblem = LimitProblem_timeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION timeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION LimitProblem_sizeLimitExceeded */
/**
 * @summary LimitProblem_sizeLimitExceeded
 * @constant
 * @type {number}
 */
export const LimitProblem_sizeLimitExceeded: LimitProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION LimitProblem_sizeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION sizeLimitExceeded */
/**
 * @summary LimitProblem_sizeLimitExceeded
 * @constant
 * @type {number}
 */
export const sizeLimitExceeded: LimitProblem = LimitProblem_sizeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION sizeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION LimitProblem_administrativeLimitExceeded */
/**
 * @summary LimitProblem_administrativeLimitExceeded
 * @constant
 * @type {number}
 */
export const LimitProblem_administrativeLimitExceeded: LimitProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION LimitProblem_administrativeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION administrativeLimitExceeded */
/**
 * @summary LimitProblem_administrativeLimitExceeded
 * @constant
 * @type {number}
 */
export const administrativeLimitExceeded: LimitProblem = LimitProblem_administrativeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION administrativeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LimitProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LimitProblem */

/* START_OF_SYMBOL_DEFINITION _decode_LimitProblem */
export const _decode_LimitProblem = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_LimitProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LimitProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LimitProblem */

/* START_OF_SYMBOL_DEFINITION _encode_LimitProblem */
export const _encode_LimitProblem = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_LimitProblem */

/* eslint-enable */
