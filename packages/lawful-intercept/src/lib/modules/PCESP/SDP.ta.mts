/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SDP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDP  ::=  UTF8String
 * ```
 */
export
type SDP = UTF8String; // UTF8String

let _cached_decoder_for_SDP: $.ASN1Decoder<SDP> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SDP
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SDP (el: _Element): SDP {
    if (!_cached_decoder_for_SDP) { _cached_decoder_for_SDP = $._decodeUTF8String; }
    return _cached_decoder_for_SDP(el);
}

let _cached_encoder_for_SDP: $.ASN1Encoder<SDP> | null = null;

/**
 * @summary Encodes a(n) SDP into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDP, encoded as an ASN.1 Element.
 */
export
function _encode_SDP (value: SDP, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SDP) { _cached_encoder_for_SDP = $._encodeUTF8String; }
    return _cached_encoder_for_SDP(value, elGetter);
}


/* eslint-enable */
