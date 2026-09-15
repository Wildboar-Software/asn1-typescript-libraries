/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary LocationTrackingSessionSuspended
 * @description
 * Capability bitmap for the Location Tracking Session Suspended service
 * (ECMA-269 C.22.4, ECMA-285 §9.10). Presence of this entry in
 * `LocationServicesServList` means the SF supports that service. Each set bit
 * is an optional parameter, enumerated value, initial connection state, or
 * miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationTrackingSessionSuspended  ::=  BIT STRING
 * {    locReason                ( 0),
 *     locationInfoList            ( 1),
 *     privateData                ( 2),
 *     privateDataInAck            ( 3) }
 * ```
 */
export
type LocationTrackingSessionSuspended = BIT_STRING;

/**
 * @summary LocationTrackingSessionSuspended_locReason
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.22.4).
 */
export
const LocationTrackingSessionSuspended_locReason: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary locReason
 * @constant
 * @description
 * Alias of `LocationTrackingSessionSuspended_locReason`.
 */
export
const locReason: number = LocationTrackingSessionSuspended_locReason; /* SHORT_NAMED_BIT */

/**
 * @summary LocationTrackingSessionSuspended_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.22.4).
 */
export
const LocationTrackingSessionSuspended_locationInfoList: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `LocationTrackingSessionSuspended_locationInfoList`.
 */
export
const locationInfoList: number = LocationTrackingSessionSuspended_locationInfoList; /* SHORT_NAMED_BIT */

/**
 * @summary LocationTrackingSessionSuspended_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.22.4).
 */
export
const LocationTrackingSessionSuspended_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `LocationTrackingSessionSuspended_privateData`.
 */
export
const privateData: number = LocationTrackingSessionSuspended_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary LocationTrackingSessionSuspended_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.22.4).
 */
export
const LocationTrackingSessionSuspended_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `LocationTrackingSessionSuspended_privateDataInAck`.
 */
export
const privateDataInAck: number = LocationTrackingSessionSuspended_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_LocationTrackingSessionSuspended: $.ASN1Decoder<LocationTrackingSessionSuspended> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationTrackingSessionSuspended
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationTrackingSessionSuspended (el: _Element): LocationTrackingSessionSuspended {
    if (!_cached_decoder_for_LocationTrackingSessionSuspended) { _cached_decoder_for_LocationTrackingSessionSuspended = $._decodeBitString; }
    return _cached_decoder_for_LocationTrackingSessionSuspended(el);
}

let _cached_encoder_for_LocationTrackingSessionSuspended: $.ASN1Encoder<LocationTrackingSessionSuspended> | null = null;

/**
 * @summary Encodes a(n) LocationTrackingSessionSuspended into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationTrackingSessionSuspended, encoded as an ASN.1 Element.
 */
export
function _encode_LocationTrackingSessionSuspended (value: LocationTrackingSessionSuspended, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationTrackingSessionSuspended) { _cached_encoder_for_LocationTrackingSessionSuspended = $._encodeBitString; }
    return _cached_encoder_for_LocationTrackingSessionSuspended(value, elGetter);
}


/* eslint-enable */
