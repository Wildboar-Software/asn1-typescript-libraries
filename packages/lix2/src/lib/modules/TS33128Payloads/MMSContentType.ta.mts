/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSContentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSContentType  ::=  UTF8String
 * ```
 */
export
type MMSContentType = UTF8String; // UTF8String

let _cached_decoder_for_MMSContentType: $.ASN1Decoder<MMSContentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSContentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSContentType (el: _Element): MMSContentType {
    if (!_cached_decoder_for_MMSContentType) { _cached_decoder_for_MMSContentType = $._decodeUTF8String; }
    return _cached_decoder_for_MMSContentType(el);
}

let _cached_encoder_for_MMSContentType: $.ASN1Encoder<MMSContentType> | null = null;

/**
 * @summary Encodes a(n) MMSContentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSContentType, encoded as an ASN.1 Element.
 */
export
function _encode_MMSContentType (value: MMSContentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSContentType) { _cached_encoder_for_MMSContentType = $._encodeUTF8String; }
    return _cached_encoder_for_MMSContentType(value, elGetter);
}


/* eslint-enable */
