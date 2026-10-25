/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReturnErrorProblem
 * @description
 * 
 * Problem detected by the supplementary-service entity for a return error,
 * carried in a reject as the `returnError` alternative.
 *
 * ITU-T Rec. Q.932 (05/1998) Table 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 8-7 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnErrorProblem  ::=  INTEGER {
 *   unrecognizedInvocation(0), errorResponseUnexpected(1), unrecognizedError(2),
 *   unexpectedError(3), mistypedParameter(4)}
 * ```
 */
export
type ReturnErrorProblem = INTEGER;

/**
 * @summary ReturnErrorProblem_unrecognizedInvocation
 * @description
 * 
 * The invoke identifier is not an outstanding operation. ITU-T Rec. Q.932
 * (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const ReturnErrorProblem_unrecognizedInvocation: 0 = 0 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unrecognizedInvocation
 * @description
 * 
 * The invoke identifier is not an outstanding operation. ITU-T Rec. Q.932
 * (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const unrecognizedInvocation: 0 = ReturnErrorProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @description
 * 
 * The outstanding operation does not return an error. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const ReturnErrorProblem_errorResponseUnexpected: 1 = 1 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @description
 * 
 * The outstanding operation does not return an error. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const errorResponseUnexpected: 1 = ReturnErrorProblem_errorResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unrecognizedError
 * @description
 * 
 * The error code is not recognized. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const ReturnErrorProblem_unrecognizedError: 2 = 2 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unrecognizedError
 * @description
 * 
 * The error code is not recognized. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const unrecognizedError: 2 = ReturnErrorProblem_unrecognizedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unexpectedError
 * @description
 * 
 * The error is not one of the errors of the operation identified by the invoke
 * identifier. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const ReturnErrorProblem_unexpectedError: 3 = 3 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_unexpectedError
 * @description
 * 
 * The error is not one of the errors of the operation identified by the invoke
 * identifier. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const unexpectedError: 3 = ReturnErrorProblem_unexpectedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @description
 * 
 * The error parameter does not match the error code. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const ReturnErrorProblem_mistypedParameter: 4 = 4 satisfies ReturnErrorProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @description
 * 
 * The error parameter does not match the error code. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const mistypedParameter: 4 = ReturnErrorProblem_mistypedParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ReturnErrorProblem: $.ASN1Decoder<ReturnErrorProblem> = $._decodeInteger;
export const _encode_ReturnErrorProblem: $.ASN1Encoder<ReturnErrorProblem> = $._encodeInteger;


/* eslint-enable */
