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

/* START_OF_SYMBOL_DEFINITION EncodedCharacterString_encoding_format */
/**
 * @summary EncodedCharacterString_encoding_format
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedCharacterString-encoding-format ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EncodedCharacterString_encoding_format =
  | { utf_8: NULL } /* CHOICE_ALT_ROOT */
  | { utf_16: NULL } /* CHOICE_ALT_ROOT */
  | { restricted_alphabet: INTEGER } /* CHOICE_ALT_ROOT */
  | { encoding_algorithm: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EncodedCharacterString_encoding_format */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedCharacterString_encoding_format */
let _cached_decoder_for_EncodedCharacterString_encoding_format: $.ASN1Decoder<EncodedCharacterString_encoding_format> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedCharacterString_encoding_format */

/* START_OF_SYMBOL_DEFINITION _decode_EncodedCharacterString_encoding_format */
/**
 * @summary Decodes an ASN.1 element into a(n) EncodedCharacterString_encoding_format
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncodedCharacterString_encoding_format} The decoded data structure.
 */
export function _decode_EncodedCharacterString_encoding_format(el: _Element) {
  if (!_cached_decoder_for_EncodedCharacterString_encoding_format) {
    _cached_decoder_for_EncodedCharacterString_encoding_format = $._decode_inextensible_choice<EncodedCharacterString_encoding_format>(
      {
        'CONTEXT 0': ['utf_8', $._decodeNull],
        'CONTEXT 1': ['utf_16', $._decodeNull],
        'CONTEXT 2': ['restricted_alphabet', $._decodeInteger],
        'CONTEXT 3': ['encoding_algorithm', $._decodeInteger],
      }
    );
  }
  return _cached_decoder_for_EncodedCharacterString_encoding_format(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncodedCharacterString_encoding_format */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedCharacterString_encoding_format */
let _cached_encoder_for_EncodedCharacterString_encoding_format: $.ASN1Encoder<EncodedCharacterString_encoding_format> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedCharacterString_encoding_format */

/* START_OF_SYMBOL_DEFINITION _encode_EncodedCharacterString_encoding_format */
/**
 * @summary Encodes a(n) EncodedCharacterString_encoding_format into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncodedCharacterString_encoding_format, encoded as an ASN.1 Element.
 */
export function _encode_EncodedCharacterString_encoding_format(
  value: EncodedCharacterString_encoding_format,
  elGetter: $.ASN1Encoder<EncodedCharacterString_encoding_format>
) {
  if (!_cached_encoder_for_EncodedCharacterString_encoding_format) {
    _cached_encoder_for_EncodedCharacterString_encoding_format = $._encode_choice<EncodedCharacterString_encoding_format>(
      {
        utf_8: $._encodeNull,
        utf_16: $._encodeNull,
        restricted_alphabet: $._encodeInteger,
        encoding_algorithm: $._encodeInteger,
      },
      $.BER
    );
  }
  return _cached_encoder_for_EncodedCharacterString_encoding_format(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_EncodedCharacterString_encoding_format */

/* eslint-enable */
