/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary AccessMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessMode  ::=  BIT STRING { read (0), update (1), execute (2) }
 * ```
 */
export type AccessMode = BIT_STRING;


/**
 * @summary AccessMode_read
 * @constant
 */
export const AccessMode_read: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary read
 * @constant
 */
export const read: number = AccessMode_read; /* SHORT_NAMED_BIT */


/**
 * @summary AccessMode_update
 * @constant
 */
export const AccessMode_update: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary update
 * @constant
 */
export const update: number = AccessMode_update; /* SHORT_NAMED_BIT */


/**
 * @summary AccessMode_execute
 * @constant
 */
export const AccessMode_execute: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary execute
 * @constant
 */
export const execute: number = AccessMode_execute; /* SHORT_NAMED_BIT */




export const _decode_AccessMode = $._decodeBitString;




export const _encode_AccessMode = $._encodeBitString;


/* eslint-enable */
