/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary KeyAccessFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAccessFlags  ::=  BIT STRING { sensitive  (0), extractable (1), alwaysSensitive (2), neverExtractable (3), local (4) }
 * ```
 */
export type KeyAccessFlags = BIT_STRING;


/**
 * @summary KeyAccessFlags_sensitive
 * @constant
 */
export const KeyAccessFlags_sensitive: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary sensitive
 * @constant
 */
export const sensitive: number = KeyAccessFlags_sensitive; /* SHORT_NAMED_BIT */


/**
 * @summary KeyAccessFlags_extractable
 * @constant
 */
export const KeyAccessFlags_extractable: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary extractable
 * @constant
 */
export const extractable: number = KeyAccessFlags_extractable; /* SHORT_NAMED_BIT */


/**
 * @summary KeyAccessFlags_alwaysSensitive
 * @constant
 */
export const KeyAccessFlags_alwaysSensitive: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary alwaysSensitive
 * @constant
 */
export const alwaysSensitive: number = KeyAccessFlags_alwaysSensitive; /* SHORT_NAMED_BIT */


/**
 * @summary KeyAccessFlags_neverExtractable
 * @constant
 */
export const KeyAccessFlags_neverExtractable: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary neverExtractable
 * @constant
 */
export const neverExtractable: number = KeyAccessFlags_neverExtractable; /* SHORT_NAMED_BIT */


/**
 * @summary KeyAccessFlags_local
 * @constant
 */
export const KeyAccessFlags_local: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary local
 * @constant
 */
export const local: number = KeyAccessFlags_local; /* SHORT_NAMED_BIT */




export const _decode_KeyAccessFlags = $._decodeBitString;




export const _encode_KeyAccessFlags = $._encodeBitString;


/* eslint-enable */
