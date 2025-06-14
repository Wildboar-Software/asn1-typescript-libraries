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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION RejectProblem */
/**
 * @summary RejectProblem
 * @description
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
/* END_OF_SYMBOL_DEFINITION RejectProblem */

/* START_OF_SYMBOL_DEFINITION RejectProblem_general_unrecognizedPDU */
/**
 * @summary RejectProblem_general_unrecognizedPDU
 * @constant
 * @type {number}
 */
export const RejectProblem_general_unrecognizedPDU: RejectProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_general_unrecognizedPDU */

/* START_OF_SYMBOL_DEFINITION general_unrecognizedPDU */
/**
 * @summary RejectProblem_general_unrecognizedPDU
 * @constant
 * @type {number}
 */
export const general_unrecognizedPDU: RejectProblem = RejectProblem_general_unrecognizedPDU; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION general_unrecognizedPDU */

/* START_OF_SYMBOL_DEFINITION RejectProblem_general_mistypedPDU */
/**
 * @summary RejectProblem_general_mistypedPDU
 * @constant
 * @type {number}
 */
export const RejectProblem_general_mistypedPDU: RejectProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_general_mistypedPDU */

/* START_OF_SYMBOL_DEFINITION general_mistypedPDU */
/**
 * @summary RejectProblem_general_mistypedPDU
 * @constant
 * @type {number}
 */
export const general_mistypedPDU: RejectProblem = RejectProblem_general_mistypedPDU; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION general_mistypedPDU */

/* START_OF_SYMBOL_DEFINITION RejectProblem_general_badlyStructuredPDU */
/**
 * @summary RejectProblem_general_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export const RejectProblem_general_badlyStructuredPDU: RejectProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_general_badlyStructuredPDU */

/* START_OF_SYMBOL_DEFINITION general_badlyStructuredPDU */
/**
 * @summary RejectProblem_general_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export const general_badlyStructuredPDU: RejectProblem = RejectProblem_general_badlyStructuredPDU; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION general_badlyStructuredPDU */

/* START_OF_SYMBOL_DEFINITION RejectProblem_invoke_duplicateInvocation */
/**
 * @summary RejectProblem_invoke_duplicateInvocation
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_duplicateInvocation: RejectProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_invoke_duplicateInvocation */

/* START_OF_SYMBOL_DEFINITION invoke_duplicateInvocation */
/**
 * @summary RejectProblem_invoke_duplicateInvocation
 * @constant
 * @type {number}
 */
export const invoke_duplicateInvocation: RejectProblem = RejectProblem_invoke_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invoke_duplicateInvocation */

/* START_OF_SYMBOL_DEFINITION RejectProblem_invoke_unrecognizedOperation */
/**
 * @summary RejectProblem_invoke_unrecognizedOperation
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_unrecognizedOperation: RejectProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_invoke_unrecognizedOperation */

/* START_OF_SYMBOL_DEFINITION invoke_unrecognizedOperation */
/**
 * @summary RejectProblem_invoke_unrecognizedOperation
 * @constant
 * @type {number}
 */
export const invoke_unrecognizedOperation: RejectProblem = RejectProblem_invoke_unrecognizedOperation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invoke_unrecognizedOperation */

/* START_OF_SYMBOL_DEFINITION RejectProblem_invoke_mistypedArgument */
/**
 * @summary RejectProblem_invoke_mistypedArgument
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_mistypedArgument: RejectProblem = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_invoke_mistypedArgument */

/* START_OF_SYMBOL_DEFINITION invoke_mistypedArgument */
/**
 * @summary RejectProblem_invoke_mistypedArgument
 * @constant
 * @type {number}
 */
export const invoke_mistypedArgument: RejectProblem = RejectProblem_invoke_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invoke_mistypedArgument */

/* START_OF_SYMBOL_DEFINITION RejectProblem_invoke_resourceLimitation */
/**
 * @summary RejectProblem_invoke_resourceLimitation
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_resourceLimitation: RejectProblem = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_invoke_resourceLimitation */

/* START_OF_SYMBOL_DEFINITION invoke_resourceLimitation */
/**
 * @summary RejectProblem_invoke_resourceLimitation
 * @constant
 * @type {number}
 */
export const invoke_resourceLimitation: RejectProblem = RejectProblem_invoke_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invoke_resourceLimitation */

/* START_OF_SYMBOL_DEFINITION RejectProblem_invoke_releaseInProgress */
/**
 * @summary RejectProblem_invoke_releaseInProgress
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_releaseInProgress: RejectProblem = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_invoke_releaseInProgress */

