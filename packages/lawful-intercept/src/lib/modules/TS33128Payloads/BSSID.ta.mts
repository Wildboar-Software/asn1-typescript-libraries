/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BSSID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BSSID  ::=  UTF8String
 * ```
 */
export
type BSSID = UTF8String; // UTF8String

let _cached_decoder_for_BSSID: $.ASN1Decoder<BSSID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BSSID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BSSID (el: _Element): BSSID {
    if (!_cached_decoder_for_BSSID) { _cached_decoder_for_BSSID = $._decodeUTF8String; }
    return _cached_decoder_for_BSSID(el);
}

let _cached_encoder_for_BSSID: $.ASN1Encoder<BSSID> | null = null;

/**
 * @summary Encodes a(n) BSSID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSSID, encoded as an ASN.1 Element.
 */
export
function _encode_BSSID (value: BSSID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BSSID) { _cached_encoder_for_BSSID = $._encodeUTF8String; }
    return _cached_encoder_for_BSSID(value, elGetter);
}


/* eslint-enable */
