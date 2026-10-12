/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPEndpoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPEndpoint  ::=  UTF8String
 * ```
 */
export
type SIPEndpoint = UTF8String; // UTF8String

let _cached_decoder_for_SIPEndpoint: $.ASN1Decoder<SIPEndpoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPEndpoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPEndpoint (el: _Element): SIPEndpoint {
    if (!_cached_decoder_for_SIPEndpoint) { _cached_decoder_for_SIPEndpoint = $._decodeUTF8String; }
    return _cached_decoder_for_SIPEndpoint(el);
}

let _cached_encoder_for_SIPEndpoint: $.ASN1Encoder<SIPEndpoint> | null = null;

/**
 * @summary Encodes a(n) SIPEndpoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPEndpoint, encoded as an ASN.1 Element.
 */
export
function _encode_SIPEndpoint (value: SIPEndpoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPEndpoint) { _cached_encoder_for_SIPEndpoint = $._encodeUTF8String; }
    return _cached_encoder_for_SIPEndpoint(value, elGetter);
}


/* eslint-enable */
