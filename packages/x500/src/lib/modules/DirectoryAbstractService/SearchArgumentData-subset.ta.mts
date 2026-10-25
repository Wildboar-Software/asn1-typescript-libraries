/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SearchArgumentData_subset
 * @description
 *
 * DEFAULT `baseObject`. Compound entry counts as one versus `subset`
 * unless `searchFamily` (then members count separately). If base is a
 * child family member, members count as individual entries.
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
export const SearchArgumentData_subset_baseObject = 0 satisfies SearchArgumentData_subset; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_baseObject
 * @constant
 * @type {number}
 */
export const baseObject = SearchArgumentData_subset_baseObject satisfies SearchArgumentData_subset; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_oneLevel
 * @constant
 * @type {number}
 */
export const SearchArgumentData_subset_oneLevel = 1 satisfies SearchArgumentData_subset; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_oneLevel
 * @constant
 * @type {number}
 */
export const oneLevel = SearchArgumentData_subset_oneLevel satisfies SearchArgumentData_subset; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const SearchArgumentData_subset_wholeSubtree = 2 satisfies SearchArgumentData_subset; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchArgumentData_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree = SearchArgumentData_subset_wholeSubtree satisfies SearchArgumentData_subset; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SearchArgumentData_subset = $._decodeInteger;


export const _encode_SearchArgumentData_subset = $._encodeInteger;


/* eslint-enable */
