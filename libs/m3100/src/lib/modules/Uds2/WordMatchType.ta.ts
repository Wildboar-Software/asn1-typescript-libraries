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

/* START_OF_SYMBOL_DEFINITION _enum_for_WordMatchType */
/**
 * @summary WordMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WordMatchType  ::=  ENUMERATED {exact, truncated, phonetic}
 * ```@enum {number}
 */
export enum _enum_for_WordMatchType {
  exact = 0,
  truncated = 1,
  phonetic = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_WordMatchType */

/* START_OF_SYMBOL_DEFINITION WordMatchType */
/**
 * @summary WordMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WordMatchType  ::=  ENUMERATED {exact, truncated, phonetic}
 * ```@enum {number}
 */
export type WordMatchType = _enum_for_WordMatchType;
/* END_OF_SYMBOL_DEFINITION WordMatchType */

/* START_OF_SYMBOL_DEFINITION WordMatchType */
/**
 * @summary WordMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WordMatchType  ::=  ENUMERATED {exact, truncated, phonetic}
 * ```@enum {number}
 */
export const WordMatchType = _enum_for_WordMatchType;
/* END_OF_SYMBOL_DEFINITION WordMatchType */

/* START_OF_SYMBOL_DEFINITION WordMatchType_exact */
/**
 * @summary WordMatchType_exact
 * @constant
 * @type {number}
 */
export const WordMatchType_exact: WordMatchType =
  WordMatchType.exact; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WordMatchType_exact */

/* START_OF_SYMBOL_DEFINITION exact */
/**
 * @summary exact
 * @constant
 * @type {number}
 */
export const exact: WordMatchType =
  WordMatchType.exact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION exact */

/* START_OF_SYMBOL_DEFINITION WordMatchType_truncated */
/**
 * @summary WordMatchType_truncated
 * @constant
 * @type {number}
 */
export const WordMatchType_truncated: WordMatchType =
  WordMatchType.truncated; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WordMatchType_truncated */

/* START_OF_SYMBOL_DEFINITION truncated */
/**
 * @summary truncated
 * @constant
 * @type {number}
 */
export const truncated: WordMatchType =
  WordMatchType.truncated; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION truncated */

/* START_OF_SYMBOL_DEFINITION WordMatchType_phonetic */
/**
 * @summary WordMatchType_phonetic
 * @constant
 * @type {number}
 */
export const WordMatchType_phonetic: WordMatchType =
  WordMatchType.phonetic; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WordMatchType_phonetic */

/* START_OF_SYMBOL_DEFINITION phonetic */
/**
 * @summary phonetic
 * @constant
 * @type {number}
 */
export const phonetic: WordMatchType =
  WordMatchType.phonetic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION phonetic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WordMatchType */
let _cached_decoder_for_WordMatchType: $.ASN1Decoder<WordMatchType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WordMatchType */

/* START_OF_SYMBOL_DEFINITION _decode_WordMatchType */
/**
 * @summary Decodes an ASN.1 element into a(n) WordMatchType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WordMatchType} The decoded data structure.
 */
export function _decode_WordMatchType(el: _Element) {
  if (!_cached_decoder_for_WordMatchType) {
    _cached_decoder_for_WordMatchType = $._decodeEnumerated;
  }
  return _cached_decoder_for_WordMatchType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WordMatchType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WordMatchType */
let _cached_encoder_for_WordMatchType: $.ASN1Encoder<WordMatchType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WordMatchType */

/* START_OF_SYMBOL_DEFINITION _encode_WordMatchType */
/**
 * @summary Encodes a(n) WordMatchType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WordMatchType, encoded as an ASN.1 Element.
 */
export function _encode_WordMatchType(
  value: WordMatchType,
  elGetter: $.ASN1Encoder<WordMatchType>
) {
  if (!_cached_encoder_for_WordMatchType) {
    _cached_encoder_for_WordMatchType = $._encodeEnumerated;
  }
  return _cached_encoder_for_WordMatchType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WordMatchType */

/* eslint-enable */
