/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RejectProblem
 * @description
 * 
 * Integer that identifies which abstract constraint a component violated. These
 * values appear in the component type constraints. They are not the integers
 * encoded in `Reject.problem`. The encoded values are `GeneralProblem`,
 * `InvokeProblem`, `ReturnResultProblem`, and `ReturnErrorProblem`.
 *
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
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
export
type RejectProblem = INTEGER;

/**
 * @summary RejectProblem_general_unrecognizedPDU
 * @description
 * 
 * Abstract problem (integer 0): the component does not conform to the ROS
 * choice. Not the encoded `GeneralProblem` value. ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_general_unrecognizedPDU: 0 = 0 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_general_unrecognizedPDU
 * @description
 * 
 * Abstract problem (integer 0): the component does not conform to the ROS
 * choice. Not the encoded `GeneralProblem` value. ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const general_unrecognizedPDU: 0 = RejectProblem_general_unrecognizedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_general_mistypedPDU
 * @description
 * 
 * Abstract problem (integer 1): the component does not conform to its type
 * definition. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_general_mistypedPDU: 1 = 1 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_general_mistypedPDU
 * @description
 * 
 * Abstract problem (integer 1): the component does not conform to its type
 * definition. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const general_mistypedPDU: 1 = RejectProblem_general_mistypedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_general_badlyStructuredPDU
 * @description
 * 
 * Abstract problem (integer 2): the PDU is badly structured. ITU-T Rec. Q.932
 * (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_general_badlyStructuredPDU: 2 = 2 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_general_badlyStructuredPDU
 * @description
 * 
 * Abstract problem (integer 2): the PDU is badly structured. ITU-T Rec. Q.932
 * (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const general_badlyStructuredPDU: 2 = RejectProblem_general_badlyStructuredPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_duplicateInvocation
 * @description
 * 
 * Abstract problem (integer 10): the invoke identifier is ambiguous.
 * Corresponds to encoded `duplicateInvocation`. ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_invoke_duplicateInvocation: 10 = 10 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_duplicateInvocation
 * @description
 * 
 * Abstract problem (integer 10): the invoke identifier is ambiguous.
 * Corresponds to encoded `duplicateInvocation`. ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const invoke_duplicateInvocation: 10 = RejectProblem_invoke_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_unrecognizedOperation
 * @description
 * 
 * Abstract problem (integer 11): the operation code is not in the invokable
 * set. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_invoke_unrecognizedOperation: 11 = 11 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_unrecognizedOperation
 * @description
 * 
 * Abstract problem (integer 11): the operation code is not in the invokable
 * set. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const invoke_unrecognizedOperation: 11 = RejectProblem_invoke_unrecognizedOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_mistypedArgument
 * @description
 * 
 * Abstract problem (integer 12): the argument does not match the operation.
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_invoke_mistypedArgument: 12 = 12 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_mistypedArgument
 * @description
 * 
 * Abstract problem (integer 12): the argument does not match the operation.
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const invoke_mistypedArgument: 12 = RejectProblem_invoke_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_resourceLimitation
 * @description
 * 
 * Abstract problem (integer 13): resource limitation. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_invoke_resourceLimitation: 13 = 13 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_resourceLimitation
 * @description
 * 
 * Abstract problem (integer 13): resource limitation. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const invoke_resourceLimitation: 13 = RejectProblem_invoke_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_releaseInProgress
 * @description
 * 
 * Abstract problem (integer 14): release in progress. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_invoke_releaseInProgress: 14 = 14 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_releaseInProgress
 * @description
 * 
 * Abstract problem (integer 14): release in progress. ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const invoke_releaseInProgress: 14 = RejectProblem_invoke_releaseInProgress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_unrecognizedLinkedId
 * @description
 * 
 * Abstract problem (integer 15): the linked identifier is not an outstanding
 * operation. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_invoke_unrecognizedLinkedId: 15 = 15 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_unrecognizedLinkedId
 * @description
 * 
 * Abstract problem (integer 15): the linked identifier is not an outstanding
 * operation. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const invoke_unrecognizedLinkedId: 15 = RejectProblem_invoke_unrecognizedLinkedId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_linkedResponseUnexpected
 * @description
 * 
 * Abstract problem (integer 16): the parent operation has no linked operations.
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_invoke_linkedResponseUnexpected: 16 = 16 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_linkedResponseUnexpected
 * @description
 * 
 * Abstract problem (integer 16): the parent operation has no linked operations.
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const invoke_linkedResponseUnexpected: 16 = RejectProblem_invoke_linkedResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_unexpectedLinkedOperation
 * @description
 * 
 * Abstract problem (integer 17): the opcode is not in the parent operation's
 * `&Linked` set. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_invoke_unexpectedLinkedOperation: 17 = 17 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_unexpectedLinkedOperation
 * @description
 * 
 * Abstract problem (integer 17): the opcode is not in the parent operation's
 * `&Linked` set. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const invoke_unexpectedLinkedOperation: 17 = RejectProblem_invoke_unexpectedLinkedOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnResult_unrecognizedInvocation
 * @description
 * 
 * Abstract problem (integer 20): the return result names no outstanding
 * operation, or its opcode is not that operation. ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_returnResult_unrecognizedInvocation: 20 = 20 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnResult_unrecognizedInvocation
 * @description
 * 
 * Abstract problem (integer 20): the return result names no outstanding
 * operation, or its opcode is not that operation. ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const returnResult_unrecognizedInvocation: 20 = RejectProblem_returnResult_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnResult_resultResponseUnexpected
 * @description
 * 
 * Abstract problem (integer 21): the operation does not return a result. ITU-T
 * Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_returnResult_resultResponseUnexpected: 21 = 21 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnResult_resultResponseUnexpected
 * @description
 * 
 * Abstract problem (integer 21): the operation does not return a result. ITU-T
 * Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const returnResult_resultResponseUnexpected: 21 = RejectProblem_returnResult_resultResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnResult_mistypedResult
 * @description
 * 
 * Abstract problem (integer 22): the result value does not match the operation.
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_returnResult_mistypedResult: 22 = 22 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnResult_mistypedResult
 * @description
 * 
 * Abstract problem (integer 22): the result value does not match the operation.
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const returnResult_mistypedResult: 22 = RejectProblem_returnResult_mistypedResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_unrecognizedInvocation
 * @description
 * 
 * Abstract problem (integer 30): the return error names no outstanding
 * operation. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_returnError_unrecognizedInvocation: 30 = 30 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_unrecognizedInvocation
 * @description
 * 
 * Abstract problem (integer 30): the return error names no outstanding
 * operation. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const returnError_unrecognizedInvocation: 30 = RejectProblem_returnError_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_errorResponseUnexpected
 * @description
 * 
 * Abstract problem (integer 31): the operation does not return an error. ITU-T
 * Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_returnError_errorResponseUnexpected: 31 = 31 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_errorResponseUnexpected
 * @description
 * 
 * Abstract problem (integer 31): the operation does not return an error. ITU-T
 * Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const returnError_errorResponseUnexpected: 31 = RejectProblem_returnError_errorResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_unrecognizedError
 * @description
 * 
 * Abstract problem (integer 32): the error code is not in the error set. ITU-T
 * Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_returnError_unrecognizedError: 32 = 32 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_unrecognizedError
 * @description
 * 
 * Abstract problem (integer 32): the error code is not in the error set. ITU-T
 * Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const returnError_unrecognizedError: 32 = RejectProblem_returnError_unrecognizedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_unexpectedError
 * @description
 * 
 * Abstract problem (integer 33): the error is not one of the operation's
 * errors. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_returnError_unexpectedError: 33 = 33 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_unexpectedError
 * @description
 * 
 * Abstract problem (integer 33): the error is not one of the operation's
 * errors. ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const returnError_unexpectedError: 33 = RejectProblem_returnError_unexpectedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_mistypedParameter
 * @description
 * 
 * Abstract problem (integer 34): the error parameter does not match the error.
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const RejectProblem_returnError_mistypedParameter: 34 = 34 satisfies RejectProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_mistypedParameter
 * @description
 * 
 * Abstract problem (integer 34): the error parameter does not match the error.
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * @constant
 * @type {number}
 */
export
const returnError_mistypedParameter: 34 = RejectProblem_returnError_mistypedParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectProblem: $.ASN1Decoder<RejectProblem> = $._decodeInteger;
export const _encode_RejectProblem: $.ASN1Encoder<RejectProblem> = $._encodeInteger;


/* eslint-enable */
