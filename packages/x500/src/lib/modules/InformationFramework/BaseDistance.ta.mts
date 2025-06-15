/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION BaseDistance */
/**
 * @summary BaseDistance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseDistance  ::=  INTEGER(0..MAX)
 * ```
 */
export type BaseDistance = INTEGER;
/* END_OF_SYMBOL_DEFINITION BaseDistance */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BaseDistance */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BaseDistance */

/* START_OF_SYMBOL_DEFINITION _decode_BaseDistance */
export const _decode_BaseDistance = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_BaseDistance */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BaseDistance */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BaseDistance */

/* START_OF_SYMBOL_DEFINITION _encode_BaseDistance */
export const _encode_BaseDistance = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_BaseDistance */

/* eslint-enable */
