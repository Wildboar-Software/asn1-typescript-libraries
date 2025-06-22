/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
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
export const Version_two_prime: Version = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Version_two_prime
 * @constant
 * @type {number}
 */
export const two_prime: Version = Version_two_prime; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Version_multi
 * @constant
 * @type {number}
 */
export const Version_multi: Version = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Version_multi
 * @constant
 * @type {number}
 */
export const multi: Version = Version_multi; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Version = $._decodeInteger;




export const _encode_Version = $._encodeInteger;


/* eslint-enable */
