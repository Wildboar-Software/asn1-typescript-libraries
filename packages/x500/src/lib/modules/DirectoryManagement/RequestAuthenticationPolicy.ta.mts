/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy */
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
/* END_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_none */
/**
 * @summary RequestAuthenticationPolicy_none
 * @constant
 */
export const RequestAuthenticationPolicy_none: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_none */

/* START_OF_SYMBOL_DEFINITION none */
/**
 * @summary none
 * @constant
 */
export const none: number = RequestAuthenticationPolicy_none; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION none */

/* START_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_simpleName */
/**
 * @summary RequestAuthenticationPolicy_simpleName
 * @constant
 */
export const RequestAuthenticationPolicy_simpleName: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_simpleName */

/* START_OF_SYMBOL_DEFINITION simpleName */
/**
 * @summary simpleName
 * @constant
 */
export const simpleName: number = RequestAuthenticationPolicy_simpleName; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION simpleName */

/* START_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_strong */
/**
 * @summary RequestAuthenticationPolicy_strong
 * @constant
 */
export const RequestAuthenticationPolicy_strong: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_strong */

/* START_OF_SYMBOL_DEFINITION strong */
/**
 * @summary strong
 * @constant
 */
export const strong: number = RequestAuthenticationPolicy_strong; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION strong */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestAuthenticationPolicy */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _decode_RequestAuthenticationPolicy */
export const _decode_RequestAuthenticationPolicy = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_RequestAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestAuthenticationPolicy */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _encode_RequestAuthenticationPolicy */
export const _encode_RequestAuthenticationPolicy = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_RequestAuthenticationPolicy */

/* eslint-enable */
