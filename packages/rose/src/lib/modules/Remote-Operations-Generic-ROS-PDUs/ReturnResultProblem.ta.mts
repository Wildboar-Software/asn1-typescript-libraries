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
 * @summary ReturnResultProblem
 * @description
 *
 * Problem with a component of a `ReturnResult` PDU, carried in `Reject.problem.returnResult` (ITU-T Rec. X.880 (07/94) §9.6.5).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnResultProblem  ::=  INTEGER {
 *   unrecognizedInvocation(0), resultResponseUnexpected(1), mistypedResult(2)
 * }
 * ```
 */
export type ReturnResultProblem = INTEGER;


/**
 * @summary ReturnResultProblem_unrecognizedInvocation
 * @description invokeId is not that of an outstanding invocation (X.880 §9.4.3 a, §9.6.5 a).
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_unrecognizedInvocation: ReturnResultProblem = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnResultProblem_unrecognizedInvocation
 * @description invokeId is not that of an outstanding invocation (X.880 §9.4.3 a, §9.6.5 a).
 * @constant
 * @type {number}
 */
export const unrecognizedInvocation: ReturnResultProblem = ReturnResultProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @description Outstanding invocation is of an operation that does not return a result (X.880 §9.4.3 a, §9.6.5 b).
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_resultResponseUnexpected: ReturnResultProblem = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @description Outstanding invocation is of an operation that does not return a result (X.880 §9.4.3 a, §9.6.5 b).
 * @constant
 * @type {number}
 */
export const resultResponseUnexpected: ReturnResultProblem = ReturnResultProblem_resultResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnResultProblem_mistypedResult
 * @description opcode/result mismatch or result not of `&ResultType` (X.880 §9.4.3 b–c, §9.6.5 c).
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_mistypedResult: ReturnResultProblem = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ReturnResultProblem_mistypedResult
 * @description opcode/result mismatch or result not of `&ResultType` (X.880 §9.4.3 b–c, §9.6.5 c).
 * @constant
 * @type {number}
 */
export const mistypedResult: ReturnResultProblem = ReturnResultProblem_mistypedResult; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_ReturnResultProblem = $._decodeInteger;




export const _encode_ReturnResultProblem = $._encodeInteger;


/* eslint-enable */
