/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OGCURN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OGCURN  ::=  UTF8String
 * ```
 */
export
type OGCURN = UTF8String; // UTF8String

let _cached_decoder_for_OGCURN: $.ASN1Decoder<OGCURN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OGCURN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OGCURN (el: _Element): OGCURN {
    if (!_cached_decoder_for_OGCURN) { _cached_decoder_for_OGCURN = $._decodeUTF8String; }
    return _cached_decoder_for_OGCURN(el);
}

let _cached_encoder_for_OGCURN: $.ASN1Encoder<OGCURN> | null = null;

/**
 * @summary Encodes a(n) OGCURN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OGCURN, encoded as an ASN.1 Element.
 */
export
function _encode_OGCURN (value: OGCURN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OGCURN) { _cached_encoder_for_OGCURN = $._encodeUTF8String; }
    return _cached_encoder_for_OGCURN(value, elGetter);
}


/* eslint-enable */
