/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSReadStatusText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatusText  ::=  UTF8String
 * ```
 */
export
type MMSReadStatusText = UTF8String; // UTF8String

let _cached_decoder_for_MMSReadStatusText: $.ASN1Decoder<MMSReadStatusText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSReadStatusText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSReadStatusText (el: _Element): MMSReadStatusText {
    if (!_cached_decoder_for_MMSReadStatusText) { _cached_decoder_for_MMSReadStatusText = $._decodeUTF8String; }
    return _cached_decoder_for_MMSReadStatusText(el);
}

let _cached_encoder_for_MMSReadStatusText: $.ASN1Encoder<MMSReadStatusText> | null = null;

/**
 * @summary Encodes a(n) MMSReadStatusText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSReadStatusText, encoded as an ASN.1 Element.
 */
export
function _encode_MMSReadStatusText (value: MMSReadStatusText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSReadStatusText) { _cached_encoder_for_MMSReadStatusText = $._encodeUTF8String; }
    return _cached_encoder_for_MMSReadStatusText(value, elGetter);
}


/* eslint-enable */
