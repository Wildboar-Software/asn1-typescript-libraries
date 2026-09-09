/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary LocationSessionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationSessionInfo  ::=  BIT STRING
 * {    segmentID                ( 0),
 *     privateData                ( 1) }
 * ```
 */
export
type LocationSessionInfo = BIT_STRING;

/**
 * @summary LocationSessionInfo_segmentID
 * @constant
 */
export
const LocationSessionInfo_segmentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary segmentID
 * @constant
 */
export
const segmentID: number = LocationSessionInfo_segmentID; /* SHORT_NAMED_BIT */

/**
 * @summary LocationSessionInfo_privateData
 * @constant
 */
export
const LocationSessionInfo_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = LocationSessionInfo_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_LocationSessionInfo: $.ASN1Decoder<LocationSessionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationSessionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationSessionInfo (el: _Element): LocationSessionInfo {
    if (!_cached_decoder_for_LocationSessionInfo) { _cached_decoder_for_LocationSessionInfo = $._decodeBitString; }
    return _cached_decoder_for_LocationSessionInfo(el);
}

let _cached_encoder_for_LocationSessionInfo: $.ASN1Encoder<LocationSessionInfo> | null = null;

/**
 * @summary Encodes a(n) LocationSessionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationSessionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_LocationSessionInfo (value: LocationSessionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationSessionInfo) { _cached_encoder_for_LocationSessionInfo = $._encodeBitString; }
    return _cached_encoder_for_LocationSessionInfo(value, elGetter);
}


/* eslint-enable */
