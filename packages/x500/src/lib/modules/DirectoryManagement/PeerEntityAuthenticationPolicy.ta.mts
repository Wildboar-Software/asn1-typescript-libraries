/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PeerEntityAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PeerEntityAuthenticationPolicy  ::=  BIT STRING {
 *   none(0), nameOnly(1), simpleUnprotected(2), simpleProtected(3), strong(4),
 *   external(5)}
 * ```
 */
export type PeerEntityAuthenticationPolicy = BIT_STRING;

/**
 * @summary PeerEntityAuthenticationPolicy_none
 * @constant
 */
export const PeerEntityAuthenticationPolicy_none: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary none
 * @constant
 */
export const none: number = PeerEntityAuthenticationPolicy_none; /* SHORT_NAMED_BIT */

/**
 * @summary PeerEntityAuthenticationPolicy_nameOnly
 * @constant
 */
export const PeerEntityAuthenticationPolicy_nameOnly: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary nameOnly
 * @constant
 */
export const nameOnly: number = PeerEntityAuthenticationPolicy_nameOnly; /* SHORT_NAMED_BIT */

/**
 * @summary PeerEntityAuthenticationPolicy_simpleUnprotected
 * @constant
 */
export const PeerEntityAuthenticationPolicy_simpleUnprotected: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary simpleUnprotected
 * @constant
 */
export const simpleUnprotected: number = PeerEntityAuthenticationPolicy_simpleUnprotected; /* SHORT_NAMED_BIT */

/**
 * @summary PeerEntityAuthenticationPolicy_simpleProtected
 * @constant
 */
export const PeerEntityAuthenticationPolicy_simpleProtected: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary simpleProtected
 * @constant
 */
export const simpleProtected: number = PeerEntityAuthenticationPolicy_simpleProtected; /* SHORT_NAMED_BIT */

/**
 * @summary PeerEntityAuthenticationPolicy_strong
 * @constant
 */
export const PeerEntityAuthenticationPolicy_strong: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary strong
 * @constant
 */
export const strong: number = PeerEntityAuthenticationPolicy_strong; /* SHORT_NAMED_BIT */

/**
 * @summary PeerEntityAuthenticationPolicy_external
 * @constant
 */
export const PeerEntityAuthenticationPolicy_external: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary external
 * @constant
 */
export const external: number = PeerEntityAuthenticationPolicy_external; /* SHORT_NAMED_BIT */


export const _decode_PeerEntityAuthenticationPolicy = $._decodeBitString;


export const _encode_PeerEntityAuthenticationPolicy = $._encodeBitString;


/* eslint-enable */
