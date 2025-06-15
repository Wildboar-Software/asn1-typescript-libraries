/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ErrorProtectionRequest */
/**
 * @summary ErrorProtectionRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorProtectionRequest  ::=  INTEGER {none(0), signed(1)}
 * ```
 */
export type ErrorProtectionRequest = INTEGER;
/* END_OF_SYMBOL_DEFINITION ErrorProtectionRequest */

/* START_OF_SYMBOL_DEFINITION ErrorProtectionRequest_none */
/**
 * @summary ErrorProtectionRequest_none
 * @constant
 * @type {number}
 */
export const ErrorProtectionRequest_none: ErrorProtectionRequest = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorProtectionRequest_none */

/* START_OF_SYMBOL_DEFINITION none */
/**
 * @summary ErrorProtectionRequest_none
 * @constant
 * @type {number}
 */
export const none: ErrorProtectionRequest = ErrorProtectionRequest_none; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION none */

/* START_OF_SYMBOL_DEFINITION ErrorProtectionRequest_signed */
/**
 * @summary ErrorProtectionRequest_signed
 * @constant
 * @type {number}
 */
export const ErrorProtectionRequest_signed: ErrorProtectionRequest = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorProtectionRequest_signed */

/* START_OF_SYMBOL_DEFINITION signed */
/**
 * @summary ErrorProtectionRequest_signed
 * @constant
 * @type {number}
 */
export const signed: ErrorProtectionRequest = ErrorProtectionRequest_signed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION signed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorProtectionRequest */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ErrorProtectionRequest */
export const _decode_ErrorProtectionRequest = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ErrorProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorProtectionRequest */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ErrorProtectionRequest */
export const _encode_ErrorProtectionRequest = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ErrorProtectionRequest */

/* eslint-enable */
