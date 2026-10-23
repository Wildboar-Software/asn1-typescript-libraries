/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MonitoringType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringType  ::=  ENUMERATED {
 *    lossOfConnectivity               ( 0 ),
 *    ueReachability                   ( 1 ),
 *    locationReporting                ( 2 ),
 *    changeOfIMSIIMEISVAssociation    ( 3 ),
 *    roamingStatus                    ( 4 ),
 *    communicationFailure             ( 5 ),
 *    availabilityAfterDDNFailure      ( 6 ),
 *    numberOfUEPerLocation            ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MonitoringType {
    lossOfConnectivity = 0,
    ueReachability = 1,
    locationReporting = 2,
    changeOfIMSIIMEISVAssociation = 3,
    roamingStatus = 4,
    communicationFailure = 5,
    availabilityAfterDDNFailure = 6,
    numberOfUEPerLocation = 7,
}

/**
 * @summary MonitoringType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringType  ::=  ENUMERATED {
 *    lossOfConnectivity               ( 0 ),
 *    ueReachability                   ( 1 ),
 *    locationReporting                ( 2 ),
 *    changeOfIMSIIMEISVAssociation    ( 3 ),
 *    roamingStatus                    ( 4 ),
 *    communicationFailure             ( 5 ),
 *    availabilityAfterDDNFailure      ( 6 ),
 *    numberOfUEPerLocation            ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
type MonitoringType = _enum_for_MonitoringType;

/**
 * @summary MonitoringType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringType  ::=  ENUMERATED {
 *    lossOfConnectivity               ( 0 ),
 *    ueReachability                   ( 1 ),
 *    locationReporting                ( 2 ),
 *    changeOfIMSIIMEISVAssociation    ( 3 ),
 *    roamingStatus                    ( 4 ),
 *    communicationFailure             ( 5 ),
 *    availabilityAfterDDNFailure      ( 6 ),
 *    numberOfUEPerLocation            ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
const MonitoringType = _enum_for_MonitoringType;

/**
 * @summary MonitoringType_lossOfConnectivity
 * @constant
 * @type {number}
 */
export
const MonitoringType_lossOfConnectivity: MonitoringType = MonitoringType.lossOfConnectivity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lossOfConnectivity
 * @constant
 * @type {number}
 */
export
const lossOfConnectivity: MonitoringType = MonitoringType.lossOfConnectivity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_ueReachability
 * @constant
 * @type {number}
 */
export
const MonitoringType_ueReachability: MonitoringType = MonitoringType.ueReachability; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ueReachability
 * @constant
 * @type {number}
 */
export
const ueReachability: MonitoringType = MonitoringType.ueReachability; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_locationReporting
 * @constant
 * @type {number}
 */
export
const MonitoringType_locationReporting: MonitoringType = MonitoringType.locationReporting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationReporting
 * @constant
 * @type {number}
 */
export
const locationReporting: MonitoringType = MonitoringType.locationReporting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_changeOfIMSIIMEISVAssociation
 * @constant
 * @type {number}
 */
export
const MonitoringType_changeOfIMSIIMEISVAssociation: MonitoringType = MonitoringType.changeOfIMSIIMEISVAssociation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changeOfIMSIIMEISVAssociation
 * @constant
 * @type {number}
 */
export
const changeOfIMSIIMEISVAssociation: MonitoringType = MonitoringType.changeOfIMSIIMEISVAssociation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_roamingStatus
 * @constant
 * @type {number}
 */
export
const MonitoringType_roamingStatus: MonitoringType = MonitoringType.roamingStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingStatus
 * @constant
 * @type {number}
 */
export
const roamingStatus: MonitoringType = MonitoringType.roamingStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_communicationFailure
 * @constant
 * @type {number}
 */
export
const MonitoringType_communicationFailure: MonitoringType = MonitoringType.communicationFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary communicationFailure
 * @constant
 * @type {number}
 */
export
const communicationFailure: MonitoringType = MonitoringType.communicationFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_availabilityAfterDDNFailure
 * @constant
 * @type {number}
 */
export
const MonitoringType_availabilityAfterDDNFailure: MonitoringType = MonitoringType.availabilityAfterDDNFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary availabilityAfterDDNFailure
 * @constant
 * @type {number}
 */
export
const availabilityAfterDDNFailure: MonitoringType = MonitoringType.availabilityAfterDDNFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_numberOfUEPerLocation
 * @constant
 * @type {number}
 */
export
const MonitoringType_numberOfUEPerLocation: MonitoringType = MonitoringType.numberOfUEPerLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberOfUEPerLocation
 * @constant
 * @type {number}
 */
export
const numberOfUEPerLocation: MonitoringType = MonitoringType.numberOfUEPerLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MonitoringType: $.ASN1Decoder<MonitoringType> = $._decodeEnumerated;

export
const _encode_MonitoringType: $.ASN1Encoder<MonitoringType> = $._encodeEnumerated;

/* eslint-enable */
