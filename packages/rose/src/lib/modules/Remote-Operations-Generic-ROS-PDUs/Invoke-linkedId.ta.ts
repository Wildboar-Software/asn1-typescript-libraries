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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';
export {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';
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
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta';
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
} from '../Remote-Operations-Generic-ROS-PDUs/RejectProblem.ta';

/* START_OF_SYMBOL_DEFINITION Invoke_linkedId */
/**
 * @summary Invoke_linkedId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Invoke-linkedId ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Invoke_linkedId =
  | { present: $.Selection<InvokeId, 'present'> } /* CHOICE_ALT_ROOT */
  | { absent: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Invoke_linkedId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Invoke_linkedId */
let _cached_decoder_for_Invoke_linkedId: $.ASN1Decoder<Invoke_linkedId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Invoke_linkedId */

/* START_OF_SYMBOL_DEFINITION _decode_Invoke_linkedId */
/**
 * @summary Decodes an ASN.1 element into a(n) Invoke_linkedId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Invoke_linkedId} The decoded data structure.
 */
export function _decode_Invoke_linkedId(el: _Element) {
  if (!_cached_decoder_for_Invoke_linkedId) {
    _cached_decoder_for_Invoke_linkedId = $._decode_inextensible_choice<Invoke_linkedId>(
      {
        'CONTEXT 0': [
          'present',
          $._decode_implicit<$.Selection<InvokeId, 'present'>>(
            () => $._decodeInteger
          ),
        ],
        'CONTEXT 1': ['absent', $._decode_implicit<NULL>(() => $._decodeNull)],
      }
    );
  }
  return _cached_decoder_for_Invoke_linkedId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Invoke_linkedId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Invoke_linkedId */
let _cached_encoder_for_Invoke_linkedId: $.ASN1Encoder<Invoke_linkedId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Invoke_linkedId */

/* START_OF_SYMBOL_DEFINITION _encode_Invoke_linkedId */
/**
 * @summary Encodes a(n) Invoke_linkedId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Invoke_linkedId, encoded as an ASN.1 Element.
 */
export function _encode_Invoke_linkedId(
  value: Invoke_linkedId,
  elGetter: $.ASN1Encoder<Invoke_linkedId>
) {
  if (!_cached_encoder_for_Invoke_linkedId) {
    _cached_encoder_for_Invoke_linkedId = $._encode_choice<Invoke_linkedId>(
      {
        present: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeInteger,
          $.BER
        ),
        absent: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeNull,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Invoke_linkedId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Invoke_linkedId */

/* eslint-enable */
