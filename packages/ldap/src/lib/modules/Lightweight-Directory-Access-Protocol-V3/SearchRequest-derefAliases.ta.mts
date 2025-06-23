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
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_neverDerefAliases: SearchRequest_derefAliases =
  SearchRequest_derefAliases.neverDerefAliases; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary neverDerefAliases
 * @constant
 * @type {number}
 */
export const neverDerefAliases: SearchRequest_derefAliases =
  SearchRequest_derefAliases.neverDerefAliases; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SearchRequest_derefAliases_derefInSearching
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefInSearching: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefInSearching; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary derefInSearching
 * @constant
 * @type {number}
 */
export const derefInSearching: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefInSearching; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SearchRequest_derefAliases_derefFindingBaseObj
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefFindingBaseObj: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefFindingBaseObj; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary derefFindingBaseObj
 * @constant
 * @type {number}
 */
export const derefFindingBaseObj: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefFindingBaseObj; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary SearchRequest_derefAliases_derefAlways
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefAlways: SearchRequest_derefAliases =
  SearchRequest_derefAliases.derefAlways; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary derefAlways
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
