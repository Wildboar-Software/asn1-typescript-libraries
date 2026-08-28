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
 * @summary RejectProblem
 * @description
 *
 * Exception values signalled when a type or constraint in a ROS PDU definition is violated (ITU-T Rec. X.880 (07/94) §9.7). Identifier `α-β` is reported in `Reject.problem` as `α:β` (X.880 §9.7.1), e.g. `invoke-duplicateInvocation` → `invoke:duplicateInvocation`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RejectProblem  ::=  INTEGER {
 *   general-unrecognizedPDU(0), general-mistypedPDU(1),
 *   general-badlyStructuredPDU(2), invoke-duplicateInvocation(10),
 *   invoke-unrecognizedOperation(11), invoke-mistypedArgument(12),
 *   invoke-resourceLimitation(13), invoke-releaseInProgress(14),
 *   invoke-unrecognizedLinkedId(15), invoke-linkedResponseUnexpected(16),
 *   invoke-unexpectedLinkedOperation(17),
 *   returnResult-unrecognizedInvocation(20),
 *   returnResult-resultResponseUnexpected(21), returnResult-mistypedResult(22),
 *   returnError-unrecognizedInvocation(30),
 *   returnError-errorResponseUnexpected(31), returnError-unrecognizedError(32),
 *   returnError-unexpectedError(33), returnError-mistypedParameter(34)}
 * ```
 */
export type RejectProblem = INTEGER;


/**
 * @summary RejectProblem_general_unrecognizedPDU
 * @description ROS alternative not recognized; maps to `general:unrecognizedPDU` (X.880 §9.2.3, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_general_unrecognizedPDU: RejectProblem = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_general_unrecognizedPDU
 * @description ROS alternative not recognized; maps to `general:unrecognizedPDU` (X.880 §9.2.3, §9.7).
 * @constant
 * @type {number}
 */
export const general_unrecognizedPDU: RejectProblem = RejectProblem_general_unrecognizedPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_general_mistypedPDU
 * @description PDU structure does not match the applicable definition; maps to `general:mistypedPDU` (X.880 §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_general_mistypedPDU: RejectProblem = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_general_mistypedPDU
 * @description PDU structure does not match the applicable definition; maps to `general:mistypedPDU` (X.880 §9.7).
 * @constant
 * @type {number}
 */
export const general_mistypedPDU: RejectProblem = RejectProblem_general_mistypedPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_general_badlyStructuredPDU
 * @description PDU structure cannot be determined from the expected abstract syntax; maps to `general:badlyStructuredPDU` (X.880 §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_general_badlyStructuredPDU: RejectProblem = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_general_badlyStructuredPDU
 * @description PDU structure cannot be determined from the expected abstract syntax; maps to `general:badlyStructuredPDU` (X.880 §9.7).
 * @constant
 * @type {number}
 */
export const general_badlyStructuredPDU: RejectProblem = RejectProblem_general_badlyStructuredPDU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_duplicateInvocation
 * @description invokeId already in use; maps to `invoke:duplicateInvocation` (X.880 §9.3.3 a, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_duplicateInvocation: RejectProblem = 10; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_duplicateInvocation
 * @description invokeId already in use; maps to `invoke:duplicateInvocation` (X.880 §9.3.3 a, §9.7).
 * @constant
 * @type {number}
 */
export const invoke_duplicateInvocation: RejectProblem = RejectProblem_invoke_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_unrecognizedOperation
 * @description opcode not among allowed operations; maps to `invoke:unrecognizedOperation` (X.880 §9.3.3 c, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_unrecognizedOperation: RejectProblem = 11; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_unrecognizedOperation
 * @description opcode not among allowed operations; maps to `invoke:unrecognizedOperation` (X.880 §9.3.3 c, §9.7).
 * @constant
 * @type {number}
 */
export const invoke_unrecognizedOperation: RejectProblem = RejectProblem_invoke_unrecognizedOperation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_mistypedArgument
 * @description argument missing or mistyped; maps to `invoke:mistypedArgument` (X.880 §9.3.3 d, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_mistypedArgument: RejectProblem = 12; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_mistypedArgument
 * @description argument missing or mistyped; maps to `invoke:mistypedArgument` (X.880 §9.3.3 d, §9.7).
 * @constant
 * @type {number}
 */
export const invoke_mistypedArgument: RejectProblem = RejectProblem_invoke_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_resourceLimitation
 * @description Performer refuses due to resource limitation; maps to `invoke:resourceLimitation` (X.880 §9.6.4 d, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_resourceLimitation: RejectProblem = 13; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_resourceLimitation
 * @description Performer refuses due to resource limitation; maps to `invoke:resourceLimitation` (X.880 §9.6.4 d, §9.7).
 * @constant
 * @type {number}
 */
export const invoke_resourceLimitation: RejectProblem = RejectProblem_invoke_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_releaseInProgress
 * @description Performer is about to release the association; maps to `invoke:releaseInProgress` (X.880 §9.6.4 e, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_releaseInProgress: RejectProblem = 14; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_releaseInProgress
 * @description Performer is about to release the association; maps to `invoke:releaseInProgress` (X.880 §9.6.4 e, §9.7).
 * @constant
 * @type {number}
 */
export const invoke_releaseInProgress: RejectProblem = RejectProblem_invoke_releaseInProgress; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_unrecognizedLinkedId
 * @description linkedId does not identify an outstanding invocation; maps to `invoke:unrecognizedLinkedId` (X.880 §9.3.3 b, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_unrecognizedLinkedId: RejectProblem = 15; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_unrecognizedLinkedId
 * @description linkedId does not identify an outstanding invocation; maps to `invoke:unrecognizedLinkedId` (X.880 §9.3.3 b, §9.7).
 * @constant
 * @type {number}
 */
export const invoke_unrecognizedLinkedId: RejectProblem = RejectProblem_invoke_unrecognizedLinkedId; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_linkedResponseUnexpected
 * @description Parent does not allow linked operations; maps to `invoke:linkedResponseUnexpected` (X.880 §9.3.3 b, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_linkedResponseUnexpected: RejectProblem = 16; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_linkedResponseUnexpected
 * @description Parent does not allow linked operations; maps to `invoke:linkedResponseUnexpected` (X.880 §9.3.3 b, §9.7).
 * @constant
 * @type {number}
 */
export const invoke_linkedResponseUnexpected: RejectProblem = RejectProblem_invoke_linkedResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_unexpectedLinkedOperation
 * @description Operation not in parent's `&Linked`; maps to `invoke:unexpectedLinkedOperation` (X.880 §9.3.3 c, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_unexpectedLinkedOperation: RejectProblem = 17; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_invoke_unexpectedLinkedOperation
 * @description Operation not in parent's `&Linked`; maps to `invoke:unexpectedLinkedOperation` (X.880 §9.3.3 c, §9.7).
 * @constant
 * @type {number}
 */
export const invoke_unexpectedLinkedOperation: RejectProblem = RejectProblem_invoke_unexpectedLinkedOperation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnResult_unrecognizedInvocation
 * @description invokeId not outstanding; maps to `returnResult:unrecognizedInvocation` (X.880 §9.4.3 a, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_returnResult_unrecognizedInvocation: RejectProblem = 20; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnResult_unrecognizedInvocation
 * @description invokeId not outstanding; maps to `returnResult:unrecognizedInvocation` (X.880 §9.4.3 a, §9.7).
 * @constant
 * @type {number}
 */
export const returnResult_unrecognizedInvocation: RejectProblem = RejectProblem_returnResult_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnResult_resultResponseUnexpected
 * @description Operation does not return a result; maps to `returnResult:resultResponseUnexpected` (X.880 §9.4.3 a, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_returnResult_resultResponseUnexpected: RejectProblem = 21; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnResult_resultResponseUnexpected
 * @description Operation does not return a result; maps to `returnResult:resultResponseUnexpected` (X.880 §9.4.3 a, §9.7).
 * @constant
 * @type {number}
 */
export const returnResult_resultResponseUnexpected: RejectProblem = RejectProblem_returnResult_resultResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnResult_mistypedResult
 * @description result missing or mistyped; maps to `returnResult:mistypedResult` (X.880 §9.4.3 c, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_returnResult_mistypedResult: RejectProblem = 22; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnResult_mistypedResult
 * @description result missing or mistyped; maps to `returnResult:mistypedResult` (X.880 §9.4.3 c, §9.7).
 * @constant
 * @type {number}
 */
export const returnResult_mistypedResult: RejectProblem = RejectProblem_returnResult_mistypedResult; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnError_unrecognizedInvocation
 * @description invokeId not outstanding; maps to `returnError:unrecognizedInvocation` (X.880 §9.5.3 a, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_returnError_unrecognizedInvocation: RejectProblem = 30; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnError_unrecognizedInvocation
 * @description invokeId not outstanding; maps to `returnError:unrecognizedInvocation` (X.880 §9.5.3 a, §9.7).
 * @constant
 * @type {number}
 */
export const returnError_unrecognizedInvocation: RejectProblem = RejectProblem_returnError_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnError_errorResponseUnexpected
 * @description Operation does not return an error; maps to `returnError:errorResponseUnexpected` (X.880 §9.5.3 a, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_returnError_errorResponseUnexpected: RejectProblem = 31; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnError_errorResponseUnexpected
 * @description Operation does not return an error; maps to `returnError:errorResponseUnexpected` (X.880 §9.5.3 a, §9.7).
 * @constant
 * @type {number}
 */
export const returnError_errorResponseUnexpected: RejectProblem = RejectProblem_returnError_errorResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnError_unrecognizedError
 * @description errcode not among allowed errors; maps to `returnError:unrecognizedError` (X.880 §9.5.3 b, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_returnError_unrecognizedError: RejectProblem = 32; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnError_unrecognizedError
 * @description errcode not among allowed errors; maps to `returnError:unrecognizedError` (X.880 §9.5.3 b, §9.7).
 * @constant
 * @type {number}
 */
export const returnError_unrecognizedError: RejectProblem = RejectProblem_returnError_unrecognizedError; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnError_unexpectedError
 * @description Error not in the operation's `&Errors`; maps to `returnError:unexpectedError` (X.880 §9.5.3 b, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_returnError_unexpectedError: RejectProblem = 33; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnError_unexpectedError
 * @description Error not in the operation's `&Errors`; maps to `returnError:unexpectedError` (X.880 §9.5.3 b, §9.7).
 * @constant
 * @type {number}
 */
export const returnError_unexpectedError: RejectProblem = RejectProblem_returnError_unexpectedError; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnError_mistypedParameter
 * @description parameter missing or mistyped; maps to `returnError:mistypedParameter` (X.880 §9.5.3 c, §9.7).
 * @constant
 * @type {number}
 */
export const RejectProblem_returnError_mistypedParameter: RejectProblem = 34; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RejectProblem_returnError_mistypedParameter
 * @description parameter missing or mistyped; maps to `returnError:mistypedParameter` (X.880 §9.5.3 c, §9.7).
 * @constant
 * @type {number}
 */
export const returnError_mistypedParameter: RejectProblem = RejectProblem_returnError_mistypedParameter; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_RejectProblem = $._decodeInteger;




export const _encode_RejectProblem = $._encodeInteger;


/* eslint-enable */
