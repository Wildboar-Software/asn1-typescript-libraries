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
  GeneralProblem,
  GeneralProblem_unrecognizedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  unrecognizedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  GeneralProblem_mistypedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  mistypedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  GeneralProblem_badlyStructuredPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  badlyStructuredPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_GeneralProblem,
  _encode_GeneralProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/GeneralProblem.ta.js';
export {
  GeneralProblem,
  GeneralProblem_unrecognizedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  unrecognizedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  GeneralProblem_mistypedPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  mistypedPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  GeneralProblem_badlyStructuredPDU /* IMPORTED_LONG_NAMED_INTEGER */,
  badlyStructuredPDU /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_GeneralProblem,
  _encode_GeneralProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/GeneralProblem.ta.js';
import {
  InvokeProblem,
  InvokeProblem_duplicateInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  duplicateInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_unrecognizedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  unrecognizedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_mistypedArgument /* IMPORTED_LONG_NAMED_INTEGER */,
  mistypedArgument /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_resourceLimitation /* IMPORTED_LONG_NAMED_INTEGER */,
  resourceLimitation /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_releaseInProgress /* IMPORTED_LONG_NAMED_INTEGER */,
  releaseInProgress /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_unrecognizedLinkedId /* IMPORTED_LONG_NAMED_INTEGER */,
  unrecognizedLinkedId /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_linkedResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  linkedResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_unexpectedLinkedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  unexpectedLinkedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_InvokeProblem,
  _encode_InvokeProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeProblem.ta.js';
export {
  InvokeProblem,
  InvokeProblem_duplicateInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  duplicateInvocation /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_unrecognizedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  unrecognizedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_mistypedArgument /* IMPORTED_LONG_NAMED_INTEGER */,
  mistypedArgument /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_resourceLimitation /* IMPORTED_LONG_NAMED_INTEGER */,
  resourceLimitation /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_releaseInProgress /* IMPORTED_LONG_NAMED_INTEGER */,
  releaseInProgress /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_unrecognizedLinkedId /* IMPORTED_LONG_NAMED_INTEGER */,
  unrecognizedLinkedId /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_linkedResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  linkedResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  InvokeProblem_unexpectedLinkedOperation /* IMPORTED_LONG_NAMED_INTEGER */,
  unexpectedLinkedOperation /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_InvokeProblem,
  _encode_InvokeProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeProblem.ta.js';
import {
  ReturnResultProblem,
  ReturnResultProblem_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  ReturnResultProblem_resultResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  resultResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  ReturnResultProblem_mistypedResult /* IMPORTED_LONG_NAMED_INTEGER */,
  mistypedResult /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_ReturnResultProblem,
  _encode_ReturnResultProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnResultProblem.ta.js';
export {
  ReturnResultProblem,
  ReturnResultProblem_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  ReturnResultProblem_resultResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  resultResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  ReturnResultProblem_mistypedResult /* IMPORTED_LONG_NAMED_INTEGER */,
  mistypedResult /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_ReturnResultProblem,
  _encode_ReturnResultProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnResultProblem.ta.js';
import {
  ReturnErrorProblem,
  ReturnErrorProblem_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  ReturnErrorProblem_errorResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  errorResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  ReturnErrorProblem_unrecognizedError /* IMPORTED_LONG_NAMED_INTEGER */,
  unrecognizedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  ReturnErrorProblem_unexpectedError /* IMPORTED_LONG_NAMED_INTEGER */,
  unexpectedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  ReturnErrorProblem_mistypedParameter /* IMPORTED_LONG_NAMED_INTEGER */,
  mistypedParameter /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_ReturnErrorProblem,
  _encode_ReturnErrorProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnErrorProblem.ta.js';
export {
  ReturnErrorProblem,
  ReturnErrorProblem_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */,
  ReturnErrorProblem_errorResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */,
  errorResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */,
  ReturnErrorProblem_unrecognizedError /* IMPORTED_LONG_NAMED_INTEGER */,
  unrecognizedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  ReturnErrorProblem_unexpectedError /* IMPORTED_LONG_NAMED_INTEGER */,
  unexpectedError /* IMPORTED_SHORT_NAMED_INTEGER */,
  ReturnErrorProblem_mistypedParameter /* IMPORTED_LONG_NAMED_INTEGER */,
  mistypedParameter /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_ReturnErrorProblem,
  _encode_ReturnErrorProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnErrorProblem.ta.js';

/* START_OF_SYMBOL_DEFINITION Reject_problem */
/**
 * @summary Reject_problem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reject-problem ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Reject_problem =
  | { general: GeneralProblem } /* CHOICE_ALT_ROOT */
  | { invoke: InvokeProblem } /* CHOICE_ALT_ROOT */
  | { returnResult: ReturnResultProblem } /* CHOICE_ALT_ROOT */
  | { returnError: ReturnErrorProblem } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Reject_problem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Reject_problem */
let _cached_decoder_for_Reject_problem: $.ASN1Decoder<Reject_problem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Reject_problem */

/* START_OF_SYMBOL_DEFINITION _decode_Reject_problem */
/**
 * @summary Decodes an ASN.1 element into a(n) Reject_problem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Reject_problem} The decoded data structure.
 */
export function _decode_Reject_problem(el: _Element) {
  if (!_cached_decoder_for_Reject_problem) {
    _cached_decoder_for_Reject_problem = $._decode_inextensible_choice<Reject_problem>(
      {
        'CONTEXT 0': [
          'general',
          $._decode_implicit<GeneralProblem>(() => _decode_GeneralProblem),
        ],
        'CONTEXT 1': [
          'invoke',
          $._decode_implicit<InvokeProblem>(() => _decode_InvokeProblem),
        ],
        'CONTEXT 2': [
          'returnResult',
          $._decode_implicit<ReturnResultProblem>(
            () => _decode_ReturnResultProblem
          ),
        ],
        'CONTEXT 3': [
          'returnError',
          $._decode_implicit<ReturnErrorProblem>(
            () => _decode_ReturnErrorProblem
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_Reject_problem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Reject_problem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Reject_problem */
let _cached_encoder_for_Reject_problem: $.ASN1Encoder<Reject_problem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Reject_problem */

/* START_OF_SYMBOL_DEFINITION _encode_Reject_problem */
/**
 * @summary Encodes a(n) Reject_problem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reject_problem, encoded as an ASN.1 Element.
 */
export function _encode_Reject_problem(
  value: Reject_problem,
  elGetter: $.ASN1Encoder<Reject_problem>
) {
  if (!_cached_encoder_for_Reject_problem) {
    _cached_encoder_for_Reject_problem = $._encode_choice<Reject_problem>(
      {
        general: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_GeneralProblem,
          $.BER
        ),
        invoke: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_InvokeProblem,
          $.BER
        ),
        returnResult: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_ReturnResultProblem,
          $.BER
        ),
        returnError: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_ReturnErrorProblem,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Reject_problem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Reject_problem */

/* eslint-enable */
