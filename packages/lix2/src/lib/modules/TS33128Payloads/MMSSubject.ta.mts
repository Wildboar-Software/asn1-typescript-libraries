/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSSubject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSSubject  ::=  UTF8String
 * ```
 */
export
type MMSSubject = UTF8String; // UTF8String

let _cached_decoder_for_MMSSubject: $.ASN1Decoder<MMSSubject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSSubject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSSubject (el: _Element): MMSSubject {
    if (!_cached_decoder_for_MMSSubject) { _cached_decoder_for_MMSSubject = $._decodeUTF8String; }
    return _cached_decoder_for_MMSSubject(el);
}

let _cached_encoder_for_MMSSubject: $.ASN1Encoder<MMSSubject> | null = null;

/**
 * @summary Encodes a(n) MMSSubject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSSubject, encoded as an ASN.1 Element.
 */
export
function _encode_MMSSubject (value: MMSSubject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSSubject) { _cached_encoder_for_MMSSubject = $._encodeUTF8String; }
    return _cached_encoder_for_MMSSubject(value, elGetter);
}


/* eslint-enable */
