/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CountryName */
/**
 * @summary CountryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryName  ::=  PrintableString(SIZE (2)) (CONSTRAINED BY { -- ISO 3166 alpha-2 codes only -- })
 * ```
 */
export type CountryName = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION CountryName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryName */

/* START_OF_SYMBOL_DEFINITION _decode_CountryName */
export const _decode_CountryName = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_CountryName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryName */

/* START_OF_SYMBOL_DEFINITION _encode_CountryName */
export const _encode_CountryName = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_CountryName */

/* eslint-enable */
