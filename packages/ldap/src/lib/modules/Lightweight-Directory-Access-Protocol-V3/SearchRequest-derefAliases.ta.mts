/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary SearchRequest_derefAliases
 * @description
 *
 * Whether aliases are dereferenced while locating the base and/or
 * searching subordinates. Deref is recursive; servers MUST detect
 * loops. Not extensible (no `...` in RFC 4511).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-derefAliases ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_SearchRequest_derefAliases {
  neverDerefAliases = 0,
  derefInSearching = 1,
  derefFindingBaseObj = 2,
  derefAlways = 3,
}


/**
 * @summary SearchRequest_derefAliases
 * @description
 *
 * Whether aliases are dereferenced while locating the base and/or
 * searching subordinates. Deref is recursive; servers MUST detect
 * loops. Not extensible (no `...` in RFC 4511).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-derefAliases ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type SearchRequest_derefAliases = _enum_for_SearchRequest_derefAliases;


/**
 * @summary SearchRequest_derefAliases
 * @description
 *
 * Whether aliases are dereferenced while locating the base and/or
 * searching subordinates. Deref is recursive; servers MUST detect
 * loops. Not extensible (no `...` in RFC 4511).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-derefAliases ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const SearchRequest_derefAliases = _enum_for_SearchRequest_derefAliases;


/**
 * @summary SearchRequest_derefAliases_neverDerefAliases
 * @description
 *
 * Dereference neither when locating the base nor when searching.
 *
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_neverDerefAliases: SearchRequest_derefAliases =
  SearchRequest_derefAliases.neverDerefAliases; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary neverDerefAliases
 * @description
 *
 * Dereference neither when locating the base nor when searching.
 *
 * @constant
 * @type {number}
 */
export const neverDerefAliases: SearchRequest_derefAliases =
  SearchRequest_derefAliases.neverDerefAliases; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SearchRequest_derefAliases_derefInSearching
 * @description
 *
 * Deref aliases in scope while searching subordinates, not when
 * finding the base. Dereferenced objects become new search vertices
 * (wholeSubtree continues into their subtrees; singleLevel does not).
 * Servers SHOULD drop duplicates from deref.
 *
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefInSearching: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefInSearching; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary derefInSearching
 * @description
 *
 * Deref aliases in scope while searching subordinates, not when
 * finding the base. Dereferenced objects become new search vertices
 * (wholeSubtree continues into their subtrees; singleLevel does not).
 * Servers SHOULD drop duplicates from deref.
 *
 * @constant
 * @type {number}
 */
export const derefInSearching: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefInSearching; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SearchRequest_derefAliases_derefFindingBaseObj
 * @description
 *
 * Deref aliases when locating the base only, not when searching
 * subordinates.
 *
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefFindingBaseObj: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefFindingBaseObj; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary derefFindingBaseObj
 * @description
 *
 * Deref aliases when locating the base only, not when searching
 * subordinates.
 *
 * @constant
 * @type {number}
 */
export const derefFindingBaseObj: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefFindingBaseObj; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SearchRequest_derefAliases_derefAlways
 * @description
 *
 * Deref both when locating the base and when searching subordinates.
 *
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefAlways: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefAlways; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary derefAlways
 * @description
 *
 * Deref both when locating the base and when searching subordinates.
 *
 * @constant
 * @type {number}
 */
export const derefAlways: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefAlways; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest_derefAliases
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest_derefAliases} The decoded data structure.
 */
export function _decode_SearchRequest_derefAliases(el: _Element): SearchRequest_derefAliases {
  return $._decodeEnumerated(el);
}


/**
 * @summary Encodes a(n) SearchRequest_derefAliases into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest_derefAliases, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest_derefAliases(
  value: SearchRequest_derefAliases,
  elGetter: $.ASN1Encoder<SearchRequest_derefAliases>
): _Element {
  return $._encodeEnumerated(value, elGetter);
}


/* eslint-enable */
