/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSString  ::=  UTF8String
 * ```
 */
export
type MMSString = UTF8String; // UTF8String

let _cached_decoder_for_MMSString: $.ASN1Decoder<MMSString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSString (el: _Element): MMSString {
    if (!_cached_decoder_for_MMSString) { _cached_decoder_for_MMSString = $._decodeUTF8String; }
    return _cached_decoder_for_MMSString(el);
}

let _cached_encoder_for_MMSString: $.ASN1Encoder<MMSString> | null = null;

/**
 * @summary Encodes a(n) MMSString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSString, encoded as an ASN.1 Element.
 */
export
function _encode_MMSString (value: MMSString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSString) { _cached_encoder_for_MMSString = $._encodeUTF8String; }
    return _cached_encoder_for_MMSString(value, elGetter);
}


/* eslint-enable */
