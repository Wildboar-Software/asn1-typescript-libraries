/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Bearer_capability_str
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Bearer-capability-str  ::=  UTF8String
 * ```
 */
export
type Bearer_capability_str = UTF8String; // UTF8String

let _cached_decoder_for_Bearer_capability_str: $.ASN1Decoder<Bearer_capability_str> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Bearer_capability_str
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Bearer_capability_str (el: _Element): Bearer_capability_str {
    if (!_cached_decoder_for_Bearer_capability_str) { _cached_decoder_for_Bearer_capability_str = $._decodeUTF8String; }
    return _cached_decoder_for_Bearer_capability_str(el);
}

let _cached_encoder_for_Bearer_capability_str: $.ASN1Encoder<Bearer_capability_str> | null = null;

/**
 * @summary Encodes a(n) Bearer_capability_str into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bearer_capability_str, encoded as an ASN.1 Element.
 */
export
function _encode_Bearer_capability_str (value: Bearer_capability_str, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Bearer_capability_str) { _cached_encoder_for_Bearer_capability_str = $._encodeUTF8String; }
    return _cached_encoder_for_Bearer_capability_str(value, elGetter);
}


/* eslint-enable */
