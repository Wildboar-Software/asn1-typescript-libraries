/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ProtectionRequest
 * @description
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
 * @constant
 * @type {number}
 */
export const ProtectionRequest_none: ProtectionRequest = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProtectionRequest_none
 * @constant
 * @type {number}
 */
export const none: ProtectionRequest = ProtectionRequest_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProtectionRequest_signed
 * @constant
 * @type {number}
 */
export const ProtectionRequest_signed: ProtectionRequest = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProtectionRequest_signed
 * @constant
 * @type {number}
 */
export const signed: ProtectionRequest = ProtectionRequest_signed; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ProtectionRequest = $._decodeInteger;


export const _encode_ProtectionRequest = $._encodeInteger;


/* eslint-enable */
