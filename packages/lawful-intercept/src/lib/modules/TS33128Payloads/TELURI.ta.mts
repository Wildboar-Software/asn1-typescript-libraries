/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TELURI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TELURI  ::=  UTF8String
 * ```
 */
export
type TELURI = UTF8String; // UTF8String

let _cached_decoder_for_TELURI: $.ASN1Decoder<TELURI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TELURI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TELURI (el: _Element): TELURI {
    if (!_cached_decoder_for_TELURI) { _cached_decoder_for_TELURI = $._decodeUTF8String; }
    return _cached_decoder_for_TELURI(el);
}

let _cached_encoder_for_TELURI: $.ASN1Encoder<TELURI> | null = null;

/**
 * @summary Encodes a(n) TELURI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TELURI, encoded as an ASN.1 Element.
 */
export
function _encode_TELURI (value: TELURI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TELURI) { _cached_encoder_for_TELURI = $._encodeUTF8String; }
    return _cached_encoder_for_TELURI(value, elGetter);
}


/* eslint-enable */
