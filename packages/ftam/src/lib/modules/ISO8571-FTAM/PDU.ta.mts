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
  FTAM_Regime_PDU,
  _decode_FTAM_Regime_PDU,
  _encode_FTAM_Regime_PDU,
} from '../ISO8571-FTAM/FTAM-Regime-PDU.ta.mjs';
import {
  File_PDU,
  _decode_File_PDU,
  _encode_File_PDU,
} from '../ISO8571-FTAM/File-PDU.ta.mjs';
import {
  Bulk_Data_PDU,
  _decode_Bulk_Data_PDU,
  _encode_Bulk_Data_PDU,
} from '../ISO8571-FTAM/Bulk-Data-PDU.ta.mjs';
import {
  FSM_PDU,
  _decode_FSM_PDU,
  _encode_FSM_PDU,
} from '../ISO8571-FTAM/FSM-PDU.ta.mjs';

/**
 * @summary PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDU  ::=  CHOICE {
 *   fTAM-Regime-PDU  FTAM-Regime-PDU,
 *   file-PDU         File-PDU,
 *   bulk-Data-PDU    Bulk-Data-PDU,
 *   fSM-PDU          FSM-PDU
 * }
 * ```
 */
export type PDU =
  | { fTAM_Regime_PDU: FTAM_Regime_PDU } /* CHOICE_ALT_ROOT */
  | { file_PDU: File_PDU } /* CHOICE_ALT_ROOT */
  | { bulk_Data_PDU: Bulk_Data_PDU } /* CHOICE_ALT_ROOT */
  | { fSM_PDU: FSM_PDU } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_PDU: $.ASN1Decoder<PDU> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDU} The decoded data structure.
 */
export function _decode_PDU(el: _Element): PDU {
  if (!_cached_decoder_for_PDU) {
    _cached_decoder_for_PDU = $._decode_inextensible_choice<PDU>({
      'CONTEXT 0': ['fTAM_Regime_PDU', _decode_FTAM_Regime_PDU],
      'CONTEXT 1': ['fTAM_Regime_PDU', _decode_FTAM_Regime_PDU],
      'CONTEXT 2': ['fTAM_Regime_PDU', _decode_FTAM_Regime_PDU],
      'CONTEXT 3': ['fTAM_Regime_PDU', _decode_FTAM_Regime_PDU],
      'CONTEXT 4': ['fTAM_Regime_PDU', _decode_FTAM_Regime_PDU],
      'CONTEXT 5': ['fTAM_Regime_PDU', _decode_FTAM_Regime_PDU],
      'CONTEXT 6': ['file_PDU', _decode_File_PDU],
      'CONTEXT 7': ['file_PDU', _decode_File_PDU],
      'CONTEXT 8': ['file_PDU', _decode_File_PDU],
      'CONTEXT 9': ['file_PDU', _decode_File_PDU],
      'CONTEXT 10': ['file_PDU', _decode_File_PDU],
      'CONTEXT 11': ['file_PDU', _decode_File_PDU],
      'CONTEXT 12': ['file_PDU', _decode_File_PDU],
      'CONTEXT 13': ['file_PDU', _decode_File_PDU],
      'CONTEXT 14': ['file_PDU', _decode_File_PDU],
      'CONTEXT 15': ['file_PDU', _decode_File_PDU],
      'CONTEXT 16': ['file_PDU', _decode_File_PDU],
      'CONTEXT 17': ['file_PDU', _decode_File_PDU],
      'CONTEXT 18': ['file_PDU', _decode_File_PDU],
      'CONTEXT 19': ['file_PDU', _decode_File_PDU],
      'CONTEXT 20': ['file_PDU', _decode_File_PDU],
      'CONTEXT 21': ['file_PDU', _decode_File_PDU],
      'CONTEXT 22': ['file_PDU', _decode_File_PDU],
      'CONTEXT 23': ['file_PDU', _decode_File_PDU],
      'CONTEXT 24': ['file_PDU', _decode_File_PDU],
      'CONTEXT 25': ['file_PDU', _decode_File_PDU],
      'CONTEXT 26': ['file_PDU', _decode_File_PDU],
      'CONTEXT 27': ['file_PDU', _decode_File_PDU],
      'CONTEXT 28': ['file_PDU', _decode_File_PDU],
      'CONTEXT 29': ['file_PDU', _decode_File_PDU],
      'CONTEXT 30': ['file_PDU', _decode_File_PDU],
      'CONTEXT 31': ['file_PDU', _decode_File_PDU],
      'CONTEXT 32': ['bulk_Data_PDU', _decode_Bulk_Data_PDU],
      'CONTEXT 33': ['bulk_Data_PDU', _decode_Bulk_Data_PDU],
      'CONTEXT 34': ['bulk_Data_PDU', _decode_Bulk_Data_PDU],
      'CONTEXT 35': ['bulk_Data_PDU', _decode_Bulk_Data_PDU],
      'CONTEXT 36': ['bulk_Data_PDU', _decode_Bulk_Data_PDU],
      'CONTEXT 37': ['bulk_Data_PDU', _decode_Bulk_Data_PDU],
      'CONTEXT 38': ['bulk_Data_PDU', _decode_Bulk_Data_PDU],
      'CONTEXT 39': ['bulk_Data_PDU', _decode_Bulk_Data_PDU],
      'CONTEXT 40': ['bulk_Data_PDU', _decode_Bulk_Data_PDU],
      'CONTEXT 41': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 42': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 43': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 44': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 45': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 46': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 47': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 48': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 49': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 50': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 51': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 52': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 53': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 54': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 55': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 56': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 57': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 58': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 59': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 60': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 61': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 62': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 63': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 64': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 65': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 66': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 67': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 68': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 69': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 70': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 71': ['fSM_PDU', _decode_FSM_PDU],
      'CONTEXT 72': ['fSM_PDU', _decode_FSM_PDU],
    });
  }
  return _cached_decoder_for_PDU(el);
}


let _cached_encoder_for_PDU: $.ASN1Encoder<PDU> | null = null;


/**
 * @summary Encodes a(n) PDU into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDU, encoded as an ASN.1 Element.
 */
export function _encode_PDU(value: PDU, elGetter: $.ASN1Encoder<PDU>): _Element {
  if (!_cached_encoder_for_PDU) {
    _cached_encoder_for_PDU = $._encode_choice<PDU>(
      {
        fTAM_Regime_PDU: _encode_FTAM_Regime_PDU,
        file_PDU: _encode_File_PDU,
        bulk_Data_PDU: _encode_Bulk_Data_PDU,
        fSM_PDU: _encode_FSM_PDU,
      },
      $.BER
    );
  }
  return _cached_encoder_for_PDU(value, elGetter);
}


/* eslint-enable */
