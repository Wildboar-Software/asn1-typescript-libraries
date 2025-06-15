/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary RequestAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestAuthenticationPolicy  ::=  BIT STRING {none(0), simpleName(1), strong(2)}
 * ```
 */
export type RequestAuthenticationPolicy = BIT_STRING;

/**
 * @summary RequestAuthenticationPolicy_none
 * @constant
 */
export const RequestAuthenticationPolicy_none: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary none
 * @constant
 */
export const none: number = RequestAuthenticationPolicy_none; /* SHORT_NAMED_BIT */

/**
 * @summary RequestAuthenticationPolicy_simpleName
 * @constant
 */
export const RequestAuthenticationPolicy_simpleName: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary simpleName
 * @constant
 */
export const simpleName: number = RequestAuthenticationPolicy_simpleName; /* SHORT_NAMED_BIT */

/**
 * @summary RequestAuthenticationPolicy_strong
 * @constant
 */
export const RequestAuthenticationPolicy_strong: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary strong
 * @constant
 */
export const strong: number = RequestAuthenticationPolicy_strong; /* SHORT_NAMED_BIT */


export const _decode_RequestAuthenticationPolicy = $._decodeBitString;


export const _encode_RequestAuthenticationPolicy = $._encodeBitString;


/* eslint-enable */
