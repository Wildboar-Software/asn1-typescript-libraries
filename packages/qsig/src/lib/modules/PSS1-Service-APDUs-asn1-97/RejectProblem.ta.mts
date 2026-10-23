/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary RejectProblem
 * @description
 *
 * Identifiers of the constraint exceptions in Table 34 (`! RejectProblem :
 * ...`). They are not the integer carried in a Reject APDU; that integer is a
 * GeneralProblem, InvokeProblem, ReturnResultProblem, or ReturnErrorProblem
 * (ECMA-165 §11.3.3.4, Annex G). Each value below names the failure Table 34
 * associates with it and the Annex G code used to signal it.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectProblem  ::=  INTEGER {
 *     general-unrecognisedPDU(0),
 *     general-mistypedPDU(1),
 *     general-badlyStructuredPDU(2),
 *     invoke-duplicateInvocation(10),
 *     invoke-unrecognisedOperation(11),
 *     invoke-mistypedArgument(12),
 *     invoke-resourceLimitation(13),
 *     invoke-releaseInProgress(14),
 *     invoke-unrecognisedLinkedId(15),
 *     invoke-linkedResponseUnexpected(16),
 *     invoke-unexpectedLinkedOperation(17),
 *     returnResult-unrecognisedInvocation(20),
 *     returnResult-resultResponseUnexpected(21),
 *     returnResult-mistypedResult(22),
 *     returnError-unrecognisedInvocation(30),
 *     returnError-errorResponseUnexpected(31),
 *     returnError-unrecognisedError(32),
 *     returnError-unexpectedError(33),
 *     returnError-mistypedParameter(34)
 * }
 * ```
 */
export
type RejectProblem = INTEGER;

/**
 * @summary RejectProblem_general_unrecognisedPDU
 * @description
 *
 * Exception identifier for a RoseAPDU that does not conform to Table 34
 * (ECMA-165 §11.3.3.4). The Reject APDU then carries `GeneralProblem`
 * `unrecognisedPDU` (Annex G): the type identifier is not defined in clause 11.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_general_unrecognisedPDU: RejectProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary general_unrecognisedPDU
 * @description Alias of {@link RejectProblem_general_unrecognisedPDU}.
 * @constant
 * @type {number}
 */
export
const general_unrecognisedPDU: RejectProblem = RejectProblem_general_unrecognisedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_general_mistypedPDU
 * @description
 *
 * Exception identifier when an Invoke, ReturnResult, ReturnError, or Reject
 * value does not conform to Table 34. Annex G: the structure does not conform
 * to clause 11 (`mistypedPDU`).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_general_mistypedPDU: RejectProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary general_mistypedPDU
 * @description Alias of {@link RejectProblem_general_mistypedPDU}.
 * @constant
 * @type {number}
 */
export
const general_mistypedPDU: RejectProblem = RejectProblem_general_mistypedPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_general_badlyStructuredPDU
 * @description
 *
 * Table 34 names `general-badlyStructuredPDU` and does not reference it from a
 * constraint. Annex G: the APDU does not conform to X.680 and X.690
 * (`badlyStructuredPDU`).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_general_badlyStructuredPDU: RejectProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary general_badlyStructuredPDU
 * @description Alias of {@link RejectProblem_general_badlyStructuredPDU}.
 * @constant
 * @type {number}
 */
export
const general_badlyStructuredPDU: RejectProblem = RejectProblem_general_badlyStructuredPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_duplicateInvocation
 * @description
 *
 * The invoke identifier is not unambiguous (ECMA-165 §11.3.3.4). Signalled as
 * `InvokeProblem` `duplicateInvocation` (Annex G).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_invoke_duplicateInvocation: RejectProblem = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary invoke_duplicateInvocation
 * @description Alias of {@link RejectProblem_invoke_duplicateInvocation}.
 * @constant
 * @type {number}
 */
export
const invoke_duplicateInvocation: RejectProblem = RejectProblem_invoke_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_unrecognisedOperation
 * @description
 *
 * The operation code is not in the Operations set (ECMA-165 §11.3.3.4).
 * Signalled as `unrecognisedOperation` (Annex G, §8.2).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_invoke_unrecognisedOperation: RejectProblem = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary invoke_unrecognisedOperation
 * @description Alias of {@link RejectProblem_invoke_unrecognisedOperation}.
 * @constant
 * @type {number}
 */
export
const invoke_unrecognisedOperation: RejectProblem = RejectProblem_invoke_unrecognisedOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_mistypedArgument
 * @description
 *
 * The argument is not the type of that operation (ECMA-165 §11.3.3.4).
 * Signalled as `mistypedArgument` (Annex G).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_invoke_mistypedArgument: RejectProblem = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary invoke_mistypedArgument
 * @description Alias of {@link RejectProblem_invoke_mistypedArgument}.
 * @constant
 * @type {number}
 */
export
const invoke_mistypedArgument: RejectProblem = RejectProblem_invoke_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_resourceLimitation
 * @description
 *
 * Table 34 names `invoke-resourceLimitation` and does not attach it to a
 * constraint. Annex G: the performing PINX cannot perform the operation because
 * of resource limitation.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_invoke_resourceLimitation: RejectProblem = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary invoke_resourceLimitation
 * @description Alias of {@link RejectProblem_invoke_resourceLimitation}.
 * @constant
 * @type {number}
 */
export
const invoke_resourceLimitation: RejectProblem = RejectProblem_invoke_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_releaseInProgress
 * @description
 *
 * Table 34 names `invoke-releaseInProgress` and does not attach it to a
 * constraint. Annex G calls the invoke problem `initiatorReleasing`: the
 * initiator is about to release the application association.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_invoke_releaseInProgress: RejectProblem = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary invoke_releaseInProgress
 * @description Alias of {@link RejectProblem_invoke_releaseInProgress}.
 * @constant
 * @type {number}
 */
export
const invoke_releaseInProgress: RejectProblem = RejectProblem_invoke_releaseInProgress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_unrecognisedLinkedId
 * @description
 *
 * `linkedId` does not identify an outstanding operation (ECMA-165 §11.3.3.4).
 * Signalled as `unrecognisedLinkedId` (Annex G).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_invoke_unrecognisedLinkedId: RejectProblem = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary invoke_unrecognisedLinkedId
 * @description Alias of {@link RejectProblem_invoke_unrecognisedLinkedId}.
 * @constant
 * @type {number}
 */
export
const invoke_unrecognisedLinkedId: RejectProblem = RejectProblem_invoke_unrecognisedLinkedId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_linkedResponseUnexpected
 * @description
 *
 * The operation identified by `linkedId` has no linked operations (ECMA-165
 * §11.3.3.4). Annex G: that operation is not a parent operation.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_invoke_linkedResponseUnexpected: RejectProblem = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary invoke_linkedResponseUnexpected
 * @description Alias of {@link RejectProblem_invoke_linkedResponseUnexpected}.
 * @constant
 * @type {number}
 */
export
const invoke_linkedResponseUnexpected: RejectProblem = RejectProblem_invoke_linkedResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_invoke_unexpectedLinkedOperation
 * @description
 *
 * A linked invoke whose opcode is not in the parent operation's `&Linked` field
 * (ECMA-165 §11.3.3.4). Annex G calls the invoke problem
 * `unexpectedChildOperation`.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_invoke_unexpectedLinkedOperation: RejectProblem = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary invoke_unexpectedLinkedOperation
 * @description Alias of {@link RejectProblem_invoke_unexpectedLinkedOperation}.
 * @constant
 * @type {number}
 */
export
const invoke_unexpectedLinkedOperation: RejectProblem = RejectProblem_invoke_unexpectedLinkedOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnResult_unrecognisedInvocation
 * @description
 *
 * The invoke identifier is not an outstanding operation, or the result opcode
 * is not the operation that identifier names (ECMA-165 §11.3.3.4, Annex G).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_returnResult_unrecognisedInvocation: RejectProblem = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary returnResult_unrecognisedInvocation
 * @description
 *
 * Alias of {@link RejectProblem_returnResult_unrecognisedInvocation}.
 * @constant
 * @type {number}
 */
export
const returnResult_unrecognisedInvocation: RejectProblem = RejectProblem_returnResult_unrecognisedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnResult_resultResponseUnexpected
 * @description
 *
 * The outstanding operation does not return a result (ECMA-165 §11.3.3.4, Annex
 * G).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_returnResult_resultResponseUnexpected: RejectProblem = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary returnResult_resultResponseUnexpected
 * @description
 *
 * Alias of {@link RejectProblem_returnResult_resultResponseUnexpected}.
 * @constant
 * @type {number}
 */
export
const returnResult_resultResponseUnexpected: RejectProblem = RejectProblem_returnResult_resultResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnResult_mistypedResult
 * @description
 *
 * The result is not the type of that operation (ECMA-165 §11.3.3.4, Annex G).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_returnResult_mistypedResult: RejectProblem = 22; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary returnResult_mistypedResult
 * @description Alias of {@link RejectProblem_returnResult_mistypedResult}.
 * @constant
 * @type {number}
 */
export
const returnResult_mistypedResult: RejectProblem = RejectProblem_returnResult_mistypedResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_unrecognisedInvocation
 * @description
 *
 * The invoke identifier is not an outstanding operation (ECMA-165 §11.3.3.4,
 * Annex G).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_returnError_unrecognisedInvocation: RejectProblem = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary returnError_unrecognisedInvocation
 * @description
 *
 * Alias of {@link RejectProblem_returnError_unrecognisedInvocation}.
 * @constant
 * @type {number}
 */
export
const returnError_unrecognisedInvocation: RejectProblem = RejectProblem_returnError_unrecognisedInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_errorResponseUnexpected
 * @description
 *
 * The outstanding operation does not report an error (ECMA-165 §11.3.3.4, Annex
 * G).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_returnError_errorResponseUnexpected: RejectProblem = 31; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary returnError_errorResponseUnexpected
 * @description
 *
 * Alias of {@link RejectProblem_returnError_errorResponseUnexpected}.
 * @constant
 * @type {number}
 */
export
const returnError_errorResponseUnexpected: RejectProblem = RejectProblem_returnError_errorResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_unrecognisedError
 * @description
 *
 * The error code is not in the Errors set (ECMA-165 §11.3.3.4). Annex G: the
 * reported error is not one expected.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_returnError_unrecognisedError: RejectProblem = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary returnError_unrecognisedError
 * @description Alias of {@link RejectProblem_returnError_unrecognisedError}.
 * @constant
 * @type {number}
 */
export
const returnError_unrecognisedError: RejectProblem = RejectProblem_returnError_unrecognisedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_unexpectedError
 * @description
 *
 * The error code is not in the invoked operation's `&Errors` (ECMA-165
 * §11.3.3.4). Annex G: the operation may not report that error.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_returnError_unexpectedError: RejectProblem = 33; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary returnError_unexpectedError
 * @description Alias of {@link RejectProblem_returnError_unexpectedError}.
 * @constant
 * @type {number}
 */
export
const returnError_unexpectedError: RejectProblem = RejectProblem_returnError_unexpectedError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectProblem_returnError_mistypedParameter
 * @description
 *
 * The error parameter is not the type of that error (ECMA-165 §11.3.3.4, Annex
 * G).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const RejectProblem_returnError_mistypedParameter: RejectProblem = 34; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary returnError_mistypedParameter
 * @description Alias of {@link RejectProblem_returnError_mistypedParameter}.
 * @constant
 * @type {number}
 */
export
const returnError_mistypedParameter: RejectProblem = RejectProblem_returnError_mistypedParameter; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RejectProblem: $.ASN1Decoder<RejectProblem> = $._decodeInteger;

export
const _encode_RejectProblem: $.ASN1Encoder<RejectProblem> = $._encodeInteger;

/* eslint-enable */
