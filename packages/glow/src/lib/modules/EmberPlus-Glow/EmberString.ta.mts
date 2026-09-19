/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EmberString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmberString  ::=  UTF8String
 * ```
 */
export
type EmberString = UTF8String; // UTF8String

let _cached_decoder_for_EmberString: $.ASN1Decoder<EmberString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EmberString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EmberString (el: _Element): EmberString {
    if (!_cached_decoder_for_EmberString) { _cached_decoder_for_EmberString = $._decodeUTF8String; }
    return _cached_decoder_for_EmberString(el);
}

let _cached_encoder_for_EmberString: $.ASN1Encoder<EmberString> | null = null;

/**
 * @summary Encodes a(n) EmberString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmberString, encoded as an ASN.1 Element.
 */
export
function _encode_EmberString (value: EmberString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EmberString) { _cached_encoder_for_EmberString = $._encodeUTF8String; }
    return _cached_encoder_for_EmberString(value, elGetter);
}


/* eslint-enable */
