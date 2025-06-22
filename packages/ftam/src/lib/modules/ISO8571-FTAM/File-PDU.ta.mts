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
  F_SELECT_request,
  _decode_F_SELECT_request,
  _encode_F_SELECT_request,
} from '../ISO8571-FTAM/F-SELECT-request.ta.mjs';
import {
  F_SELECT_response,
  _decode_F_SELECT_response,
  _encode_F_SELECT_response,
} from '../ISO8571-FTAM/F-SELECT-response.ta.mjs';
import {
  F_DESELECT_request,
  _decode_F_DESELECT_request,
  _encode_F_DESELECT_request,
} from '../ISO8571-FTAM/F-DESELECT-request.ta.mjs';
import {
  F_DESELECT_response,
  _decode_F_DESELECT_response,
  _encode_F_DESELECT_response,
} from '../ISO8571-FTAM/F-DESELECT-response.ta.mjs';
import {
  F_CREATE_request,
  _decode_F_CREATE_request,
  _encode_F_CREATE_request,
} from '../ISO8571-FTAM/F-CREATE-request.ta.mjs';
import {
  F_CREATE_response,
  _decode_F_CREATE_response,
  _encode_F_CREATE_response,
} from '../ISO8571-FTAM/F-CREATE-response.ta.mjs';
import {
  F_DELETE_request,
  _decode_F_DELETE_request,
  _encode_F_DELETE_request,
} from '../ISO8571-FTAM/F-DELETE-request.ta.mjs';
import {
  F_DELETE_response,
  _decode_F_DELETE_response,
  _encode_F_DELETE_response,
} from '../ISO8571-FTAM/F-DELETE-response.ta.mjs';
import {
  F_READ_ATTRIB_request,
  _decode_F_READ_ATTRIB_request,
  _encode_F_READ_ATTRIB_request,
} from '../ISO8571-FTAM/F-READ-ATTRIB-request.ta.mjs';
import {
  F_READ_ATTRIB_response,
  _decode_F_READ_ATTRIB_response,
  _encode_F_READ_ATTRIB_response,
} from '../ISO8571-FTAM/F-READ-ATTRIB-response.ta.mjs';
import {
  F_CHANGE_ATTRIB_request,
  _decode_F_CHANGE_ATTRIB_request,
  _encode_F_CHANGE_ATTRIB_request,
} from '../ISO8571-FTAM/F-CHANGE-ATTRIB-request.ta.mjs';
import {
  F_CHANGE_ATTRIB_response,
  _decode_F_CHANGE_ATTRIB_response,
  _encode_F_CHANGE_ATTRIB_response,
} from '../ISO8571-FTAM/F-CHANGE-ATTRIB-response.ta.mjs';
import {
  F_OPEN_request,
  _decode_F_OPEN_request,
  _encode_F_OPEN_request,
} from '../ISO8571-FTAM/F-OPEN-request.ta.mjs';
import {
  F_OPEN_response,
  _decode_F_OPEN_response,
  _encode_F_OPEN_response,
} from '../ISO8571-FTAM/F-OPEN-response.ta.mjs';
import {
  F_CLOSE_request,
  _decode_F_CLOSE_request,
  _encode_F_CLOSE_request,
} from '../ISO8571-FTAM/F-CLOSE-request.ta.mjs';
import {
  F_CLOSE_response,
  _decode_F_CLOSE_response,
  _encode_F_CLOSE_response,
} from '../ISO8571-FTAM/F-CLOSE-response.ta.mjs';
import {
  F_BEGIN_GROUP_request,
  _decode_F_BEGIN_GROUP_request,
  _encode_F_BEGIN_GROUP_request,
} from '../ISO8571-FTAM/F-BEGIN-GROUP-request.ta.mjs';
import {
  F_BEGIN_GROUP_response,
  _decode_F_BEGIN_GROUP_response,
  _encode_F_BEGIN_GROUP_response,
} from '../ISO8571-FTAM/F-BEGIN-GROUP-response.ta.mjs';
import {
  F_END_GROUP_request,
  _decode_F_END_GROUP_request,
  _encode_F_END_GROUP_request,
} from '../ISO8571-FTAM/F-END-GROUP-request.ta.mjs';
import {
  F_END_GROUP_response,
  _decode_F_END_GROUP_response,
  _encode_F_END_GROUP_response,
} from '../ISO8571-FTAM/F-END-GROUP-response.ta.mjs';
import {
  F_RECOVER_request,
  _decode_F_RECOVER_request,
  _encode_F_RECOVER_request,
} from '../ISO8571-FTAM/F-RECOVER-request.ta.mjs';
import {
  F_RECOVER_response,
  _decode_F_RECOVER_response,
  _encode_F_RECOVER_response,
} from '../ISO8571-FTAM/F-RECOVER-response.ta.mjs';
import {
  F_LOCATE_request,
  _decode_F_LOCATE_request,
  _encode_F_LOCATE_request,
} from '../ISO8571-FTAM/F-LOCATE-request.ta.mjs';
import {
  F_LOCATE_response,
  _decode_F_LOCATE_response,
  _encode_F_LOCATE_response,
} from '../ISO8571-FTAM/F-LOCATE-response.ta.mjs';
import {
  F_ERASE_request,
  _decode_F_ERASE_request,
  _encode_F_ERASE_request,
} from '../ISO8571-FTAM/F-ERASE-request.ta.mjs';
import {
  F_ERASE_response,
  _decode_F_ERASE_response,
  _encode_F_ERASE_response,
} from '../ISO8571-FTAM/F-ERASE-response.ta.mjs';

