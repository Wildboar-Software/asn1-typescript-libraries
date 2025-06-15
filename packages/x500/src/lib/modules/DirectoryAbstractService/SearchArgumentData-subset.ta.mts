/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary SearchArgumentData_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData-subset ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SearchArgumentData_subset = INTEGER;

/**
 * @summary SearchArgumentData_subset_baseObject
 * @constant
 * @type {number}
 */
export const SearchArgumentData_subset_baseObject: SearchArgumentData_subset = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_baseObject
 * @constant
 * @type {number}
 */
export const baseObject: SearchArgumentData_subset = SearchArgumentData_subset_baseObject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_oneLevel
 * @constant
 * @type {number}
 */
export const SearchArgumentData_subset_oneLevel: SearchArgumentData_subset = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_oneLevel
 * @constant
 * @type {number}
 */
export const oneLevel: SearchArgumentData_subset = SearchArgumentData_subset_oneLevel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const SearchArgumentData_subset_wholeSubtree: SearchArgumentData_subset = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: SearchArgumentData_subset = SearchArgumentData_subset_wholeSubtree; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SearchArgumentData_subset = $._decodeInteger;


export const _encode_SearchArgumentData_subset = $._encodeInteger;


/* eslint-enable */
