/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GCI  ::=  UTF8String
 * ```
 */
export
type GCI = UTF8String; // UTF8String

let _cached_decoder_for_GCI: $.ASN1Decoder<GCI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GCI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GCI (el: _Element): GCI {
    if (!_cached_decoder_for_GCI) { _cached_decoder_for_GCI = $._decodeUTF8String; }
    return _cached_decoder_for_GCI(el);
}

let _cached_encoder_for_GCI: $.ASN1Encoder<GCI> | null = null;

/**
 * @summary Encodes a(n) GCI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GCI, encoded as an ASN.1 Element.
 */
export
function _encode_GCI (value: GCI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GCI) { _cached_encoder_for_GCI = $._encodeUTF8String; }
    return _cached_encoder_for_GCI(value, elGetter);
}


/* eslint-enable */
