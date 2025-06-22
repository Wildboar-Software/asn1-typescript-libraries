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
import * as $ from '@wildboar/asn1/functional';
import {
  F_INITIALIZE_request,
  _decode_F_INITIALIZE_request,
  _encode_F_INITIALIZE_request,
} from '../ISO8571-FTAM/F-INITIALIZE-request.ta.mjs';
import {
  F_INITIALIZE_response,
  _decode_F_INITIALIZE_response,
  _encode_F_INITIALIZE_response,
} from '../ISO8571-FTAM/F-INITIALIZE-response.ta.mjs';
import {
  F_TERMINATE_request,
  _decode_F_TERMINATE_request,
  _encode_F_TERMINATE_request,
} from '../ISO8571-FTAM/F-TERMINATE-request.ta.mjs';
import {
  F_TERMINATE_response,
  _decode_F_TERMINATE_response,
  _encode_F_TERMINATE_response,
} from '../ISO8571-FTAM/F-TERMINATE-response.ta.mjs';
import {
  F_U_ABORT_request,
  _decode_F_U_ABORT_request,
  _encode_F_U_ABORT_request,
} from '../ISO8571-FTAM/F-U-ABORT-request.ta.mjs';
import {
  F_P_ABORT_request,
  _decode_F_P_ABORT_request,
  _encode_F_P_ABORT_request,
} from '../ISO8571-FTAM/F-P-ABORT-request.ta.mjs';

/**
 * @summary FTAM_Regime_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FTAM-Regime-PDU  ::=  CHOICE {
 *   f-initialize-request   [0] IMPLICIT F-INITIALIZE-request,
 *   f-initialize-response  [1] IMPLICIT F-INITIALIZE-response,
 *   f-terminate-request    [2] IMPLICIT F-TERMINATE-request,
 *   f-terminate-response   [3] IMPLICIT F-TERMINATE-response,
 *   f-u-abort-request      [4] IMPLICIT F-U-ABORT-request,
 *   f-p-abort-request      [5] IMPLICIT F-P-ABORT-request
 * }
 * ```
 */
export type FTAM_Regime_PDU =
  | { f_initialize_request: F_INITIALIZE_request } /* CHOICE_ALT_ROOT */
  | { f_initialize_response: F_INITIALIZE_response } /* CHOICE_ALT_ROOT */
  | { f_terminate_request: F_TERMINATE_request } /* CHOICE_ALT_ROOT */
  | { f_terminate_response: F_TERMINATE_response } /* CHOICE_ALT_ROOT */
  | { f_u_abort_request: F_U_ABORT_request } /* CHOICE_ALT_ROOT */
  | { f_p_abort_request: F_P_ABORT_request } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_FTAM_Regime_PDU: $.ASN1Decoder<FTAM_Regime_PDU> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) FTAM_Regime_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FTAM_Regime_PDU} The decoded data structure.
 */
export function _decode_FTAM_Regime_PDU(el: _Element) {
  if (!_cached_decoder_for_FTAM_Regime_PDU) {
    _cached_decoder_for_FTAM_Regime_PDU = $._decode_inextensible_choice<FTAM_Regime_PDU>(
      {
        'CONTEXT 0': [
          'f_initialize_request',
          $._decode_implicit<F_INITIALIZE_request>(
            () => _decode_F_INITIALIZE_request
          ),
        ],
        'CONTEXT 1': [
          'f_initialize_response',
          $._decode_implicit<F_INITIALIZE_response>(
            () => _decode_F_INITIALIZE_response
          ),
        ],
        'CONTEXT 2': [
          'f_terminate_request',
          $._decode_implicit<F_TERMINATE_request>(
            () => _decode_F_TERMINATE_request
          ),
        ],
        'CONTEXT 3': [
          'f_terminate_response',
          $._decode_implicit<F_TERMINATE_response>(
            () => _decode_F_TERMINATE_response
          ),
        ],
        'CONTEXT 4': [
          'f_u_abort_request',
          $._decode_implicit<F_U_ABORT_request>(
            () => _decode_F_U_ABORT_request
          ),
        ],
        'CONTEXT 5': [
          'f_p_abort_request',
          $._decode_implicit<F_P_ABORT_request>(
            () => _decode_F_P_ABORT_request
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_FTAM_Regime_PDU(el);
}


let _cached_encoder_for_FTAM_Regime_PDU: $.ASN1Encoder<FTAM_Regime_PDU> | null = null;


/**
 * @summary Encodes a(n) FTAM_Regime_PDU into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FTAM_Regime_PDU, encoded as an ASN.1 Element.
 */
export function _encode_FTAM_Regime_PDU(
  value: FTAM_Regime_PDU,
  elGetter: $.ASN1Encoder<FTAM_Regime_PDU>
) {
  if (!_cached_encoder_for_FTAM_Regime_PDU) {
    _cached_encoder_for_FTAM_Regime_PDU = $._encode_choice<FTAM_Regime_PDU>(
      {
        f_initialize_request: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_F_INITIALIZE_request,
          $.BER
        ),
        f_initialize_response: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_F_INITIALIZE_response,
          $.BER
        ),
        f_terminate_request: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_F_TERMINATE_request,
          $.BER
        ),
        f_terminate_response: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_F_TERMINATE_response,
          $.BER
        ),
        f_u_abort_request: $._encode_implicit(
          _TagClass.context,
          4,
          () => _encode_F_U_ABORT_request,
          $.BER
        ),
        f_p_abort_request: $._encode_implicit(
          _TagClass.context,
          5,
          () => _encode_F_P_ABORT_request,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_FTAM_Regime_PDU(value, elGetter);
}


/* eslint-enable */
