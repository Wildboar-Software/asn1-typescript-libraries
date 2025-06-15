/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary CMSVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMSVersion     ::=  INTEGER {v0(0)} (0..MAX)
 * ```
 */
export type CMSVersion = INTEGER;


/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const CMSVersion_v0: CMSVersion = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const v0: CMSVersion = CMSVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_CMSVersion = $._decodeInteger;




export const _encode_CMSVersion = $._encodeInteger;


/* eslint-enable */
