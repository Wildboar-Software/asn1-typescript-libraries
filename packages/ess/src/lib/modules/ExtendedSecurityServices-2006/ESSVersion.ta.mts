/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ESSVersion */
/**
 * @summary ESSVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ESSVersion  ::=  INTEGER  { v1(1) }
 * ```
 */
export type ESSVersion = INTEGER;
/* END_OF_SYMBOL_DEFINITION ESSVersion */

/* START_OF_SYMBOL_DEFINITION ESSVersion_v1 */
/**
 * @summary ESSVersion_v1
 * @constant
 * @type {number}
 */
export const ESSVersion_v1: ESSVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ESSVersion_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary ESSVersion_v1
 * @constant
 * @type {number}
 */
export const v1: ESSVersion = ESSVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ESSVersion */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ESSVersion */

/* START_OF_SYMBOL_DEFINITION _decode_ESSVersion */
export const _decode_ESSVersion = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ESSVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ESSVersion */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ESSVersion */

/* START_OF_SYMBOL_DEFINITION _encode_ESSVersion */
export const _encode_ESSVersion = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ESSVersion */

/* eslint-enable */
