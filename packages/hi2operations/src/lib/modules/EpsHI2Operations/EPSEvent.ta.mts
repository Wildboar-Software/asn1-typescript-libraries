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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_EPSEvent {
    pDPContextActivation = 1,
    startOfInterceptionWithPDPContextActive = 2,
    pDPContextDeactivation = 4,
    gPRSAttach = 5,
    gPRSDetach = 6,
    locationInfoUpdate = 10,
    sMS = 11,
    pDPContextModification = 13,
    servingSystem = 14,
    startOfInterceptionWithMSAttached = 15,
    e_UTRANAttach = 16,
    e_UTRANDetach = 17,
    bearerActivation = 18,
    startOfInterceptionWithActiveBearer = 19,
    bearerModification = 20,
    bearerDeactivation = 21,
    uERequestedBearerResourceModification = 22,
    uERequestedPDNConnectivity = 23,
    uERequestedPDNDisconnection = 24,
    trackingAreaEpsLocationUpdate = 25,
    servingEvolvedPacketSystem = 26,
    pMIPAttachTunnelActivation = 27,
    pMIPDetachTunnelDeactivation = 28,
    startOfInterceptWithActivePMIPTunnel = 29,
    pMIPPdnGwInitiatedPdnDisconnection = 30,
    mIPRegistrationTunnelActivation = 31,
    mIPDeregistrationTunnelDeactivation = 32,
    startOfInterceptWithActiveMIPTunnel = 33,
    dSMIPRegistrationTunnelActivation = 34,
    dSMIPDeregistrationTunnelDeactivation = 35,
    startOfInterceptWithActiveDsmipTunnel = 36,
    dSMipHaSwitch = 37,
    pMIPResourceAllocationDeactivation = 38,
    mIPResourceAllocationDeactivation = 39,
    pMIPsessionModification = 40,
    startOfInterceptWithEUTRANAttachedUE = 41,
    dSMIPSessionModification = 42,
    packetDataHeaderInformation = 43,
    hSS_Subscriber_Record_Change = 44,
    registration_Termination = 45,
    location_Up_Date = 46,
    cancel_Location = 47,
    register_Location = 48,
    location_Information_Request = 49,
    proSeRemoteUEReport = 50,
    proSeRemoteUEStartOfCommunication = 51,
    proSeRemoteUEEndOfCommunication = 52,
    startOfLIwithProSeRemoteUEOngoingComm = 53,
    startOfLIforProSeUEtoNWRelay = 54,
    scefRequestednonIPPDNDisconnection = 55,
}

/**
 * @summary EPSEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSEvent  ::=  ENUMERATED
 * {
 *  pDPContextActivation (1),
 *  startOfInterceptionWithPDPContextActive (2),
 *  pDPContextDeactivation (4),
 *  gPRSAttach (5),
 *  gPRSDetach (6),
 *  locationInfoUpdate (10),
 *  sMS (11),
 *  pDPContextModification (13),
 *  servingSystem (14),
 *  ... ,
 *  startOfInterceptionWithMSAttached (15),
 *  e-UTRANAttach (16),
 *  e-UTRANDetach (17),
 *  bearerActivation (18),
 *  startOfInterceptionWithActiveBearer (19),
 *  bearerModification (20),
 *  bearerDeactivation (21),
 *  uERequestedBearerResourceModification (22),
 *  uERequestedPDNConnectivity (23),
 *  uERequestedPDNDisconnection (24),
 *  trackingAreaEpsLocationUpdate (25),
 *  servingEvolvedPacketSystem (26),
 *  pMIPAttachTunnelActivation (27),
 *  pMIPDetachTunnelDeactivation (28),
 *  startOfInterceptWithActivePMIPTunnel (29),
 *  pMIPPdnGwInitiatedPdnDisconnection (30),
 *  mIPRegistrationTunnelActivation (31),
 *  mIPDeregistrationTunnelDeactivation (32),
 *  startOfInterceptWithActiveMIPTunnel (33),
 *  dSMIPRegistrationTunnelActivation (34),
 *  dSMIPDeregistrationTunnelDeactivation (35),
 *  startOfInterceptWithActiveDsmipTunnel (36),
 *  dSMipHaSwitch (37),
 *  pMIPResourceAllocationDeactivation (38),
 *  mIPResourceAllocationDeactivation (39),
 *  pMIPsessionModification (40),
 *  startOfInterceptWithEUTRANAttachedUE (41),
 *  dSMIPSessionModification (42),
 *  packetDataHeaderInformation (43),
 *  hSS-Subscriber-Record-Change (44),
 *  registration-Termination (45),
 *  -- FFS
 *  location-Up-Date (46),
 *  -- FFS
 *  cancel-Location (47),
 *  register-Location (48),
 *  location-Information-Request (49),
 *  proSeRemoteUEReport (50),
 *  proSeRemoteUEStartOfCommunication (51),
 *  proSeRemoteUEEndOfCommunication (52),
 *  startOfLIwithProSeRemoteUEOngoingComm (53),
 *  startOfLIforProSeUEtoNWRelay (54),
 *  scefRequestednonIPPDNDisconnection (55)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSEvent = _enum_for_EPSEvent | ENUMERATED;

/**
 * @summary EPSEvent_pDPContextActivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_pDPContextActivation: EPSEvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextActivation
 * @constant
 * @type {number}
 */
