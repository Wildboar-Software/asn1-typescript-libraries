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
export const ProtectionRequest_none: 0 = 0 satisfies ProtectionRequest; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProtectionRequest_none
 * @description
 *
 * Request no protection (default). Actual protection ≤ requested.
 *
 * @constant
 * @type {number}
 */
export const none: 0 = ProtectionRequest_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProtectionRequest_signed
 * @description
 *
 * Request signed; actual protection may still be `none`.
 *
 * @constant
 * @type {number}
 */
export const ProtectionRequest_signed: 1 = 1 satisfies ProtectionRequest; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProtectionRequest_signed
 * @description
 *
 * Request signed; actual protection may still be `none`.
 *
 * @constant
 * @type {number}
 */
export const signed: 1 = ProtectionRequest_signed; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ProtectionRequest: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_ProtectionRequest: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
