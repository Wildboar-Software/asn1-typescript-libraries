/* eslint-disable */
import {
  type INTEGER,
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
export const ReturnErrorProblem_unrecognizedInvocation: 0 = 0 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_unrecognizedInvocation
 * @description invokeId is not that of an outstanding invocation (X.880 §9.5.3 a, §9.6.6 a).
 * @constant
 * @type {number}
 */
export const unrecognizedInvocation: 0 = ReturnErrorProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @description Outstanding invocation is of an operation that does not return an error (X.880 §9.5.3 a, §9.6.6 b).
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_errorResponseUnexpected: 1 = 1 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @description Outstanding invocation is of an operation that does not return an error (X.880 §9.5.3 a, §9.6.6 b).
 * @constant
 * @type {number}
 */
export const errorResponseUnexpected: 1 = ReturnErrorProblem_errorResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_unrecognizedError
 * @description errcode is not one of the allowed errors (X.880 §9.5.3 b, §9.6.6 c).
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_unrecognizedError: 2 = 2 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_unrecognizedError
 * @description errcode is not one of the allowed errors (X.880 §9.5.3 b, §9.6.6 c).
 * @constant
 * @type {number}
 */
export const unrecognizedError: 2 = ReturnErrorProblem_unrecognizedError; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_unexpectedError
 * @description Error is not in the associated operation's `&Errors` (X.880 §9.5.3 b, §9.6.6 d).
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_unexpectedError: 3 = 3 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_unexpectedError
 * @description Error is not in the associated operation's `&Errors` (X.880 §9.5.3 b, §9.6.6 d).
 * @constant
 * @type {number}
 */
export const unexpectedError: 3 = ReturnErrorProblem_unexpectedError; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @description parameter missing or not of the error's `&ParameterType` (X.880 §9.5.3 c, §9.6.6 e).
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_mistypedParameter: 4 = 4 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @description parameter missing or not of the error's `&ParameterType` (X.880 §9.5.3 c, §9.6.6 e).
 * @constant
 * @type {number}
 */
export const mistypedParameter: 4 = ReturnErrorProblem_mistypedParameter; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_ReturnErrorProblem: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_ReturnErrorProblem: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
