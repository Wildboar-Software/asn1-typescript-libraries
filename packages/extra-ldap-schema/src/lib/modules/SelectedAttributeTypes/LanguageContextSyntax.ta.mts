/* eslint-disable */
import {
    type PrintableString,
    type ASN1Element as _Element,
    ASN1SizeError,
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

export function _decode_LanguageContextSyntax (el: _Element): LanguageContextSyntax {
    const value = $._decodePrintableString(el);
    if (value.length < 2 || value.length > 3) {
        throw new ASN1SizeError("LanguageContextSyntax violates SIZE constraint");
    }
    return value;
}

export
const _encode_LanguageContextSyntax: $.ASN1Encoder<LanguageContextSyntax> = $._encodePrintableString;

/* eslint-enable */
