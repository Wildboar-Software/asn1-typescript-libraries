/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_JoinArgument_joinSubset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}

/**
 * @summary JoinArgument_joinSubset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinArgument-joinSubset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type JoinArgument_joinSubset =
    | _enum_for_JoinArgument_joinSubset
    | ENUMERATED;

/**
 * @summary JoinArgument_joinSubset_baseObject
 * @constant
 * @type {number}
 */
export const JoinArgument_joinSubset_baseObject: JoinArgument_joinSubset = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export const baseObject: JoinArgument_joinSubset = JoinArgument_joinSubset_baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary JoinArgument_joinSubset_oneLevel
 * @constant
 * @type {number}
 */
export const JoinArgument_joinSubset_oneLevel: JoinArgument_joinSubset = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneLevel
 * @constant
 * @type {number}
 */
export const oneLevel: JoinArgument_joinSubset = JoinArgument_joinSubset_oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary JoinArgument_joinSubset_wholeSubtree
 * @constant
 * @type {number}
 */
export const JoinArgument_joinSubset_wholeSubtree: JoinArgument_joinSubset = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: JoinArgument_joinSubset = JoinArgument_joinSubset_wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_JoinArgument_joinSubset = $._decodeEnumerated;


export const _encode_JoinArgument_joinSubset = $._encodeEnumerated;


/* eslint-enable */
