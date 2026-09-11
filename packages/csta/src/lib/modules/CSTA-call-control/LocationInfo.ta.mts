/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { GeoPriv, _decode_GeoPriv, _encode_GeoPriv } from "../CSTA-call-control/GeoPriv.ta.mjs";



/**
 * @summary LocationInfo
 * @description
 *
 * One PIDF-LO (Presence Information Data Format — Location
 * Object) as defined in IETF RFC 4119 as updated by RFC 5139.
 * Location is in GEOPRIV elements (location-info chunks in GML
 * or civic address, usage-rules, method, provided-by). A
 * GEOPRIV element may be associated with a person or a device
 * (RFC 4479). Multiple GEOPRIV elements may appear in one
 * PIDF-LO. Usage and interpretation follow RFC 4119. CSTA
 * defines two PIDF-LO profile options based on RFC 5491
 * (which rules are normative); the Start Location Tracking
 * Session response indicates which the switch uses for that
 * session. Do not invent XML beyond that. ECMA-269 §6.8,
 * §12.2.18.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 * @see {@link https://www.rfc-editor.org/rfc/rfc4119.html RFC 4119}
 * @see {@link https://www.rfc-editor.org/rfc/rfc5139.html RFC 5139}
 * @see {@link https://www.rfc-editor.org/rfc/rfc5491.html RFC 5491}
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
