/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

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


export const _decode_LanguageContextSyntax = $._decodePrintableString;


export const _encode_LanguageContextSyntax = $._encodePrintableString;


/* eslint-enable */
