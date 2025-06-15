/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION DBRecord */
/**
 * @summary DBRecord
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DBRecord     ::=  UTF8String
 * ```
 */
export type DBRecord = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION DBRecord */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DBRecord */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DBRecord */

/* START_OF_SYMBOL_DEFINITION _decode_DBRecord */
export const _decode_DBRecord = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_DBRecord */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DBRecord */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DBRecord */

/* START_OF_SYMBOL_DEFINITION _encode_DBRecord */
export const _encode_DBRecord = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_DBRecord */

/* eslint-enable */
