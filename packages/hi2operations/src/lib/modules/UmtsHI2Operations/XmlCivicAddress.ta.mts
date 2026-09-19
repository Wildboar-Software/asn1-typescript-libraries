/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary XmlCivicAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * XmlCivicAddress  ::=  UTF8String
 * ```
 */
export
type XmlCivicAddress = UTF8String; // UTF8String

let _cached_decoder_for_XmlCivicAddress: $.ASN1Decoder<XmlCivicAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) XmlCivicAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_XmlCivicAddress (el: _Element): XmlCivicAddress {
    if (!_cached_decoder_for_XmlCivicAddress) { _cached_decoder_for_XmlCivicAddress = $._decodeUTF8String; }
    return _cached_decoder_for_XmlCivicAddress(el);
}

let _cached_encoder_for_XmlCivicAddress: $.ASN1Encoder<XmlCivicAddress> | null = null;

/**
 * @summary Encodes a(n) XmlCivicAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XmlCivicAddress, encoded as an ASN.1 Element.
 */
export
function _encode_XmlCivicAddress (value: XmlCivicAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_XmlCivicAddress) { _cached_encoder_for_XmlCivicAddress = $._encodeUTF8String; }
    return _cached_encoder_for_XmlCivicAddress(value, elGetter);
}


/* eslint-enable */
