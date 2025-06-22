/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ShadowingRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowingRole  ::=  INTEGER {supplier(0), consumer(1)}
 * ```
 */
export type ShadowingRole = INTEGER;

/**
 * @summary ShadowingRole_supplier
 * @constant
 * @type {number}
 */
export const ShadowingRole_supplier: ShadowingRole = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowingRole_supplier
 * @constant
 * @type {number}
 */
export const supplier: ShadowingRole = ShadowingRole_supplier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowingRole_consumer
 * @constant
 * @type {number}
 */
export const ShadowingRole_consumer: ShadowingRole = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowingRole_consumer
 * @constant
 * @type {number}
 */
export const consumer: ShadowingRole = ShadowingRole_consumer; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ShadowingRole = $._decodeInteger;


export const _encode_ShadowingRole = $._encodeInteger;


/* eslint-enable */
