/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION TimeStamp */
/**
 * @summary TimeStamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStamp  ::=  GeneralizedTime
 * ```
 */
export type TimeStamp = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION TimeStamp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStamp */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _decode_TimeStamp */
export const _decode_TimeStamp = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStamp */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _encode_TimeStamp */
export const _encode_TimeStamp = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_TimeStamp */

/* eslint-enable */
