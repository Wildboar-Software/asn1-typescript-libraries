/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



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
export
type CountryCode3n = NumericString; // NumericString

let _cached_decoder_for_CountryCode3n: $.ASN1Decoder<CountryCode3n> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CountryCode3n
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CountryCode3n (el: _Element): CountryCode3n {
    if (!_cached_decoder_for_CountryCode3n) { _cached_decoder_for_CountryCode3n = $._decodeNumericString; }
    return _cached_decoder_for_CountryCode3n(el);
}

let _cached_encoder_for_CountryCode3n: $.ASN1Encoder<CountryCode3n> | null = null;

/**
 * @summary Encodes a(n) CountryCode3n into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryCode3n, encoded as an ASN.1 Element.
 */
export
function _encode_CountryCode3n (value: CountryCode3n, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CountryCode3n) { _cached_encoder_for_CountryCode3n = $._encodeNumericString; }
    return _cached_encoder_for_CountryCode3n(value, elGetter);
}


/* eslint-enable */
