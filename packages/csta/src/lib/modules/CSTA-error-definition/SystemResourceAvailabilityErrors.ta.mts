/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SystemResourceAvailabilityErrors
 * @description
 *
 * The request could not be fulfilled because of a lack of system resources in
 * the serving sub-domain (ECMA-269 §9.3.1, §12.2.14.4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemResourceAvailabilityErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     resourceBusy                     ( 2),
 *     internalResourceBusy                 ( 3),
 *     classifierBusy                     ( 9),
 *     noMediaChannelsAvailable             (10),
 *     channelsInUseForBridgedDevices             (11),
 *     channelsInUseForData                 (12),
 *     toneDetectorBusy                 (13),
 *     toneGeneratorBusy                 (14),
 *     networkBusy                     ( 5),
 *     resourceOutOfService                 ( 4),
 *     deviceOutOfService                 (15),
 *     activeDeviceOutOfService             (16),
 *     calledDeviceOutOfService             (17),
 *     callingDeviceOutOfService             (18),
 *     callToParkDeviceOutOfService             (19),
 *     destinationDeviceOutOfService             (20),
 *     divertingDeviceOutOfService             (21),
 *     heldDeviceOutOfService                 (22),
 *     parkToDeviceOutOfService             (23),
 *     pickupDeviceOutOfService             (24),
 *     networkOutOfService                 ( 6),
 *     otherResourceOutOfService             (25),
 *     resourceLimitExceeded                 (26),
 *     overallMonitorLimitExceeded             ( 7),
 *     conferenceMemberLimitExceeded             ( 8),
 *     registrationLimitExceeded             (27),
 *     conferenceResourceCannotBeSatisfied         (28),
 *     maxDevicesExceeded                (29),
 *     startTimeOutOfRange                (30),
 *     durationExceeded                (31) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SystemResourceAvailabilityErrors {
    generic = 1,
    resourceBusy = 2,
    internalResourceBusy = 3,
    classifierBusy = 9,
    noMediaChannelsAvailable = 10,
    channelsInUseForBridgedDevices = 11,
    channelsInUseForData = 12,
    toneDetectorBusy = 13,
    toneGeneratorBusy = 14,
    networkBusy = 5,
    resourceOutOfService = 4,
    deviceOutOfService = 15,
    activeDeviceOutOfService = 16,
    calledDeviceOutOfService = 17,
    callingDeviceOutOfService = 18,
    callToParkDeviceOutOfService = 19,
    destinationDeviceOutOfService = 20,
    divertingDeviceOutOfService = 21,
    heldDeviceOutOfService = 22,
    parkToDeviceOutOfService = 23,
    pickupDeviceOutOfService = 24,
    networkOutOfService = 6,
    otherResourceOutOfService = 25,
    resourceLimitExceeded = 26,
    overallMonitorLimitExceeded = 7,
    conferenceMemberLimitExceeded = 8,
    registrationLimitExceeded = 27,
    conferenceResourceCannotBeSatisfied = 28,
    maxDevicesExceeded = 29,
    startTimeOutOfRange = 30,
    durationExceeded = 31,
}

/**
 * @summary SystemResourceAvailabilityErrors
 * @description
 *
 * The request could not be fulfilled because of a lack of system resources in
 * the serving sub-domain (ECMA-269 §9.3.1, §12.2.14.4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemResourceAvailabilityErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     resourceBusy                     ( 2),
 *     internalResourceBusy                 ( 3),
 *     classifierBusy                     ( 9),
 *     noMediaChannelsAvailable             (10),
 *     channelsInUseForBridgedDevices             (11),
 *     channelsInUseForData                 (12),
 *     toneDetectorBusy                 (13),
 *     toneGeneratorBusy                 (14),
 *     networkBusy                     ( 5),
 *     resourceOutOfService                 ( 4),
 *     deviceOutOfService                 (15),
 *     activeDeviceOutOfService             (16),
 *     calledDeviceOutOfService             (17),
 *     callingDeviceOutOfService             (18),
 *     callToParkDeviceOutOfService             (19),
 *     destinationDeviceOutOfService             (20),
 *     divertingDeviceOutOfService             (21),
 *     heldDeviceOutOfService                 (22),
 *     parkToDeviceOutOfService             (23),
 *     pickupDeviceOutOfService             (24),
 *     networkOutOfService                 ( 6),
 *     otherResourceOutOfService             (25),
 *     resourceLimitExceeded                 (26),
 *     overallMonitorLimitExceeded             ( 7),
 *     conferenceMemberLimitExceeded             ( 8),
 *     registrationLimitExceeded             (27),
 *     conferenceResourceCannotBeSatisfied         (28),
 *     maxDevicesExceeded                (29),
 *     startTimeOutOfRange                (30),
 *     durationExceeded                (31) }
 * ```
 * 
 * @enum {number}
 */
export
type SystemResourceAvailabilityErrors = _enum_for_SystemResourceAvailabilityErrors;

/**
 * @summary SystemResourceAvailabilityErrors
 * @description
 *
 * The request could not be fulfilled because of a lack of system resources in
 * the serving sub-domain (ECMA-269 §9.3.1, §12.2.14.4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemResourceAvailabilityErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     resourceBusy                     ( 2),
 *     internalResourceBusy                 ( 3),
 *     classifierBusy                     ( 9),
 *     noMediaChannelsAvailable             (10),
 *     channelsInUseForBridgedDevices             (11),
 *     channelsInUseForData                 (12),
 *     toneDetectorBusy                 (13),
 *     toneGeneratorBusy                 (14),
 *     networkBusy                     ( 5),
 *     resourceOutOfService                 ( 4),
 *     deviceOutOfService                 (15),
 *     activeDeviceOutOfService             (16),
 *     calledDeviceOutOfService             (17),
 *     callingDeviceOutOfService             (18),
 *     callToParkDeviceOutOfService             (19),
 *     destinationDeviceOutOfService             (20),
 *     divertingDeviceOutOfService             (21),
 *     heldDeviceOutOfService                 (22),
 *     parkToDeviceOutOfService             (23),
 *     pickupDeviceOutOfService             (24),
 *     networkOutOfService                 ( 6),
 *     otherResourceOutOfService             (25),
 *     resourceLimitExceeded                 (26),
 *     overallMonitorLimitExceeded             ( 7),
 *     conferenceMemberLimitExceeded             ( 8),
 *     registrationLimitExceeded             (27),
 *     conferenceResourceCannotBeSatisfied         (28),
 *     maxDevicesExceeded                (29),
 *     startTimeOutOfRange                (30),
 *     durationExceeded                (31) }
 * ```
 * 
 * @enum {number}
 */
export
const SystemResourceAvailabilityErrors = _enum_for_SystemResourceAvailabilityErrors;

/**
 * @summary SystemResourceAvailabilityErrors_generic
 * @description
 * System resource unavailable; the server cannot be more specific. ECMA-269
 * §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_generic: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @description Alias of {@link SystemResourceAvailabilityErrors_generic}.
 * @constant
 * @type {number}
 */
export
const generic: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_resourceBusy
 * @description
 * The service is supported but unavailable because a resource is busy. ECMA-269
 * §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_resourceBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceBusy
 * @description Alias of {@link SystemResourceAvailabilityErrors_resourceBusy}.
 * @constant
 * @type {number}
 */
export
const resourceBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_internalResourceBusy
 * @description An internal resource is in use. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_internalResourceBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.internalResourceBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalResourceBusy
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_internalResourceBusy}.
 * @constant
 * @type {number}
 */
