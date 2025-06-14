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
  F_CHANGE_PREFIX_request,
  _decode_F_CHANGE_PREFIX_request,
  _encode_F_CHANGE_PREFIX_request,
} from '../ISO8571-FTAM/F-CHANGE-PREFIX-request.ta.mjs';
import {
  F_CHANGE_PREFIX_response,
  _decode_F_CHANGE_PREFIX_response,
  _encode_F_CHANGE_PREFIX_response,
} from '../ISO8571-FTAM/F-CHANGE-PREFIX-response.ta.mjs';
import {
  F_LIST_request,
  _decode_F_LIST_request,
  _encode_F_LIST_request,
} from '../ISO8571-FTAM/F-LIST-request.ta.mjs';
import {
  F_LIST_response,
  _decode_F_LIST_response,
  _encode_F_LIST_response,
} from '../ISO8571-FTAM/F-LIST-response.ta.mjs';
import {
  F_GROUP_SELECT_request,
  _decode_F_GROUP_SELECT_request,
  _encode_F_GROUP_SELECT_request,
} from '../ISO8571-FTAM/F-GROUP-SELECT-request.ta.mjs';
import {
  F_GROUP_SELECT_response,
  _decode_F_GROUP_SELECT_response,
  _encode_F_GROUP_SELECT_response,
} from '../ISO8571-FTAM/F-GROUP-SELECT-response.ta.mjs';
import {
  F_GROUP_DELETE_request,
  _decode_F_GROUP_DELETE_request,
  _encode_F_GROUP_DELETE_request,
} from '../ISO8571-FTAM/F-GROUP-DELETE-request.ta.mjs';
import {
  F_GROUP_DELETE_response,
  _decode_F_GROUP_DELETE_response,
  _encode_F_GROUP_DELETE_response,
} from '../ISO8571-FTAM/F-GROUP-DELETE-response.ta.mjs';
import {
  F_GROUP_MOVE_request,
  _decode_F_GROUP_MOVE_request,
  _encode_F_GROUP_MOVE_request,
} from '../ISO8571-FTAM/F-GROUP-MOVE-request.ta.mjs';
import {
  F_GROUP_MOVE_response,
  _decode_F_GROUP_MOVE_response,
  _encode_F_GROUP_MOVE_response,
} from '../ISO8571-FTAM/F-GROUP-MOVE-response.ta.mjs';
import {
  F_GROUP_COPY_request,
  _decode_F_GROUP_COPY_request,
  _encode_F_GROUP_COPY_request,
} from '../ISO8571-FTAM/F-GROUP-COPY-request.ta.mjs';
import {
  F_GROUP_COPY_response,
  _decode_F_GROUP_COPY_response,
  _encode_F_GROUP_COPY_response,
} from '../ISO8571-FTAM/F-GROUP-COPY-response.ta.mjs';
import {
  F_GROUP_LIST_request,
  _decode_F_GROUP_LIST_request,
  _encode_F_GROUP_LIST_request,
} from '../ISO8571-FTAM/F-GROUP-LIST-request.ta.mjs';
import {
  F_GROUP_LIST_response,
  _decode_F_GROUP_LIST_response,
  _encode_F_GROUP_LIST_response,
} from '../ISO8571-FTAM/F-GROUP-LIST-response.ta.mjs';
import {
  F_GROUP_CHANGE_ATTRIB_request,
  _decode_F_GROUP_CHANGE_ATTRIB_request,
  _encode_F_GROUP_CHANGE_ATTRIB_request,
} from '../ISO8571-FTAM/F-GROUP-CHANGE-ATTRIB-request.ta.mjs';
import {
  F_GROUP_CHANGE_ATTRIB_response,
  _decode_F_GROUP_CHANGE_ATTRIB_response,
  _encode_F_GROUP_CHANGE_ATTRIB_response,
} from '../ISO8571-FTAM/F-GROUP-CHANGE-ATTRIB-response.ta.mjs';
import {
  F_SELECT_ANOTHER_request,
  _decode_F_SELECT_ANOTHER_request,
  _encode_F_SELECT_ANOTHER_request,
} from '../ISO8571-FTAM/F-SELECT-ANOTHER-request.ta.mjs';
import {
  F_SELECT_ANOTHER_response,
  _decode_F_SELECT_ANOTHER_response,
  _encode_F_SELECT_ANOTHER_response,
} from '../ISO8571-FTAM/F-SELECT-ANOTHER-response.ta.mjs';
import {
  F_CREATE_DIRECTORY_request,
  _decode_F_CREATE_DIRECTORY_request,
  _encode_F_CREATE_DIRECTORY_request,
} from '../ISO8571-FTAM/F-CREATE-DIRECTORY-request.ta.mjs';
import {
  F_CREATE_DIRECTORY_response,
  _decode_F_CREATE_DIRECTORY_response,
  _encode_F_CREATE_DIRECTORY_response,
} from '../ISO8571-FTAM/F-CREATE-DIRECTORY-response.ta.mjs';
import {
  F_LINK_request,
  _decode_F_LINK_request,
  _encode_F_LINK_request,
} from '../ISO8571-FTAM/F-LINK-request.ta.mjs';
import {
  F_LINK_response,
  _decode_F_LINK_response,
  _encode_F_LINK_response,
} from '../ISO8571-FTAM/F-LINK-response.ta.mjs';
import {
  F_UNLINK_request,
  _decode_F_UNLINK_request,
  _encode_F_UNLINK_request,
} from '../ISO8571-FTAM/F-UNLINK-request.ta.mjs';
import {
  F_UNLINK_response,
  _decode_F_UNLINK_response,
  _encode_F_UNLINK_response,
} from '../ISO8571-FTAM/F-UNLINK-response.ta.mjs';
import {
  F_READ_LINK_ATTRIB_request,
  _decode_F_READ_LINK_ATTRIB_request,
  _encode_F_READ_LINK_ATTRIB_request,
} from '../ISO8571-FTAM/F-READ-LINK-ATTRIB-request.ta.mjs';
import {
  F_READ_LINK_ATTRIB_response,
  _decode_F_READ_LINK_ATTRIB_response,
  _encode_F_READ_LINK_ATTRIB_response,
} from '../ISO8571-FTAM/F-READ-LINK-ATTRIB-response.ta.mjs';
import {
  F_CHANGE_LINK_ATTRIB_request,
  _decode_F_CHANGE_LINK_ATTRIB_request,
  _encode_F_CHANGE_LINK_ATTRIB_request,
} from '../ISO8571-FTAM/F-CHANGE-LINK-ATTRIB-request.ta.mjs';
import {
  F_CHANGE_LINK_ATTRIB_response,
  _decode_F_CHANGE_LINK_ATTRIB_response,
  _encode_F_CHANGE_LINK_ATTRIB_response,
} from '../ISO8571-FTAM/F-CHANGE-LINK-ATTRIB-response.ta.mjs';
import {
  F_MOVE_request,
  _decode_F_MOVE_request,
  _encode_F_MOVE_request,
} from '../ISO8571-FTAM/F-MOVE-request.ta.mjs';
import {
  F_MOVE_response,
  _decode_F_MOVE_response,
  _encode_F_MOVE_response,
} from '../ISO8571-FTAM/F-MOVE-response.ta.mjs';
import {
  F_COPY_request,
  _decode_F_COPY_request,
  _encode_F_COPY_request,
} from '../ISO8571-FTAM/F-COPY-request.ta.mjs';
import {
  F_COPY_response,
  _decode_F_COPY_response,
  _encode_F_COPY_response,
} from '../ISO8571-FTAM/F-COPY-response.ta.mjs';
/* START_OF_SYMBOL_DEFINITION FSM_PDU */
/**
 * @summary FSM_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FSM-PDU  ::=  CHOICE {
 *   f-Change-prefix-request         [41] IMPLICIT F-CHANGE-PREFIX-request,
 *   f-Change-prefix-response        [42] IMPLICIT F-CHANGE-PREFIX-response,
 *   f-list-request                  [43] IMPLICIT F-LIST-request,
 *   f-list-response                 [44] IMPLICIT F-LIST-response,
 *   f-group-select-request          [45] IMPLICIT F-GROUP-SELECT-request,
 *   f-group-select-response         [46] IMPLICIT F-GROUP-SELECT-response,
 *   f-group-delete-request          [47] IMPLICIT F-GROUP-DELETE-request,
 *   f-group-delete-response         [48] IMPLICIT F-GROUP-DELETE-response,
 *   f-group-move-request            [49] IMPLICIT F-GROUP-MOVE-request,
 *   f-group-move-response           [50] IMPLICIT F-GROUP-MOVE-response,
 *   f-group-copy-request            [51] IMPLICIT F-GROUP-COPY-request,
 *   f-group-copy-response           [52] IMPLICIT F-GROUP-COPY-response,
 *   f-group-list-request            [53] IMPLICIT F-GROUP-LIST-request,
 *   f-group-list-response           [54] IMPLICIT F-GROUP-LIST-response,
 *   f-group-Change-attrib-request   [55] IMPLICIT F-GROUP-CHANGE-ATTRIB-request,
 *   f-group-Change-attrib-response  [56] IMPLICIT F-GROUP-CHANGE-ATTRIB-response,
 *   f-select-another-request        [57] IMPLICIT F-SELECT-ANOTHER-request,
 *   f-select-another-response       [58] IMPLICIT F-SELECT-ANOTHER-response,
 *   f-create-directory-request      [59] IMPLICIT F-CREATE-DIRECTORY-request,
 *   f-create-directory-response     [60] IMPLICIT F-CREATE-DIRECTORY-response,
 *   f-link-request                  [61] IMPLICIT F-LINK-request,
 *   f-link-response                 [62] IMPLICIT F-LINK-response,
 *   f-unlink-request                [63] IMPLICIT F-UNLINK-request,
 *   f-unlink-response               [64] IMPLICIT F-UNLINK-response,
 *   f-read-link-attrib-request      [65] IMPLICIT F-READ-LINK-ATTRIB-request,
 *   f-read-link-attrib-response     [66] IMPLICIT F-READ-LINK-ATTRIB-response,
 *   f-Change-link-attrib-request    [67] IMPLICIT F-CHANGE-LINK-ATTRIB-request,
 *   f-Change-Iink-attrib-response   [68] IMPLICIT F-CHANGE-LINK-ATTRIB-response,
 *   f-move-request                  [69] IMPLICIT F-MOVE-request,
 *   f-move-response                 [70] IMPLICIT F-MOVE-response,
 *   f-copy-request                  [71] IMPLICIT F-COPY-request,
 *   f-copy-response                 [72] IMPLICIT F-COPY-response
 * }
 * ```
 */
