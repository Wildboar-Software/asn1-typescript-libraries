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
  CharacterMatchType,
  _enum_for_CharacterMatchType,
  CharacterMatchType_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  exact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CharacterMatchType_caseIgnore /* IMPORTED_LONG_ENUMERATION_ITEM */,
  caseIgnore /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CharacterMatchType_mapped /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mapped /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_CharacterMatchType,
  _encode_CharacterMatchType,
} from '../Uds/CharacterMatchType.ta';
export {
  CharacterMatchType,
  _enum_for_CharacterMatchType,
  CharacterMatchType_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  exact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CharacterMatchType_caseIgnore /* IMPORTED_LONG_ENUMERATION_ITEM */,
  caseIgnore /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CharacterMatchType_mapped /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mapped /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_CharacterMatchType,
  _encode_CharacterMatchType,
} from '../Uds/CharacterMatchType.ta';

/* START_OF_SYMBOL_DEFINITION CharacterMatchTypes */
/**
 * @summary CharacterMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterMatchTypes  ::=  SEQUENCE OF CharacterMatchType
 * ```
 */
export type CharacterMatchTypes = CharacterMatchType[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterMatchTypes */
let _cached_decoder_for_CharacterMatchTypes: $.ASN1Decoder<CharacterMatchTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION _decode_CharacterMatchTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) CharacterMatchTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CharacterMatchTypes} The decoded data structure.
 */
export function _decode_CharacterMatchTypes(el: _Element) {
  if (!_cached_decoder_for_CharacterMatchTypes) {
    _cached_decoder_for_CharacterMatchTypes = $._decodeSequenceOf<CharacterMatchType>(
      () => _decode_CharacterMatchType
    );
  }
  return _cached_decoder_for_CharacterMatchTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterMatchTypes */
let _cached_encoder_for_CharacterMatchTypes: $.ASN1Encoder<CharacterMatchTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION _encode_CharacterMatchTypes */
/**
 * @summary Encodes a(n) CharacterMatchTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacterMatchTypes, encoded as an ASN.1 Element.
 */
export function _encode_CharacterMatchTypes(
  value: CharacterMatchTypes,
  elGetter: $.ASN1Encoder<CharacterMatchTypes>
) {
  if (!_cached_encoder_for_CharacterMatchTypes) {
    _cached_encoder_for_CharacterMatchTypes = $._encodeSequenceOf<CharacterMatchType>(
      () => _encode_CharacterMatchType,
      $.BER
    );
  }
  return _cached_encoder_for_CharacterMatchTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CharacterMatchTypes */

/* eslint-enable */
