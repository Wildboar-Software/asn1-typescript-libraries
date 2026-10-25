/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ReturnErrorProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnErrorProblem  ::=  INTEGER {
 *   unrecognizedInvocation   (0),
 *   errorResponseUnexpected  (1),
 *   unrecognizedError        (2),
 *   unexpectedError          (3),
 *   mistypedParameter        (4)}
 * ```
 */
export type ReturnErrorProblem = INTEGER;

/**
 * @summary ReturnErrorProblem_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_unrecognizedInvocation = 0 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const unrecognizedInvocation = ReturnErrorProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_errorResponseUnexpected = 1 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @constant
 * @type {number}
 */
export const errorResponseUnexpected = ReturnErrorProblem_errorResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unrecognizedError
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_unrecognizedError = 2 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unrecognizedError
 * @constant
 * @type {number}
 */
export const unrecognizedError = ReturnErrorProblem_unrecognizedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unexpectedError
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_unexpectedError = 3 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unexpectedError
 * @constant
 * @type {number}
 */
export const unexpectedError = ReturnErrorProblem_unexpectedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_mistypedParameter = 4 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @constant
 * @type {number}
 */
export const mistypedParameter = ReturnErrorProblem_mistypedParameter; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ReturnErrorProblem = $._decodeInteger;


export const _encode_ReturnErrorProblem = $._encodeInteger;


/* eslint-enable */
