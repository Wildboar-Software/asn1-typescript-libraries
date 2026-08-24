/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ErrorProtectionRequest
 * @description
 *
 * INTEGER `none`(0) `signed`(1). Request only. Actual protection ≤
 * requested. DEFAULT `none`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorProtectionRequest  ::=  INTEGER {none(0), signed(1)}
 * ```
 */
export type ErrorProtectionRequest = INTEGER;

/**
 * @summary ErrorProtectionRequest_none
 * @description
 *
 * (0) DEFAULT. Actual protection ≤ requested.
 *
 * @constant
 * @type {number}
 */
export const ErrorProtectionRequest_none: ErrorProtectionRequest = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorProtectionRequest_none
 * @description
 *
 * (0) DEFAULT. Actual protection ≤ requested.
 *
 * @constant
 * @type {number}
 */
export const none: ErrorProtectionRequest = ErrorProtectionRequest_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorProtectionRequest_signed
 * @description
 *
 * (1) Requested signed errors. Actual protection ≤ requested.
 *
 * @constant
 * @type {number}
 */
export const ErrorProtectionRequest_signed: ErrorProtectionRequest = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorProtectionRequest_signed
 * @description
 *
 * (1) Requested signed errors. Actual protection ≤ requested.
 *
 * @constant
 * @type {number}
 */
export const signed: ErrorProtectionRequest = ErrorProtectionRequest_signed; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ErrorProtectionRequest = $._decodeInteger;


export const _encode_ErrorProtectionRequest = $._encodeInteger;


/* eslint-enable */
