/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Applied
 * @description
 *
 * Whether an `EquivalentClassification` mapping applies when
 * encrypting, decrypting, or both. Constrained to these three
 * values. ITU-T Rec. X.841 (10/2000)
 * [§6.2.2.6](https://www.itu.int/rec/T-REC-X.841-200010-I).
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
 * @description Equivalency applies when encrypting.
 * @constant
 * @type {number}
 */
export const Applied_encrypt: Applied = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Applied_encrypt
 * @description Equivalency applies when encrypting.
 * @constant
 * @type {number}
 */
export const encrypt: Applied = Applied_encrypt; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Applied_decrypt
 * @description Equivalency applies when decrypting.
 * @constant
 * @type {number}
 */
export const Applied_decrypt: Applied = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Applied_decrypt
 * @description Equivalency applies when decrypting.
 * @constant
 * @type {number}
 */
export const decrypt: Applied = Applied_decrypt; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Applied_both
 * @description Equivalency applies when encrypting and decrypting.
 * @constant
 * @type {number}
 */
export const Applied_both: Applied = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Applied_both
 * @description Equivalency applies when encrypting and decrypting.
 * @constant
 * @type {number}
 */
export const both: Applied = Applied_both; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Applied = $._decodeInteger;




export const _encode_Applied = $._encodeInteger;


/* eslint-enable */
