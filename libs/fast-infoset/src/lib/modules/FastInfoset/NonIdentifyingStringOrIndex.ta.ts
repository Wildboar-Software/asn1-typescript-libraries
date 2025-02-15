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
  NonIdentifyingStringOrIndex_literal_character_string,
  _decode_NonIdentifyingStringOrIndex_literal_character_string,
  _encode_NonIdentifyingStringOrIndex_literal_character_string,
} from '../FastInfoset/NonIdentifyingStringOrIndex-literal-character-string.ta';
export {
  NonIdentifyingStringOrIndex_literal_character_string,
  _decode_NonIdentifyingStringOrIndex_literal_character_string,
  _encode_NonIdentifyingStringOrIndex_literal_character_string,
} from '../FastInfoset/NonIdentifyingStringOrIndex-literal-character-string.ta';

/* START_OF_SYMBOL_DEFINITION NonIdentifyingStringOrIndex */
/**
 * @summary NonIdentifyingStringOrIndex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonIdentifyingStringOrIndex  ::=  CHOICE {
 *   literal-character-string
 *     SEQUENCE {add-to-table      BOOLEAN,
 *               character-string  EncodedCharacterString},
 *   string-index              INTEGER(0..one-meg)
 * }
 * ```
 */
export type NonIdentifyingStringOrIndex =
  | {
      literal_character_string: NonIdentifyingStringOrIndex_literal_character_string;
    } /* CHOICE_ALT_ROOT */
  | { string_index: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION NonIdentifyingStringOrIndex */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonIdentifyingStringOrIndex */
let _cached_decoder_for_NonIdentifyingStringOrIndex: $.ASN1Decoder<NonIdentifyingStringOrIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonIdentifyingStringOrIndex */

/* START_OF_SYMBOL_DEFINITION _decode_NonIdentifyingStringOrIndex */
/**
 * @summary Decodes an ASN.1 element into a(n) NonIdentifyingStringOrIndex
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonIdentifyingStringOrIndex} The decoded data structure.
 */
export function _decode_NonIdentifyingStringOrIndex(el: _Element) {
  if (!_cached_decoder_for_NonIdentifyingStringOrIndex) {
    _cached_decoder_for_NonIdentifyingStringOrIndex = $._decode_inextensible_choice<NonIdentifyingStringOrIndex>(
      {
        'CONTEXT 0': [
          'literal_character_string',
          _decode_NonIdentifyingStringOrIndex_literal_character_string,
        ],
        'CONTEXT 1': ['string_index', $._decodeInteger],
      }
    );
  }
  return _cached_decoder_for_NonIdentifyingStringOrIndex(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonIdentifyingStringOrIndex */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonIdentifyingStringOrIndex */
let _cached_encoder_for_NonIdentifyingStringOrIndex: $.ASN1Encoder<NonIdentifyingStringOrIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonIdentifyingStringOrIndex */

/* START_OF_SYMBOL_DEFINITION _encode_NonIdentifyingStringOrIndex */
/**
 * @summary Encodes a(n) NonIdentifyingStringOrIndex into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonIdentifyingStringOrIndex, encoded as an ASN.1 Element.
 */
export function _encode_NonIdentifyingStringOrIndex(
  value: NonIdentifyingStringOrIndex,
  elGetter: $.ASN1Encoder<NonIdentifyingStringOrIndex>
) {
  if (!_cached_encoder_for_NonIdentifyingStringOrIndex) {
    _cached_encoder_for_NonIdentifyingStringOrIndex = $._encode_choice<NonIdentifyingStringOrIndex>(
      {
        literal_character_string: _encode_NonIdentifyingStringOrIndex_literal_character_string,
        string_index: $._encodeInteger,
      },
      $.BER
    );
  }
  return _cached_encoder_for_NonIdentifyingStringOrIndex(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonIdentifyingStringOrIndex */

/* eslint-enable */
