/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary XMLValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XMLValue  ::=  UTF8String
 * ```
 */
export
type XMLValue = UTF8String; // UTF8String

let _cached_decoder_for_XMLValue: $.ASN1Decoder<XMLValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) XMLValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_XMLValue (el: _Element): XMLValue {
    if (!_cached_decoder_for_XMLValue) { _cached_decoder_for_XMLValue = $._decodeUTF8String; }
    return _cached_decoder_for_XMLValue(el);
}

let _cached_encoder_for_XMLValue: $.ASN1Encoder<XMLValue> | null = null;

/**
 * @summary Encodes a(n) XMLValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XMLValue, encoded as an ASN.1 Element.
 */
export
function _encode_XMLValue (value: XMLValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_XMLValue) { _cached_encoder_for_XMLValue = $._encodeUTF8String; }
    return _cached_encoder_for_XMLValue(value, elGetter);
}


/* eslint-enable */
