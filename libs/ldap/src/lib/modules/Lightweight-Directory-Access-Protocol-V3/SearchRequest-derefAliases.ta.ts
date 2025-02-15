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

/* START_OF_SYMBOL_DEFINITION _enum_for_SearchRequest_derefAliases */
/**
 * @summary SearchRequest_derefAliases
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-derefAliases ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_SearchRequest_derefAliases {
  neverDerefAliases = 0,
  derefInSearching = 1,
  derefFindingBaseObj = 2,
  derefAlways = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SearchRequest_derefAliases */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases */
/**
 * @summary SearchRequest_derefAliases
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-derefAliases ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SearchRequest_derefAliases = _enum_for_SearchRequest_derefAliases;
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases */
/**
 * @summary SearchRequest_derefAliases
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-derefAliases ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const SearchRequest_derefAliases = _enum_for_SearchRequest_derefAliases;
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_neverDerefAliases */
/**
 * @summary SearchRequest_derefAliases_neverDerefAliases
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_neverDerefAliases: SearchRequest_derefAliases =
  SearchRequest_derefAliases.neverDerefAliases; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_neverDerefAliases */

/* START_OF_SYMBOL_DEFINITION neverDerefAliases */
/**
 * @summary neverDerefAliases
 * @constant
 * @type {number}
 */
export const neverDerefAliases: SearchRequest_derefAliases =
  SearchRequest_derefAliases.neverDerefAliases; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION neverDerefAliases */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefInSearching */
/**
 * @summary SearchRequest_derefAliases_derefInSearching
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefInSearching: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefInSearching; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefInSearching */

/* START_OF_SYMBOL_DEFINITION derefInSearching */
/**
 * @summary derefInSearching
 * @constant
 * @type {number}
 */
export const derefInSearching: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefInSearching; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION derefInSearching */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefFindingBaseObj */
/**
 * @summary SearchRequest_derefAliases_derefFindingBaseObj
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefFindingBaseObj: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefFindingBaseObj; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefFindingBaseObj */

/* START_OF_SYMBOL_DEFINITION derefFindingBaseObj */
/**
 * @summary derefFindingBaseObj
 * @constant
 * @type {number}
 */
export const derefFindingBaseObj: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefFindingBaseObj; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION derefFindingBaseObj */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefAlways */
/**
 * @summary SearchRequest_derefAliases_derefAlways
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefAlways: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefAlways; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefAlways */

/* START_OF_SYMBOL_DEFINITION derefAlways */
/**
 * @summary derefAlways
 * @constant
 * @type {number}
 */
export const derefAlways: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefAlways; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION derefAlways */

/* START_OF_SYMBOL_DEFINITION _decode_SearchRequest_derefAliases */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest_derefAliases
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest_derefAliases} The decoded data structure.
 */
export function _decode_SearchRequest_derefAliases(el: _Element) {
  return $._decodeEnumerated(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchRequest_derefAliases */

/* START_OF_SYMBOL_DEFINITION _encode_SearchRequest_derefAliases */
/**
 * @summary Encodes a(n) SearchRequest_derefAliases into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest_derefAliases, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest_derefAliases(
  value: SearchRequest_derefAliases,
  elGetter: $.ASN1Encoder<SearchRequest_derefAliases>
) {
  return $._encodeEnumerated(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchRequest_derefAliases */

/* eslint-enable */
