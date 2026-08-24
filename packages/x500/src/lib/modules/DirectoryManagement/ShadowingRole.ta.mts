/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ShadowingRole
 * @description
 *
 * INTEGER role of this DSA in a shadowing agreement. `supplier`(0) = shadow
 * supplier; `consumer`(1) = shadow consumer. INTEGER, not ENUMERATED.
 * MATCHES FOR EQUALITY. `0` is a named role, not "none".
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
 * @description
 *
 * This DSA is the shadow supplier. Named `0`, not "none".
 *
 * @constant
 * @type {number}
 */
export const ShadowingRole_supplier: ShadowingRole = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowingRole_supplier
 * @description
 *
 * This DSA is the shadow supplier. Named `0`, not "none".
 *
 * @constant
 * @type {number}
 */
export const supplier: ShadowingRole = ShadowingRole_supplier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowingRole_consumer
 * @description
 *
 * This DSA is the shadow consumer.
 *
 * @constant
 * @type {number}
 */
export const ShadowingRole_consumer: ShadowingRole = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ShadowingRole_consumer
 * @description
 *
 * This DSA is the shadow consumer.
 *
 * @constant
 * @type {number}
 */
export const consumer: ShadowingRole = ShadowingRole_consumer; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ShadowingRole = $._decodeInteger;


export const _encode_ShadowingRole = $._encodeInteger;


/* eslint-enable */
