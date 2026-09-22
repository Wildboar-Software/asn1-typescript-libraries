/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X520countryName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520countryName  ::=      PrintableString (SIZE (2))
 * ```
 */
export
type X520countryName = PrintableString; // PrintableString

let _cached_decoder_for_X520countryName: $.ASN1Decoder<X520countryName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) X520countryName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_X520countryName (el: _Element): X520countryName {
    if (!_cached_decoder_for_X520countryName) { _cached_decoder_for_X520countryName = $._decodePrintableString; }
    return _cached_decoder_for_X520countryName(el);
}

let _cached_encoder_for_X520countryName: $.ASN1Encoder<X520countryName> | null = null;

/**
 * @summary Encodes a(n) X520countryName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520countryName, encoded as an ASN.1 Element.
 */
export
function _encode_X520countryName (value: X520countryName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_X520countryName) { _cached_encoder_for_X520countryName = $._encodePrintableString; }
    return _cached_encoder_for_X520countryName(value, elGetter);
}


/* eslint-enable */