/**
 * @summary File_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * File-PDU  ::=  CHOICE {
 *   f-select-request        [6] IMPLICIT F-SELECT-request,
 *   f-select-response       [7] IMPLICIT F-SELECT-response,
 *   f-deselect-request      [8] IMPLICIT F-DESELECT-request,
 *   f-deselect-response     [9] IMPLICIT F-DESELECT-response,
 *   f-create-request        [10] IMPLICIT F-CREATE-request,
 *   f-create-response       [11] IMPLICIT F-CREATE-response,
 *   f-delete-request        [12] IMPLICIT F-DELETE-request,
 *   f-delete-response       [13] IMPLICIT F-DELETE-response,
 *   f-read-attrib-request   [14] IMPLICIT F-READ-ATTRIB-request,
 *   f-read-attrib-response  [15] IMPLICIT F-READ-ATTRIB-response,
 *   f-Change-attrib-reques  [16] IMPLICIT F-CHANGE-ATTRIB-request,
 *   f-Change-attrib-respon  [17] IMPLICIT F-CHANGE-ATTRIB-response,
 *   f-open-request          [18] IMPLICIT F-OPEN-request,
 *   f-open-response         [19] IMPLICIT F-OPEN-response,
 *   f-close-request         [20] IMPLICIT F-CLOSE-request,
 *   f-close-response        [21] IMPLICIT F-CLOSE-response,
 *   f-begin-group-request   [22] IMPLICIT F-BEGIN-GROUP-request,
 *   f-begin-group-response  [23] IMPLICIT F-BEGIN-GROUP-response,
 *   f-end-group-request     [24] IMPLICIT F-END-GROUP-request,
 *   f-end-group-response    [25] IMPLICIT F-END-GROUP-response,
 *   f-recover-request       [26] IMPLICIT F-RECOVER-request,
 *   f-recover-response      [27] IMPLICIT F-RECOVER-response,
 *   f-locate-request        [28] IMPLICIT F-LOCATE-request,
 *   f-locate-response       [29] IMPLICIT F-LOCATE-response,
 *   f-erase-request         [30] IMPLICIT F-ERASE-request,
 *   f-erase-response        [31] IMPLICIT F-ERASE-response
 * }
 * ```
 */
