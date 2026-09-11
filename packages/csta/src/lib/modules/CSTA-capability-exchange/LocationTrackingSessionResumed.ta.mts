/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary LocationTrackingSessionResumed
 * @description
 * Capability bitmap for the Location Tracking Session Resumed service (ECMA-269
 * C.22.3, ECMA-285 §9.10). Presence of this entry in `LocationServicesServList`
 * means the SF supports that service. Each set bit is an optional parameter,
 * enumerated value, initial connection state, or miscellaneous characteristic
 * from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationTrackingSessionResumed  ::=  BIT STRING
 * {    locReason                ( 0),
 *     privateData                ( 1),
 *     privateDataInAck            ( 2) }
 * ```
 */
export
type LocationTrackingSessionResumed = BIT_STRING;

/**
 * @summary LocationTrackingSessionResumed_locReason
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.22.3).
 */
export
const LocationTrackingSessionResumed_locReason: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary locReason
 * @constant
 * @description
 * Alias of `LocationTrackingSessionResumed_locReason`.
 */
export
const locReason: number = LocationTrackingSessionResumed_locReason; /* SHORT_NAMED_BIT */

/**
 * @summary LocationTrackingSessionResumed_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.22.3).
 */
export
const LocationTrackingSessionResumed_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `LocationTrackingSessionResumed_privateData`.
 */
export
const privateData: number = LocationTrackingSessionResumed_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary LocationTrackingSessionResumed_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.22.3).
 */
export
const LocationTrackingSessionResumed_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `LocationTrackingSessionResumed_privateDataInAck`.
 */
export
const privateDataInAck: number = LocationTrackingSessionResumed_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_LocationTrackingSessionResumed: $.ASN1Decoder<LocationTrackingSessionResumed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationTrackingSessionResumed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationTrackingSessionResumed (el: _Element): LocationTrackingSessionResumed {
    if (!_cached_decoder_for_LocationTrackingSessionResumed) { _cached_decoder_for_LocationTrackingSessionResumed = $._decodeBitString; }
    return _cached_decoder_for_LocationTrackingSessionResumed(el);
}

let _cached_encoder_for_LocationTrackingSessionResumed: $.ASN1Encoder<LocationTrackingSessionResumed> | null = null;

/**
 * @summary Encodes a(n) LocationTrackingSessionResumed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationTrackingSessionResumed, encoded as an ASN.1 Element.
 */
export
function _encode_LocationTrackingSessionResumed (value: LocationTrackingSessionResumed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationTrackingSessionResumed) { _cached_encoder_for_LocationTrackingSessionResumed = $._encodeBitString; }
    return _cached_encoder_for_LocationTrackingSessionResumed(value, elGetter);
}


/* eslint-enable */
