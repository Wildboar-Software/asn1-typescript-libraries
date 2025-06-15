/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION InvokeID */
/**
 * @summary InvokeID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeID  ::=  INTEGER (0..127)
 * ```
 */
export type InvokeID = INTEGER;
/* END_OF_SYMBOL_DEFINITION InvokeID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeID */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeID */
export const _decode_InvokeID = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_InvokeID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeID */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeID */
export const _encode_InvokeID = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_InvokeID */

/* eslint-enable */
