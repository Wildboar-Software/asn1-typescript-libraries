/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary AbandonProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonProblem  ::=  INTEGER {
 *   noSuchOperation (1),
 *   tooLate         (2),
 *   cannotAbandon   (3) }
 * ```
 */
export type AbandonProblem = INTEGER;

/**
 * @summary AbandonProblem_noSuchOperation
 * @constant
 * @type {number}
 */
export const AbandonProblem_noSuchOperation: AbandonProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_noSuchOperation
 * @constant
 * @type {number}
 */
export const noSuchOperation: AbandonProblem = AbandonProblem_noSuchOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_tooLate
 * @constant
 * @type {number}
 */
export const AbandonProblem_tooLate: AbandonProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_tooLate
 * @constant
 * @type {number}
 */
export const tooLate: AbandonProblem = AbandonProblem_tooLate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_cannotAbandon
 * @constant
 * @type {number}
 */
export const AbandonProblem_cannotAbandon: AbandonProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AbandonProblem_cannotAbandon
 * @constant
 * @type {number}
 */
export const cannotAbandon: AbandonProblem = AbandonProblem_cannotAbandon; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AbandonProblem = $._decodeInteger;


export const _encode_AbandonProblem = $._encodeInteger;


/* eslint-enable */
