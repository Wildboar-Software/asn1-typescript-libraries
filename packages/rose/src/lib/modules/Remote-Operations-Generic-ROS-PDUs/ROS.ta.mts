/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
import {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
export {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
import {
  Invoke,
  _decode_Invoke,
  _encode_Invoke,
} from '../Remote-Operations-Generic-ROS-PDUs/Invoke.ta.mjs';
export {
  Invoke,
  _decode_Invoke,
  _encode_Invoke,
} from '../Remote-Operations-Generic-ROS-PDUs/Invoke.ta.mjs';
import {
  ReturnResult,
  _decode_ReturnResult,
  _encode_ReturnResult,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnResult.ta.mjs';
export {
  ReturnResult,
  _decode_ReturnResult,
  _encode_ReturnResult,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnResult.ta.mjs';
import {
  ReturnError,
  _decode_ReturnError,
  _encode_ReturnError,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnError.ta.mjs';
export {
  ReturnError,
  _decode_ReturnError,
  _encode_ReturnError,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnError.ta.mjs';
import {
  Reject,
  _decode_Reject,
  _encode_Reject,
} from '../Remote-Operations-Generic-ROS-PDUs/Reject.ta.mjs';
export {
  Reject,
  _decode_Reject,
  _encode_Reject,
} from '../Remote-Operations-Generic-ROS-PDUs/Reject.ta.mjs';
import {
  RejectProblem,
  RejectProblem_general_unrecognizedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_unrecognizedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_general_mistypedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_mistypedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_general_badlyStructuredPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_badlyStructuredPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_duplicateInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_duplicateInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unrecognizedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unrecognizedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_mistypedArgument /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_mistypedArgument /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_resourceLimitation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_resourceLimitation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_releaseInProgress /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_releaseInProgress /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unrecognizedLinkedId /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unrecognizedLinkedId /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_linkedResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_linkedResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unexpectedLinkedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unexpectedLinkedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_unrecognizedInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_resultResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_resultResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_mistypedResult /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_mistypedResult /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unrecognizedInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_errorResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_errorResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unrecognizedError /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unrecognizedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unexpectedError /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unexpectedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_mistypedParameter /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_mistypedParameter /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_RejectProblem,
  _encode_RejectProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta.mjs';
export {
  RejectProblem,
  RejectProblem_general_unrecognizedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_unrecognizedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_general_mistypedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_mistypedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_general_badlyStructuredPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  general_badlyStructuredPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_duplicateInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_duplicateInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unrecognizedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unrecognizedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_mistypedArgument /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_mistypedArgument /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_resourceLimitation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_resourceLimitation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_releaseInProgress /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_releaseInProgress /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unrecognizedLinkedId /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unrecognizedLinkedId /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_linkedResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_linkedResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_invoke_unexpectedLinkedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  invoke_unexpectedLinkedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_unrecognizedInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_resultResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_resultResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnResult_mistypedResult /* IMPORTED_LONG_NAMED_INTEGER */,
  returnResult_mistypedResult /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unrecognizedInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_errorResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_errorResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unrecognizedError /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unrecognizedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_unexpectedError /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_unexpectedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  RejectProblem_returnError_mistypedParameter /* IMPORTED_LONG_NAMED_INTEGER */,
  returnError_mistypedParameter /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_RejectProblem,
  _encode_RejectProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ROS */
/**
 * @summary ROS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ROS{InvokeId:InvokeIdSet, OPERATION:Invokable, OPERATION:Returnable}  ::=
 *   CHOICE {
 *   invoke        [1]  Invoke{{InvokeIdSet}, {Invokable}},
 *   returnResult  [2]  ReturnResult{{Returnable}},
 *   returnError   [3]  ReturnError{{Errors  {{Returnable}}}},
 *   reject        [4]  Reject
 * }
 * (CONSTRAINED BY { -- must conform to the above definition --} !
 *  RejectProblem:general-unrecognizedPDU)
 * ```
 */
export type ROS =
  | { invoke: Invoke } /* CHOICE_ALT_ROOT */
  | { returnResult: ReturnResult } /* CHOICE_ALT_ROOT */
  | { returnError: ReturnError } /* CHOICE_ALT_ROOT */
  | { reject: Reject } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ROS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ROS */
let _cached_decoder_for_ROS: $.ASN1Decoder<ROS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ROS */

/* START_OF_SYMBOL_DEFINITION _decode_ROS */
/**
 * @summary Decodes an ASN.1 element into a(n) ROS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ROS} The decoded data structure.
 */
export function _decode_ROS(el: _Element) {
  if (!_cached_decoder_for_ROS) {
    _cached_decoder_for_ROS = $._decode_inextensible_choice<ROS>({
      'CONTEXT 1': ['invoke', $._decode_implicit<Invoke>(() => _decode_Invoke)],
      'CONTEXT 2': [
        'returnResult',
        $._decode_implicit<ReturnResult>(() => _decode_ReturnResult),
      ],
      'CONTEXT 3': [
        'returnError',
        $._decode_implicit<ReturnError>(() => _decode_ReturnError),
      ],
      'CONTEXT 4': ['reject', $._decode_implicit<Reject>(() => _decode_Reject)],
    });
  }
  return _cached_decoder_for_ROS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ROS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ROS */
let _cached_encoder_for_ROS: $.ASN1Encoder<ROS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ROS */

/* START_OF_SYMBOL_DEFINITION _encode_ROS */
/**
 * @summary Encodes a(n) ROS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ROS, encoded as an ASN.1 Element.
 */
export function _encode_ROS(value: ROS, elGetter: $.ASN1Encoder<ROS>) {
  if (!_cached_encoder_for_ROS) {
    _cached_encoder_for_ROS = $._encode_choice<ROS>(
      {
        invoke: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_Invoke,
          $.BER
        ),
        returnResult: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_ReturnResult,
          $.BER
        ),
        returnError: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_ReturnError,
          $.BER
        ),
        reject: $._encode_implicit(
          _TagClass.context,
          4,
          () => _encode_Reject,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_ROS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ROS */

/* eslint-enable */
