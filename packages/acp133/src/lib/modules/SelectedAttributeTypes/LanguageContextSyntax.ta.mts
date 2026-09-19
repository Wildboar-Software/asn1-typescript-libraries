/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
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

let _cached_decoder_for_LanguageContextSyntax: $.ASN1Decoder<LanguageContextSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LanguageContextSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LanguageContextSyntax (el: _Element): LanguageContextSyntax {
    if (!_cached_decoder_for_LanguageContextSyntax) { _cached_decoder_for_LanguageContextSyntax = $._decodePrintableString; }
    return _cached_decoder_for_LanguageContextSyntax(el);
}

let _cached_encoder_for_LanguageContextSyntax: $.ASN1Encoder<LanguageContextSyntax> | null = null;

/**
 * @summary Encodes a(n) LanguageContextSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LanguageContextSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_LanguageContextSyntax (value: LanguageContextSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LanguageContextSyntax) { _cached_encoder_for_LanguageContextSyntax = $._encodePrintableString; }
    return _cached_encoder_for_LanguageContextSyntax(value, elGetter);
}


/* eslint-enable */
