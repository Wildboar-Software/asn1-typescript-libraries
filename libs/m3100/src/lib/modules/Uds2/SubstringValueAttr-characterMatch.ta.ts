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

/* START_OF_SYMBOL_DEFINITION _enum_for_SubstringValueAttr_characterMatch */
/**
 * @summary SubstringValueAttr_characterMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringValueAttr-characterMatch ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_SubstringValueAttr_characterMatch {
  exact = 0,
  caseIgnore = 1,
  mapped = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SubstringValueAttr_characterMatch */

/* START_OF_SYMBOL_DEFINITION SubstringValueAttr_characterMatch */
/**
 * @summary SubstringValueAttr_characterMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringValueAttr-characterMatch ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SubstringValueAttr_characterMatch = _enum_for_SubstringValueAttr_characterMatch;
/* END_OF_SYMBOL_DEFINITION SubstringValueAttr_characterMatch */

/* START_OF_SYMBOL_DEFINITION SubstringValueAttr_characterMatch */
/**
 * @summary SubstringValueAttr_characterMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringValueAttr-characterMatch ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const SubstringValueAttr_characterMatch = _enum_for_SubstringValueAttr_characterMatch;
/* END_OF_SYMBOL_DEFINITION SubstringValueAttr_characterMatch */

/* START_OF_SYMBOL_DEFINITION SubstringValueAttr_characterMatch_exact */
/**
 * @summary SubstringValueAttr_characterMatch_exact
 * @constant
 * @type {number}
 */
export const SubstringValueAttr_characterMatch_exact: SubstringValueAttr_characterMatch =
  SubstringValueAttr_characterMatch.exact; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringValueAttr_characterMatch_exact */

/* START_OF_SYMBOL_DEFINITION exact */
/**
 * @summary exact
 * @constant
 * @type {number}
 */
export const exact: SubstringValueAttr_characterMatch =
  SubstringValueAttr_characterMatch.exact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION exact */

/* START_OF_SYMBOL_DEFINITION SubstringValueAttr_characterMatch_caseIgnore */
/**
 * @summary SubstringValueAttr_characterMatch_caseIgnore
 * @constant
 * @type {number}
 */
export const SubstringValueAttr_characterMatch_caseIgnore: SubstringValueAttr_characterMatch =
  SubstringValueAttr_characterMatch.caseIgnore; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringValueAttr_characterMatch_caseIgnore */

/* START_OF_SYMBOL_DEFINITION caseIgnore */
/**
 * @summary caseIgnore
 * @constant
 * @type {number}
 */
export const caseIgnore: SubstringValueAttr_characterMatch =
  SubstringValueAttr_characterMatch.caseIgnore; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION caseIgnore */

/* START_OF_SYMBOL_DEFINITION SubstringValueAttr_characterMatch_mapped */
/**
 * @summary SubstringValueAttr_characterMatch_mapped
 * @constant
 * @type {number}
 */
export const SubstringValueAttr_characterMatch_mapped: SubstringValueAttr_characterMatch =
  SubstringValueAttr_characterMatch.mapped; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SubstringValueAttr_characterMatch_mapped */

/* START_OF_SYMBOL_DEFINITION mapped */
/**
 * @summary mapped
 * @constant
 * @type {number}
 */
export const mapped: SubstringValueAttr_characterMatch =
  SubstringValueAttr_characterMatch.mapped; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mapped */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringValueAttr_characterMatch */
let _cached_decoder_for_SubstringValueAttr_characterMatch: $.ASN1Decoder<SubstringValueAttr_characterMatch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringValueAttr_characterMatch */

/* START_OF_SYMBOL_DEFINITION _decode_SubstringValueAttr_characterMatch */
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringValueAttr_characterMatch
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringValueAttr_characterMatch} The decoded data structure.
 */
export function _decode_SubstringValueAttr_characterMatch(el: _Element) {
  if (!_cached_decoder_for_SubstringValueAttr_characterMatch) {
    _cached_decoder_for_SubstringValueAttr_characterMatch = $._decodeEnumerated;
  }
  return _cached_decoder_for_SubstringValueAttr_characterMatch(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubstringValueAttr_characterMatch */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringValueAttr_characterMatch */
let _cached_encoder_for_SubstringValueAttr_characterMatch: $.ASN1Encoder<SubstringValueAttr_characterMatch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringValueAttr_characterMatch */

/* START_OF_SYMBOL_DEFINITION _encode_SubstringValueAttr_characterMatch */
/**
 * @summary Encodes a(n) SubstringValueAttr_characterMatch into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringValueAttr_characterMatch, encoded as an ASN.1 Element.
 */
export function _encode_SubstringValueAttr_characterMatch(
  value: SubstringValueAttr_characterMatch,
  elGetter: $.ASN1Encoder<SubstringValueAttr_characterMatch>
) {
  if (!_cached_encoder_for_SubstringValueAttr_characterMatch) {
    _cached_encoder_for_SubstringValueAttr_characterMatch = $._encodeEnumerated;
  }
  return _cached_encoder_for_SubstringValueAttr_characterMatch(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubstringValueAttr_characterMatch */

/* eslint-enable */
