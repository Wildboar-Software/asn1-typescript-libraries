/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Release_request_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-request-reason  ::=  INTEGER {normal(0)}
 * ```
 */
export type Release_request_reason = INTEGER;

/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const Release_request_reason_normal: 0 = 0 satisfies Release_request_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const normal: 0 = Release_request_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Release_request_reason: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_Release_request_reason: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
