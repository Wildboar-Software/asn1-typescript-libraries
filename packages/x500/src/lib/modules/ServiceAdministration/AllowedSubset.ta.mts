/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary AllowedSubset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllowedSubset  ::=  BIT STRING {baseObject(0), oneLevel(1), wholeSubtree(2)}
 * ```
 */
export type AllowedSubset = BIT_STRING;

/**
 * @summary AllowedSubset_baseObject
 * @constant
 */
export const AllowedSubset_baseObject: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary baseObject
 * @constant
 */
export const baseObject: number = AllowedSubset_baseObject; /* SHORT_NAMED_BIT */

/**
 * @summary AllowedSubset_oneLevel
 * @constant
 */
export const AllowedSubset_oneLevel: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary oneLevel
 * @constant
 */
export const oneLevel: number = AllowedSubset_oneLevel; /* SHORT_NAMED_BIT */

/**
 * @summary AllowedSubset_wholeSubtree
 * @constant
 */
export const AllowedSubset_wholeSubtree: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary wholeSubtree
 * @constant
 */
export const wholeSubtree: number = AllowedSubset_wholeSubtree; /* SHORT_NAMED_BIT */


export const _decode_AllowedSubset = $._decodeBitString;


export const _encode_AllowedSubset = $._encodeBitString;


/* eslint-enable */
