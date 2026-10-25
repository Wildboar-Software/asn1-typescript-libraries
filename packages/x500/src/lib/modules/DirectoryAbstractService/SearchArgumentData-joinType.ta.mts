/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SearchArgumentData_joinType
 * @description
 *
 * `innerJoin`(0) only joined entries; `leftOuterJoin`(1) all primary;
 * `fullOuterJoin`(2) all from both, joined as `relatedEntry` not explicit
 * extras. DEFAULT `leftOuterJoin`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
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
 * `innerJoin`(0) only joined entries; `leftOuterJoin`(1) all primary;
 * `fullOuterJoin`(2) all from both, joined as `relatedEntry` not explicit
 * extras. DEFAULT `leftOuterJoin`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type SearchArgumentData_joinType = _enum_for_SearchArgumentData_joinType;

/**
 * @summary SearchArgumentData_joinType
 * @description
 *
 * `innerJoin`(0) only joined entries; `leftOuterJoin`(1) all primary;
 * `fullOuterJoin`(2) all from both, joined as `relatedEntry` not explicit
 * extras. DEFAULT `leftOuterJoin`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const SearchArgumentData_joinType = _enum_for_SearchArgumentData_joinType;

/**
 * @summary SearchArgumentData_joinType_innerJoin
 * @description
 *
 * Only joined entries with `relatedEntry` values.
 *
 * @constant
 * @type {number}
 */
export const SearchArgumentData_joinType_innerJoin =
    SearchArgumentData_joinType.innerJoin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary innerJoin
 * @description
 *
 * Only joined entries with `relatedEntry` values.
 *
 * @constant
 * @type {number}
 */
export const innerJoin =
    SearchArgumentData_joinType.innerJoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SearchArgumentData_joinType_leftOuterJoin
 * @description
 *
 * All primary entries; joined ones carry `relatedEntry`. DEFAULT.
 *
 * @constant
 * @type {number}
 */
export const SearchArgumentData_joinType_leftOuterJoin =
    SearchArgumentData_joinType.leftOuterJoin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary leftOuterJoin
 * @description
 *
 * All primary entries; joined ones carry `relatedEntry`. DEFAULT.
 *
 * @constant
 * @type {number}
 */
export const leftOuterJoin =
    SearchArgumentData_joinType.leftOuterJoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SearchArgumentData_joinType_fullOuterJoin
 * @description
 *
 * All from both; joined represented as `relatedEntry`, not explicit extra
 * entries.
 *
 * @constant
 * @type {number}
 */
export const SearchArgumentData_joinType_fullOuterJoin =
    SearchArgumentData_joinType.fullOuterJoin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fullOuterJoin
 * @description
 *
 * All from both; joined represented as `relatedEntry`, not explicit extra
 * entries.
 *
 * @constant
 * @type {number}
 */
export const fullOuterJoin =
    SearchArgumentData_joinType.fullOuterJoin; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_SearchArgumentData_joinType(el: _Element): SearchArgumentData_joinType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case SearchArgumentData_joinType.innerJoin: return SearchArgumentData_joinType.innerJoin;
        case SearchArgumentData_joinType.leftOuterJoin: return SearchArgumentData_joinType.leftOuterJoin;
        case SearchArgumentData_joinType.fullOuterJoin: return SearchArgumentData_joinType.fullOuterJoin;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for SearchArgumentData_joinType.",
                el,
            );
    }
}


export const _encode_SearchArgumentData_joinType: $.ASN1Encoder<SearchArgumentData_joinType> = $._encodeEnumerated as $.ASN1Encoder<SearchArgumentData_joinType>;


/* eslint-enable */