/* START_OF_SYMBOL_DEFINITION invoke_releaseInProgress */
/**
 * @summary RejectProblem_invoke_releaseInProgress
 * @constant
 * @type {number}
 */
export const invoke_releaseInProgress: RejectProblem = RejectProblem_invoke_releaseInProgress; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invoke_releaseInProgress */

/* START_OF_SYMBOL_DEFINITION RejectProblem_invoke_unrecognizedLinkedId */
/**
 * @summary RejectProblem_invoke_unrecognizedLinkedId
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_unrecognizedLinkedId: RejectProblem = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_invoke_unrecognizedLinkedId */

/* START_OF_SYMBOL_DEFINITION invoke_unrecognizedLinkedId */
/**
 * @summary RejectProblem_invoke_unrecognizedLinkedId
 * @constant
 * @type {number}
 */
export const invoke_unrecognizedLinkedId: RejectProblem = RejectProblem_invoke_unrecognizedLinkedId; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invoke_unrecognizedLinkedId */

/* START_OF_SYMBOL_DEFINITION RejectProblem_invoke_linkedResponseUnexpected */
/**
 * @summary RejectProblem_invoke_linkedResponseUnexpected
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_linkedResponseUnexpected: RejectProblem = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_invoke_linkedResponseUnexpected */

/* START_OF_SYMBOL_DEFINITION invoke_linkedResponseUnexpected */
/**
 * @summary RejectProblem_invoke_linkedResponseUnexpected
 * @constant
 * @type {number}
 */
export const invoke_linkedResponseUnexpected: RejectProblem = RejectProblem_invoke_linkedResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invoke_linkedResponseUnexpected */

/* START_OF_SYMBOL_DEFINITION RejectProblem_invoke_unexpectedLinkedOperation */
/**
 * @summary RejectProblem_invoke_unexpectedLinkedOperation
 * @constant
 * @type {number}
 */
export const RejectProblem_invoke_unexpectedLinkedOperation: RejectProblem = 17; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_invoke_unexpectedLinkedOperation */

/* START_OF_SYMBOL_DEFINITION invoke_unexpectedLinkedOperation */
/**
 * @summary RejectProblem_invoke_unexpectedLinkedOperation
 * @constant
 * @type {number}
 */
export const invoke_unexpectedLinkedOperation: RejectProblem = RejectProblem_invoke_unexpectedLinkedOperation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invoke_unexpectedLinkedOperation */

/* START_OF_SYMBOL_DEFINITION RejectProblem_returnResult_unrecognizedInvocation */
/**
 * @summary RejectProblem_returnResult_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const RejectProblem_returnResult_unrecognizedInvocation: RejectProblem = 20; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_returnResult_unrecognizedInvocation */

/* START_OF_SYMBOL_DEFINITION returnResult_unrecognizedInvocation */
/**
 * @summary RejectProblem_returnResult_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const returnResult_unrecognizedInvocation: RejectProblem = RejectProblem_returnResult_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION returnResult_unrecognizedInvocation */

/* START_OF_SYMBOL_DEFINITION RejectProblem_returnResult_resultResponseUnexpected */
/**
 * @summary RejectProblem_returnResult_resultResponseUnexpected
 * @constant
 * @type {number}
 */
export const RejectProblem_returnResult_resultResponseUnexpected: RejectProblem = 21; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_returnResult_resultResponseUnexpected */

/* START_OF_SYMBOL_DEFINITION returnResult_resultResponseUnexpected */
/**
 * @summary RejectProblem_returnResult_resultResponseUnexpected
 * @constant
 * @type {number}
 */
export const returnResult_resultResponseUnexpected: RejectProblem = RejectProblem_returnResult_resultResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION returnResult_resultResponseUnexpected */

/* START_OF_SYMBOL_DEFINITION RejectProblem_returnResult_mistypedResult */
/**
 * @summary RejectProblem_returnResult_mistypedResult
 * @constant
 * @type {number}
 */
export const RejectProblem_returnResult_mistypedResult: RejectProblem = 22; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_returnResult_mistypedResult */

/* START_OF_SYMBOL_DEFINITION returnResult_mistypedResult */
/**
 * @summary RejectProblem_returnResult_mistypedResult
 * @constant
 * @type {number}
 */
export const returnResult_mistypedResult: RejectProblem = RejectProblem_returnResult_mistypedResult; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION returnResult_mistypedResult */

