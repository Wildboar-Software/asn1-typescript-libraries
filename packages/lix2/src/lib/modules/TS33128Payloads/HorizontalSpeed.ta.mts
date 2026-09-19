/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HorizontalSpeed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HorizontalSpeed  ::=  UTF8String
 * ```
 */
export
type HorizontalSpeed = UTF8String; // UTF8String

let _cached_decoder_for_HorizontalSpeed: $.ASN1Decoder<HorizontalSpeed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HorizontalSpeed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HorizontalSpeed (el: _Element): HorizontalSpeed {
    if (!_cached_decoder_for_HorizontalSpeed) { _cached_decoder_for_HorizontalSpeed = $._decodeUTF8String; }
    return _cached_decoder_for_HorizontalSpeed(el);
}

let _cached_encoder_for_HorizontalSpeed: $.ASN1Encoder<HorizontalSpeed> | null = null;

/**
 * @summary Encodes a(n) HorizontalSpeed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HorizontalSpeed, encoded as an ASN.1 Element.
 */
export
function _encode_HorizontalSpeed (value: HorizontalSpeed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HorizontalSpeed) { _cached_encoder_for_HorizontalSpeed = $._encodeUTF8String; }
    return _cached_encoder_for_HorizontalSpeed(value, elGetter);
}


/* eslint-enable */
