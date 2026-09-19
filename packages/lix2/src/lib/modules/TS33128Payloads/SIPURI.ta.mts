/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPURI  ::=  UTF8String
 * ```
 */
export
type SIPURI = UTF8String; // UTF8String

let _cached_decoder_for_SIPURI: $.ASN1Decoder<SIPURI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPURI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPURI (el: _Element): SIPURI {
    if (!_cached_decoder_for_SIPURI) { _cached_decoder_for_SIPURI = $._decodeUTF8String; }
    return _cached_decoder_for_SIPURI(el);
}

let _cached_encoder_for_SIPURI: $.ASN1Encoder<SIPURI> | null = null;

/**
 * @summary Encodes a(n) SIPURI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPURI, encoded as an ASN.1 Element.
 */
export
function _encode_SIPURI (value: SIPURI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPURI) { _cached_encoder_for_SIPURI = $._encodeUTF8String; }
    return _cached_encoder_for_SIPURI(value, elGetter);
}


/* eslint-enable */
