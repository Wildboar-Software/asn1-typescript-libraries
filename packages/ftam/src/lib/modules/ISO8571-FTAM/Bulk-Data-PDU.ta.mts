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
  F_READ_request,
  _decode_F_READ_request,
  _encode_F_READ_request,
} from '../ISO8571-FTAM/F-READ-request.ta.mjs';
export {
  F_READ_request,
  _decode_F_READ_request,
  _encode_F_READ_request,
} from '../ISO8571-FTAM/F-READ-request.ta.mjs';
import {
  F_WRITE_request,
  _decode_F_WRITE_request,
  _encode_F_WRITE_request,
} from '../ISO8571-FTAM/F-WRITE-request.ta.mjs';
export {
  F_WRITE_request,
  _decode_F_WRITE_request,
  _encode_F_WRITE_request,
} from '../ISO8571-FTAM/F-WRITE-request.ta.mjs';
import {
  F_DATA_END_request,
  _decode_F_DATA_END_request,
  _encode_F_DATA_END_request,
} from '../ISO8571-FTAM/F-DATA-END-request.ta.mjs';
export {
  F_DATA_END_request,
  _decode_F_DATA_END_request,
  _encode_F_DATA_END_request,
} from '../ISO8571-FTAM/F-DATA-END-request.ta.mjs';
import {
  F_TRANSFER_END_request,
  _decode_F_TRANSFER_END_request,
  _encode_F_TRANSFER_END_request,
} from '../ISO8571-FTAM/F-TRANSFER-END-request.ta.mjs';
export {
  F_TRANSFER_END_request,
  _decode_F_TRANSFER_END_request,
  _encode_F_TRANSFER_END_request,
} from '../ISO8571-FTAM/F-TRANSFER-END-request.ta.mjs';
import {
  F_TRANSFER_END_response,
  _decode_F_TRANSFER_END_response,
  _encode_F_TRANSFER_END_response,
} from '../ISO8571-FTAM/F-TRANSFER-END-response.ta.mjs';
export {
  F_TRANSFER_END_response,
  _decode_F_TRANSFER_END_response,
  _encode_F_TRANSFER_END_response,
} from '../ISO8571-FTAM/F-TRANSFER-END-response.ta.mjs';
import {
  F_CANCEL_request,
  _decode_F_CANCEL_request,
  _encode_F_CANCEL_request,
} from '../ISO8571-FTAM/F-CANCEL-request.ta.mjs';
export {
  F_CANCEL_request,
  _decode_F_CANCEL_request,
  _encode_F_CANCEL_request,
} from '../ISO8571-FTAM/F-CANCEL-request.ta.mjs';
import {
  F_CANCEL_response,
  _decode_F_CANCEL_response,
  _encode_F_CANCEL_response,
} from '../ISO8571-FTAM/F-CANCEL-response.ta.mjs';
export {
  F_CANCEL_response,
  _decode_F_CANCEL_response,
  _encode_F_CANCEL_response,
} from '../ISO8571-FTAM/F-CANCEL-response.ta.mjs';
import {
  F_RESTART_request,
  _decode_F_RESTART_request,
  _encode_F_RESTART_request,
} from '../ISO8571-FTAM/F-RESTART-request.ta.mjs';
export {
  F_RESTART_request,
  _decode_F_RESTART_request,
  _encode_F_RESTART_request,
} from '../ISO8571-FTAM/F-RESTART-request.ta.mjs';
import {
  F_RESTART_response,
  _decode_F_RESTART_response,
  _encode_F_RESTART_response,
} from '../ISO8571-FTAM/F-RESTART-response.ta.mjs';
export {
  F_RESTART_response,
  _decode_F_RESTART_response,
  _encode_F_RESTART_response,
} from '../ISO8571-FTAM/F-RESTART-response.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Bulk_Data_PDU */
/**
 * @summary Bulk_Data_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Bulk-Data-PDU  ::=  CHOICE {
 *   f-read-request           [32] IMPLICIT F-READ-request,
 *   f-write-request          [33] IMPLICIT F-WRITE-request,
 *   -- There is no F-DATA FPDU, the contents of a file
 *   -- are transferred in a different presentation context
 *   -- and there is therefore no need to define the types
 *   -- of file contents in the FTAM PCI abstract Syntax.
 *   -- File contents data are carried in values of the
 *   -- data type Data-Element as defined in ISO 8571-2.
 *   f-data-end-request       [34] IMPLICIT F-DATA-END-request,
 *   f-transfer-end-request   [35] IMPLICIT F-TRANSFER-END-request,
 *   f-transfer-end-response  [36] IMPLICIT F-TRANSFER-END-response,
 *   f-cancel-request         [37] IMPLICIT F-CANCEL-request,
 *   f-cancel-response        [38] IMPLICIT F-CANCEL-response,
 *   -- There is no F-CHECK PDU.
 *   f-restart-request        [39] IMPLICIT F-RESTART-request,
 *   f-restart-response       [40] IMPLICIT F-RESTART-response
 * }
 * ```
 */
