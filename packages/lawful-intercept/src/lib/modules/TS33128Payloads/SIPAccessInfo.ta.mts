/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPAccessInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPAccessInfo  ::=  UTF8String
 * ```
 */
export
type SIPAccessInfo = UTF8String; // UTF8String

let _cached_decoder_for_SIPAccessInfo: $.ASN1Decoder<SIPAccessInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPAccessInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPAccessInfo (el: _Element): SIPAccessInfo {
    if (!_cached_decoder_for_SIPAccessInfo) { _cached_decoder_for_SIPAccessInfo = $._decodeUTF8String; }
    return _cached_decoder_for_SIPAccessInfo(el);
}

let _cached_encoder_for_SIPAccessInfo: $.ASN1Encoder<SIPAccessInfo> | null = null;

/**
 * @summary Encodes a(n) SIPAccessInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPAccessInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SIPAccessInfo (value: SIPAccessInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPAccessInfo) { _cached_encoder_for_SIPAccessInfo = $._encodeUTF8String; }
    return _cached_encoder_for_SIPAccessInfo(value, elGetter);
}


/* eslint-enable */