export type File_PDU =
  | { f_select_request: F_SELECT_request } /* CHOICE_ALT_ROOT */
  | { f_select_response: F_SELECT_response } /* CHOICE_ALT_ROOT */
  | { f_deselect_request: F_DESELECT_request } /* CHOICE_ALT_ROOT */
  | { f_deselect_response: F_DESELECT_response } /* CHOICE_ALT_ROOT */
  | { f_create_request: F_CREATE_request } /* CHOICE_ALT_ROOT */
  | { f_create_response: F_CREATE_response } /* CHOICE_ALT_ROOT */
  | { f_delete_request: F_DELETE_request } /* CHOICE_ALT_ROOT */
  | { f_delete_response: F_DELETE_response } /* CHOICE_ALT_ROOT */
  | { f_read_attrib_request: F_READ_ATTRIB_request } /* CHOICE_ALT_ROOT */
  | { f_read_attrib_response: F_READ_ATTRIB_response } /* CHOICE_ALT_ROOT */
  | { f_Change_attrib_reques: F_CHANGE_ATTRIB_request } /* CHOICE_ALT_ROOT */
  | { f_Change_attrib_respon: F_CHANGE_ATTRIB_response } /* CHOICE_ALT_ROOT */
  | { f_open_request: F_OPEN_request } /* CHOICE_ALT_ROOT */
  | { f_open_response: F_OPEN_response } /* CHOICE_ALT_ROOT */
  | { f_close_request: F_CLOSE_request } /* CHOICE_ALT_ROOT */
  | { f_close_response: F_CLOSE_response } /* CHOICE_ALT_ROOT */
  | { f_begin_group_request: F_BEGIN_GROUP_request } /* CHOICE_ALT_ROOT */
  | { f_begin_group_response: F_BEGIN_GROUP_response } /* CHOICE_ALT_ROOT */
  | { f_end_group_request: F_END_GROUP_request } /* CHOICE_ALT_ROOT */
  | { f_end_group_response: F_END_GROUP_response } /* CHOICE_ALT_ROOT */
  | { f_recover_request: F_RECOVER_request } /* CHOICE_ALT_ROOT */
  | { f_recover_response: F_RECOVER_response } /* CHOICE_ALT_ROOT */
  | { f_locate_request: F_LOCATE_request } /* CHOICE_ALT_ROOT */
  | { f_locate_response: F_LOCATE_response } /* CHOICE_ALT_ROOT */
  | { f_erase_request: F_ERASE_request } /* CHOICE_ALT_ROOT */
  | { f_erase_response: F_ERASE_response } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_File_PDU: $.ASN1Decoder<File_PDU> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) File_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {File_PDU} The decoded data structure.
 */
