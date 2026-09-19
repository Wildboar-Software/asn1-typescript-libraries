/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EASServiceFeature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASServiceFeature  ::=  UTF8String
 * ```
 */
export
type EASServiceFeature = UTF8String; // UTF8String

let _cached_decoder_for_EASServiceFeature: $.ASN1Decoder<EASServiceFeature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASServiceFeature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASServiceFeature (el: _Element): EASServiceFeature {
    if (!_cached_decoder_for_EASServiceFeature) { _cached_decoder_for_EASServiceFeature = $._decodeUTF8String; }
    return _cached_decoder_for_EASServiceFeature(el);
}

let _cached_encoder_for_EASServiceFeature: $.ASN1Encoder<EASServiceFeature> | null = null;

/**
 * @summary Encodes a(n) EASServiceFeature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASServiceFeature, encoded as an ASN.1 Element.
 */
export
function _encode_EASServiceFeature (value: EASServiceFeature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASServiceFeature) { _cached_encoder_for_EASServiceFeature = $._encodeUTF8String; }
    return _cached_encoder_for_EASServiceFeature(value, elGetter);
}


/* eslint-enable */
