/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

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

/**
 * @summary LimitProblem_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const LimitProblem_timeLimitExceeded: LimitProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LimitProblem_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const timeLimitExceeded: LimitProblem = LimitProblem_timeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LimitProblem_sizeLimitExceeded
 * @constant
 * @type {number}
 */
export const LimitProblem_sizeLimitExceeded: LimitProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LimitProblem_sizeLimitExceeded
 * @constant
 * @type {number}
 */
export const sizeLimitExceeded: LimitProblem = LimitProblem_sizeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LimitProblem_administrativeLimitExceeded
 * @constant
 * @type {number}
 */
export const LimitProblem_administrativeLimitExceeded: LimitProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LimitProblem_administrativeLimitExceeded
 * @constant
 * @type {number}
 */
export const administrativeLimitExceeded: LimitProblem = LimitProblem_administrativeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_LimitProblem = $._decodeInteger;


export const _encode_LimitProblem = $._encodeInteger;


/* eslint-enable */
