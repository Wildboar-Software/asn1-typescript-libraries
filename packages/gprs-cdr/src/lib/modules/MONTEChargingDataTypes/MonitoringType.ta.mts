/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MonitoringType
 * @description
 *
 * Which Monitoring Event is configured or reported. TS 32.278
 * describes loss of connectivity, UE reachability, location
 * reporting, communication failure, availability after DDN
 * failure, and the number of UEs in a geographic area. It does
 * not describe `changeOfIMSIIMEISVAssociation` or
 * `roamingStatus`.
 *
 * Fields that apply only to some of these values are noted on
 * `MECORecord` and `MonitoringEventReportData`. Maximum Number
 * of Reports is not used for availability after DDN failure.
 * The monitored user is not used for the number of UEs in a
 * geographic area.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2 and 6.1.3.3.
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
 * Which Monitoring Event is configured or reported. TS 32.278
 * describes loss of connectivity, UE reachability, location
 * reporting, communication failure, availability after DDN
 * failure, and the number of UEs in a geographic area. It does
 * not describe `changeOfIMSIIMEISVAssociation` or
 * `roamingStatus`.
 *
 * Fields that apply only to some of these values are noted on
 * `MECORecord` and `MonitoringEventReportData`. Maximum Number
 * of Reports is not used for availability after DDN failure.
 * The monitored user is not used for the number of UEs in a
 * geographic area.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2 and 6.1.3.3.
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
 * Which Monitoring Event is configured or reported. TS 32.278
 * describes loss of connectivity, UE reachability, location
 * reporting, communication failure, availability after DDN
 * failure, and the number of UEs in a geographic area. It does
 * not describe `changeOfIMSIIMEISVAssociation` or
 * `roamingStatus`.
 *
 * Fields that apply only to some of these values are noted on
 * `MECORecord` and `MonitoringEventReportData`. Maximum Number
 * of Reports is not used for availability after DDN failure.
 * The monitored user is not used for the number of UEs in a
 * geographic area.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2 and 6.1.3.3.
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
 * @description
 *
 * Loss of connectivity. Configuration may include
 * `maximumDetectionTime`: the longest period without
 * communication after which the UE is treated as unreachable.
 * `monitoredUser` applies.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringType_lossOfConnectivity: MonitoringType = MonitoringType.lossOfConnectivity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lossOfConnectivity
 * @description
 *
 * Loss of connectivity. See
 * {@link MonitoringType_lossOfConnectivity}.
 *
 * @constant
 * @type {number}
 */
export
const lossOfConnectivity: MonitoringType = MonitoringType.lossOfConnectivity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_ueReachability
 * @description
 *
 * UE reachability. Configuration carries
 * `ReachabilityConfiguration`. A report may carry
 * `reachabilityInformation`. `monitoredUser` applies.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2 and 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringType_ueReachability: MonitoringType = MonitoringType.ueReachability; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ueReachability
 * @description
 *
 * UE reachability. See {@link MonitoringType_ueReachability}.
 *
 * @constant
 * @type {number}
 */
export
const ueReachability: MonitoringType = MonitoringType.ueReachability; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_locationReporting
 * @description
 *
 * Location reporting. Configuration may include `locationType`
 * and `accuracy`. A report may carry `reportedLocation`.
 * `monitoredUser` applies.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2 and 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringType_locationReporting: MonitoringType = MonitoringType.locationReporting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationReporting
 * @description
 *
 * Location reporting. See
 * {@link MonitoringType_locationReporting}.
 *
 * @constant
 * @type {number}
 */
export
const locationReporting: MonitoringType = MonitoringType.locationReporting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_changeOfIMSIIMEISVAssociation
 * @description
 *
 * Present in the abstract syntax. TS 32.278 V19.0.0 does not
 * describe this Monitoring Event.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringType_changeOfIMSIIMEISVAssociation: MonitoringType = MonitoringType.changeOfIMSIIMEISVAssociation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changeOfIMSIIMEISVAssociation
 * @description
 *
 * See {@link MonitoringType_changeOfIMSIIMEISVAssociation}.
 * TS 32.278 V19.0.0 does not describe this value.
 *
 * @constant
 * @type {number}
 */
export
const changeOfIMSIIMEISVAssociation: MonitoringType = MonitoringType.changeOfIMSIIMEISVAssociation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_roamingStatus
 * @description
 *
 * Present in the abstract syntax. TS 32.278 V19.0.0 does not
 * describe this Monitoring Event.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringType_roamingStatus: MonitoringType = MonitoringType.roamingStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingStatus
 * @description
 *
 * See {@link MonitoringType_roamingStatus}. TS 32.278 V19.0.0
 * does not describe this value.
 *
 * @constant
 * @type {number}
 */
export
const roamingStatus: MonitoringType = MonitoringType.roamingStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_communicationFailure
 * @description
 *
 * Communication failure. A report may carry
 * `communicationFailureInformation`, including the RAN or NAS
 * cause. `monitoredUser` applies.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1 and 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringType_communicationFailure: MonitoringType = MonitoringType.communicationFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary communicationFailure
 * @description
 *
 * Communication failure. See
 * {@link MonitoringType_communicationFailure}.
 *
 * @constant
 * @type {number}
 */
export
const communicationFailure: MonitoringType = MonitoringType.communicationFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_availabilityAfterDDNFailure
 * @description
 *
 * Availability after DDN failure. `maximumNumberofReports` does
 * not apply. `monitoredUser` applies. TS 32.278 does not define
 * any further field for this event.
 *
 * 3GPP TS 32.278 V19.0.0 clause 6.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringType_availabilityAfterDDNFailure: MonitoringType = MonitoringType.availabilityAfterDDNFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary availabilityAfterDDNFailure
 * @description
 *
 * Availability after DDN failure. See
 * {@link MonitoringType_availabilityAfterDDNFailure}.
 *
 * @constant
 * @type {number}
 */
export
const availabilityAfterDDNFailure: MonitoringType = MonitoringType.availabilityAfterDDNFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MonitoringType_numberOfUEPerLocation
 * @description
 *
 * Number of UEs present in a geographic area. Configuration
 * carries `listofLocations` and may carry `locationType`. A
 * report carries `listOfNumberOfUEPerLocationReport`. The
 * monitored-user identity is not used.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2, 6.1.3.3 and
 * 6.3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const MonitoringType_numberOfUEPerLocation: MonitoringType = MonitoringType.numberOfUEPerLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberOfUEPerLocation
 * @description
 *
 * Number of UEs present in a geographic area. See
 * {@link MonitoringType_numberOfUEPerLocation}.
 *
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