export type Bulk_Data_PDU =
  | { f_read_request: F_READ_request } /* CHOICE_ALT_ROOT */
  | { f_write_request: F_WRITE_request } /* CHOICE_ALT_ROOT */
  | { f_data_end_request: F_DATA_END_request } /* CHOICE_ALT_ROOT */
  | { f_transfer_end_request: F_TRANSFER_END_request } /* CHOICE_ALT_ROOT */
  | { f_transfer_end_response: F_TRANSFER_END_response } /* CHOICE_ALT_ROOT */
  | { f_cancel_request: F_CANCEL_request } /* CHOICE_ALT_ROOT */
  | { f_cancel_response: F_CANCEL_response } /* CHOICE_ALT_ROOT */
  | { f_restart_request: F_RESTART_request } /* CHOICE_ALT_ROOT */
  | { f_restart_response: F_RESTART_response } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Bulk_Data_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Bulk_Data_PDU */
let _cached_decoder_for_Bulk_Data_PDU: $.ASN1Decoder<Bulk_Data_PDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Bulk_Data_PDU */

/* START_OF_SYMBOL_DEFINITION _decode_Bulk_Data_PDU */
/**
 * @summary Decodes an ASN.1 element into a(n) Bulk_Data_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Bulk_Data_PDU} The decoded data structure.
 */
export function _decode_Bulk_Data_PDU(el: _Element) {
  if (!_cached_decoder_for_Bulk_Data_PDU) {
    _cached_decoder_for_Bulk_Data_PDU = $._decode_inextensible_choice<Bulk_Data_PDU>(
      {
        'CONTEXT 32': [
          'f_read_request',
          $._decode_implicit<F_READ_request>(() => _decode_F_READ_request),
        ],
        'CONTEXT 33': [
          'f_write_request',
          $._decode_implicit<F_WRITE_request>(() => _decode_F_WRITE_request),
        ],
        'CONTEXT 34': [
          'f_data_end_request',
          $._decode_implicit<F_DATA_END_request>(
            () => _decode_F_DATA_END_request
          ),
        ],
        'CONTEXT 35': [
          'f_transfer_end_request',
          $._decode_implicit<F_TRANSFER_END_request>(
            () => _decode_F_TRANSFER_END_request
          ),
        ],
        'CONTEXT 36': [
          'f_transfer_end_response',
          $._decode_implicit<F_TRANSFER_END_response>(
            () => _decode_F_TRANSFER_END_response
          ),
        ],
        'CONTEXT 37': [
          'f_cancel_request',
          $._decode_implicit<F_CANCEL_request>(() => _decode_F_CANCEL_request),
        ],
        'CONTEXT 38': [
          'f_cancel_response',
          $._decode_implicit<F_CANCEL_response>(
            () => _decode_F_CANCEL_response
          ),
        ],
        'CONTEXT 39': [
          'f_restart_request',
          $._decode_implicit<F_RESTART_request>(
            () => _decode_F_RESTART_request
          ),
        ],
        'CONTEXT 40': [
          'f_restart_response',
          $._decode_implicit<F_RESTART_response>(
            () => _decode_F_RESTART_response
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_Bulk_Data_PDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Bulk_Data_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Bulk_Data_PDU */
let _cached_encoder_for_Bulk_Data_PDU: $.ASN1Encoder<Bulk_Data_PDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Bulk_Data_PDU */

/* START_OF_SYMBOL_DEFINITION _encode_Bulk_Data_PDU */
/**
 * @summary Encodes a(n) Bulk_Data_PDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bulk_Data_PDU, encoded as an ASN.1 Element.
 */
export function _encode_Bulk_Data_PDU(
  value: Bulk_Data_PDU,
  elGetter: $.ASN1Encoder<Bulk_Data_PDU>
) {
  if (!_cached_encoder_for_Bulk_Data_PDU) {
    _cached_encoder_for_Bulk_Data_PDU = $._encode_choice<Bulk_Data_PDU>(
      {
        f_read_request: $._encode_implicit(
          _TagClass.context,
          32,
          () => _encode_F_READ_request,
          $.BER
        ),
        f_write_request: $._encode_implicit(
          _TagClass.context,
          33,
          () => _encode_F_WRITE_request,
          $.BER
        ),
        f_data_end_request: $._encode_implicit(
          _TagClass.context,
          34,
          () => _encode_F_DATA_END_request,
          $.BER
        ),
        f_transfer_end_request: $._encode_implicit(
          _TagClass.context,
          35,
          () => _encode_F_TRANSFER_END_request,
          $.BER
        ),
        f_transfer_end_response: $._encode_implicit(
          _TagClass.context,
          36,
          () => _encode_F_TRANSFER_END_response,
          $.BER
        ),
        f_cancel_request: $._encode_implicit(
          _TagClass.context,
          37,
          () => _encode_F_CANCEL_request,
          $.BER
        ),
        f_cancel_response: $._encode_implicit(
          _TagClass.context,
          38,
          () => _encode_F_CANCEL_response,
          $.BER
        ),
        f_restart_request: $._encode_implicit(
          _TagClass.context,
          39,
          () => _encode_F_RESTART_request,
          $.BER
        ),
        f_restart_response: $._encode_implicit(
          _TagClass.context,
          40,
          () => _encode_F_RESTART_response,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Bulk_Data_PDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Bulk_Data_PDU */

/* eslint-enable */
