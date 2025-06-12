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
  BioAPI_DBBIR_ID,
  _decode_BioAPI_DBBIR_ID,
  _encode_BioAPI_DBBIR_ID,
} from '../BIP/BioAPI-DBBIR-ID.ta.js';
export {
  BioAPI_DBBIR_ID,
  _decode_BioAPI_DBBIR_ID,
  _encode_BioAPI_DBBIR_ID,
} from '../BIP/BioAPI-DBBIR-ID.ta.js';
import {
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.js';
export {
  BioAPI_BIR_HANDLE,
  _decode_BioAPI_BIR_HANDLE,
  _encode_BioAPI_BIR_HANDLE,
} from '../BIP/BioAPI-BIR-HANDLE.ta.js';
import {
  BioAPI_BIR,
  _decode_BioAPI_BIR,
  _encode_BioAPI_BIR,
} from '../BIP/BioAPI-BIR.ta.js';
export {
  BioAPI_BIR,
  _decode_BioAPI_BIR,
  _encode_BioAPI_BIR,
} from '../BIP/BioAPI-BIR.ta.js';

/* START_OF_SYMBOL_DEFINITION BioAPI_INPUT_BIR_inputBIR */
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
/* END_OF_SYMBOL_DEFINITION BioAPI_INPUT_BIR_inputBIR */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_INPUT_BIR_inputBIR */
let _cached_decoder_for_BioAPI_INPUT_BIR_inputBIR: $.ASN1Decoder<BioAPI_INPUT_BIR_inputBIR> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_INPUT_BIR_inputBIR */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_INPUT_BIR_inputBIR */
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
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_INPUT_BIR_inputBIR */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_INPUT_BIR_inputBIR */
let _cached_encoder_for_BioAPI_INPUT_BIR_inputBIR: $.ASN1Encoder<BioAPI_INPUT_BIR_inputBIR> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_INPUT_BIR_inputBIR */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_INPUT_BIR_inputBIR */
/**
 * @summary Encodes a(n) BioAPI_INPUT_BIR_inputBIR into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_INPUT_BIR_inputBIR */

/* eslint-enable */
