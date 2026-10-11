/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SatelliteID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SatelliteID  ::=  UTF8String
 * ```
 */
export
type SatelliteID = UTF8String; // UTF8String

let _cached_decoder_for_SatelliteID: $.ASN1Decoder<SatelliteID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SatelliteID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SatelliteID (el: _Element): SatelliteID {
    if (!_cached_decoder_for_SatelliteID) { _cached_decoder_for_SatelliteID = $._decodeUTF8String; }
    return _cached_decoder_for_SatelliteID(el);
}

let _cached_encoder_for_SatelliteID: $.ASN1Encoder<SatelliteID> | null = null;

/**
 * @summary Encodes a(n) SatelliteID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SatelliteID, encoded as an ASN.1 Element.
 */
export
function _encode_SatelliteID (value: SatelliteID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SatelliteID) { _cached_encoder_for_SatelliteID = $._encodeUTF8String; }
    return _cached_encoder_for_SatelliteID(value, elGetter);
}


/* eslint-enable */
