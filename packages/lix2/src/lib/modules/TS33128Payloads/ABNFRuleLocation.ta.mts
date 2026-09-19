/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ABNFRuleLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ABNFRuleLocation  ::=  UTF8String
 * ```
 */
export
type ABNFRuleLocation = UTF8String; // UTF8String

let _cached_decoder_for_ABNFRuleLocation: $.ASN1Decoder<ABNFRuleLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ABNFRuleLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ABNFRuleLocation (el: _Element): ABNFRuleLocation {
    if (!_cached_decoder_for_ABNFRuleLocation) { _cached_decoder_for_ABNFRuleLocation = $._decodeUTF8String; }
    return _cached_decoder_for_ABNFRuleLocation(el);
}

let _cached_encoder_for_ABNFRuleLocation: $.ASN1Encoder<ABNFRuleLocation> | null = null;

/**
 * @summary Encodes a(n) ABNFRuleLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ABNFRuleLocation, encoded as an ASN.1 Element.
 */
export
function _encode_ABNFRuleLocation (value: ABNFRuleLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ABNFRuleLocation) { _cached_encoder_for_ABNFRuleLocation = $._encodeUTF8String; }
    return _cached_encoder_for_ABNFRuleLocation(value, elGetter);
}


/* eslint-enable */
