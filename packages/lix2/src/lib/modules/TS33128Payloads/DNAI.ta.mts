/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNAI  ::=  UTF8String
 * ```
 */
export
type DNAI = UTF8String; // UTF8String

let _cached_decoder_for_DNAI: $.ASN1Decoder<DNAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNAI (el: _Element): DNAI {
    if (!_cached_decoder_for_DNAI) { _cached_decoder_for_DNAI = $._decodeUTF8String; }
    return _cached_decoder_for_DNAI(el);
}

let _cached_encoder_for_DNAI: $.ASN1Encoder<DNAI> | null = null;

/**
 * @summary Encodes a(n) DNAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNAI, encoded as an ASN.1 Element.
 */
export
function _encode_DNAI (value: DNAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNAI) { _cached_encoder_for_DNAI = $._encodeUTF8String; }
    return _cached_encoder_for_DNAI(value, elGetter);
}


/* eslint-enable */
