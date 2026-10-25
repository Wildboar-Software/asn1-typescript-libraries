/* eslint-disable */
import {
    type ENUMERATED
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
 * Requested kind of location information inside `LocationType`.
 * On an MT-LR this is what Location Type records: the type of
 * location information being requested (category M on
 * LCS-RGMT-CDR, LCS-HGMT-CDR, and LCS-VGMT-CDR; category Oc in
 * online LCS Information). TS 32.271 does not define the
 * enumerated values.
 *
 * 3GPP TS 32.271 V12.1.0 clauses 6.1.3.2.1, 6.1.3.2.2, 6.1.3.2.3,
 * and 6.3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationType-locationEstimateType ::= ENUMERATED {
 *    currentLocation                 ( 0 ),
 *    currentOrLastKnownLocation      ( 1 ),
 *    initialLocation                 ( 2 ),
 *    ... ,
 *    activateDeferredLocation        ( 3 ),
 *    cancelDeferredLocation          ( 4 ),
 *    notificationVerificationOnly    ( 5 )
 * }
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
const LocationType_locationEstimateType_currentLocation = _enum_for_LocationType_locationEstimateType.currentLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentLocation
 * @constant
 * @type {number}
 */
export
const currentLocation = LocationType_locationEstimateType_currentLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_locationEstimateType_currentOrLastKnownLocation
 * @constant
 * @type {number}
 */
export
const LocationType_locationEstimateType_currentOrLastKnownLocation = _enum_for_LocationType_locationEstimateType.currentOrLastKnownLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentOrLastKnownLocation
 * @constant
 * @type {number}
 */
export
const currentOrLastKnownLocation = LocationType_locationEstimateType_currentOrLastKnownLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_locationEstimateType_initialLocation
 * @constant
 * @type {number}
 */
export
const LocationType_locationEstimateType_initialLocation = _enum_for_LocationType_locationEstimateType.initialLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialLocation
 * @constant
 * @type {number}
 */
export
const initialLocation = LocationType_locationEstimateType_initialLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_locationEstimateType_activateDeferredLocation
 * @constant
 * @type {number}
 */
export
const LocationType_locationEstimateType_activateDeferredLocation = _enum_for_LocationType_locationEstimateType.activateDeferredLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activateDeferredLocation
 * @constant
 * @type {number}
 */
export
const activateDeferredLocation = LocationType_locationEstimateType_activateDeferredLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_locationEstimateType_cancelDeferredLocation
 * @constant
 * @type {number}
 */
export
const LocationType_locationEstimateType_cancelDeferredLocation = _enum_for_LocationType_locationEstimateType.cancelDeferredLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelDeferredLocation
 * @constant
 * @type {number}
 */
export
const cancelDeferredLocation = LocationType_locationEstimateType_cancelDeferredLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationType_locationEstimateType_notificationVerificationOnly
 * @constant
 * @type {number}
 */
export
const LocationType_locationEstimateType_notificationVerificationOnly = _enum_for_LocationType_locationEstimateType.notificationVerificationOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notificationVerificationOnly
 * @constant
 * @type {number}
 */
export
const notificationVerificationOnly = LocationType_locationEstimateType_notificationVerificationOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_LocationType_locationEstimateType: $.ASN1Decoder<LocationType_locationEstimateType> = $._decodeEnumerated;

export
const _encode_LocationType_locationEstimateType: $.ASN1Encoder<LocationType_locationEstimateType> = $._encodeEnumerated;

/* eslint-enable */
