/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary LocationServices
 * @description
 *
 * Location services. BIT STRING advertised in ACSE user-information listing
 * which CSTA services or events this association will use. ECMA-285 §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationServices  ::=  BIT STRING
 * {    getLocationInformation                    ( 0),
 *     setLocationInformation                    ( 1),
 *     locationTrackkingSessionResumed                ( 2),
 *     locationTrackkingSessionSuspended            ( 3),
 *     resumeLocationTrackingSession                ( 4),
 *     locationInformationReport                ( 5),
 *     startLocationTrackingSession                ( 6),
 *     stopLocationTrackingSession                ( 7),
 *     suspendLocationTrackingCapabilities            ( 8),
 *     locationSessionInfo                    ( 9) }
 * ```
 */
export
type LocationServices = BIT_STRING;

/**
 * @summary LocationServices_getLocationInformation
 * @description
 * Advertises `getLocationInformation` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const LocationServices_getLocationInformation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary getLocationInformation
 * @description Alias of {@link LocationServices_getLocationInformation}.
 * @constant
 */
export
const getLocationInformation: number = LocationServices_getLocationInformation; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_setLocationInformation
 * @description
 * Advertises `setLocationInformation` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const LocationServices_setLocationInformation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary setLocationInformation
 * @description Alias of {@link LocationServices_setLocationInformation}.
 * @constant
 */
export
const setLocationInformation: number = LocationServices_setLocationInformation; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_locationTrackkingSessionResumed
 * @description
 * Advertises `locationTrackkingSessionResumed` for this association. ECMA-285
 * §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const LocationServices_locationTrackkingSessionResumed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary locationTrackkingSessionResumed
 * @description
 * Alias of {@link LocationServices_locationTrackkingSessionResumed}.
 * @constant
 */
export
const locationTrackkingSessionResumed: number = LocationServices_locationTrackkingSessionResumed; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_locationTrackkingSessionSuspended
 * @description
 * Advertises `locationTrackkingSessionSuspended` for this association. ECMA-285
 * §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const LocationServices_locationTrackkingSessionSuspended: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary locationTrackkingSessionSuspended
 * @description
 * Alias of {@link LocationServices_locationTrackkingSessionSuspended}.
 * @constant
 */
export
const locationTrackkingSessionSuspended: number = LocationServices_locationTrackkingSessionSuspended; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_resumeLocationTrackingSession
 * @description
 * Advertises `resumeLocationTrackingSession` for this association. ECMA-285
 * §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const LocationServices_resumeLocationTrackingSession: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary resumeLocationTrackingSession
 * @description Alias of {@link LocationServices_resumeLocationTrackingSession}.
 * @constant
 */
export
const resumeLocationTrackingSession: number = LocationServices_resumeLocationTrackingSession; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_locationInformationReport
 * @description
 * Advertises `locationInformationReport` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const LocationServices_locationInformationReport: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary locationInformationReport
 * @description Alias of {@link LocationServices_locationInformationReport}.
 * @constant
 */
export
const locationInformationReport: number = LocationServices_locationInformationReport; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_startLocationTrackingSession
 * @description
 * Advertises `startLocationTrackingSession` for this association. ECMA-285
 * §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const LocationServices_startLocationTrackingSession: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary startLocationTrackingSession
 * @description Alias of {@link LocationServices_startLocationTrackingSession}.
 * @constant
 */
export
const startLocationTrackingSession: number = LocationServices_startLocationTrackingSession; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_stopLocationTrackingSession
 * @description
 * Advertises `stopLocationTrackingSession` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const LocationServices_stopLocationTrackingSession: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary stopLocationTrackingSession
 * @description Alias of {@link LocationServices_stopLocationTrackingSession}.
 * @constant
 */
export
const stopLocationTrackingSession: number = LocationServices_stopLocationTrackingSession; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_suspendLocationTrackingCapabilities
 * @description
 * Advertises `suspendLocationTrackingCapabilities` for this association.
 * ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const LocationServices_suspendLocationTrackingCapabilities: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary suspendLocationTrackingCapabilities
 * @description
 * Alias of {@link LocationServices_suspendLocationTrackingCapabilities}.
 * @constant
 */
export
const suspendLocationTrackingCapabilities: number = LocationServices_suspendLocationTrackingCapabilities; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_locationSessionInfo
 * @description
 * Advertises `locationSessionInfo` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const LocationServices_locationSessionInfo: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary locationSessionInfo
 * @description Alias of {@link LocationServices_locationSessionInfo}.
 * @constant
 */
export
const locationSessionInfo: number = LocationServices_locationSessionInfo; /* SHORT_NAMED_BIT */

let _cached_decoder_for_LocationServices: $.ASN1Decoder<LocationServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationServices (el: _Element): LocationServices {
    if (!_cached_decoder_for_LocationServices) { _cached_decoder_for_LocationServices = $._decodeBitString; }
    return _cached_decoder_for_LocationServices(el);
}

let _cached_encoder_for_LocationServices: $.ASN1Encoder<LocationServices> | null = null;

/**
 * @summary Encodes a(n) LocationServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationServices, encoded as an ASN.1 Element.
 */
export
function _encode_LocationServices (value: LocationServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationServices) { _cached_encoder_for_LocationServices = $._encodeBitString; }
    return _cached_encoder_for_LocationServices(value, elGetter);
}


/* eslint-enable */
