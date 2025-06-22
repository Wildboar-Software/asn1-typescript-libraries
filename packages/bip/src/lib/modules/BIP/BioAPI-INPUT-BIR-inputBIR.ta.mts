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
  BioAPI_DBBIR_ID,
  _decode_BioAPI_DBBIR_ID,
  _encode_BioAPI_DBBIR_ID,
} from '../BIP/BioAPI-DBBIR-ID.ta.mjs';
import {
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.mjs';
import {
  BioAPI_BIR,
  _decode_BioAPI_BIR,
  _encode_BioAPI_BIR,
} from '../BIP/BioAPI-BIR.ta.mjs';

/**
 * @summary BioAPI_INPUT_BIR_inputBIR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-INPUT-BIR-inputBIR ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BioAPI_INPUT_BIR_inputBIR =
  | { birInDB: BioAPI_DBBIR_ID } /* CHOICE_ALT_ROOT */
  | { birInBSP: BioAPI_BIR_HANDLE } /* CHOICE_ALT_ROOT */
  | { bir: BioAPI_BIR } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_BioAPI_INPUT_BIR_inputBIR: $.ASN1Decoder<BioAPI_INPUT_BIR_inputBIR> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_INPUT_BIR_inputBIR
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_INPUT_BIR_inputBIR} The decoded data structure.
 */
export function _decode_BioAPI_INPUT_BIR_inputBIR(el: _Element) {
  if (!_cached_decoder_for_BioAPI_INPUT_BIR_inputBIR) {
    _cached_decoder_for_BioAPI_INPUT_BIR_inputBIR = $._decode_inextensible_choice<BioAPI_INPUT_BIR_inputBIR>(
      {
        'CONTEXT 0': ['birInDB', _decode_BioAPI_DBBIR_ID],
        'CONTEXT 1': ['birInBSP', _decode_BioAPI_BIR_HANDLE],
        'CONTEXT 2': ['bir', _decode_BioAPI_BIR],
      }
    );
  }
  return _cached_decoder_for_BioAPI_INPUT_BIR_inputBIR(el);
}


let _cached_encoder_for_BioAPI_INPUT_BIR_inputBIR: $.ASN1Encoder<BioAPI_INPUT_BIR_inputBIR> | null = null;


/**
 * @summary Encodes a(n) BioAPI_INPUT_BIR_inputBIR into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_INPUT_BIR_inputBIR, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_INPUT_BIR_inputBIR(
  value: BioAPI_INPUT_BIR_inputBIR,
  elGetter: $.ASN1Encoder<BioAPI_INPUT_BIR_inputBIR>
) {
  if (!_cached_encoder_for_BioAPI_INPUT_BIR_inputBIR) {
    _cached_encoder_for_BioAPI_INPUT_BIR_inputBIR = $._encode_choice<BioAPI_INPUT_BIR_inputBIR>(
      {
        birInDB: _encode_BioAPI_DBBIR_ID,
        birInBSP: _encode_BioAPI_BIR_HANDLE,
        bir: _encode_BioAPI_BIR,
      },
      $.BER
    );
  }
  return _cached_encoder_for_BioAPI_INPUT_BIR_inputBIR(value, elGetter);
}


/* eslint-enable */
