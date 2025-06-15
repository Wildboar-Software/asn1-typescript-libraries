/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CASPsequence */
/**
 * @summary CASPsequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASPsequence  ::=  INTEGER (1..MAX)
 * ```
 */
export type CASPsequence = INTEGER;
/* END_OF_SYMBOL_DEFINITION CASPsequence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CASPsequence */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CASPsequence */

/* START_OF_SYMBOL_DEFINITION _decode_CASPsequence */
export const _decode_CASPsequence = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_CASPsequence */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CASPsequence */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CASPsequence */

/* START_OF_SYMBOL_DEFINITION _encode_CASPsequence */
export const _encode_CASPsequence = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_CASPsequence */

/* eslint-enable */
