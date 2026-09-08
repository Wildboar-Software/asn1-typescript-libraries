/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary SystemResourceAvailabilityErrors
 * @description
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
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_generic: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @constant
 * @type {number}
 */
export
const generic: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_resourceBusy
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_resourceBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceBusy
 * @constant
 * @type {number}
 */
export
const resourceBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_internalResourceBusy
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_internalResourceBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.internalResourceBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalResourceBusy
 * @constant
 * @type {number}
 */
export
const internalResourceBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.internalResourceBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_classifierBusy
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_classifierBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.classifierBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary classifierBusy
 * @constant
 * @type {number}
 */
export
const classifierBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.classifierBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_noMediaChannelsAvailable
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_noMediaChannelsAvailable: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.noMediaChannelsAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noMediaChannelsAvailable
 * @constant
 * @type {number}
 */
export
const noMediaChannelsAvailable: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.noMediaChannelsAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_channelsInUseForBridgedDevices
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_channelsInUseForBridgedDevices: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.channelsInUseForBridgedDevices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary channelsInUseForBridgedDevices
 * @constant
 * @type {number}
 */
export
const channelsInUseForBridgedDevices: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.channelsInUseForBridgedDevices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_channelsInUseForData
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_channelsInUseForData: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.channelsInUseForData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary channelsInUseForData
 * @constant
 * @type {number}
 */
export
const channelsInUseForData: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.channelsInUseForData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_toneDetectorBusy
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_toneDetectorBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.toneDetectorBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toneDetectorBusy
 * @constant
 * @type {number}
 */
export
const toneDetectorBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.toneDetectorBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_toneGeneratorBusy
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_toneGeneratorBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.toneGeneratorBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toneGeneratorBusy
 * @constant
 * @type {number}
 */
export
const toneGeneratorBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.toneGeneratorBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_networkBusy
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_networkBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.networkBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkBusy
 * @constant
 * @type {number}
 */
export
const networkBusy: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.networkBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_resourceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_resourceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceOutOfService
 * @constant
 * @type {number}
 */
export
const resourceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_deviceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_deviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.deviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deviceOutOfService
 * @constant
 * @type {number}
 */
export
const deviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.deviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_activeDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_activeDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.activeDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activeDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const activeDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.activeDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_calledDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_calledDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.calledDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const calledDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.calledDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_callingDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_callingDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.callingDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const callingDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.callingDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_callToParkDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_callToParkDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.callToParkDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callToParkDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const callToParkDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.callToParkDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_destinationDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_destinationDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.destinationDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destinationDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const destinationDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.destinationDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_divertingDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_divertingDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.divertingDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary divertingDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const divertingDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.divertingDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_heldDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_heldDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.heldDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary heldDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const heldDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.heldDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_parkToDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_parkToDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.parkToDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary parkToDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const parkToDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.parkToDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_pickupDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_pickupDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.pickupDeviceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pickupDeviceOutOfService
 * @constant
 * @type {number}
 */
export
const pickupDeviceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.pickupDeviceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_networkOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_networkOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.networkOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkOutOfService
 * @constant
 * @type {number}
 */
export
const networkOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.networkOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_otherResourceOutOfService
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_otherResourceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.otherResourceOutOfService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otherResourceOutOfService
 * @constant
 * @type {number}
 */
export
const otherResourceOutOfService: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.otherResourceOutOfService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_resourceLimitExceeded
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_resourceLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceLimitExceeded
 * @constant
 * @type {number}
 */
export
const resourceLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.resourceLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_overallMonitorLimitExceeded
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_overallMonitorLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.overallMonitorLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overallMonitorLimitExceeded
 * @constant
 * @type {number}
 */
export
const overallMonitorLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.overallMonitorLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_conferenceMemberLimitExceeded
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_conferenceMemberLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.conferenceMemberLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conferenceMemberLimitExceeded
 * @constant
 * @type {number}
 */
export
const conferenceMemberLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.conferenceMemberLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_registrationLimitExceeded
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_registrationLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.registrationLimitExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registrationLimitExceeded
 * @constant
 * @type {number}
 */
export
const registrationLimitExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.registrationLimitExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_conferenceResourceCannotBeSatisfied
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_conferenceResourceCannotBeSatisfied: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.conferenceResourceCannotBeSatisfied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conferenceResourceCannotBeSatisfied
 * @constant
 * @type {number}
 */
export
const conferenceResourceCannotBeSatisfied: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.conferenceResourceCannotBeSatisfied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_maxDevicesExceeded
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_maxDevicesExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.maxDevicesExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxDevicesExceeded
 * @constant
 * @type {number}
 */
export
const maxDevicesExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.maxDevicesExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_startTimeOutOfRange
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_startTimeOutOfRange: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.startTimeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startTimeOutOfRange
 * @constant
 * @type {number}
 */
export
const startTimeOutOfRange: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.startTimeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SystemResourceAvailabilityErrors_durationExceeded
 * @constant
 * @type {number}
 */
export
const SystemResourceAvailabilityErrors_durationExceeded: SystemResourceAvailabilityErrors = SystemResourceAvailabilityErrors.durationExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary durationExceeded
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
