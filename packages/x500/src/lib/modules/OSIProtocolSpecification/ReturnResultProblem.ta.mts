/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
export const ReturnResultProblem_unrecognizedInvocation = 0 satisfies ReturnResultProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const unrecognizedInvocation = ReturnResultProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_resultResponseUnexpected = 1 satisfies ReturnResultProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @constant
 * @type {number}
 */
export const resultResponseUnexpected = ReturnResultProblem_resultResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_mistypedResult
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_mistypedResult = 2 satisfies ReturnResultProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_mistypedResult
 * @constant
 * @type {number}
 */
export const mistypedResult = ReturnResultProblem_mistypedResult; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ReturnResultProblem = $._decodeInteger;


export const _encode_ReturnResultProblem = $._encodeInteger;


/* eslint-enable */
