/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Time */
/**
 * @summary Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  GeneralizedTime
 * ```
 */
export type Time = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION Time */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Time */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Time */

/* START_OF_SYMBOL_DEFINITION _decode_Time */
export const _decode_Time = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_Time */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Time */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Time */

/* START_OF_SYMBOL_DEFINITION _encode_Time */
export const _encode_Time = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_Time */

/* eslint-enable */
