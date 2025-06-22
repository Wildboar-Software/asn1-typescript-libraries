/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Applied
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Applied  ::=  INTEGER {encrypt(0), decrypt(1), both(2)}(encrypt | decrypt | both)
 * ```
 */
export type Applied = INTEGER;


/**
 * @summary Applied_encrypt
 * @constant
 * @type {number}
 */
export const Applied_encrypt: Applied = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Applied_encrypt
 * @constant
 * @type {number}
 */
export const encrypt: Applied = Applied_encrypt; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Applied_decrypt
 * @constant
 * @type {number}
 */
export const Applied_decrypt: Applied = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Applied_decrypt
 * @constant
 * @type {number}
 */
export const decrypt: Applied = Applied_decrypt; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Applied_both
 * @constant
 * @type {number}
 */
export const Applied_both: Applied = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Applied_both
 * @constant
 * @type {number}
 */
export const both: Applied = Applied_both; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Applied = $._decodeInteger;




export const _encode_Applied = $._encodeInteger;


/* eslint-enable */
