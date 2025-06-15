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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  GeneralProblem,
  _enum_for_GeneralProblem,
  _decode_GeneralProblem,
  _encode_GeneralProblem,
} from '../SeseAPDUs/GeneralProblem.ta.mjs';
import {
  TransferProblem,
  _enum_for_TransferProblem,
  _decode_TransferProblem,
  _encode_TransferProblem,
} from '../SeseAPDUs/TransferProblem.ta.mjs';
import {
  AbortProblem,
  _enum_for_AbortProblem,
  _decode_AbortProblem,
  _encode_AbortProblem,
} from '../SeseAPDUs/AbortProblem.ta.mjs';

/**
 * @summary ProblemCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProblemCode  ::=  CHOICE {
 *   general   GeneralProblem,
 *   transfer  TransferProblem,
 *   abort     AbortProblem
 * }
 * ```
 */
export type ProblemCode =
  | { general: GeneralProblem } /* CHOICE_ALT_ROOT */
  | { transfer: TransferProblem } /* CHOICE_ALT_ROOT */
  | { abort: AbortProblem } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ProblemCode: $.ASN1Decoder<ProblemCode> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProblemCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProblemCode} The decoded data structure.
 */
export function _decode_ProblemCode(el: _Element) {
  if (!_cached_decoder_for_ProblemCode) {
    _cached_decoder_for_ProblemCode = $._decode_inextensible_choice<ProblemCode>(
      {
        'CONTEXT 0': ['general', _decode_GeneralProblem],
        'CONTEXT 1': ['transfer', _decode_TransferProblem],
        'CONTEXT 2': ['abort', _decode_AbortProblem],
      }
    );
  }
  return _cached_decoder_for_ProblemCode(el);
}


let _cached_encoder_for_ProblemCode: $.ASN1Encoder<ProblemCode> | null = null;


/**
 * @summary Encodes a(n) ProblemCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProblemCode, encoded as an ASN.1 Element.
 */
export function _encode_ProblemCode(
  value: ProblemCode,
  elGetter: $.ASN1Encoder<ProblemCode>
) {
  if (!_cached_encoder_for_ProblemCode) {
    _cached_encoder_for_ProblemCode = $._encode_choice<ProblemCode>(
      {
        general: _encode_GeneralProblem,
        transfer: _encode_TransferProblem,
        abort: _encode_AbortProblem,
      },
      $.BER
    );
  }
  return _cached_encoder_for_ProblemCode(value, elGetter);
}


/* eslint-enable */
