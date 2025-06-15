/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION TimeStampReq_version */
/**
 * @summary TimeStampReq_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampReq-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TimeStampReq_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION TimeStampReq_version */

/* START_OF_SYMBOL_DEFINITION TimeStampReq_version_v1 */
/**
 * @summary TimeStampReq_version_v1
 * @constant
 * @type {number}
 */
export const TimeStampReq_version_v1: TimeStampReq_version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeStampReq_version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary TimeStampReq_version_v1
 * @constant
 * @type {number}
 */
export const v1: TimeStampReq_version = TimeStampReq_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStampReq_version */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStampReq_version */

/* START_OF_SYMBOL_DEFINITION _decode_TimeStampReq_version */
export const _decode_TimeStampReq_version = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TimeStampReq_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStampReq_version */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStampReq_version */

/* START_OF_SYMBOL_DEFINITION _encode_TimeStampReq_version */
export const _encode_TimeStampReq_version = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TimeStampReq_version */

/* eslint-enable */