export
const internalResourceBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.internalResourceBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_classifierBusy
 * @description All available classifiers are in use. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_classifierBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.classifierBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary classifierBusy
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_classifierBusy}.
 * @constant
 * @type {number}
 */
export
const classifierBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.classifierBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_noMediaChannelsAvailable
 * @description
 * No available media-stream channels to complete the request. ECMA-269
 * §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_noMediaChannelsAvailable: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.noMediaChannelsAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noMediaChannelsAvailable
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_noMediaChannelsAvailable}.
 * @constant
 * @type {number}
 */
export
const noMediaChannelsAvailable: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.noMediaChannelsAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_channelsInUseForBridgedDevices
 * @description
 * All applicable media-stream channels are in use by other devices in a
 * bridged-device configuration. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_channelsInUseForBridgedDevices: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.channelsInUseForBridgedDevices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary channelsInUseForBridgedDevices
 * @description
 * Alias of {@link
 * SystemResourceAvailabilityErrors_channelsInUseForBridgedDevices}.
 * @constant
 * @type {number}
 */
export
const channelsInUseForBridgedDevices: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.channelsInUseForBridgedDevices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_channelsInUseForData
 * @description
 * All applicable media-stream channels are in use for digital data. ECMA-269
 * §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_channelsInUseForData: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.channelsInUseForData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary channelsInUseForData
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_channelsInUseForData}.
 * @constant
 * @type {number}
 */
