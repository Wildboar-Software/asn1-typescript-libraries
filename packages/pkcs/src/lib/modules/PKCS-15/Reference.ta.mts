/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Reference */
/**
 * @summary Reference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reference  ::=  INTEGER (0..pkcs15-ub-reference)
 * ```
 */
export type Reference = INTEGER;
/* END_OF_SYMBOL_DEFINITION Reference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Reference */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Reference */

/* START_OF_SYMBOL_DEFINITION _decode_Reference */
export const _decode_Reference = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Reference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Reference */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Reference */

/* START_OF_SYMBOL_DEFINITION _encode_Reference */
export const _encode_Reference = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Reference */

/* eslint-enable */