export type FSM_PDU =
  | { f_Change_prefix_request: F_CHANGE_PREFIX_request } /* CHOICE_ALT_ROOT */
  | { f_Change_prefix_response: F_CHANGE_PREFIX_response } /* CHOICE_ALT_ROOT */
  | { f_list_request: F_LIST_request } /* CHOICE_ALT_ROOT */
  | { f_list_response: F_LIST_response } /* CHOICE_ALT_ROOT */
  | { f_group_select_request: F_GROUP_SELECT_request } /* CHOICE_ALT_ROOT */
  | { f_group_select_response: F_GROUP_SELECT_response } /* CHOICE_ALT_ROOT */
  | { f_group_delete_request: F_GROUP_DELETE_request } /* CHOICE_ALT_ROOT */
  | { f_group_delete_response: F_GROUP_DELETE_response } /* CHOICE_ALT_ROOT */
  | { f_group_move_request: F_GROUP_MOVE_request } /* CHOICE_ALT_ROOT */
  | { f_group_move_response: F_GROUP_MOVE_response } /* CHOICE_ALT_ROOT */
  | { f_group_copy_request: F_GROUP_COPY_request } /* CHOICE_ALT_ROOT */
  | { f_group_copy_response: F_GROUP_COPY_response } /* CHOICE_ALT_ROOT */
  | { f_group_list_request: F_GROUP_LIST_request } /* CHOICE_ALT_ROOT */
  | { f_group_list_response: F_GROUP_LIST_response } /* CHOICE_ALT_ROOT */
  | {
      f_group_Change_attrib_request: F_GROUP_CHANGE_ATTRIB_request;
    } /* CHOICE_ALT_ROOT */
  | {
      f_group_Change_attrib_response: F_GROUP_CHANGE_ATTRIB_response;
    } /* CHOICE_ALT_ROOT */
  | { f_select_another_request: F_SELECT_ANOTHER_request } /* CHOICE_ALT_ROOT */
  | {
      f_select_another_response: F_SELECT_ANOTHER_response;
    } /* CHOICE_ALT_ROOT */
  | {
      f_create_directory_request: F_CREATE_DIRECTORY_request;
    } /* CHOICE_ALT_ROOT */
  | {
      f_create_directory_response: F_CREATE_DIRECTORY_response;
    } /* CHOICE_ALT_ROOT */
  | { f_link_request: F_LINK_request } /* CHOICE_ALT_ROOT */
  | { f_link_response: F_LINK_response } /* CHOICE_ALT_ROOT */
  | { f_unlink_request: F_UNLINK_request } /* CHOICE_ALT_ROOT */
  | { f_unlink_response: F_UNLINK_response } /* CHOICE_ALT_ROOT */
  | {
      f_read_link_attrib_request: F_READ_LINK_ATTRIB_request;
    } /* CHOICE_ALT_ROOT */
  | {
      f_read_link_attrib_response: F_READ_LINK_ATTRIB_response;
    } /* CHOICE_ALT_ROOT */
  | {
      f_Change_link_attrib_request: F_CHANGE_LINK_ATTRIB_request;
    } /* CHOICE_ALT_ROOT */
  | {
      f_Change_Iink_attrib_response: F_CHANGE_LINK_ATTRIB_response;
    } /* CHOICE_ALT_ROOT */
  | { f_move_request: F_MOVE_request } /* CHOICE_ALT_ROOT */
  | { f_move_response: F_MOVE_response } /* CHOICE_ALT_ROOT */
  | { f_copy_request: F_COPY_request } /* CHOICE_ALT_ROOT */
  | { f_copy_response: F_COPY_response } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION FSM_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FSM_PDU */
