/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EnhancedGuide_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnhancedGuide-subset ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EnhancedGuide_subset = INTEGER;

/**
 * @summary EnhancedGuide_subset_baseObject
 * @constant
 * @type {number}
 */
export const EnhancedGuide_subset_baseObject: EnhancedGuide_subset = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_baseObject
 * @constant
 * @type {number}
 */
export const baseObject: EnhancedGuide_subset = EnhancedGuide_subset_baseObject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_oneLevel
 * @constant
 * @type {number}
 */
export const EnhancedGuide_subset_oneLevel: EnhancedGuide_subset = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_oneLevel
 * @constant
 * @type {number}
 */
export const oneLevel: EnhancedGuide_subset = EnhancedGuide_subset_oneLevel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const EnhancedGuide_subset_wholeSubtree: EnhancedGuide_subset = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: EnhancedGuide_subset = EnhancedGuide_subset_wholeSubtree; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_EnhancedGuide_subset = $._decodeInteger;


export const _encode_EnhancedGuide_subset = $._encodeInteger;


/* eslint-enable */