/* START_OF_SYMBOL_DEFINITION RejectProblem_returnError_unrecognizedInvocation */
/**
 * @summary RejectProblem_returnError_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const RejectProblem_returnError_unrecognizedInvocation: RejectProblem = 30; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_returnError_unrecognizedInvocation */

/* START_OF_SYMBOL_DEFINITION returnError_unrecognizedInvocation */
/**
 * @summary RejectProblem_returnError_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const returnError_unrecognizedInvocation: RejectProblem = RejectProblem_returnError_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION returnError_unrecognizedInvocation */

/* START_OF_SYMBOL_DEFINITION RejectProblem_returnError_errorResponseUnexpected */
/**
 * @summary RejectProblem_returnError_errorResponseUnexpected
 * @constant
 * @type {number}
 */
export const RejectProblem_returnError_errorResponseUnexpected: RejectProblem = 31; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_returnError_errorResponseUnexpected */

/* START_OF_SYMBOL_DEFINITION returnError_errorResponseUnexpected */
/**
 * @summary RejectProblem_returnError_errorResponseUnexpected
 * @constant
 * @type {number}
 */
export const returnError_errorResponseUnexpected: RejectProblem = RejectProblem_returnError_errorResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION returnError_errorResponseUnexpected */

/* START_OF_SYMBOL_DEFINITION RejectProblem_returnError_unrecognizedError */
/**
 * @summary RejectProblem_returnError_unrecognizedError
 * @constant
 * @type {number}
 */
export const RejectProblem_returnError_unrecognizedError: RejectProblem = 32; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_returnError_unrecognizedError */

/* START_OF_SYMBOL_DEFINITION returnError_unrecognizedError */
/**
 * @summary RejectProblem_returnError_unrecognizedError
 * @constant
 * @type {number}
 */
export const returnError_unrecognizedError: RejectProblem = RejectProblem_returnError_unrecognizedError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION returnError_unrecognizedError */

/* START_OF_SYMBOL_DEFINITION RejectProblem_returnError_unexpectedError */
/**
 * @summary RejectProblem_returnError_unexpectedError
 * @constant
 * @type {number}
 */
export const RejectProblem_returnError_unexpectedError: RejectProblem = 33; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_returnError_unexpectedError */

/* START_OF_SYMBOL_DEFINITION returnError_unexpectedError */
/**
 * @summary RejectProblem_returnError_unexpectedError
 * @constant
 * @type {number}
 */
export const returnError_unexpectedError: RejectProblem = RejectProblem_returnError_unexpectedError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION returnError_unexpectedError */

/* START_OF_SYMBOL_DEFINITION RejectProblem_returnError_mistypedParameter */
/**
 * @summary RejectProblem_returnError_mistypedParameter
 * @constant
 * @type {number}
 */
export const RejectProblem_returnError_mistypedParameter: RejectProblem = 34; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RejectProblem_returnError_mistypedParameter */

/* START_OF_SYMBOL_DEFINITION returnError_mistypedParameter */
/**
 * @summary RejectProblem_returnError_mistypedParameter
 * @constant
 * @type {number}
 */
export const returnError_mistypedParameter: RejectProblem = RejectProblem_returnError_mistypedParameter; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION returnError_mistypedParameter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RejectProblem */
let _cached_decoder_for_RejectProblem: $.ASN1Decoder<RejectProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RejectProblem */

/* START_OF_SYMBOL_DEFINITION _decode_RejectProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) RejectProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RejectProblem} The decoded data structure.
 */
export function _decode_RejectProblem(el: _Element) {
  if (!_cached_decoder_for_RejectProblem) {
    _cached_decoder_for_RejectProblem = $._decodeInteger;
  }
  return _cached_decoder_for_RejectProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RejectProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RejectProblem */
let _cached_encoder_for_RejectProblem: $.ASN1Encoder<RejectProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RejectProblem */

/* START_OF_SYMBOL_DEFINITION _encode_RejectProblem */
/**
 * @summary Encodes a(n) RejectProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectProblem, encoded as an ASN.1 Element.
 */
export function _encode_RejectProblem(
  value: RejectProblem,
  elGetter: $.ASN1Encoder<RejectProblem>
) {
  if (!_cached_encoder_for_RejectProblem) {
    _cached_encoder_for_RejectProblem = $._encodeInteger;
  }
  return _cached_encoder_for_RejectProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RejectProblem */

/* eslint-enable */
