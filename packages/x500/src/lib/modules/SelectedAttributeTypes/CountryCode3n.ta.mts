/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CountryCode3n */
/**
 * @summary CountryCode3n
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryCode3n  ::=  NumericString(SIZE (3)) (CONSTRAINED BY { -- ISO 3166 numeric-3 codes only -- })
 * ```
 */
export type CountryCode3n = NumericString; // NumericString
/* END_OF_SYMBOL_DEFINITION CountryCode3n */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryCode3n */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryCode3n */

/* START_OF_SYMBOL_DEFINITION _decode_CountryCode3n */
export const _decode_CountryCode3n = $._decodeNumericString;
/* END_OF_SYMBOL_DEFINITION _decode_CountryCode3n */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryCode3n */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryCode3n */

/* START_OF_SYMBOL_DEFINITION _encode_CountryCode3n */
export const _encode_CountryCode3n = $._encodeNumericString;

/* END_OF_SYMBOL_DEFINITION _encode_CountryCode3n */

/* eslint-enable */
