/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary ReturnResultProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnResultProblem  ::=  INTEGER {
 *   unrecognizedInvocation   (0),
 *   resultResponseUnexpected (1),
 *   mistypedResult           (2)}
 * ```
 */
export type ReturnResultProblem = INTEGER;

/**
 * @summary ReturnResultProblem_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_unrecognizedInvocation: ReturnResultProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const unrecognizedInvocation: ReturnResultProblem = ReturnResultProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_resultResponseUnexpected: ReturnResultProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @constant
 * @type {number}
 */
export const resultResponseUnexpected: ReturnResultProblem = ReturnResultProblem_resultResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_mistypedResult
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_mistypedResult: ReturnResultProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_mistypedResult
 * @constant
 * @type {number}
 */
export const mistypedResult: ReturnResultProblem = ReturnResultProblem_mistypedResult; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ReturnResultProblem = $._decodeInteger;


export const _encode_ReturnResultProblem = $._encodeInteger;


/* eslint-enable */
