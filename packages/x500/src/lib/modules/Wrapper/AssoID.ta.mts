/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AssoID */
/**
 * @summary AssoID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssoID  ::=  INTEGER (0..32767)
 * ```
 */
export type AssoID = INTEGER;
/* END_OF_SYMBOL_DEFINITION AssoID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssoID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssoID */

/* START_OF_SYMBOL_DEFINITION _decode_AssoID */
export const _decode_AssoID = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AssoID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssoID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssoID */

/* START_OF_SYMBOL_DEFINITION _encode_AssoID */
export const _encode_AssoID = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AssoID */

/* eslint-enable */
