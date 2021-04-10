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

/* START_OF_SYMBOL_DEFINITION _enum_for_CharacterMatchType */
/**
 * @summary CharacterMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterMatchType  ::=  ENUMERATED {exact, caseIgnore, mapped}
 * ```@enum {number}
 */
export enum _enum_for_CharacterMatchType {
  exact = 0,
  caseIgnore = 1,
  mapped = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CharacterMatchType */

/* START_OF_SYMBOL_DEFINITION CharacterMatchType */
/**
 * @summary CharacterMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterMatchType  ::=  ENUMERATED {exact, caseIgnore, mapped}
 * ```@enum {number}
 */
export type CharacterMatchType = _enum_for_CharacterMatchType;
/* END_OF_SYMBOL_DEFINITION CharacterMatchType */

/* START_OF_SYMBOL_DEFINITION CharacterMatchType */
/**
 * @summary CharacterMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterMatchType  ::=  ENUMERATED {exact, caseIgnore, mapped}
 * ```@enum {number}
 */
export const CharacterMatchType = _enum_for_CharacterMatchType;
/* END_OF_SYMBOL_DEFINITION CharacterMatchType */

/* START_OF_SYMBOL_DEFINITION CharacterMatchType_exact */
/**
 * @summary CharacterMatchType_exact
 * @constant
 * @type {number}
 */
export const CharacterMatchType_exact: CharacterMatchType =
  CharacterMatchType.exact; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CharacterMatchType_exact */

/* START_OF_SYMBOL_DEFINITION exact */
/**
 * @summary exact
 * @constant
 * @type {number}
 */
export const exact: CharacterMatchType =
  CharacterMatchType.exact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION exact */

/* START_OF_SYMBOL_DEFINITION CharacterMatchType_caseIgnore */
/**
 * @summary CharacterMatchType_caseIgnore
 * @constant
 * @type {number}
 */
export const CharacterMatchType_caseIgnore: CharacterMatchType =
  CharacterMatchType.caseIgnore; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CharacterMatchType_caseIgnore */

/* START_OF_SYMBOL_DEFINITION caseIgnore */
/**
 * @summary caseIgnore
 * @constant
 * @type {number}
 */
export const caseIgnore: CharacterMatchType =
  CharacterMatchType.caseIgnore; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION caseIgnore */

/* START_OF_SYMBOL_DEFINITION CharacterMatchType_mapped */
/**
 * @summary CharacterMatchType_mapped
 * @constant
 * @type {number}
 */
export const CharacterMatchType_mapped: CharacterMatchType =
  CharacterMatchType.mapped; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CharacterMatchType_mapped */

/* START_OF_SYMBOL_DEFINITION mapped */
/**
 * @summary mapped
 * @constant
 * @type {number}
 */
export const mapped: CharacterMatchType =
  CharacterMatchType.mapped; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mapped */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterMatchType */
let _cached_decoder_for_CharacterMatchType: $.ASN1Decoder<CharacterMatchType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterMatchType */

/* START_OF_SYMBOL_DEFINITION _decode_CharacterMatchType */
/**
 * @summary Decodes an ASN.1 element into a(n) CharacterMatchType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CharacterMatchType} The decoded data structure.
 */
export function _decode_CharacterMatchType(el: _Element) {
  if (!_cached_decoder_for_CharacterMatchType) {
    _cached_decoder_for_CharacterMatchType = $._decodeEnumerated;
  }
  return _cached_decoder_for_CharacterMatchType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CharacterMatchType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterMatchType */
let _cached_encoder_for_CharacterMatchType: $.ASN1Encoder<CharacterMatchType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterMatchType */

/* START_OF_SYMBOL_DEFINITION _encode_CharacterMatchType */
/**
 * @summary Encodes a(n) CharacterMatchType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacterMatchType, encoded as an ASN.1 Element.
 */
export function _encode_CharacterMatchType(
  value: CharacterMatchType,
  elGetter: $.ASN1Encoder<CharacterMatchType>
) {
  if (!_cached_encoder_for_CharacterMatchType) {
    _cached_encoder_for_CharacterMatchType = $._encodeEnumerated;
  }
  return _cached_encoder_for_CharacterMatchType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CharacterMatchType */

/* eslint-enable */
