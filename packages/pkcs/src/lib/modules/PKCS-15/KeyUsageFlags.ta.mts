/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary KeyUsageFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyUsageFlags  ::=  BIT STRING { encrypt (0), decrypt (1), sign (2), signRecover (3), wrap (4), unwrap (5), verify (6), verifyRecover  (7), derive (8), nonRepudiation (9) }
 * ```
 */
export type KeyUsageFlags = BIT_STRING;


/**
 * @summary KeyUsageFlags_encrypt
 * @constant
 */
export const KeyUsageFlags_encrypt: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary encrypt
 * @constant
 */
export const encrypt: number = KeyUsageFlags_encrypt; /* SHORT_NAMED_BIT */


/**
 * @summary KeyUsageFlags_decrypt
 * @constant
 */
export const KeyUsageFlags_decrypt: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary decrypt
 * @constant
 */
export const decrypt: number = KeyUsageFlags_decrypt; /* SHORT_NAMED_BIT */


/**
 * @summary KeyUsageFlags_sign
 * @constant
 */
export const KeyUsageFlags_sign: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary sign
 * @constant
 */
export const sign: number = KeyUsageFlags_sign; /* SHORT_NAMED_BIT */


/**
 * @summary KeyUsageFlags_signRecover
 * @constant
 */
export const KeyUsageFlags_signRecover: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary signRecover
 * @constant
 */
export const signRecover: number = KeyUsageFlags_signRecover; /* SHORT_NAMED_BIT */


/**
 * @summary KeyUsageFlags_wrap
 * @constant
 */
export const KeyUsageFlags_wrap: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary wrap
 * @constant
 */
export const wrap: number = KeyUsageFlags_wrap; /* SHORT_NAMED_BIT */


/**
 * @summary KeyUsageFlags_unwrap
 * @constant
 */
export const KeyUsageFlags_unwrap: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary unwrap
 * @constant
 */
export const unwrap: number = KeyUsageFlags_unwrap; /* SHORT_NAMED_BIT */


/**
 * @summary KeyUsageFlags_verify
 * @constant
 */
export const KeyUsageFlags_verify: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary verify
 * @constant
 */
export const verify: number = KeyUsageFlags_verify; /* SHORT_NAMED_BIT */


/**
 * @summary KeyUsageFlags_verifyRecover
 * @constant
 */
export const KeyUsageFlags_verifyRecover: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary verifyRecover
 * @constant
 */
export const verifyRecover: number = KeyUsageFlags_verifyRecover; /* SHORT_NAMED_BIT */


/**
 * @summary KeyUsageFlags_derive
 * @constant
 */
export const KeyUsageFlags_derive: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary derive
 * @constant
 */
export const derive: number = KeyUsageFlags_derive; /* SHORT_NAMED_BIT */


/**
 * @summary KeyUsageFlags_nonRepudiation
 * @constant
 */
export const KeyUsageFlags_nonRepudiation: number = 9; /* LONG_NAMED_BIT */


/**
 * @summary nonRepudiation
 * @constant
 */
export const nonRepudiation: number = KeyUsageFlags_nonRepudiation; /* SHORT_NAMED_BIT */




export const _decode_KeyUsageFlags = $._decodeBitString;




export const _encode_KeyUsageFlags = $._encodeBitString;


/* eslint-enable */
