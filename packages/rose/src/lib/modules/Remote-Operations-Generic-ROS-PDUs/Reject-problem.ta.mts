/* eslint-disable */
import {
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
import {
  GeneralProblem,
  _decode_GeneralProblem,
  _encode_GeneralProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/GeneralProblem.ta.mjs';
import {
  InvokeProblem,
  _decode_InvokeProblem,
  _encode_InvokeProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeProblem.ta.mjs';
import {
  ReturnResultProblem,
  _decode_ReturnResultProblem,
  _encode_ReturnResultProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnResultProblem.ta.mjs';
import {
  ReturnErrorProblem,
  _decode_ReturnErrorProblem,
  _encode_ReturnErrorProblem,
} from '../Remote-Operations-Generic-ROS-PDUs/ReturnErrorProblem.ta.mjs';

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


let _cached_decoder_for_Reject_problem: $.ASN1Decoder<Reject_problem> | null = null;


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


let _cached_encoder_for_Reject_problem: $.ASN1Encoder<Reject_problem> | null = null;


/**
 * @summary Encodes a(n) Reject_problem into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
