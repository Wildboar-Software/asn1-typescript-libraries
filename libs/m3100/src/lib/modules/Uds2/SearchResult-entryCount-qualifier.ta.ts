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

/* START_OF_SYMBOL_DEFINITION _enum_for_SearchResult_entryCount_qualifier */
/**
 * @summary SearchResult_entryCount_qualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResult-entryCount-qualifier ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_SearchResult_entryCount_qualifier {
  exact = 0,
  bestEstimate = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SearchResult_entryCount_qualifier */

/* START_OF_SYMBOL_DEFINITION SearchResult_entryCount_qualifier */
/**
 * @summary SearchResult_entryCount_qualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResult-entryCount-qualifier ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SearchResult_entryCount_qualifier = _enum_for_SearchResult_entryCount_qualifier;
/* END_OF_SYMBOL_DEFINITION SearchResult_entryCount_qualifier */

/* START_OF_SYMBOL_DEFINITION SearchResult_entryCount_qualifier */
/**
 * @summary SearchResult_entryCount_qualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResult-entryCount-qualifier ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const SearchResult_entryCount_qualifier = _enum_for_SearchResult_entryCount_qualifier;
/* END_OF_SYMBOL_DEFINITION SearchResult_entryCount_qualifier */

/* START_OF_SYMBOL_DEFINITION SearchResult_entryCount_qualifier_exact */
/**
 * @summary SearchResult_entryCount_qualifier_exact
 * @constant
 * @type {number}
 */
export const SearchResult_entryCount_qualifier_exact: SearchResult_entryCount_qualifier =
  SearchResult_entryCount_qualifier.exact; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchResult_entryCount_qualifier_exact */

/* START_OF_SYMBOL_DEFINITION exact */
/**
 * @summary exact
 * @constant
 * @type {number}
 */
export const exact: SearchResult_entryCount_qualifier =
  SearchResult_entryCount_qualifier.exact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION exact */

/* START_OF_SYMBOL_DEFINITION SearchResult_entryCount_qualifier_bestEstimate */
/**
 * @summary SearchResult_entryCount_qualifier_bestEstimate
 * @constant
 * @type {number}
 */
export const SearchResult_entryCount_qualifier_bestEstimate: SearchResult_entryCount_qualifier =
  SearchResult_entryCount_qualifier.bestEstimate; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchResult_entryCount_qualifier_bestEstimate */

/* START_OF_SYMBOL_DEFINITION bestEstimate */
/**
 * @summary bestEstimate
 * @constant
 * @type {number}
 */
export const bestEstimate: SearchResult_entryCount_qualifier =
  SearchResult_entryCount_qualifier.bestEstimate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bestEstimate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_entryCount_qualifier */
let _cached_decoder_for_SearchResult_entryCount_qualifier: $.ASN1Decoder<SearchResult_entryCount_qualifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_entryCount_qualifier */

/* START_OF_SYMBOL_DEFINITION _decode_SearchResult_entryCount_qualifier */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult_entryCount_qualifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResult_entryCount_qualifier} The decoded data structure.
 */
export function _decode_SearchResult_entryCount_qualifier(el: _Element) {
  if (!_cached_decoder_for_SearchResult_entryCount_qualifier) {
    _cached_decoder_for_SearchResult_entryCount_qualifier = $._decodeEnumerated;
  }
  return _cached_decoder_for_SearchResult_entryCount_qualifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchResult_entryCount_qualifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_entryCount_qualifier */
let _cached_encoder_for_SearchResult_entryCount_qualifier: $.ASN1Encoder<SearchResult_entryCount_qualifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_entryCount_qualifier */

/* START_OF_SYMBOL_DEFINITION _encode_SearchResult_entryCount_qualifier */
/**
 * @summary Encodes a(n) SearchResult_entryCount_qualifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult_entryCount_qualifier, encoded as an ASN.1 Element.
 */
export function _encode_SearchResult_entryCount_qualifier(
  value: SearchResult_entryCount_qualifier,
  elGetter: $.ASN1Encoder<SearchResult_entryCount_qualifier>
) {
  if (!_cached_encoder_for_SearchResult_entryCount_qualifier) {
    _cached_encoder_for_SearchResult_entryCount_qualifier = $._encodeEnumerated;
  }
  return _cached_encoder_for_SearchResult_entryCount_qualifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchResult_entryCount_qualifier */

/* eslint-enable */
