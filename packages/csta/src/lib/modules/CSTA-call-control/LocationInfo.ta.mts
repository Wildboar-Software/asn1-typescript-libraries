/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { GeoPriv, _decode_GeoPriv, _encode_GeoPriv } from "../CSTA-call-control/GeoPriv.ta.mjs";



/**
 * @summary LocationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationInfo  ::=  SEQUENCE OF GeoPriv
 * ```
 */
export
type LocationInfo = GeoPriv[]; // SequenceOfType

let _cached_decoder_for_LocationInfo: $.ASN1Decoder<LocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationInfo (el: _Element): LocationInfo {
    if (!_cached_decoder_for_LocationInfo) { _cached_decoder_for_LocationInfo = $._decodeSequenceOf<GeoPriv>(() => _decode_GeoPriv); }
    return _cached_decoder_for_LocationInfo(el);
}

let _cached_encoder_for_LocationInfo: $.ASN1Encoder<LocationInfo> | null = null;

/**
 * @summary Encodes a(n) LocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_LocationInfo (value: LocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationInfo) { _cached_encoder_for_LocationInfo = $._encodeSequenceOf<GeoPriv>(() => _encode_GeoPriv, $.BER); }
    return _cached_encoder_for_LocationInfo(value, elGetter);
}


/* eslint-enable */
