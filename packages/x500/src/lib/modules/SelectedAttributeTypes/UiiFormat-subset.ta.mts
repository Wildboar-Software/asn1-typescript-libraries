/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary UiiFormat_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_UiiFormat_subset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}

/**
 * @summary UiiFormat_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export type UiiFormat_subset = _enum_for_UiiFormat_subset;

/**
 * @summary UiiFormat_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export const UiiFormat_subset = _enum_for_UiiFormat_subset;

/**
 * @summary UiiFormat_subset_baseObject
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_baseObject: UiiFormat_subset =
    UiiFormat_subset.baseObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export const baseObject: UiiFormat_subset =
    UiiFormat_subset.baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UiiFormat_subset_oneLevel
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_oneLevel: UiiFormat_subset =
    UiiFormat_subset.oneLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneLevel
 * @constant
 * @type {number}
 */
export const oneLevel: UiiFormat_subset =
    UiiFormat_subset.oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UiiFormat_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_wholeSubtree: UiiFormat_subset =
    UiiFormat_subset.wholeSubtree; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: UiiFormat_subset =
    UiiFormat_subset.wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_UiiFormat_subset = $._decodeEnumerated;


export const _encode_UiiFormat_subset = $._encodeEnumerated;


/* eslint-enable */
