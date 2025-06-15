/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CountryCode3c */
/**
 * @summary CountryCode3c
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryCode3c  ::=  PrintableString(SIZE (3)) (CONSTRAINED BY { -- ISO 3166 alpha-3 codes only -- })
 * ```
 */
export type CountryCode3c = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION CountryCode3c */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryCode3c */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryCode3c */

/* START_OF_SYMBOL_DEFINITION _decode_CountryCode3c */
export const _decode_CountryCode3c = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_CountryCode3c */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryCode3c */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryCode3c */

/* START_OF_SYMBOL_DEFINITION _encode_CountryCode3c */
export const _encode_CountryCode3c = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_CountryCode3c */

/* eslint-enable */
