/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AVMPsequence */
/**
 * @summary AVMPsequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMPsequence  ::=  INTEGER (1..MAX)
 * ```
 */
export type AVMPsequence = INTEGER;
/* END_OF_SYMBOL_DEFINITION AVMPsequence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AVMPsequence */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AVMPsequence */

/* START_OF_SYMBOL_DEFINITION _decode_AVMPsequence */
export const _decode_AVMPsequence = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AVMPsequence */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AVMPsequence */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AVMPsequence */

/* START_OF_SYMBOL_DEFINITION _encode_AVMPsequence */
export const _encode_AVMPsequence = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AVMPsequence */

/* eslint-enable */
