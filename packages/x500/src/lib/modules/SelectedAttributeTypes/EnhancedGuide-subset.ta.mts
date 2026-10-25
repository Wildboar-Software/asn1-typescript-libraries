/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EnhancedGuide_subset
 * @description
 *
 * Recommended search depth. DEFAULT in EnhancedGuide is oneLevel(1).
 * 0 = baseObject, 1 = oneLevel, 2 = wholeSubtree.
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
export const EnhancedGuide_subset_baseObject: 0 = 0 satisfies EnhancedGuide_subset; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_baseObject
 * @constant
 * @type {number}
 */
export const baseObject: 0 = EnhancedGuide_subset_baseObject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_oneLevel
 * @description
 *
 * DEFAULT recommended depth in EnhancedGuide.
 *
 * @constant
 * @type {number}
 */
export const EnhancedGuide_subset_oneLevel: 1 = 1 satisfies EnhancedGuide_subset; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_oneLevel
 * @description
 *
 * DEFAULT recommended depth in EnhancedGuide.
 *
 * @constant
 * @type {number}
 */
export const oneLevel: 1 = EnhancedGuide_subset_oneLevel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const EnhancedGuide_subset_wholeSubtree: 2 = 2 satisfies EnhancedGuide_subset; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnhancedGuide_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: 2 = EnhancedGuide_subset_wholeSubtree; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_EnhancedGuide_subset: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_EnhancedGuide_subset: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
