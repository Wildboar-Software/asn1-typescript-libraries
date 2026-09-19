/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary XMLNamespace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XMLNamespace  ::=  UTF8String
 * ```
 */
export
type XMLNamespace = UTF8String; // UTF8String

let _cached_decoder_for_XMLNamespace: $.ASN1Decoder<XMLNamespace> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) XMLNamespace
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_XMLNamespace (el: _Element): XMLNamespace {
    if (!_cached_decoder_for_XMLNamespace) { _cached_decoder_for_XMLNamespace = $._decodeUTF8String; }
    return _cached_decoder_for_XMLNamespace(el);
}

let _cached_encoder_for_XMLNamespace: $.ASN1Encoder<XMLNamespace> | null = null;

/**
 * @summary Encodes a(n) XMLNamespace into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XMLNamespace, encoded as an ASN.1 Element.
 */
export
function _encode_XMLNamespace (value: XMLNamespace, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_XMLNamespace) { _cached_encoder_for_XMLNamespace = $._encodeUTF8String; }
    return _cached_encoder_for_XMLNamespace(value, elGetter);
}


/* eslint-enable */