export
const pDPContextActivation: EPSEvent = EPSEvent_pDPContextActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptionWithPDPContextActive
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptionWithPDPContextActive: EPSEvent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithPDPContextActive
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithPDPContextActive: EPSEvent = EPSEvent_startOfInterceptionWithPDPContextActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pDPContextDeactivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_pDPContextDeactivation: EPSEvent = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextDeactivation
 * @constant
 * @type {number}
 */
export
const pDPContextDeactivation: EPSEvent = EPSEvent_pDPContextDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_gPRSAttach
 * @constant
 * @type {number}
 */
export
const EPSEvent_gPRSAttach: EPSEvent = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSAttach
 * @constant
 * @type {number}
 */
export
const gPRSAttach: EPSEvent = EPSEvent_gPRSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_gPRSDetach
 * @constant
 * @type {number}
 */
export
const EPSEvent_gPRSDetach: EPSEvent = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSDetach
 * @constant
 * @type {number}
 */
export
const gPRSDetach: EPSEvent = EPSEvent_gPRSDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_locationInfoUpdate
 * @constant
 * @type {number}
 */
export
const EPSEvent_locationInfoUpdate: EPSEvent = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationInfoUpdate
 * @constant
 * @type {number}
 */
export
const locationInfoUpdate: EPSEvent = EPSEvent_locationInfoUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_sMS
 * @constant
 * @type {number}
 */
export
const EPSEvent_sMS: EPSEvent = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS
 * @constant
 * @type {number}
 */
export
const sMS: EPSEvent = EPSEvent_sMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pDPContextModification
 * @constant
 * @type {number}
 */
export
const EPSEvent_pDPContextModification: EPSEvent = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextModification
 * @constant
 * @type {number}
 */
export
const pDPContextModification: EPSEvent = EPSEvent_pDPContextModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_servingSystem
 * @constant
 * @type {number}
 */
export
const EPSEvent_servingSystem: EPSEvent = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servingSystem
 * @constant
 * @type {number}
 */
export
const servingSystem: EPSEvent = EPSEvent_servingSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptionWithMSAttached
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptionWithMSAttached: EPSEvent = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithMSAttached
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithMSAttached: EPSEvent = EPSEvent_startOfInterceptionWithMSAttached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_e_UTRANAttach
 * @constant
 * @type {number}
 */
export
const EPSEvent_e_UTRANAttach: EPSEvent = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_UTRANAttach
 * @constant
 * @type {number}
 */
export
const e_UTRANAttach: EPSEvent = EPSEvent_e_UTRANAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_e_UTRANDetach
 * @constant
 * @type {number}
 */
export
const EPSEvent_e_UTRANDetach: EPSEvent = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_UTRANDetach
 * @constant
 * @type {number}
 */
export
const e_UTRANDetach: EPSEvent = EPSEvent_e_UTRANDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_bearerActivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_bearerActivation: EPSEvent = 18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerActivation
 * @constant
 * @type {number}
 */
export
const bearerActivation: EPSEvent = EPSEvent_bearerActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptionWithActiveBearer
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptionWithActiveBearer: EPSEvent = 19; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithActiveBearer
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithActiveBearer: EPSEvent = EPSEvent_startOfInterceptionWithActiveBearer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_bearerModification
 * @constant
 * @type {number}
 */
