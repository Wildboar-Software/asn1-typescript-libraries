/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



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
export
type CountryCode3c = PrintableString; // PrintableString

let _cached_decoder_for_CountryCode3c: $.ASN1Decoder<CountryCode3c> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CountryCode3c
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CountryCode3c (el: _Element): CountryCode3c {
    if (!_cached_decoder_for_CountryCode3c) { _cached_decoder_for_CountryCode3c = $._decodePrintableString; }
    return _cached_decoder_for_CountryCode3c(el);
}

let _cached_encoder_for_CountryCode3c: $.ASN1Encoder<CountryCode3c> | null = null;

/**
 * @summary Encodes a(n) CountryCode3c into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryCode3c, encoded as an ASN.1 Element.
 */
export
function _encode_CountryCode3c (value: CountryCode3c, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CountryCode3c) { _cached_encoder_for_CountryCode3c = $._encodePrintableString; }
    return _cached_encoder_for_CountryCode3c(value, elGetter);
}


/* eslint-enable */
