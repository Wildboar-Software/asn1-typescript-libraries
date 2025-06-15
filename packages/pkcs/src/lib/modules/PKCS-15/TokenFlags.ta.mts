/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary TokenFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenFlags  ::=  BIT STRING { readonly (0), loginRequired (1), prnGeneration (2), eidCompliant  (3) }
 * ```
 */
export type TokenFlags = BIT_STRING;


/**
 * @summary TokenFlags_readonly
 * @constant
 */
export const TokenFlags_readonly: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary readonly
 * @constant
 */
export const readonly: number = TokenFlags_readonly; /* SHORT_NAMED_BIT */


/**
 * @summary TokenFlags_loginRequired
 * @constant
 */
export const TokenFlags_loginRequired: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary loginRequired
 * @constant
 */
export const loginRequired: number = TokenFlags_loginRequired; /* SHORT_NAMED_BIT */


/**
 * @summary TokenFlags_prnGeneration
 * @constant
 */
export const TokenFlags_prnGeneration: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary prnGeneration
 * @constant
 */
export const prnGeneration: number = TokenFlags_prnGeneration; /* SHORT_NAMED_BIT */


/**
 * @summary TokenFlags_eidCompliant
 * @constant
 */
export const TokenFlags_eidCompliant: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary eidCompliant
 * @constant
 */
export const eidCompliant: number = TokenFlags_eidCompliant; /* SHORT_NAMED_BIT */




export const _decode_TokenFlags = $._decodeBitString;




export const _encode_TokenFlags = $._encodeBitString;


/* eslint-enable */
