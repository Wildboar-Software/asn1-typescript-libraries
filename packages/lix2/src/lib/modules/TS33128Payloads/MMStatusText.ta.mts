/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMStatusText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusText  ::=  UTF8String
 * ```
 */
export
type MMStatusText = UTF8String; // UTF8String

let _cached_decoder_for_MMStatusText: $.ASN1Decoder<MMStatusText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMStatusText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMStatusText (el: _Element): MMStatusText {
    if (!_cached_decoder_for_MMStatusText) { _cached_decoder_for_MMStatusText = $._decodeUTF8String; }
    return _cached_decoder_for_MMStatusText(el);
}

let _cached_encoder_for_MMStatusText: $.ASN1Encoder<MMStatusText> | null = null;

/**
 * @summary Encodes a(n) MMStatusText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMStatusText, encoded as an ASN.1 Element.
 */
export
function _encode_MMStatusText (value: MMStatusText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMStatusText) { _cached_encoder_for_MMStatusText = $._encodeUTF8String; }
    return _cached_encoder_for_MMStatusText(value, elGetter);
}


/* eslint-enable */
