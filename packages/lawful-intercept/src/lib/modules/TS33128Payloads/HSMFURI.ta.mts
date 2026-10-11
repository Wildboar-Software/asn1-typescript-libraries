/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HSMFURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HSMFURI  ::=  UTF8String
 * ```
 */
export
type HSMFURI = UTF8String; // UTF8String

let _cached_decoder_for_HSMFURI: $.ASN1Decoder<HSMFURI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HSMFURI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HSMFURI (el: _Element): HSMFURI {
    if (!_cached_decoder_for_HSMFURI) { _cached_decoder_for_HSMFURI = $._decodeUTF8String; }
    return _cached_decoder_for_HSMFURI(el);
}

let _cached_encoder_for_HSMFURI: $.ASN1Encoder<HSMFURI> | null = null;

/**
 * @summary Encodes a(n) HSMFURI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HSMFURI, encoded as an ASN.1 Element.
 */
export
function _encode_HSMFURI (value: HSMFURI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HSMFURI) { _cached_encoder_for_HSMFURI = $._encodeUTF8String; }
    return _cached_encoder_for_HSMFURI(value, elGetter);
}


/* eslint-enable */
