/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CMSVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMSVersion  ::=  INTEGER {v0(0), v1(1), v2(2), v3(3), v4(4)}
 * ```
 */
export type CMSVersion = INTEGER;


/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const CMSVersion_v0 = 0 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const v0 = CMSVersion_v0 satisfies CMSVersion; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v1
 * @constant
 * @type {number}
 */
export const CMSVersion_v1 = 1 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v1
 * @constant
 * @type {number}
 */
export const v1 = CMSVersion_v1 satisfies CMSVersion; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v2
 * @constant
 * @type {number}
 */
export const CMSVersion_v2 = 2 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v2
 * @constant
 * @type {number}
 */
export const v2 = CMSVersion_v2 satisfies CMSVersion; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v3
 * @constant
 * @type {number}
 */
export const CMSVersion_v3 = 3 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v3
 * @constant
 * @type {number}
 */
export const v3 = CMSVersion_v3 satisfies CMSVersion; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v4
 * @constant
 * @type {number}
 */
export const CMSVersion_v4 = 4 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v4
 * @constant
 * @type {number}
 */
export const v4 = CMSVersion_v4 satisfies CMSVersion; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_CMSVersion = $._decodeInteger;




export const _encode_CMSVersion = $._encodeInteger;


/* eslint-enable */
