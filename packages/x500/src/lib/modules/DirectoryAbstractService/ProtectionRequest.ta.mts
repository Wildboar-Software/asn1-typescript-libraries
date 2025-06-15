/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ProtectionRequest */
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
/* END_OF_SYMBOL_DEFINITION ProtectionRequest */

/* START_OF_SYMBOL_DEFINITION ProtectionRequest_none */
/**
 * @summary ProtectionRequest_none
 * @constant
 * @type {number}
 */
export const ProtectionRequest_none: ProtectionRequest = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionRequest_none */

/* START_OF_SYMBOL_DEFINITION none */
/**
 * @summary ProtectionRequest_none
 * @constant
 * @type {number}
 */
export const none: ProtectionRequest = ProtectionRequest_none; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION none */

/* START_OF_SYMBOL_DEFINITION ProtectionRequest_signed */
/**
 * @summary ProtectionRequest_signed
 * @constant
 * @type {number}
 */
export const ProtectionRequest_signed: ProtectionRequest = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionRequest_signed */

/* START_OF_SYMBOL_DEFINITION signed */
/**
 * @summary ProtectionRequest_signed
 * @constant
 * @type {number}
 */
export const signed: ProtectionRequest = ProtectionRequest_signed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION signed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionRequest */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionRequest */
export const _decode_ProtectionRequest = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionRequest */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionRequest */
export const _encode_ProtectionRequest = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionRequest */

/* eslint-enable */
