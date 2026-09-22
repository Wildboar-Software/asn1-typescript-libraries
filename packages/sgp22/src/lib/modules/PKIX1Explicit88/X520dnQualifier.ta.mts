/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X520dnQualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X520dnQualifier  ::=      PrintableString
 * ```
 */
export
type X520dnQualifier = PrintableString; // PrintableString

let _cached_decoder_for_X520dnQualifier: $.ASN1Decoder<X520dnQualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) X520dnQualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_X520dnQualifier (el: _Element): X520dnQualifier {
    if (!_cached_decoder_for_X520dnQualifier) { _cached_decoder_for_X520dnQualifier = $._decodePrintableString; }
    return _cached_decoder_for_X520dnQualifier(el);
}

let _cached_encoder_for_X520dnQualifier: $.ASN1Encoder<X520dnQualifier> | null = null;

/**
 * @summary Encodes a(n) X520dnQualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520dnQualifier, encoded as an ASN.1 Element.
 */
export
function _encode_X520dnQualifier (value: X520dnQualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_X520dnQualifier) { _cached_encoder_for_X520dnQualifier = $._encodePrintableString; }
    return _cached_encoder_for_X520dnQualifier(value, elGetter);
}


/* eslint-enable */
