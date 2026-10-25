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
 * Version  ::=  INTEGER { two-prime(0), multi(1) }
 *     (CONSTRAINED BY
 *         {-- version MUST be multi if otherPrimeInfos present --})
 * ```
 */
export type Version = INTEGER;


/**
 * @summary Version_two_prime
 * @constant
 * @type {number}
 */
export const Version_two_prime: 0 = 0 satisfies Version; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Version_two_prime
 * @constant
 * @type {number}
 */
export const two_prime: 0 = Version_two_prime; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Version_multi
 * @constant
 * @type {number}
 */
export const Version_multi: 1 = 1 satisfies Version; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Version_multi
 * @constant
 * @type {number}
 */
export const multi: 1 = Version_multi; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Version: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_Version: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
