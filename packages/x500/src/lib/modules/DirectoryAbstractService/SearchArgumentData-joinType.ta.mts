/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary SearchArgumentData_joinType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_SearchArgumentData_joinType {
    innerJoin = 0,
    leftOuterJoin = 1,
    fullOuterJoin = 2,
}

/**
 * @summary SearchArgumentData_joinType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SearchArgumentData_joinType = _enum_for_SearchArgumentData_joinType;

/**
 * @summary SearchArgumentData_joinType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const SearchArgumentData_joinType = _enum_for_SearchArgumentData_joinType;

/**
 * @summary SearchArgumentData_joinType_innerJoin
 * @constant
 * @type {number}
 */
export const SearchArgumentData_joinType_innerJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.innerJoin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary innerJoin
 * @constant
 * @type {number}
 */
export const innerJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.innerJoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SearchArgumentData_joinType_leftOuterJoin
 * @constant
 * @type {number}
 */
export const SearchArgumentData_joinType_leftOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.leftOuterJoin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary leftOuterJoin
 * @constant
 * @type {number}
 */
export const leftOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.leftOuterJoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SearchArgumentData_joinType_fullOuterJoin
 * @constant
 * @type {number}
 */
export const SearchArgumentData_joinType_fullOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.fullOuterJoin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullOuterJoin
 * @constant
 * @type {number}
 */
export const fullOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.fullOuterJoin; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SearchArgumentData_joinType = $._decodeEnumerated;


export const _encode_SearchArgumentData_joinType = $._encodeEnumerated;


/* eslint-enable */
