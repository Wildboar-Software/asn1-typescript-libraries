/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceAccessIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAccessIdentifier  ::=  UTF8String
 * ```
 */
export
type ServiceAccessIdentifier = UTF8String; // UTF8String

let _cached_decoder_for_ServiceAccessIdentifier: $.ASN1Decoder<ServiceAccessIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAccessIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceAccessIdentifier (el: _Element): ServiceAccessIdentifier {
    if (!_cached_decoder_for_ServiceAccessIdentifier) { _cached_decoder_for_ServiceAccessIdentifier = $._decodeUTF8String; }
    return _cached_decoder_for_ServiceAccessIdentifier(el);
}

let _cached_encoder_for_ServiceAccessIdentifier: $.ASN1Encoder<ServiceAccessIdentifier> | null = null;

/**
 * @summary Encodes a(n) ServiceAccessIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAccessIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceAccessIdentifier (value: ServiceAccessIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceAccessIdentifier) { _cached_encoder_for_ServiceAccessIdentifier = $._encodeUTF8String; }
    return _cached_encoder_for_ServiceAccessIdentifier(value, elGetter);
}


/* eslint-enable */
