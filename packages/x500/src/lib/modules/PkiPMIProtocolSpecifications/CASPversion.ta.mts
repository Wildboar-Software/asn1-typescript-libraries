/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_CASPversion {
    v1 = 1,
    v2 = 2,
    v3 = 3,
}

/**
 * @summary CASPversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASPversion  ::=  ENUMERATED { v1(1), v2(2), v3(3), ... }
 * ```@enum {number}
 */
export type CASPversion = _enum_for_CASPversion | ENUMERATED;

/**
 * @summary CASPversion_v1
 * @constant
 * @type {number}
 */
export const CASPversion_v1: CASPversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v1
 * @constant
 * @type {number}
 */
export const v1: CASPversion = CASPversion_v1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASPversion_v2
 * @constant
 * @type {number}
 */
export const CASPversion_v2: CASPversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v2
 * @constant
 * @type {number}
 */
export const v2: CASPversion = CASPversion_v2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CASPversion_v3
 * @constant
 * @type {number}
 */
export const CASPversion_v3: CASPversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v3
 * @constant
 * @type {number}
 */
export const v3: CASPversion = CASPversion_v3; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CASPversion = $._decodeEnumerated;


export const _encode_CASPversion = $._encodeEnumerated;


/* eslint-enable */
