/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ProtectionRequest
 * @description
 *
 * INTEGER `none`(0), `signed`(1). Default `none`. Actual protection ≤
 * requested.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionRequest  ::=  INTEGER {none(0), signed(1)}
 * ```
 */
export type ProtectionRequest = INTEGER;

/**
 * @summary ProtectionRequest_none
 * @description
 *
 * Request no protection (default). Actual protection ≤ requested.
 *
 * @constant
 * @type {number}
 */
export const ProtectionRequest_none = 0 satisfies ProtectionRequest; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProtectionRequest_none
 * @description
 *
 * Request no protection (default). Actual protection ≤ requested.
 *
 * @constant
 * @type {number}
 */
export const none = ProtectionRequest_none satisfies ProtectionRequest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProtectionRequest_signed
 * @description
 *
 * Request signed; actual protection may still be `none`.
 *
 * @constant
 * @type {number}
 */
export const ProtectionRequest_signed = 1 satisfies ProtectionRequest; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProtectionRequest_signed
 * @description
 *
 * Request signed; actual protection may still be `none`.
 *
 * @constant
 * @type {number}
 */
export const signed = ProtectionRequest_signed satisfies ProtectionRequest; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ProtectionRequest = $._decodeInteger;


export const _encode_ProtectionRequest = $._encodeInteger;


/* eslint-enable */
