/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary Release_response_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-response-reason  ::=  INTEGER {normal(0)}
 * ```
 */
export type Release_response_reason = INTEGER;

/**
 * @summary Release_response_reason_normal
 * @constant
 * @type {number}
 */
export const Release_response_reason_normal: Release_response_reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_response_reason_normal
 * @constant
 * @type {number}
 */
export const normal: Release_response_reason = Release_response_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Release_response_reason = $._decodeInteger;


export const _encode_Release_response_reason = $._encodeInteger;


/* eslint-enable */
