/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExternalASNReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalASNReference  ::=  UTF8String
 * ```
 */
export
type ExternalASNReference = UTF8String; // UTF8String

let _cached_decoder_for_ExternalASNReference: $.ASN1Decoder<ExternalASNReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalASNReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExternalASNReference (el: _Element): ExternalASNReference {
    if (!_cached_decoder_for_ExternalASNReference) { _cached_decoder_for_ExternalASNReference = $._decodeUTF8String; }
    return _cached_decoder_for_ExternalASNReference(el);
}

let _cached_encoder_for_ExternalASNReference: $.ASN1Encoder<ExternalASNReference> | null = null;

/**
 * @summary Encodes a(n) ExternalASNReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalASNReference, encoded as an ASN.1 Element.
 */
export
function _encode_ExternalASNReference (value: ExternalASNReference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExternalASNReference) { _cached_encoder_for_ExternalASNReference = $._encodeUTF8String; }
    return _cached_encoder_for_ExternalASNReference(value, elGetter);
}


/* eslint-enable */
