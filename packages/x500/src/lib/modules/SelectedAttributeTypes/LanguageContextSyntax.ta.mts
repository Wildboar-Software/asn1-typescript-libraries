/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary LanguageContextSyntax
 * @description
 *
 * ISO 639-2 only; PrintableString SIZE (2..3). Exact character match (not
 * case-ignore).
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
