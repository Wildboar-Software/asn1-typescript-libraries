/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Altitude
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Altitude  ::=  UTF8String
 * ```
 */
export
type Altitude = UTF8String; // UTF8String

let _cached_decoder_for_Altitude: $.ASN1Decoder<Altitude> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Altitude
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Altitude (el: _Element): Altitude {
    if (!_cached_decoder_for_Altitude) { _cached_decoder_for_Altitude = $._decodeUTF8String; }
    return _cached_decoder_for_Altitude(el);
}

let _cached_encoder_for_Altitude: $.ASN1Encoder<Altitude> | null = null;

/**
 * @summary Encodes a(n) Altitude into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Altitude, encoded as an ASN.1 Element.
 */
export
function _encode_Altitude (value: Altitude, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Altitude) { _cached_encoder_for_Altitude = $._encodeUTF8String; }
    return _cached_encoder_for_Altitude(value, elGetter);
}


/* eslint-enable */
