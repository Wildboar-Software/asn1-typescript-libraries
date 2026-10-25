/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReturnResultProblem
 * @description
 * 
 * Problem detected by the supplementary-service entity for a return result,
 * carried in a reject as the `returnResult` alternative.
 *
 * ITU-T Rec. Q.932 (05/1998) Table 8-7; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 8-7 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnResultProblem  ::=  INTEGER {
 *   unrecognizedInvocation(0), resultResponseUnexpected(1), mistypedResult(2)
 * }
 * ```
 */
export
type ReturnResultProblem = INTEGER;

/**
 * @summary ReturnResultProblem_unrecognizedInvocation
 * @description
 * 
 * The invoke identifier is not an outstanding operation. On a return error the
 * same integer is `ReturnErrorProblem`. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const ReturnResultProblem_unrecognizedInvocation = 0 satisfies ReturnResultProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_unrecognizedInvocation
 * @description
 * 
 * The invoke identifier is not an outstanding operation. On a return error the
 * same integer is `ReturnErrorProblem`. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const unrecognizedInvocation = ReturnResultProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @description
 * 
 * The outstanding operation does not return a result. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const ReturnResultProblem_resultResponseUnexpected = 1 satisfies ReturnResultProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @description
 * 
 * The outstanding operation does not return a result. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const resultResponseUnexpected = ReturnResultProblem_resultResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_mistypedResult
 * @description
 * 
 * The result value does not match the operation identified by the invoke
 * identifier. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const ReturnResultProblem_mistypedResult = 2 satisfies ReturnResultProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnResultProblem_mistypedResult
 * @description
 * 
 * The result value does not match the operation identified by the invoke
 * identifier. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const mistypedResult = ReturnResultProblem_mistypedResult; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ReturnResultProblem: $.ASN1Decoder<ReturnResultProblem> = $._decodeInteger;
export const _encode_ReturnResultProblem: $.ASN1Encoder<ReturnResultProblem> = $._encodeInteger;


/* eslint-enable */
