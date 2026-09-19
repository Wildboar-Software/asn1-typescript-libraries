/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VerticalSpeed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VerticalSpeed  ::=  UTF8String
 * ```
 */
export
type VerticalSpeed = UTF8String; // UTF8String

let _cached_decoder_for_VerticalSpeed: $.ASN1Decoder<VerticalSpeed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VerticalSpeed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VerticalSpeed (el: _Element): VerticalSpeed {
    if (!_cached_decoder_for_VerticalSpeed) { _cached_decoder_for_VerticalSpeed = $._decodeUTF8String; }
    return _cached_decoder_for_VerticalSpeed(el);
}

let _cached_encoder_for_VerticalSpeed: $.ASN1Encoder<VerticalSpeed> | null = null;

/**
 * @summary Encodes a(n) VerticalSpeed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VerticalSpeed, encoded as an ASN.1 Element.
 */
export
function _encode_VerticalSpeed (value: VerticalSpeed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VerticalSpeed) { _cached_encoder_for_VerticalSpeed = $._encodeUTF8String; }
    return _cached_encoder_for_VerticalSpeed(value, elGetter);
}


/* eslint-enable */