export function _decode_File_PDU(el: _Element) {
  if (!_cached_decoder_for_File_PDU) {
    _cached_decoder_for_File_PDU = $._decode_inextensible_choice<File_PDU>({
      'CONTEXT 6': [
        'f_select_request',
        $._decode_implicit<F_SELECT_request>(() => _decode_F_SELECT_request),
      ],
      'CONTEXT 7': [
        'f_select_response',
        $._decode_implicit<F_SELECT_response>(() => _decode_F_SELECT_response),
      ],
      'CONTEXT 8': [
        'f_deselect_request',
        $._decode_implicit<F_DESELECT_request>(
          () => _decode_F_DESELECT_request
        ),
      ],
      'CONTEXT 9': [
        'f_deselect_response',
        $._decode_implicit<F_DESELECT_response>(
          () => _decode_F_DESELECT_response
        ),
      ],
      'CONTEXT 10': [
        'f_create_request',
        $._decode_implicit<F_CREATE_request>(() => _decode_F_CREATE_request),
      ],
      'CONTEXT 11': [
        'f_create_response',
        $._decode_implicit<F_CREATE_response>(() => _decode_F_CREATE_response),
      ],
      'CONTEXT 12': [
        'f_delete_request',
        $._decode_implicit<F_DELETE_request>(() => _decode_F_DELETE_request),
      ],
      'CONTEXT 13': [
        'f_delete_response',
        $._decode_implicit<F_DELETE_response>(() => _decode_F_DELETE_response),
      ],
      'CONTEXT 14': [
        'f_read_attrib_request',
        $._decode_implicit<F_READ_ATTRIB_request>(
          () => _decode_F_READ_ATTRIB_request
        ),
      ],
      'CONTEXT 15': [
        'f_read_attrib_response',
        $._decode_implicit<F_READ_ATTRIB_response>(
          () => _decode_F_READ_ATTRIB_response
        ),
      ],
      'CONTEXT 16': [
        'f_Change_attrib_reques',
        $._decode_implicit<F_CHANGE_ATTRIB_request>(
          () => _decode_F_CHANGE_ATTRIB_request
        ),
      ],
      'CONTEXT 17': [
        'f_Change_attrib_respon',
        $._decode_implicit<F_CHANGE_ATTRIB_response>(
          () => _decode_F_CHANGE_ATTRIB_response
        ),
      ],
      'CONTEXT 18': [
        'f_open_request',
        $._decode_implicit<F_OPEN_request>(() => _decode_F_OPEN_request),
      ],
      'CONTEXT 19': [
        'f_open_response',
        $._decode_implicit<F_OPEN_response>(() => _decode_F_OPEN_response),
      ],
      'CONTEXT 20': [
        'f_close_request',
        $._decode_implicit<F_CLOSE_request>(() => _decode_F_CLOSE_request),
      ],
      'CONTEXT 21': [
        'f_close_response',
        $._decode_implicit<F_CLOSE_response>(() => _decode_F_CLOSE_response),
      ],
      'CONTEXT 22': [
        'f_begin_group_request',
        $._decode_implicit<F_BEGIN_GROUP_request>(
          () => _decode_F_BEGIN_GROUP_request
        ),
      ],
      'CONTEXT 23': [
        'f_begin_group_response',
        $._decode_implicit<F_BEGIN_GROUP_response>(
          () => _decode_F_BEGIN_GROUP_response
        ),
      ],
      'CONTEXT 24': [
        'f_end_group_request',
        $._decode_implicit<F_END_GROUP_request>(
          () => _decode_F_END_GROUP_request
        ),
      ],
      'CONTEXT 25': [
        'f_end_group_response',
        $._decode_implicit<F_END_GROUP_response>(
          () => _decode_F_END_GROUP_response
        ),
      ],
      'CONTEXT 26': [
        'f_recover_request',
        $._decode_implicit<F_RECOVER_request>(() => _decode_F_RECOVER_request),
      ],
      'CONTEXT 27': [
        'f_recover_response',
        $._decode_implicit<F_RECOVER_response>(
          () => _decode_F_RECOVER_response
        ),
      ],
      'CONTEXT 28': [
        'f_locate_request',
        $._decode_implicit<F_LOCATE_request>(() => _decode_F_LOCATE_request),
      ],
      'CONTEXT 29': [
        'f_locate_response',
        $._decode_implicit<F_LOCATE_response>(() => _decode_F_LOCATE_response),
      ],
      'CONTEXT 30': [
        'f_erase_request',
        $._decode_implicit<F_ERASE_request>(() => _decode_F_ERASE_request),
      ],
      'CONTEXT 31': [
        'f_erase_response',
        $._decode_implicit<F_ERASE_response>(() => _decode_F_ERASE_response),
      ],
    });
  }
  return _cached_decoder_for_File_PDU(el);
}


let _cached_encoder_for_File_PDU: $.ASN1Encoder<File_PDU> | null = null;


/**
 * @summary Encodes a(n) File_PDU into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The File_PDU, encoded as an ASN.1 Element.
 */
