/* eslint-disable */
import {
  INTEGER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary ReturnErrorProblem
 * @description
 *
 * Problem with a component of a `ReturnError` PDU, carried in `Reject.problem.returnError` (ITU-T Rec. X.880 (07/94) §9.6.6).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnErrorProblem  ::=  INTEGER {
 *   unrecognizedInvocation(0), errorResponseUnexpected(1), unrecognizedError(2),
 *   unexpectedError(3), mistypedParameter(4)}
 * ```
 */
export type ReturnErrorProblem = INTEGER;


/**
 * @summary ReturnErrorProblem_unrecognizedInvocation
 * @description invokeId is not that of an outstanding invocation (X.880 §9.5.3 a, §9.6.6 a).
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_unrecognizedInvocation: ReturnErrorProblem = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_unrecognizedInvocation
 * @description invokeId is not that of an outstanding invocation (X.880 §9.5.3 a, §9.6.6 a).
 * @constant
 * @type {number}
 */
export const unrecognizedInvocation: ReturnErrorProblem = ReturnErrorProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @description Outstanding invocation is of an operation that does not return an error (X.880 §9.5.3 a, §9.6.6 b).
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_errorResponseUnexpected: ReturnErrorProblem = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @description Outstanding invocation is of an operation that does not return an error (X.880 §9.5.3 a, §9.6.6 b).
 * @constant
 * @type {number}
 */
export const errorResponseUnexpected: ReturnErrorProblem = ReturnErrorProblem_errorResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_unrecognizedError
 * @description errcode is not one of the allowed errors (X.880 §9.5.3 b, §9.6.6 c).
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_unrecognizedError: ReturnErrorProblem = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_unrecognizedError
 * @description errcode is not one of the allowed errors (X.880 §9.5.3 b, §9.6.6 c).
 * @constant
 * @type {number}
 */
export const unrecognizedError: ReturnErrorProblem = ReturnErrorProblem_unrecognizedError; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_unexpectedError
 * @description Error is not in the associated operation's `&Errors` (X.880 §9.5.3 b, §9.6.6 d).
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_unexpectedError: ReturnErrorProblem = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_unexpectedError
 * @description Error is not in the associated operation's `&Errors` (X.880 §9.5.3 b, §9.6.6 d).
 * @constant
 * @type {number}
 */
export const unexpectedError: ReturnErrorProblem = ReturnErrorProblem_unexpectedError; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @description parameter missing or not of the error's `&ParameterType` (X.880 §9.5.3 c, §9.6.6 e).
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_mistypedParameter: ReturnErrorProblem = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @description parameter missing or not of the error's `&ParameterType` (X.880 §9.5.3 c, §9.6.6 e).
 * @constant
 * @type {number}
 */
export const mistypedParameter: ReturnErrorProblem = ReturnErrorProblem_mistypedParameter; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_ReturnErrorProblem = $._decodeInteger;




export const _encode_ReturnErrorProblem = $._encodeInteger;


/* eslint-enable */
