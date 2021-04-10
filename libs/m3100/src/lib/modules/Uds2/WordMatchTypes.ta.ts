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
  WordMatchType,
  _enum_for_WordMatchType,
  WordMatchType_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  exact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  WordMatchType_truncated /* IMPORTED_LONG_ENUMERATION_ITEM */,
  truncated /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  WordMatchType_phonetic /* IMPORTED_LONG_ENUMERATION_ITEM */,
  phonetic /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_WordMatchType,
  _encode_WordMatchType,
} from '../Uds2/WordMatchType.ta';
export {
  WordMatchType,
  _enum_for_WordMatchType,
  WordMatchType_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  exact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  WordMatchType_truncated /* IMPORTED_LONG_ENUMERATION_ITEM */,
  truncated /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  WordMatchType_phonetic /* IMPORTED_LONG_ENUMERATION_ITEM */,
  phonetic /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_WordMatchType,
  _encode_WordMatchType,
} from '../Uds2/WordMatchType.ta';

/* START_OF_SYMBOL_DEFINITION WordMatchTypes */
/**
 * @summary WordMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WordMatchTypes  ::=  SEQUENCE OF WordMatchType
 * ```
 */
export type WordMatchTypes = WordMatchType[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WordMatchTypes */
let _cached_decoder_for_WordMatchTypes: $.ASN1Decoder<WordMatchTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION _decode_WordMatchTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) WordMatchTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WordMatchTypes} The decoded data structure.
 */
export function _decode_WordMatchTypes(el: _Element) {
  if (!_cached_decoder_for_WordMatchTypes) {
    _cached_decoder_for_WordMatchTypes = $._decodeSequenceOf<WordMatchType>(
      () => _decode_WordMatchType
    );
  }
  return _cached_decoder_for_WordMatchTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WordMatchTypes */
let _cached_encoder_for_WordMatchTypes: $.ASN1Encoder<WordMatchTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION _encode_WordMatchTypes */
/**
 * @summary Encodes a(n) WordMatchTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WordMatchTypes, encoded as an ASN.1 Element.
 */
export function _encode_WordMatchTypes(
  value: WordMatchTypes,
  elGetter: $.ASN1Encoder<WordMatchTypes>
) {
  if (!_cached_encoder_for_WordMatchTypes) {
    _cached_encoder_for_WordMatchTypes = $._encodeSequenceOf<WordMatchType>(
      () => _encode_WordMatchType,
      $.BER
    );
  }
  return _cached_encoder_for_WordMatchTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WordMatchTypes */

/* eslint-enable */