export function _encode_File_PDU(
  value: File_PDU,
  elGetter: $.ASN1Encoder<File_PDU>
) {
  if (!_cached_encoder_for_File_PDU) {
    _cached_encoder_for_File_PDU = $._encode_choice<File_PDU>(
      {
        f_select_request: $._encode_implicit(
          _TagClass.context,
          6,
          () => _encode_F_SELECT_request,
          $.BER
        ),
        f_select_response: $._encode_implicit(
          _TagClass.context,
          7,
          () => _encode_F_SELECT_response,
          $.BER
        ),
        f_deselect_request: $._encode_implicit(
          _TagClass.context,
          8,
          () => _encode_F_DESELECT_request,
          $.BER
        ),
        f_deselect_response: $._encode_implicit(
          _TagClass.context,
          9,
          () => _encode_F_DESELECT_response,
          $.BER
        ),
        f_create_request: $._encode_implicit(
          _TagClass.context,
          10,
          () => _encode_F_CREATE_request,
          $.BER
        ),
        f_create_response: $._encode_implicit(
          _TagClass.context,
          11,
          () => _encode_F_CREATE_response,
          $.BER
        ),
        f_delete_request: $._encode_implicit(
          _TagClass.context,
          12,
          () => _encode_F_DELETE_request,
          $.BER
        ),
        f_delete_response: $._encode_implicit(
          _TagClass.context,
          13,
          () => _encode_F_DELETE_response,
          $.BER
        ),
        f_read_attrib_request: $._encode_implicit(
          _TagClass.context,
          14,
          () => _encode_F_READ_ATTRIB_request,
          $.BER
        ),
        f_read_attrib_response: $._encode_implicit(
          _TagClass.context,
          15,
          () => _encode_F_READ_ATTRIB_response,
          $.BER
        ),
        f_Change_attrib_reques: $._encode_implicit(
          _TagClass.context,
          16,
          () => _encode_F_CHANGE_ATTRIB_request,
          $.BER
        ),
        f_Change_attrib_respon: $._encode_implicit(
          _TagClass.context,
          17,
          () => _encode_F_CHANGE_ATTRIB_response,
          $.BER
        ),
        f_open_request: $._encode_implicit(
          _TagClass.context,
          18,
          () => _encode_F_OPEN_request,
          $.BER
        ),
        f_open_response: $._encode_implicit(
          _TagClass.context,
          19,
          () => _encode_F_OPEN_response,
          $.BER
        ),
        f_close_request: $._encode_implicit(
          _TagClass.context,
          20,
          () => _encode_F_CLOSE_request,
          $.BER
        ),
        f_close_response: $._encode_implicit(
          _TagClass.context,
          21,
          () => _encode_F_CLOSE_response,
          $.BER
        ),
        f_begin_group_request: $._encode_implicit(
          _TagClass.context,
          22,
          () => _encode_F_BEGIN_GROUP_request,
          $.BER
        ),
        f_begin_group_response: $._encode_implicit(
          _TagClass.context,
          23,
          () => _encode_F_BEGIN_GROUP_response,
          $.BER
        ),
        f_end_group_request: $._encode_implicit(
          _TagClass.context,
          24,
          () => _encode_F_END_GROUP_request,
          $.BER
        ),
        f_end_group_response: $._encode_implicit(
          _TagClass.context,
          25,
          () => _encode_F_END_GROUP_response,
          $.BER
        ),
        f_recover_request: $._encode_implicit(
          _TagClass.context,
          26,
          () => _encode_F_RECOVER_request,
          $.BER
        ),
        f_recover_response: $._encode_implicit(
          _TagClass.context,
          27,
          () => _encode_F_RECOVER_response,
          $.BER
        ),
        f_locate_request: $._encode_implicit(
          _TagClass.context,
          28,
          () => _encode_F_LOCATE_request,
          $.BER
        ),
        f_locate_response: $._encode_implicit(
          _TagClass.context,
          29,
          () => _encode_F_LOCATE_response,
          $.BER
        ),
        f_erase_request: $._encode_implicit(
          _TagClass.context,
          30,
          () => _encode_F_ERASE_request,
          $.BER
        ),
        f_erase_response: $._encode_implicit(
          _TagClass.context,
          31,
          () => _encode_F_ERASE_response,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_File_PDU(value, elGetter);
}


/* eslint-enable */