export
const channelsInUseForData: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.channelsInUseForData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_toneDetectorBusy
 * @description All available tone detectors are in use. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_toneDetectorBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.toneDetectorBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toneDetectorBusy
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_toneDetectorBusy}.
 * @constant
 * @type {number}
 */
export
const toneDetectorBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.toneDetectorBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_toneGeneratorBusy
 * @description All available tone generators are in use. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_toneGeneratorBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.toneGeneratorBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toneGeneratorBusy
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_toneGeneratorBusy}.
 * @constant
 * @type {number}
 */
export
const toneGeneratorBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.toneGeneratorBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_networkBusy
 * @description The server sub-domain is busy. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_networkBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.networkBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkBusy
 * @description Alias of {@link SystemResourceAvailabilityErrors_networkBusy}.
 * @constant
 * @type {number}
 */
export
const networkBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.networkBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_resourceOutOfService
 * @description
 * The service is supported but unavailable because a resource is out of
 * service. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_resourceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceOutOfService
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_resourceOutOfService}.
 * @constant
 * @type {number}
 */
export
const resourceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_deviceOutOfService
 * @description
 * A device needed to carry out the service is out of service. ECMA-269
 * §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_deviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.deviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceOutOfService
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_deviceOutOfService}.
 * @constant
 * @type {number}
 */
export
const deviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.deviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_activeDeviceOutOfService
 * @description
 * The device specified in activeCall is out of service. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_activeDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.activeDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activeDeviceOutOfService
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_activeDeviceOutOfService}.
 * @constant
 * @type {number}
 */
export
const activeDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.activeDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_calledDeviceOutOfService
 * @description
 * The device specified in calledDevice is out of service. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_calledDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.calledDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledDeviceOutOfService
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_calledDeviceOutOfService}.
 * @constant
 * @type {number}
 */
export
const calledDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.calledDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_callingDeviceOutOfService
 * @description
 * The device specified in callingDevice is out of service. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_callingDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.callingDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingDeviceOutOfService
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_callingDeviceOutOfService}.
 * @constant
 * @type {number}
 */
export
const callingDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.callingDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_callToParkDeviceOutOfService
 * @description
 * The device specified in callToPark is out of service. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_callToParkDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.callToParkDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callToParkDeviceOutOfService
 * @description
 * Alias of {@link
 * SystemResourceAvailabilityErrors_callToParkDeviceOutOfService}.
 * @constant
 * @type {number}
 */
export
const callToParkDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.callToParkDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_destinationDeviceOutOfService
 * @description
 * The newDestination device is out of service. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_destinationDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.destinationDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destinationDeviceOutOfService
 * @description
 * Alias of {@link
 * SystemResourceAvailabilityErrors_destinationDeviceOutOfService}.
 * @constant
 * @type {number}
 */
export
const destinationDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.destinationDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_divertingDeviceOutOfService
 * @description The diverting device is out of service. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_divertingDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.divertingDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary divertingDeviceOutOfService
 * @description
 * Alias of {@link
 * SystemResourceAvailabilityErrors_divertingDeviceOutOfService}.
 * @constant
 * @type {number}
 */
export
const divertingDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.divertingDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_heldDeviceOutOfService
 * @description
 * The device specified in heldCall is out of service. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_heldDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.heldDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary heldDeviceOutOfService
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_heldDeviceOutOfService}.
 * @constant
 * @type {number}
 */
export
const heldDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.heldDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_parkToDeviceOutOfService
 * @description
 * The device specified in parkTo is out of service. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_parkToDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.parkToDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary parkToDeviceOutOfService
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_parkToDeviceOutOfService}.
 * @constant
 * @type {number}
 */
export
const parkToDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.parkToDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_pickupDeviceOutOfService
 * @description
 * The device in callToBePickedUp is out of service. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_pickupDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.pickupDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pickupDeviceOutOfService
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_pickupDeviceOutOfService}.
 * @constant
 * @type {number}
 */
export
const pickupDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.pickupDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_networkOutOfService
 * @description The server sub-domain is out of service. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_networkOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.networkOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkOutOfService
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_networkOutOfService}.
 * @constant
 * @type {number}
 */
