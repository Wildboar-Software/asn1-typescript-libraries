/* eslint-disable */
import {
  ENUMERATED,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


export enum _enum_for_SearchRequest_scope {
  baseObject = 0,
  singleLevel = 1,
  wholeSubtree = 2,
}


/**
 * @summary SearchRequest_scope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-scope ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type SearchRequest_scope = _enum_for_SearchRequest_scope | ENUMERATED;


/**
 * @summary SearchRequest_scope_baseObject
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_baseObject: SearchRequest_scope = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export const baseObject: SearchRequest_scope = SearchRequest_scope_baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SearchRequest_scope_singleLevel
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_singleLevel: SearchRequest_scope = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary singleLevel
 * @constant
 * @type {number}
 */
export const singleLevel: SearchRequest_scope = SearchRequest_scope_singleLevel; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SearchRequest_scope_wholeSubtree
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_wholeSubtree: SearchRequest_scope = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: SearchRequest_scope = SearchRequest_scope_wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest_scope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest_scope} The decoded data structure.
 */
export function _decode_SearchRequest_scope(el: _Element) {
  return $._decodeEnumerated(el);
}


/**
 * @summary Encodes a(n) SearchRequest_scope into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest_scope, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest_scope(
  value: SearchRequest_scope,
  elGetter: $.ASN1Encoder<SearchRequest_scope>
) {
  return $._encodeEnumerated(value, elGetter);
}


/* eslint-enable */
