/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LocationType_locationEstimateType {
    currentLocation = 0,
    currentOrLastKnownLocation = 1,
    initialLocation = 2,
    activateDeferredLocation = 3,
    cancelDeferredLocation = 4,
    notificationVerificationOnly = 5,
}

/**
 * @summary LocationType_locationEstimateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType-locationEstimateType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type LocationType_locationEstimateType = _enum_for_LocationType_locationEstimateType | ENUMERATED;

/**
 * @summary LocationType_locationEstimateType_currentLocation
 * @constant
 * @type {number}
 */
export
const LocationType_locationEstimateType_currentLocation: LocationType_locationEstimateType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentLocation
 * @constant
 * @type {number}
 */
export
const currentLocation: LocationType_locationEstimateType = LocationType_locationEstimateType_currentLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_locationEstimateType_currentOrLastKnownLocation
 * @constant
 * @type {number}
 */
export
const LocationType_locationEstimateType_currentOrLastKnownLocation: LocationType_locationEstimateType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentOrLastKnownLocation
 * @constant
 * @type {number}
 */
export
const currentOrLastKnownLocation: LocationType_locationEstimateType = LocationType_locationEstimateType_currentOrLastKnownLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_locationEstimateType_initialLocation
 * @constant
 * @type {number}
 */
export
const LocationType_locationEstimateType_initialLocation: LocationType_locationEstimateType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialLocation
 * @constant
 * @type {number}
 */
export
const initialLocation: LocationType_locationEstimateType = LocationType_locationEstimateType_initialLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_locationEstimateType_activateDeferredLocation
 * @constant
 * @type {number}
 */
export
const LocationType_locationEstimateType_activateDeferredLocation: LocationType_locationEstimateType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activateDeferredLocation
 * @constant
 * @type {number}
 */
export
const activateDeferredLocation: LocationType_locationEstimateType = LocationType_locationEstimateType_activateDeferredLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_locationEstimateType_cancelDeferredLocation
 * @constant
 * @type {number}
 */
export
const LocationType_locationEstimateType_cancelDeferredLocation: LocationType_locationEstimateType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelDeferredLocation
 * @constant
 * @type {number}
 */
export
const cancelDeferredLocation: LocationType_locationEstimateType = LocationType_locationEstimateType_cancelDeferredLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_locationEstimateType_notificationVerificationOnly
 * @constant
 * @type {number}
 */
export
const LocationType_locationEstimateType_notificationVerificationOnly: LocationType_locationEstimateType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notificationVerificationOnly
 * @constant
 * @type {number}
 */
export
const notificationVerificationOnly: LocationType_locationEstimateType = LocationType_locationEstimateType_notificationVerificationOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_LocationType_locationEstimateType: $.ASN1Decoder<LocationType_locationEstimateType> = $._decodeEnumerated;

export
const _encode_LocationType_locationEstimateType: $.ASN1Encoder<LocationType_locationEstimateType> = $._encodeEnumerated;

/* eslint-enable */