export
const networkOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.networkOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_otherResourceOutOfService
 * @description
 * Some other resource needed to carry out the service is out of service.
 * ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_otherResourceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.otherResourceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otherResourceOutOfService
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_otherResourceOutOfService}.
 * @constant
 * @type {number}
 */
export
const otherResourceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.otherResourceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_resourceLimitExceeded
 * @description
 * The service would exceed the internal usage limit of a resource. ECMA-269
 * §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_resourceLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceLimitExceeded
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_resourceLimitExceeded}.
 * @constant
 * @type {number}
 */
export
const resourceLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_overallMonitorLimitExceeded
 * @description
 * Would exceed a limit on monitors (overall, by type, or both). ECMA-269
 * §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_overallMonitorLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.overallMonitorLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overallMonitorLimitExceeded
 * @description
 * Alias of {@link
 * SystemResourceAvailabilityErrors_overallMonitorLimitExceeded}.
 * @constant
 * @type {number}
 */
export
const overallMonitorLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.overallMonitorLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_conferenceMemberLimitExceeded
 * @description
 * Would exceed the server's conference member limit. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_conferenceMemberLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.conferenceMemberLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conferenceMemberLimitExceeded
 * @description
 * Alias of {@link
 * SystemResourceAvailabilityErrors_conferenceMemberLimitExceeded}.
 * @constant
 * @type {number}
 */
export
const conferenceMemberLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.conferenceMemberLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_registrationLimitExceeded
 * @description
 * Would exceed the switching function's maximum registrations. ECMA-269
 * §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_registrationLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.registrationLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registrationLimitExceeded
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_registrationLimitExceeded}.
 * @constant
 * @type {number}
 */
export
const registrationLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.registrationLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_conferenceResourceCannotBeSatisfied
 * @description
 * A requested conference parameter cannot be satisfied. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_conferenceResourceCannotBeSatisfied: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.conferenceResourceCannotBeSatisfied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conferenceResourceCannotBeSatisfied
 * @description
 * Alias of {@link
 * SystemResourceAvailabilityErrors_conferenceResourceCannotBeSatisfied}.
 * @constant
 * @type {number}
 */
export
const conferenceResourceCannotBeSatisfied: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.conferenceResourceCannotBeSatisfied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_maxDevicesExceeded
 * @description The maxDevices parameter is too large. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_maxDevicesExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.maxDevicesExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxDevicesExceeded
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_maxDevicesExceeded}.
 * @constant
 * @type {number}
 */
export
const maxDevicesExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.maxDevicesExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_startTimeOutOfRange
 * @description startTime is too far in the future. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_startTimeOutOfRange: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.startTimeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startTimeOutOfRange
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_startTimeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const startTimeOutOfRange: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.startTimeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_durationExceeded
 * @description The duration parameter is too large. ECMA-269 §12.2.14.4.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const SystemResourceAvailabilityErrors_durationExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.durationExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary durationExceeded
 * @description
 * Alias of {@link SystemResourceAvailabilityErrors_durationExceeded}.
 * @constant
 * @type {number}
 */
export
const durationExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.durationExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SystemResourceAvailabilityErrors: $.ASN1Decoder<SystemResourceAvailabilityErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemResourceAvailabilityErrors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemResourceAvailabilityErrors (el: _Element): SystemResourceAvailabilityErrors {
    if (!_cached_decoder_for_SystemResourceAvailabilityErrors) { _cached_decoder_for_SystemResourceAvailabilityErrors = $._decodeEnumerated; }
    return _cached_decoder_for_SystemResourceAvailabilityErrors(el);
}

let _cached_encoder_for_SystemResourceAvailabilityErrors: $.ASN1Encoder<SystemResourceAvailabilityErrors> | null = null;

/**
 * @summary Encodes a(n) SystemResourceAvailabilityErrors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemResourceAvailabilityErrors, encoded as an ASN.1 Element.
 */
export
function _encode_SystemResourceAvailabilityErrors (value: SystemResourceAvailabilityErrors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemResourceAvailabilityErrors) { _cached_encoder_for_SystemResourceAvailabilityErrors = $._encodeEnumerated; }
    return _cached_encoder_for_SystemResourceAvailabilityErrors(value, elGetter);
}


/* eslint-enable */