let _cached_decoder_for_FSM_PDU: $.ASN1Decoder<FSM_PDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FSM_PDU */

/* START_OF_SYMBOL_DEFINITION _decode_FSM_PDU */
/**
 * @summary Decodes an ASN.1 element into a(n) FSM_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FSM_PDU} The decoded data structure.
 */
export function _decode_FSM_PDU(el: _Element) {
  if (!_cached_decoder_for_FSM_PDU) {
    _cached_decoder_for_FSM_PDU = $._decode_inextensible_choice<FSM_PDU>({
      'CONTEXT 41': [
        'f_Change_prefix_request',
        $._decode_implicit<F_CHANGE_PREFIX_request>(
          () => _decode_F_CHANGE_PREFIX_request
        ),
      ],
      'CONTEXT 42': [
        'f_Change_prefix_response',
        $._decode_implicit<F_CHANGE_PREFIX_response>(
          () => _decode_F_CHANGE_PREFIX_response
        ),
      ],
      'CONTEXT 43': [
        'f_list_request',
        $._decode_implicit<F_LIST_request>(() => _decode_F_LIST_request),
      ],
      'CONTEXT 44': [
        'f_list_response',
        $._decode_implicit<F_LIST_response>(() => _decode_F_LIST_response),
      ],
      'CONTEXT 45': [
        'f_group_select_request',
        $._decode_implicit<F_GROUP_SELECT_request>(
          () => _decode_F_GROUP_SELECT_request
        ),
      ],
      'CONTEXT 46': [
        'f_group_select_response',
        $._decode_implicit<F_GROUP_SELECT_response>(
          () => _decode_F_GROUP_SELECT_response
        ),
      ],
      'CONTEXT 47': [
        'f_group_delete_request',
        $._decode_implicit<F_GROUP_DELETE_request>(
          () => _decode_F_GROUP_DELETE_request
        ),
      ],
      'CONTEXT 48': [
        'f_group_delete_response',
        $._decode_implicit<F_GROUP_DELETE_response>(
          () => _decode_F_GROUP_DELETE_response
        ),
      ],
      'CONTEXT 49': [
        'f_group_move_request',
        $._decode_implicit<F_GROUP_MOVE_request>(
          () => _decode_F_GROUP_MOVE_request
        ),
      ],
      'CONTEXT 50': [
        'f_group_move_response',
        $._decode_implicit<F_GROUP_MOVE_response>(
          () => _decode_F_GROUP_MOVE_response
        ),
      ],
      'CONTEXT 51': [
        'f_group_copy_request',
        $._decode_implicit<F_GROUP_COPY_request>(
          () => _decode_F_GROUP_COPY_request
        ),
      ],
      'CONTEXT 52': [
        'f_group_copy_response',
        $._decode_implicit<F_GROUP_COPY_response>(
          () => _decode_F_GROUP_COPY_response
        ),
      ],
      'CONTEXT 53': [
        'f_group_list_request',
        $._decode_implicit<F_GROUP_LIST_request>(
          () => _decode_F_GROUP_LIST_request
        ),
      ],
      'CONTEXT 54': [
        'f_group_list_response',
        $._decode_implicit<F_GROUP_LIST_response>(
          () => _decode_F_GROUP_LIST_response
        ),
      ],
      'CONTEXT 55': [
        'f_group_Change_attrib_request',
        $._decode_implicit<F_GROUP_CHANGE_ATTRIB_request>(
          () => _decode_F_GROUP_CHANGE_ATTRIB_request
        ),
      ],
      'CONTEXT 56': [
        'f_group_Change_attrib_response',
        $._decode_implicit<F_GROUP_CHANGE_ATTRIB_response>(
          () => _decode_F_GROUP_CHANGE_ATTRIB_response
        ),
      ],
      'CONTEXT 57': [
        'f_select_another_request',
        $._decode_implicit<F_SELECT_ANOTHER_request>(
          () => _decode_F_SELECT_ANOTHER_request
        ),
      ],
      'CONTEXT 58': [
        'f_select_another_response',
        $._decode_implicit<F_SELECT_ANOTHER_response>(
          () => _decode_F_SELECT_ANOTHER_response
        ),
      ],
      'CONTEXT 59': [
        'f_create_directory_request',
        $._decode_implicit<F_CREATE_DIRECTORY_request>(
          () => _decode_F_CREATE_DIRECTORY_request
        ),
      ],
      'CONTEXT 60': [
        'f_create_directory_response',
        $._decode_implicit<F_CREATE_DIRECTORY_response>(
          () => _decode_F_CREATE_DIRECTORY_response
        ),
      ],
      'CONTEXT 61': [
        'f_link_request',
        $._decode_implicit<F_LINK_request>(() => _decode_F_LINK_request),
      ],
      'CONTEXT 62': [
        'f_link_response',
        $._decode_implicit<F_LINK_response>(() => _decode_F_LINK_response),
      ],
      'CONTEXT 63': [
        'f_unlink_request',
        $._decode_implicit<F_UNLINK_request>(() => _decode_F_UNLINK_request),
      ],
      'CONTEXT 64': [
        'f_unlink_response',
        $._decode_implicit<F_UNLINK_response>(() => _decode_F_UNLINK_response),
      ],
      'CONTEXT 65': [
        'f_read_link_attrib_request',
        $._decode_implicit<F_READ_LINK_ATTRIB_request>(
          () => _decode_F_READ_LINK_ATTRIB_request
        ),
      ],
      'CONTEXT 66': [
        'f_read_link_attrib_response',
        $._decode_implicit<F_READ_LINK_ATTRIB_response>(
          () => _decode_F_READ_LINK_ATTRIB_response
        ),
      ],
      'CONTEXT 67': [
        'f_Change_link_attrib_request',
        $._decode_implicit<F_CHANGE_LINK_ATTRIB_request>(
          () => _decode_F_CHANGE_LINK_ATTRIB_request
        ),
      ],
      'CONTEXT 68': [
        'f_Change_Iink_attrib_response',
        $._decode_implicit<F_CHANGE_LINK_ATTRIB_response>(
          () => _decode_F_CHANGE_LINK_ATTRIB_response
        ),
      ],
      'CONTEXT 69': [
        'f_move_request',
        $._decode_implicit<F_MOVE_request>(() => _decode_F_MOVE_request),
      ],
      'CONTEXT 70': [
        'f_move_response',
        $._decode_implicit<F_MOVE_response>(() => _decode_F_MOVE_response),
      ],
      'CONTEXT 71': [
        'f_copy_request',
        $._decode_implicit<F_COPY_request>(() => _decode_F_COPY_request),
      ],
      'CONTEXT 72': [
        'f_copy_response',
        $._decode_implicit<F_COPY_response>(() => _decode_F_COPY_response),
      ],
    });
  }
  return _cached_decoder_for_FSM_PDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FSM_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FSM_PDU */
let _cached_encoder_for_FSM_PDU: $.ASN1Encoder<FSM_PDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FSM_PDU */

/* START_OF_SYMBOL_DEFINITION _encode_FSM_PDU */
/**
 * @summary Encodes a(n) FSM_PDU into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FSM_PDU, encoded as an ASN.1 Element.
 */
export function _encode_FSM_PDU(
  value: FSM_PDU,
  elGetter: $.ASN1Encoder<FSM_PDU>
) {
  if (!_cached_encoder_for_FSM_PDU) {
    _cached_encoder_for_FSM_PDU = $._encode_choice<FSM_PDU>(
      {
        f_Change_prefix_request: $._encode_implicit(
          _TagClass.context,
          41,
          () => _encode_F_CHANGE_PREFIX_request,
          $.BER
        ),
        f_Change_prefix_response: $._encode_implicit(
          _TagClass.context,
          42,
          () => _encode_F_CHANGE_PREFIX_response,
          $.BER
        ),
        f_list_request: $._encode_implicit(
          _TagClass.context,
          43,
          () => _encode_F_LIST_request,
          $.BER
        ),
        f_list_response: $._encode_implicit(
          _TagClass.context,
          44,
          () => _encode_F_LIST_response,
          $.BER
        ),
        f_group_select_request: $._encode_implicit(
          _TagClass.context,
          45,
          () => _encode_F_GROUP_SELECT_request,
          $.BER
        ),
        f_group_select_response: $._encode_implicit(
          _TagClass.context,
          46,
          () => _encode_F_GROUP_SELECT_response,
          $.BER
        ),
        f_group_delete_request: $._encode_implicit(
          _TagClass.context,
          47,
          () => _encode_F_GROUP_DELETE_request,
          $.BER
        ),
        f_group_delete_response: $._encode_implicit(
          _TagClass.context,
          48,
          () => _encode_F_GROUP_DELETE_response,
          $.BER
        ),
        f_group_move_request: $._encode_implicit(
          _TagClass.context,
          49,
          () => _encode_F_GROUP_MOVE_request,
          $.BER
        ),
        f_group_move_response: $._encode_implicit(
          _TagClass.context,
          50,
          () => _encode_F_GROUP_MOVE_response,
          $.BER
        ),
        f_group_copy_request: $._encode_implicit(
          _TagClass.context,
          51,
          () => _encode_F_GROUP_COPY_request,
          $.BER
        ),
        f_group_copy_response: $._encode_implicit(
          _TagClass.context,
          52,
          () => _encode_F_GROUP_COPY_response,
          $.BER
        ),
        f_group_list_request: $._encode_implicit(
          _TagClass.context,
          53,
          () => _encode_F_GROUP_LIST_request,
          $.BER
        ),
        f_group_list_response: $._encode_implicit(
          _TagClass.context,
          54,
          () => _encode_F_GROUP_LIST_response,
          $.BER
        ),
        f_group_Change_attrib_request: $._encode_implicit(
          _TagClass.context,
          55,
          () => _encode_F_GROUP_CHANGE_ATTRIB_request,
          $.BER
        ),
        f_group_Change_attrib_response: $._encode_implicit(
          _TagClass.context,
          56,
          () => _encode_F_GROUP_CHANGE_ATTRIB_response,
          $.BER
        ),
        f_select_another_request: $._encode_implicit(
          _TagClass.context,
          57,
          () => _encode_F_SELECT_ANOTHER_request,
          $.BER
        ),
        f_select_another_response: $._encode_implicit(
          _TagClass.context,
          58,
          () => _encode_F_SELECT_ANOTHER_response,
          $.BER
        ),
        f_create_directory_request: $._encode_implicit(
          _TagClass.context,
          59,
          () => _encode_F_CREATE_DIRECTORY_request,
          $.BER
        ),
        f_create_directory_response: $._encode_implicit(
          _TagClass.context,
          60,
          () => _encode_F_CREATE_DIRECTORY_response,
          $.BER
        ),
        f_link_request: $._encode_implicit(
          _TagClass.context,
          61,
          () => _encode_F_LINK_request,
          $.BER
        ),
        f_link_response: $._encode_implicit(
          _TagClass.context,
          62,
          () => _encode_F_LINK_response,
          $.BER
        ),
        f_unlink_request: $._encode_implicit(
          _TagClass.context,
          63,
          () => _encode_F_UNLINK_request,
          $.BER
        ),
        f_unlink_response: $._encode_implicit(
          _TagClass.context,
          64,
          () => _encode_F_UNLINK_response,
          $.BER
        ),
        f_read_link_attrib_request: $._encode_implicit(
          _TagClass.context,
          65,
          () => _encode_F_READ_LINK_ATTRIB_request,
          $.BER
        ),
        f_read_link_attrib_response: $._encode_implicit(
          _TagClass.context,
          66,
          () => _encode_F_READ_LINK_ATTRIB_response,
          $.BER
        ),
        f_Change_link_attrib_request: $._encode_implicit(
          _TagClass.context,
          67,
          () => _encode_F_CHANGE_LINK_ATTRIB_request,
          $.BER
        ),
        f_Change_Iink_attrib_response: $._encode_implicit(
          _TagClass.context,
          68,
          () => _encode_F_CHANGE_LINK_ATTRIB_response,
          $.BER
        ),
        f_move_request: $._encode_implicit(
          _TagClass.context,
          69,
          () => _encode_F_MOVE_request,
          $.BER
        ),
        f_move_response: $._encode_implicit(
          _TagClass.context,
          70,
          () => _encode_F_MOVE_response,
          $.BER
        ),
        f_copy_request: $._encode_implicit(
          _TagClass.context,
          71,
          () => _encode_F_COPY_request,
          $.BER
        ),
        f_copy_response: $._encode_implicit(
          _TagClass.context,
          72,
          () => _encode_F_COPY_response,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_FSM_PDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FSM_PDU */

/* eslint-enable */
