/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_ImposedSubset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}

/**
 * @summary ImposedSubset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImposedSubset  ::=  ENUMERATED {baseObject(0), oneLevel(1), wholeSubtree(2),...}
 * ```
 *
 * @enum {number}
 */
export type ImposedSubset = _enum_for_ImposedSubset | ENUMERATED;

/**
 * @summary ImposedSubset_baseObject
 * @constant
 * @type {number}
 */
export const ImposedSubset_baseObject: ImposedSubset = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export const baseObject: ImposedSubset = ImposedSubset_baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImposedSubset_oneLevel
 * @constant
 * @type {number}
 */
export const ImposedSubset_oneLevel: ImposedSubset = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneLevel
 * @constant
 * @type {number}
 */
export const oneLevel: ImposedSubset = ImposedSubset_oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImposedSubset_wholeSubtree
 * @constant
 * @type {number}
 */
export const ImposedSubset_wholeSubtree: ImposedSubset = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: ImposedSubset = ImposedSubset_wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ImposedSubset = $._decodeEnumerated;


export const _encode_ImposedSubset = $._encodeEnumerated;


/* eslint-enable */
