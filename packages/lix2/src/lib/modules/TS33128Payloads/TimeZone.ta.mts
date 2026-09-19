/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeZone  ::=  UTF8String
 * ```
 */
export
type TimeZone = UTF8String; // UTF8String

let _cached_decoder_for_TimeZone: $.ASN1Decoder<TimeZone> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeZone
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeZone (el: _Element): TimeZone {
    if (!_cached_decoder_for_TimeZone) { _cached_decoder_for_TimeZone = $._decodeUTF8String; }
    return _cached_decoder_for_TimeZone(el);
}

let _cached_encoder_for_TimeZone: $.ASN1Encoder<TimeZone> | null = null;

/**
 * @summary Encodes a(n) TimeZone into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeZone, encoded as an ASN.1 Element.
 */
export
function _encode_TimeZone (value: TimeZone, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeZone) { _cached_encoder_for_TimeZone = $._encodeUTF8String; }
    return _cached_encoder_for_TimeZone(value, elGetter);
}


/* eslint-enable */
