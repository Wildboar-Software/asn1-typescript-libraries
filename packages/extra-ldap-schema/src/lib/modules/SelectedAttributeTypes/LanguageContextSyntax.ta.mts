/* eslint-disable */
import {
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



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
export
type LanguageContextSyntax = PrintableString; // PrintableString

export
const _decode_LanguageContextSyntax: $.ASN1Decoder<LanguageContextSyntax> = $._decodePrintableString;

export
const _encode_LanguageContextSyntax: $.ASN1Encoder<LanguageContextSyntax> = $._encodePrintableString;

/* eslint-enable */
