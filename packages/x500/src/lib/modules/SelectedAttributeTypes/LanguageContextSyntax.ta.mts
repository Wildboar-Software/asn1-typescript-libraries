/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION LanguageContextSyntax */
/**
 * @summary LanguageContextSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LanguageContextSyntax  ::=  PrintableString(SIZE (2..3))
 * ```
 */
export type LanguageContextSyntax = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION LanguageContextSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LanguageContextSyntax */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LanguageContextSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_LanguageContextSyntax */
export const _decode_LanguageContextSyntax = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_LanguageContextSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LanguageContextSyntax */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LanguageContextSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_LanguageContextSyntax */
export const _encode_LanguageContextSyntax = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_LanguageContextSyntax */

/* eslint-enable */
