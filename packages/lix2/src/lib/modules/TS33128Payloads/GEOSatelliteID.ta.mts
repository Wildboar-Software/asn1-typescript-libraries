/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GEOSatelliteID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GEOSatelliteID  ::=  UTF8String
 * ```
 */
export
type GEOSatelliteID = UTF8String; // UTF8String

let _cached_decoder_for_GEOSatelliteID: $.ASN1Decoder<GEOSatelliteID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GEOSatelliteID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GEOSatelliteID (el: _Element): GEOSatelliteID {
    if (!_cached_decoder_for_GEOSatelliteID) { _cached_decoder_for_GEOSatelliteID = $._decodeUTF8String; }
    return _cached_decoder_for_GEOSatelliteID(el);
}

let _cached_encoder_for_GEOSatelliteID: $.ASN1Encoder<GEOSatelliteID> | null = null;

/**
 * @summary Encodes a(n) GEOSatelliteID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GEOSatelliteID, encoded as an ASN.1 Element.
 */
export
function _encode_GEOSatelliteID (value: GEOSatelliteID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GEOSatelliteID) { _cached_encoder_for_GEOSatelliteID = $._encodeUTF8String; }
    return _cached_encoder_for_GEOSatelliteID(value, elGetter);
}


/* eslint-enable */
