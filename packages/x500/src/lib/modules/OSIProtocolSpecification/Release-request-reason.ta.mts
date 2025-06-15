/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Release_request_reason */
/**
 * @summary Release_request_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-request-reason  ::=  INTEGER {normal(0)}
 * ```
 */
export type Release_request_reason = INTEGER;
/* END_OF_SYMBOL_DEFINITION Release_request_reason */

/* START_OF_SYMBOL_DEFINITION Release_request_reason_normal */
/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const Release_request_reason_normal: Release_request_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_request_reason_normal */

/* START_OF_SYMBOL_DEFINITION normal */
/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const normal: Release_request_reason = Release_request_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION normal */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_request_reason */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _decode_Release_request_reason */
export const _decode_Release_request_reason = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_request_reason */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _encode_Release_request_reason */
export const _encode_Release_request_reason = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Release_request_reason */

/* eslint-enable */
