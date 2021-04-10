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

/* START_OF_SYMBOL_DEFINITION _enum_for_SearchOption */
/**
 * @summary SearchOption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchOption  ::=  ENUMERATED {performExactly, includeAllAreas}
 * ```@enum {number}
 */
export enum _enum_for_SearchOption {
  performExactly = 0,
  includeAllAreas = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SearchOption */

/* START_OF_SYMBOL_DEFINITION SearchOption */
/**
 * @summary SearchOption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchOption  ::=  ENUMERATED {performExactly, includeAllAreas}
 * ```@enum {number}
 */
export type SearchOption = _enum_for_SearchOption;
/* END_OF_SYMBOL_DEFINITION SearchOption */

/* START_OF_SYMBOL_DEFINITION SearchOption */
/**
 * @summary SearchOption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchOption  ::=  ENUMERATED {performExactly, includeAllAreas}
 * ```@enum {number}
 */
export const SearchOption = _enum_for_SearchOption;
/* END_OF_SYMBOL_DEFINITION SearchOption */

/* START_OF_SYMBOL_DEFINITION SearchOption_performExactly */
/**
 * @summary SearchOption_performExactly
 * @constant
 * @type {number}
 */
export const SearchOption_performExactly: SearchOption =
  SearchOption.performExactly; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchOption_performExactly */

/* START_OF_SYMBOL_DEFINITION performExactly */
/**
 * @summary performExactly
 * @constant
 * @type {number}
 */
export const performExactly: SearchOption =
  SearchOption.performExactly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION performExactly */

/* START_OF_SYMBOL_DEFINITION SearchOption_includeAllAreas */
/**
 * @summary SearchOption_includeAllAreas
 * @constant
 * @type {number}
 */
export const SearchOption_includeAllAreas: SearchOption =
  SearchOption.includeAllAreas; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchOption_includeAllAreas */

/* START_OF_SYMBOL_DEFINITION includeAllAreas */
/**
 * @summary includeAllAreas
 * @constant
 * @type {number}
 */
export const includeAllAreas: SearchOption =
  SearchOption.includeAllAreas; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION includeAllAreas */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchOption */
let _cached_decoder_for_SearchOption: $.ASN1Decoder<SearchOption> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchOption */

/* START_OF_SYMBOL_DEFINITION _decode_SearchOption */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchOption
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchOption} The decoded data structure.
 */
export function _decode_SearchOption(el: _Element) {
  if (!_cached_decoder_for_SearchOption) {
    _cached_decoder_for_SearchOption = $._decodeEnumerated;
  }
  return _cached_decoder_for_SearchOption(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchOption */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchOption */
let _cached_encoder_for_SearchOption: $.ASN1Encoder<SearchOption> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchOption */

/* START_OF_SYMBOL_DEFINITION _encode_SearchOption */
/**
 * @summary Encodes a(n) SearchOption into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchOption, encoded as an ASN.1 Element.
 */
export function _encode_SearchOption(
  value: SearchOption,
  elGetter: $.ASN1Encoder<SearchOption>
) {
  if (!_cached_encoder_for_SearchOption) {
    _cached_encoder_for_SearchOption = $._encodeEnumerated;
  }
  return _cached_encoder_for_SearchOption(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchOption */

/* eslint-enable */