export
const EPSEvent_bearerModification: EPSEvent = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerModification
 * @constant
 * @type {number}
 */
export
const bearerModification: EPSEvent = EPSEvent_bearerModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_bearerDeactivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_bearerDeactivation: EPSEvent = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerDeactivation
 * @constant
 * @type {number}
 */
export
const bearerDeactivation: EPSEvent = EPSEvent_bearerDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_uERequestedBearerResourceModification
 * @constant
 * @type {number}
 */
export
const EPSEvent_uERequestedBearerResourceModification: EPSEvent = 22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uERequestedBearerResourceModification
 * @constant
 * @type {number}
 */
export
const uERequestedBearerResourceModification: EPSEvent = EPSEvent_uERequestedBearerResourceModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_uERequestedPDNConnectivity
 * @constant
 * @type {number}
 */
export
const EPSEvent_uERequestedPDNConnectivity: EPSEvent = 23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uERequestedPDNConnectivity
 * @constant
 * @type {number}
 */
export
const uERequestedPDNConnectivity: EPSEvent = EPSEvent_uERequestedPDNConnectivity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_uERequestedPDNDisconnection
 * @constant
 * @type {number}
 */
export
const EPSEvent_uERequestedPDNDisconnection: EPSEvent = 24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uERequestedPDNDisconnection
 * @constant
 * @type {number}
 */
export
const uERequestedPDNDisconnection: EPSEvent = EPSEvent_uERequestedPDNDisconnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_trackingAreaEpsLocationUpdate
 * @constant
 * @type {number}
 */
export
const EPSEvent_trackingAreaEpsLocationUpdate: EPSEvent = 25; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trackingAreaEpsLocationUpdate
 * @constant
 * @type {number}
 */
export
const trackingAreaEpsLocationUpdate: EPSEvent = EPSEvent_trackingAreaEpsLocationUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_servingEvolvedPacketSystem
 * @constant
 * @type {number}
 */
export
const EPSEvent_servingEvolvedPacketSystem: EPSEvent = 26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servingEvolvedPacketSystem
 * @constant
 * @type {number}
 */
export
const servingEvolvedPacketSystem: EPSEvent = EPSEvent_servingEvolvedPacketSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pMIPAttachTunnelActivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_pMIPAttachTunnelActivation: EPSEvent = 27; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPAttachTunnelActivation
 * @constant
 * @type {number}
 */
export
const pMIPAttachTunnelActivation: EPSEvent = EPSEvent_pMIPAttachTunnelActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pMIPDetachTunnelDeactivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_pMIPDetachTunnelDeactivation: EPSEvent = 28; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPDetachTunnelDeactivation
 * @constant
 * @type {number}
 */
export
const pMIPDetachTunnelDeactivation: EPSEvent = EPSEvent_pMIPDetachTunnelDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptWithActivePMIPTunnel
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptWithActivePMIPTunnel: EPSEvent = 29; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptWithActivePMIPTunnel
 * @constant
 * @type {number}
 */
export
const startOfInterceptWithActivePMIPTunnel: EPSEvent = EPSEvent_startOfInterceptWithActivePMIPTunnel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pMIPPdnGwInitiatedPdnDisconnection
 * @constant
 * @type {number}
 */
export
const EPSEvent_pMIPPdnGwInitiatedPdnDisconnection: EPSEvent = 30; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPPdnGwInitiatedPdnDisconnection
 * @constant
 * @type {number}
 */
export
const pMIPPdnGwInitiatedPdnDisconnection: EPSEvent = EPSEvent_pMIPPdnGwInitiatedPdnDisconnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_mIPRegistrationTunnelActivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_mIPRegistrationTunnelActivation: EPSEvent = 31; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mIPRegistrationTunnelActivation
 * @constant
 * @type {number}
 */
export
const mIPRegistrationTunnelActivation: EPSEvent = EPSEvent_mIPRegistrationTunnelActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_mIPDeregistrationTunnelDeactivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_mIPDeregistrationTunnelDeactivation: EPSEvent = 32; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mIPDeregistrationTunnelDeactivation
 * @constant
 * @type {number}
 */
