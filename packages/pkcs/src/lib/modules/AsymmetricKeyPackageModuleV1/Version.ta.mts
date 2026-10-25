/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version  ::=  INTEGER { v1(0), v2(1) } (v1, ..., v2)
 * ```
 */
export type Version = INTEGER;


/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export const Version_v1 = 0 satisfies Version; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Version_v1
 * @constant
 * @type {number}
 */
export const v1 = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Version_v2
 * @constant
 * @type {number}
 */
export const Version_v2 = 1 satisfies Version; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Version_v2
 * @constant
 * @type {number}
 */
export const v2 = Version_v2; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Version = $._decodeInteger;




export const _encode_Version = $._encodeInteger;


/* eslint-enable */
