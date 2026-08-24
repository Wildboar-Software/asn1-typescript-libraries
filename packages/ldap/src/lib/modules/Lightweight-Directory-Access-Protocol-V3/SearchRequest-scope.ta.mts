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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

export enum _enum_for_SearchRequest_scope {
  baseObject = 0,
  singleLevel = 1,
  wholeSubtree = 2,
}

/**
 * @summary SearchRequest_scope
 * @description
 *
 * Extensible ENUMERATED. `baseObject`(0): named entry only.
 * `singleLevel`(1): immediate subordinates, *not* the base.
 * `wholeSubtree`(2): base and all subordinates.
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
 * @description
 *
 * Named entry only.
 *
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_baseObject: SearchRequest_scope = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baseObject
 * @description
 *
 * Named entry only.
 *
 * @constant
 * @type {number}
 */
export const baseObject: SearchRequest_scope = SearchRequest_scope_baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SearchRequest_scope_singleLevel
 * @description
 *
 * Immediate subordinates of the base -- not the base itself.
 *
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_singleLevel: SearchRequest_scope = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleLevel
 * @description
 *
 * Immediate subordinates of the base -- not the base itself.
 *
 * @constant
 * @type {number}
 */
export const singleLevel: SearchRequest_scope = SearchRequest_scope_singleLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SearchRequest_scope_wholeSubtree
 * @description
 *
 * Base entry plus all subordinates.
 *
 * @constant
 * @type {number}
 */
export const SearchRequest_scope_wholeSubtree: SearchRequest_scope = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wholeSubtree
 * @description
 *
 * Base entry plus all subordinates.
 *
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
export const _decode_SearchRequest_scope: $.ASN1Decoder<SearchRequest_scope> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SearchRequest_scope into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest_scope, encoded as an ASN.1 Element.
 */
export const _encode_SearchRequest_scope: $.ASN1Encoder<SearchRequest_scope> = $._encodeEnumerated;

/* eslint-enable */