export
const mIPDeregistrationTunnelDeactivation: EPSEvent = EPSEvent_mIPDeregistrationTunnelDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptWithActiveMIPTunnel
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptWithActiveMIPTunnel: EPSEvent = 33; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptWithActiveMIPTunnel
 * @constant
 * @type {number}
 */
export
const startOfInterceptWithActiveMIPTunnel: EPSEvent = EPSEvent_startOfInterceptWithActiveMIPTunnel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_dSMIPRegistrationTunnelActivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_dSMIPRegistrationTunnelActivation: EPSEvent = 34; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSMIPRegistrationTunnelActivation
 * @constant
 * @type {number}
 */
export
const dSMIPRegistrationTunnelActivation: EPSEvent = EPSEvent_dSMIPRegistrationTunnelActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_dSMIPDeregistrationTunnelDeactivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_dSMIPDeregistrationTunnelDeactivation: EPSEvent = 35; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSMIPDeregistrationTunnelDeactivation
 * @constant
 * @type {number}
 */
export
const dSMIPDeregistrationTunnelDeactivation: EPSEvent = EPSEvent_dSMIPDeregistrationTunnelDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptWithActiveDsmipTunnel
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptWithActiveDsmipTunnel: EPSEvent = 36; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptWithActiveDsmipTunnel
 * @constant
 * @type {number}
 */
export
const startOfInterceptWithActiveDsmipTunnel: EPSEvent = EPSEvent_startOfInterceptWithActiveDsmipTunnel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_dSMipHaSwitch
 * @constant
 * @type {number}
 */
export
const EPSEvent_dSMipHaSwitch: EPSEvent = 37; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSMipHaSwitch
 * @constant
 * @type {number}
 */
export
const dSMipHaSwitch: EPSEvent = EPSEvent_dSMipHaSwitch; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pMIPResourceAllocationDeactivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_pMIPResourceAllocationDeactivation: EPSEvent = 38; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPResourceAllocationDeactivation
 * @constant
 * @type {number}
 */
export
const pMIPResourceAllocationDeactivation: EPSEvent = EPSEvent_pMIPResourceAllocationDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_mIPResourceAllocationDeactivation
 * @constant
 * @type {number}
 */
export
const EPSEvent_mIPResourceAllocationDeactivation: EPSEvent = 39; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mIPResourceAllocationDeactivation
 * @constant
 * @type {number}
 */
export
const mIPResourceAllocationDeactivation: EPSEvent = EPSEvent_mIPResourceAllocationDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pMIPsessionModification
 * @constant
 * @type {number}
 */
export
const EPSEvent_pMIPsessionModification: EPSEvent = 40; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPsessionModification
 * @constant
 * @type {number}
 */
export
const pMIPsessionModification: EPSEvent = EPSEvent_pMIPsessionModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptWithEUTRANAttachedUE
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptWithEUTRANAttachedUE: EPSEvent = 41; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptWithEUTRANAttachedUE
 * @constant
 * @type {number}
 */
export
const startOfInterceptWithEUTRANAttachedUE: EPSEvent = EPSEvent_startOfInterceptWithEUTRANAttachedUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_dSMIPSessionModification
 * @constant
 * @type {number}
 */
export
const EPSEvent_dSMIPSessionModification: EPSEvent = 42; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSMIPSessionModification
 * @constant
 * @type {number}
 */
export
const dSMIPSessionModification: EPSEvent = EPSEvent_dSMIPSessionModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_packetDataHeaderInformation
 * @constant
 * @type {number}
 */
export
const EPSEvent_packetDataHeaderInformation: EPSEvent = 43; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary packetDataHeaderInformation
 * @constant
 * @type {number}
 */
export
const packetDataHeaderInformation: EPSEvent = EPSEvent_packetDataHeaderInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_hSS_Subscriber_Record_Change
 * @constant
 * @type {number}
 */
export
const EPSEvent_hSS_Subscriber_Record_Change: EPSEvent = 44; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSS_Subscriber_Record_Change
 * @constant
 * @type {number}
 */
export
const hSS_Subscriber_Record_Change: EPSEvent = EPSEvent_hSS_Subscriber_Record_Change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_registration_Termination
 * @constant
 * @type {number}
 */
export
const EPSEvent_registration_Termination: EPSEvent = 45; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration_Termination
 * @constant
 * @type {number}
 */
