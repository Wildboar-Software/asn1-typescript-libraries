/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary LimitProblem
 * @description
 *
 * `timeLimitExceeded`(0), `sizeLimitExceeded`(1),
 * `administrativeLimitExceeded`(2). Partial results are an arbitrary
 * selection of what was accumulated.
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
 * @description
 *
 * (0) Elapsed-time limit. Partial results are an arbitrary selection.
 *
 * @constant
 * @type {number}
 */
export const LimitProblem_timeLimitExceeded: LimitProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LimitProblem_timeLimitExceeded
 * @description
 *
 * (0) Elapsed-time limit. Partial results are an arbitrary selection.
 *
 * @constant
 * @type {number}
 */
export const timeLimitExceeded: LimitProblem = LimitProblem_timeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LimitProblem_sizeLimitExceeded
 * @description
 *
 * (1) Entry-count limit. Partial results are an arbitrary selection.
 *
 * @constant
 * @type {number}
 */
export const LimitProblem_sizeLimitExceeded: LimitProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LimitProblem_sizeLimitExceeded
 * @description
 *
 * (1) Entry-count limit. Partial results are an arbitrary selection.
 *
 * @constant
 * @type {number}
 */
export const sizeLimitExceeded: LimitProblem = LimitProblem_sizeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LimitProblem_administrativeLimitExceeded
 * @description
 *
 * (2) Admin limit. Partial results are an arbitrary selection.
 *
 * @constant
 * @type {number}
 */
export const LimitProblem_administrativeLimitExceeded: LimitProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LimitProblem_administrativeLimitExceeded
 * @description
 *
 * (2) Admin limit. Partial results are an arbitrary selection.
 *
 * @constant
 * @type {number}
 */
export const administrativeLimitExceeded: LimitProblem = LimitProblem_administrativeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_LimitProblem = $._decodeInteger;


export const _encode_LimitProblem = $._encodeInteger;


/* eslint-enable */
