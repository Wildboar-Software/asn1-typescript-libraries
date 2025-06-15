/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_AVMPversion {
    v1 = 1,
    v2 = 2,
    v3 = 3,
}

/**
 * @summary AVMPversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMPversion  ::=  ENUMERATED { v1(1), v2(2), v3(3), ... }
 * ```@enum {number}
 */
export type AVMPversion = _enum_for_AVMPversion | ENUMERATED;

/**
 * @summary AVMPversion_v1
 * @constant
 * @type {number}
 */
export const AVMPversion_v1: AVMPversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v1
 * @constant
 * @type {number}
 */
export const v1: AVMPversion = AVMPversion_v1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMPversion_v2
 * @constant
 * @type {number}
 */
export const AVMPversion_v2: AVMPversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v2
 * @constant
 * @type {number}
 */
export const v2: AVMPversion = AVMPversion_v2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMPversion_v3
 * @constant
 * @type {number}
 */
export const AVMPversion_v3: AVMPversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v3
 * @constant
 * @type {number}
 */
export const v3: AVMPversion = AVMPversion_v3; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AVMPversion = $._decodeEnumerated;


export const _encode_AVMPversion = $._encodeEnumerated;


/* eslint-enable */
