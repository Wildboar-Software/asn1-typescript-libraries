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

/* START_OF_SYMBOL_DEFINITION _enum_for_SearchRequest_scope */
export enum _enum_for_SearchRequest_scope {
  baseObject = 0,
  singleLevel = 1,
  wholeSubtree = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SearchRequest_scope */

/* START_OF_SYMBOL_DEFINITION SearchRequest_scope */
/**
 * @summary SearchRequest_scope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-scope ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SearchRequest_scope = _enum_for_SearchRequest_scope | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION SearchRequest_scope */

/* START_OF_SYMBOL_DEFINITION SearchRequest_scope_baseObject */
/**
 * @summary SearchRequest_scope_baseObject
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_baseObject: SearchRequest_scope = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchRequest_scope_baseObject */

/* START_OF_SYMBOL_DEFINITION baseObject */
/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export const baseObject: SearchRequest_scope = SearchRequest_scope_baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION baseObject */

/* START_OF_SYMBOL_DEFINITION SearchRequest_scope_singleLevel */
/**
 * @summary SearchRequest_scope_singleLevel
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_singleLevel: SearchRequest_scope = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchRequest_scope_singleLevel */

/* START_OF_SYMBOL_DEFINITION singleLevel */
/**
 * @summary singleLevel
 * @constant
 * @type {number}
 */
export const singleLevel: SearchRequest_scope = SearchRequest_scope_singleLevel; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION singleLevel */

/* START_OF_SYMBOL_DEFINITION SearchRequest_scope_wholeSubtree */
/**
 * @summary SearchRequest_scope_wholeSubtree
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_wholeSubtree: SearchRequest_scope = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchRequest_scope_wholeSubtree */

/* START_OF_SYMBOL_DEFINITION wholeSubtree */
/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: SearchRequest_scope = SearchRequest_scope_wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wholeSubtree */

/* START_OF_SYMBOL_DEFINITION _decode_SearchRequest_scope */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest_scope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest_scope} The decoded data structure.
 */
export function _decode_SearchRequest_scope(el: _Element) {
  return $._decodeEnumerated(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchRequest_scope */

/* START_OF_SYMBOL_DEFINITION _encode_SearchRequest_scope */
/**
 * @summary Encodes a(n) SearchRequest_scope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest_scope, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest_scope(
  value: SearchRequest_scope,
  elGetter: $.ASN1Encoder<SearchRequest_scope>
) {
  return $._encodeEnumerated(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchRequest_scope */

/* eslint-enable */
