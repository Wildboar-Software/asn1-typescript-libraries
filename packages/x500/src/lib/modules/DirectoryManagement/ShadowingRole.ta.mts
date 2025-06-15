/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ShadowingRole */
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
/* END_OF_SYMBOL_DEFINITION ShadowingRole */

/* START_OF_SYMBOL_DEFINITION ShadowingRole_supplier */
/**
 * @summary ShadowingRole_supplier
 * @constant
 * @type {number}
 */
export const ShadowingRole_supplier: ShadowingRole = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowingRole_supplier */

/* START_OF_SYMBOL_DEFINITION supplier */
/**
 * @summary ShadowingRole_supplier
 * @constant
 * @type {number}
 */
export const supplier: ShadowingRole = ShadowingRole_supplier; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION supplier */

/* START_OF_SYMBOL_DEFINITION ShadowingRole_consumer */
/**
 * @summary ShadowingRole_consumer
 * @constant
 * @type {number}
 */
export const ShadowingRole_consumer: ShadowingRole = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowingRole_consumer */

/* START_OF_SYMBOL_DEFINITION consumer */
/**
 * @summary ShadowingRole_consumer
 * @constant
 * @type {number}
 */
export const consumer: ShadowingRole = ShadowingRole_consumer; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION consumer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowingRole */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowingRole */

/* START_OF_SYMBOL_DEFINITION _decode_ShadowingRole */
export const _decode_ShadowingRole = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ShadowingRole */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowingRole */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowingRole */

/* START_OF_SYMBOL_DEFINITION _encode_ShadowingRole */
export const _encode_ShadowingRole = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ShadowingRole */

/* eslint-enable */
