/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HomeNetworkIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HomeNetworkIdentifier  ::=  UTF8String
 * ```
 */
export
type HomeNetworkIdentifier = UTF8String; // UTF8String

let _cached_decoder_for_HomeNetworkIdentifier: $.ASN1Decoder<HomeNetworkIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HomeNetworkIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HomeNetworkIdentifier (el: _Element): HomeNetworkIdentifier {
    if (!_cached_decoder_for_HomeNetworkIdentifier) { _cached_decoder_for_HomeNetworkIdentifier = $._decodeUTF8String; }
    return _cached_decoder_for_HomeNetworkIdentifier(el);
}

let _cached_encoder_for_HomeNetworkIdentifier: $.ASN1Encoder<HomeNetworkIdentifier> | null = null;

/**
 * @summary Encodes a(n) HomeNetworkIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HomeNetworkIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_HomeNetworkIdentifier (value: HomeNetworkIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HomeNetworkIdentifier) { _cached_encoder_for_HomeNetworkIdentifier = $._encodeUTF8String; }
    return _cached_encoder_for_HomeNetworkIdentifier(value, elGetter);
}


/* eslint-enable */
