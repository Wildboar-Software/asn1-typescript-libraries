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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
import {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta';
export {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta';

/* START_OF_SYMBOL_DEFINITION BioAPI_CANDIDATE_bir */
/**
 * @summary BioAPI_CANDIDATE_bir
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-CANDIDATE-bir ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BioAPI_CANDIDATE_bir =
  | { birInDatabase: BioAPI_UUID } /* CHOICE_ALT_ROOT */
  | { birInArray: UnsignedInt } /* CHOICE_ALT_ROOT */
  | { birInPresetArray: UnsignedInt } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BioAPI_CANDIDATE_bir */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_CANDIDATE_bir */
let _cached_decoder_for_BioAPI_CANDIDATE_bir: $.ASN1Decoder<BioAPI_CANDIDATE_bir> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_CANDIDATE_bir */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_CANDIDATE_bir */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_CANDIDATE_bir
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_CANDIDATE_bir} The decoded data structure.
 */
export function _decode_BioAPI_CANDIDATE_bir(el: _Element) {
  if (!_cached_decoder_for_BioAPI_CANDIDATE_bir) {
    _cached_decoder_for_BioAPI_CANDIDATE_bir = $._decode_inextensible_choice<BioAPI_CANDIDATE_bir>(
      {
        'CONTEXT 0': ['birInDatabase', _decode_BioAPI_UUID],
        'CONTEXT 1': ['birInArray', _decode_UnsignedInt],
        'CONTEXT 2': ['birInPresetArray', _decode_UnsignedInt],
      }
    );
  }
  return _cached_decoder_for_BioAPI_CANDIDATE_bir(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_CANDIDATE_bir */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_CANDIDATE_bir */
let _cached_encoder_for_BioAPI_CANDIDATE_bir: $.ASN1Encoder<BioAPI_CANDIDATE_bir> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_CANDIDATE_bir */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_CANDIDATE_bir */
/**
 * @summary Encodes a(n) BioAPI_CANDIDATE_bir into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_CANDIDATE_bir, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_CANDIDATE_bir(
  value: BioAPI_CANDIDATE_bir,
  elGetter: $.ASN1Encoder<BioAPI_CANDIDATE_bir>
) {
  if (!_cached_encoder_for_BioAPI_CANDIDATE_bir) {
    _cached_encoder_for_BioAPI_CANDIDATE_bir = $._encode_choice<BioAPI_CANDIDATE_bir>(
      {
        birInDatabase: _encode_BioAPI_UUID,
        birInArray: _encode_UnsignedInt,
        birInPresetArray: _encode_UnsignedInt,
      },
      $.BER
    );
  }
  return _cached_encoder_for_BioAPI_CANDIDATE_bir(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_CANDIDATE_bir */

/* eslint-enable */