export
const registration_Termination: EPSEvent = EPSEvent_registration_Termination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_location_Up_Date
 * @constant
 * @type {number}
 */
export
const EPSEvent_location_Up_Date: EPSEvent = 46; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary location_Up_Date
 * @constant
 * @type {number}
 */
export
const location_Up_Date: EPSEvent = EPSEvent_location_Up_Date; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_cancel_Location
 * @constant
 * @type {number}
 */
export
const EPSEvent_cancel_Location: EPSEvent = 47; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel_Location
 * @constant
 * @type {number}
 */
export
const cancel_Location: EPSEvent = EPSEvent_cancel_Location; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_register_Location
 * @constant
 * @type {number}
 */
export
const EPSEvent_register_Location: EPSEvent = 48; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary register_Location
 * @constant
 * @type {number}
 */
export
const register_Location: EPSEvent = EPSEvent_register_Location; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_location_Information_Request
 * @constant
 * @type {number}
 */
export
const EPSEvent_location_Information_Request: EPSEvent = 49; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary location_Information_Request
 * @constant
 * @type {number}
 */
export
const location_Information_Request: EPSEvent = EPSEvent_location_Information_Request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_proSeRemoteUEReport
 * @constant
 * @type {number}
 */
export
const EPSEvent_proSeRemoteUEReport: EPSEvent = 50; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proSeRemoteUEReport
 * @constant
 * @type {number}
 */
export
const proSeRemoteUEReport: EPSEvent = EPSEvent_proSeRemoteUEReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_proSeRemoteUEStartOfCommunication
 * @constant
 * @type {number}
 */
export
const EPSEvent_proSeRemoteUEStartOfCommunication: EPSEvent = 51; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proSeRemoteUEStartOfCommunication
 * @constant
 * @type {number}
 */
export
const proSeRemoteUEStartOfCommunication: EPSEvent = EPSEvent_proSeRemoteUEStartOfCommunication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_proSeRemoteUEEndOfCommunication
 * @constant
 * @type {number}
 */
export
const EPSEvent_proSeRemoteUEEndOfCommunication: EPSEvent = 52; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proSeRemoteUEEndOfCommunication
 * @constant
 * @type {number}
 */
export
const proSeRemoteUEEndOfCommunication: EPSEvent = EPSEvent_proSeRemoteUEEndOfCommunication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfLIwithProSeRemoteUEOngoingComm
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfLIwithProSeRemoteUEOngoingComm: EPSEvent = 53; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfLIwithProSeRemoteUEOngoingComm
 * @constant
 * @type {number}
 */
export
const startOfLIwithProSeRemoteUEOngoingComm: EPSEvent = EPSEvent_startOfLIwithProSeRemoteUEOngoingComm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfLIforProSeUEtoNWRelay
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfLIforProSeUEtoNWRelay: EPSEvent = 54; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfLIforProSeUEtoNWRelay
 * @constant
 * @type {number}
 */
export
const startOfLIforProSeUEtoNWRelay: EPSEvent = EPSEvent_startOfLIforProSeUEtoNWRelay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_scefRequestednonIPPDNDisconnection
 * @constant
 * @type {number}
 */
export
const EPSEvent_scefRequestednonIPPDNDisconnection: EPSEvent = 55; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary scefRequestednonIPPDNDisconnection
 * @constant
 * @type {number}
 */
export
const scefRequestednonIPPDNDisconnection: EPSEvent = EPSEvent_scefRequestednonIPPDNDisconnection; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EPSEvent: $.ASN1Decoder<EPSEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSEvent (el: _Element): EPSEvent {
    if (!_cached_decoder_for_EPSEvent) { _cached_decoder_for_EPSEvent = $._decodeEnumerated; }
    return _cached_decoder_for_EPSEvent(el);
}

let _cached_encoder_for_EPSEvent: $.ASN1Encoder<EPSEvent> | null = null;

/**
 * @summary Encodes a(n) EPSEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSEvent, encoded as an ASN.1 Element.
 */
export
function _encode_EPSEvent (value: EPSEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSEvent) { _cached_encoder_for_EPSEvent = $._encodeEnumerated; }
    return _cached_encoder_for_EPSEvent(value, elGetter);
}


/* eslint-enable */
