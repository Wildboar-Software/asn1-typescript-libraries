/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION XPath */
/**
 * @summary XPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XPath  ::=  UTF8String (CONSTRAINED BY { -- XML Path Language 2.0 -- })
 * ```
 */
export type XPath = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION XPath */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_XPath */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_XPath */

/* START_OF_SYMBOL_DEFINITION _decode_XPath */
export const _decode_XPath = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_XPath */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_XPath */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_XPath */

/* START_OF_SYMBOL_DEFINITION _encode_XPath */
export const _encode_XPath = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_XPath */

/* eslint-enable */
