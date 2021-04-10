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

/* START_OF_SYMBOL_DEFINITION _enum_for_SubstringValueAttr_wordMatch */
/**
 * @summary SubstringValueAttr_wordMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringValueAttr-wordMatch ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_SubstringValueAttr_wordMatch {
  exact = 0,
  truncated = 1,
  phonetic = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SubstringValueAttr_wordMatch */

/* START_OF_SYMBOL_DEFINITION SubstringValueAttr_wordMatch */
/**
 * @summary SubstringValueAttr_wordMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringValueAttr-wordMatch ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SubstringValueAttr_wordMatch = _enum_for_SubstringValueAttr_wordMatch;
/* END_OF_SYMBOL_DEFINITION SubstringValueAttr_wordMatch */

/* START_OF_SYMBOL_DEFINITION SubstringValueAttr_wordMatch */
/**
 * @summary SubstringValueAttr_wordMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringValueAttr-wordMatch ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const SubstringValueAttr_wordMatch = _enum_for_SubstringValueAttr_wordMatch;
/* END_OF_SYMBOL_DEFINITION SubstringValueAttr_wordMatch */

/* START_OF_SYMBOL_DEFINITION SubstringValueAttr_wordMatch_exact */
/**
 * @summary SubstringValueAttr_wordMatch_exact
 * @constant
 * @type {number}
 */
export const SubstringValueAttr_wordMatch_exact: SubstringValueAttr_wordMatch =
  SubstringValueAttr_wordMatch.exact; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringValueAttr_wordMatch_exact */

/* START_OF_SYMBOL_DEFINITION exact */
/**
 * @summary exact
 * @constant
 * @type {number}
 */
export const exact: SubstringValueAttr_wordMatch =
  SubstringValueAttr_wordMatch.exact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION exact */

/* START_OF_SYMBOL_DEFINITION SubstringValueAttr_wordMatch_truncated */
/**
 * @summary SubstringValueAttr_wordMatch_truncated
 * @constant
 * @type {number}
 */
export const SubstringValueAttr_wordMatch_truncated: SubstringValueAttr_wordMatch =
  SubstringValueAttr_wordMatch.truncated; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringValueAttr_wordMatch_truncated */

/* START_OF_SYMBOL_DEFINITION truncated */
/**
 * @summary truncated
 * @constant
 * @type {number}
 */
export const truncated: SubstringValueAttr_wordMatch =
  SubstringValueAttr_wordMatch.truncated; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION truncated */

/* START_OF_SYMBOL_DEFINITION SubstringValueAttr_wordMatch_phonetic */
/**
 * @summary SubstringValueAttr_wordMatch_phonetic
 * @constant
 * @type {number}
 */
export const SubstringValueAttr_wordMatch_phonetic: SubstringValueAttr_wordMatch =
  SubstringValueAttr_wordMatch.phonetic; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringValueAttr_wordMatch_phonetic */

/* START_OF_SYMBOL_DEFINITION phonetic */
/**
 * @summary phonetic
 * @constant
 * @type {number}
 */
export const phonetic: SubstringValueAttr_wordMatch =
  SubstringValueAttr_wordMatch.phonetic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION phonetic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringValueAttr_wordMatch */
let _cached_decoder_for_SubstringValueAttr_wordMatch: $.ASN1Decoder<SubstringValueAttr_wordMatch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringValueAttr_wordMatch */

/* START_OF_SYMBOL_DEFINITION _decode_SubstringValueAttr_wordMatch */
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringValueAttr_wordMatch
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringValueAttr_wordMatch} The decoded data structure.
 */
export function _decode_SubstringValueAttr_wordMatch(el: _Element) {
  if (!_cached_decoder_for_SubstringValueAttr_wordMatch) {
    _cached_decoder_for_SubstringValueAttr_wordMatch = $._decodeEnumerated;
  }
  return _cached_decoder_for_SubstringValueAttr_wordMatch(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubstringValueAttr_wordMatch */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringValueAttr_wordMatch */
let _cached_encoder_for_SubstringValueAttr_wordMatch: $.ASN1Encoder<SubstringValueAttr_wordMatch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringValueAttr_wordMatch */

/* START_OF_SYMBOL_DEFINITION _encode_SubstringValueAttr_wordMatch */
/**
 * @summary Encodes a(n) SubstringValueAttr_wordMatch into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringValueAttr_wordMatch, encoded as an ASN.1 Element.
 */
export function _encode_SubstringValueAttr_wordMatch(
  value: SubstringValueAttr_wordMatch,
  elGetter: $.ASN1Encoder<SubstringValueAttr_wordMatch>
) {
  if (!_cached_encoder_for_SubstringValueAttr_wordMatch) {
    _cached_encoder_for_SubstringValueAttr_wordMatch = $._encodeEnumerated;
  }
  return _cached_encoder_for_SubstringValueAttr_wordMatch(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubstringValueAttr_wordMatch */

/* eslint-enable */
