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
  StringMatchType,
  _enum_for_StringMatchType,
  StringMatchType_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  exact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  StringMatchType_deletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  deletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  StringMatchType_restrictedDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  restrictedDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  StringMatchType_permutation /* IMPORTED_LONG_ENUMERATION_ITEM */,
  permutation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  StringMatchType_permutationAndDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  permutationAndDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  StringMatchType_providerDefined /* IMPORTED_LONG_ENUMERATION_ITEM */,
  providerDefined /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_StringMatchType,
  _encode_StringMatchType,
} from '../Uds2/StringMatchType.ta';
export {
  StringMatchType,
  _enum_for_StringMatchType,
  StringMatchType_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  exact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  StringMatchType_deletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  deletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  StringMatchType_restrictedDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  restrictedDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  StringMatchType_permutation /* IMPORTED_LONG_ENUMERATION_ITEM */,
  permutation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  StringMatchType_permutationAndDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  permutationAndDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  StringMatchType_providerDefined /* IMPORTED_LONG_ENUMERATION_ITEM */,
  providerDefined /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_StringMatchType,
  _encode_StringMatchType,
} from '../Uds2/StringMatchType.ta';

/* START_OF_SYMBOL_DEFINITION StringMatchTypes */
/**
 * @summary StringMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StringMatchTypes  ::=  SEQUENCE OF StringMatchType
 * ```
 */
export type StringMatchTypes = StringMatchType[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION StringMatchTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StringMatchTypes */
let _cached_decoder_for_StringMatchTypes: $.ASN1Decoder<StringMatchTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StringMatchTypes */

/* START_OF_SYMBOL_DEFINITION _decode_StringMatchTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) StringMatchTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StringMatchTypes} The decoded data structure.
 */
export function _decode_StringMatchTypes(el: _Element) {
  if (!_cached_decoder_for_StringMatchTypes) {
    _cached_decoder_for_StringMatchTypes = $._decodeSequenceOf<StringMatchType>(
      () => _decode_StringMatchType
    );
  }
  return _cached_decoder_for_StringMatchTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StringMatchTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StringMatchTypes */
let _cached_encoder_for_StringMatchTypes: $.ASN1Encoder<StringMatchTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StringMatchTypes */

/* START_OF_SYMBOL_DEFINITION _encode_StringMatchTypes */
/**
 * @summary Encodes a(n) StringMatchTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StringMatchTypes, encoded as an ASN.1 Element.
 */
export function _encode_StringMatchTypes(
  value: StringMatchTypes,
  elGetter: $.ASN1Encoder<StringMatchTypes>
) {
  if (!_cached_encoder_for_StringMatchTypes) {
    _cached_encoder_for_StringMatchTypes = $._encodeSequenceOf<StringMatchType>(
      () => _encode_StringMatchType,
      $.BER
    );
  }
  return _cached_encoder_for_StringMatchTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StringMatchTypes */

/* eslint-enable */
