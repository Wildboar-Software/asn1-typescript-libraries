/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
 * ```
 *
 * @enum {number}
 */
export type AVMPversion = _enum_for_AVMPversion | ENUMERATED;

/**
 * @summary AVMPversion_v1
 * @constant
 * @type {number}
 */
export const AVMPversion_v1 = _enum_for_AVMPversion.v1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v1
 * @constant
 * @type {number}
 */
export const v1 = AVMPversion_v1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMPversion_v2
 * @constant
 * @type {number}
 */
export const AVMPversion_v2 = _enum_for_AVMPversion.v2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v2
 * @constant
 * @type {number}
 */
export const v2 = AVMPversion_v2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AVMPversion_v3
 * @constant
 * @type {number}
 */
export const AVMPversion_v3 = _enum_for_AVMPversion.v3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v3
 * @constant
 * @type {number}
 */
export const v3 = AVMPversion_v3; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AVMPversion = $._decodeEnumerated;


export const _encode_AVMPversion = $._encodeEnumerated;


/* eslint-enable */
