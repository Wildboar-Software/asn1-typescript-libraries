/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSServerURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSServerURI  ::=  UTF8String
 * ```
 */
export
type RCSServerURI = UTF8String; // UTF8String

let _cached_decoder_for_RCSServerURI: $.ASN1Decoder<RCSServerURI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSServerURI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSServerURI (el: _Element): RCSServerURI {
    if (!_cached_decoder_for_RCSServerURI) { _cached_decoder_for_RCSServerURI = $._decodeUTF8String; }
    return _cached_decoder_for_RCSServerURI(el);
}

let _cached_encoder_for_RCSServerURI: $.ASN1Encoder<RCSServerURI> | null = null;

/**
 * @summary Encodes a(n) RCSServerURI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSServerURI, encoded as an ASN.1 Element.
 */
export
function _encode_RCSServerURI (value: RCSServerURI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSServerURI) { _cached_encoder_for_RCSServerURI = $._encodeUTF8String; }
    return _cached_encoder_for_RCSServerURI(value, elGetter);
}


/* eslint-enable */
