/* eslint-disable */
import {
    type ENUMERATED
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
 * Which action this IRI reports. Table 10.5.1 maps each EPS value to a REPORT,
 * BEGIN, CONTINUE, or END record. Clause 10.5.0 leaves the event out of a LALS
 * report that is not tied to an event. Values below the E-UTRAN attach are the
 * packet-domain events of table 6.1, used when clause 6.5.1 delivers that IRI
 * on annex B.9 or when clause 10.0 applies Gn/Gp behaviour to the PDN-GW. ProSe
 * values are also mapped in clause 13.3, which requires this HI2. 3GPP TS
 * 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSEvent  ::=  ENUMERATED
 * {
 *     pDPContextActivation                         (1),
 *     startOfInterceptionWithPDPContextActive    (2),
 *     pDPContextDeactivation                        (4),
 *     gPRSAttach                                     (5),
 *     gPRSDetach                                     (6),
 *     locationInfoUpdate                         (10),
 *     sMS                                         (11),
 *     pDPContextModification                        (13),
 *     servingSystem                                (14),
 *     ... ,
 *     startOfInterceptionWithMSAttached            (15),
 *     e-UTRANAttach                                (16),
 *     e-UTRANDetach                                (17),
 *     bearerActivation                            (18),
 *     startOfInterceptionWithActiveBearer            (19),
 *     bearerModification                            (20),
 *     bearerDeactivation                            (21),
 *     uERequestedBearerResourceModification        (22),
 *     uERequestedPDNConnectivity                    (23),
 *     uERequestedPDNDisconnection                (24),
 *     trackingAreaEpsLocationUpdate                (25),
 *     servingEvolvedPacketSystem                    (26),
 *     pMIPAttachTunnelActivation                    (27),
 *     pMIPDetachTunnelDeactivation                (28),
 *     startOfInterceptWithActivePMIPTunnel        (29),
 *     pMIPPdnGwInitiatedPdnDisconnection            (30),
 *     mIPRegistrationTunnelActivation            (31),
 *     mIPDeregistrationTunnelDeactivation        (32),
 *     startOfInterceptWithActiveMIPTunnel        (33),
 *     dSMIPRegistrationTunnelActivation            (34),
 *     dSMIPDeregistrationTunnelDeactivation        (35),
 *     startOfInterceptWithActiveDsmipTunnel        (36),
 *     dSMipHaSwitch                                (37),
 *     pMIPResourceAllocationDeactivation            (38),
 *     mIPResourceAllocationDeactivation            (39),
 *     pMIPsessionModification                    (40),
 *     startOfInterceptWithEUTRANAttachedUE        (41),
 *     dSMIPSessionModification                    (42),
 *     packetDataHeaderInformation                (43),
 *     hSS-Subscriber-Record-Change                (44),
 *     registration-Termination                    (45),
 *     -- FFS
 *     location-Up-Date                            (46),
 *     -- FFS
 *     cancel-Location                                (47),
 *     register-Location                            (48),
 *     location-Information-Request                (49),
 *     proSeRemoteUEReport                        (50),
 *     proSeRemoteUEStartOfCommunication            (51),
 *     proSeRemoteUEEndOfCommunication            (52),
 *     startOfLIwithProSeRemoteUEOngoingComm        (53),
 *     startOfLIforProSeUEtoNWRelay                (54),
 *     scefRequestednonIPPDNDisconnection            (55)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSEvent = _enum_for_EPSEvent | ENUMERATED;

/**
 * @summary EPSEvent_pDPContextActivation
 * @description
 * 
 * PDP-context activation. A successful activation is a BEGIN; an unsuccessful
 * one is a REPORT (table 6.1).
 * Used when PS IRI is delivered on this HI2 (clause 6.5.1) or the
 * PDN-GW reports Gn/Gp behaviour as a GGSN (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_pDPContextActivation = _enum_for_EPSEvent.pDPContextActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextActivation
 * @description
 * 
 * PDP-context activation. A successful activation is a BEGIN; an unsuccessful
 * one is a REPORT (table 6.1).
 * 
 * @constant
 * @type {number}
 */
export
const pDPContextActivation = EPSEvent_pDPContextActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptionWithPDPContextActive
 * @description
 * 
 * Interception started while a PDP context was already active. BEGIN, or
 * optionally CONTINUE (table 6.1).
 * Used when PS IRI is delivered on this HI2 (clause 6.5.1) or the
 * PDN-GW reports Gn/Gp behaviour as a GGSN (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptionWithPDPContextActive = _enum_for_EPSEvent.startOfInterceptionWithPDPContextActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithPDPContextActive
 * @description
 * 
 * Interception started while a PDP context was already active. BEGIN, or
 * optionally CONTINUE (table 6.1).
 * 
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithPDPContextActive = EPSEvent_startOfInterceptionWithPDPContextActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pDPContextDeactivation
 * @description
 * 
 * PDP-context deactivation. END record (table 6.1).
 * Used when PS IRI is delivered on this HI2 (clause 6.5.1) or the
 * PDN-GW reports Gn/Gp behaviour as a GGSN (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_pDPContextDeactivation = _enum_for_EPSEvent.pDPContextDeactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextDeactivation
 * @description
 * 
 * PDP-context deactivation. END record (table 6.1).
 * 
 * @constant
 * @type {number}
 */
export
const pDPContextDeactivation = EPSEvent_pDPContextDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_gPRSAttach
 * @description
 * 
 * GPRS attach, successful or unsuccessful. Clause 6.5.0 also uses this for a
 * mobile-station attach. REPORT (table 6.1).
 * Used when PS IRI is delivered on this HI2 (clause 6.5.1) or the
 * PDN-GW reports Gn/Gp behaviour as a GGSN (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_gPRSAttach = _enum_for_EPSEvent.gPRSAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSAttach
 * @description
 * 
 * GPRS attach, successful or unsuccessful. Clause 6.5.0 also uses this for a
 * mobile-station attach. REPORT (table 6.1).
 * 
 * @constant
 * @type {number}
 */
export
const gPRSAttach = EPSEvent_gPRSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_gPRSDetach
 * @description
 * 
 * GPRS detach. Clause 6.5.0 also uses this for a mobile-station detach. REPORT
 * (table 6.1). Used when PS IRI is delivered on this HI2 (clause 6.5.1) or the
 * PDN-GW reports Gn/Gp behaviour as a GGSN (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_gPRSDetach = _enum_for_EPSEvent.gPRSDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSDetach
 * @description
 * 
 * GPRS detach. Clause 6.5.0 also uses this for a mobile-station detach. REPORT
 * (table 6.1).
 * 
 * @constant
 * @type {number}
 */
export
const gPRSDetach = EPSEvent_gPRSDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_locationInfoUpdate
 * @description
 * 
 * Cell, routing-area, or combined location update. The new SGSN sends it; the
 * old SGSN may send it when the mobile leaves (table 6.6). This is not the EPS
 * tracking-area update. REPORT (table 6.1).
 * Used when PS IRI is delivered on this HI2 (clause 6.5.1) or the
 * PDN-GW reports Gn/Gp behaviour as a GGSN (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_locationInfoUpdate = _enum_for_EPSEvent.locationInfoUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationInfoUpdate
 * @description
 * 
 * Cell, routing-area, or combined location update. The new SGSN sends it; the
 * old SGSN may send it when the mobile leaves (table 6.6). This is not the EPS
 * tracking-area update. REPORT (table 6.1).
 * 
 * @constant
 * @type {number}
 */
export
const locationInfoUpdate = EPSEvent_locationInfoUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_sMS
 * @description
 * 
 * SMS. Mobile-originated and mobile-terminated SMS reports are in table 6.7 and
 * clause 15.2.2. REPORT (table 6.1). Used when PS IRI is delivered on this HI2
 * (clause 6.5.1) or the PDN-GW reports Gn/Gp behaviour as a GGSN (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_sMS = _enum_for_EPSEvent.sMS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS
 * @description
 * 
 * SMS. Mobile-originated and mobile-terminated SMS reports are in table 6.7 and
 * clause 15.2.2. REPORT (table 6.1).
 * 
 * @constant
 * @type {number}
 */
export
const sMS = EPSEvent_sMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pDPContextModification
 * @description
 * 
 * PDP-context modification. CONTINUE (table 6.1).
 * Used when PS IRI is delivered on this HI2 (clause 6.5.1) or the
 * PDN-GW reports Gn/Gp behaviour as a GGSN (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_pDPContextModification = _enum_for_EPSEvent.pDPContextModification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextModification
 * @description
 * 
 * PDP-context modification. CONTINUE (table 6.1).
 * 
 * @constant
 * @type {number}
 */
export
const pDPContextModification = EPSEvent_pDPContextModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_servingSystem
 * @description
 * 
 * Serving system. National option when the mobile is authorized with another
 * operator; cancel location, register location, and a location-information
 * request are then also required (clause 6.5.1.1). REPORT (table 6.1).
 * Used when PS IRI is delivered on this HI2 (clause 6.5.1) or the
 * PDN-GW reports Gn/Gp behaviour as a GGSN (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_servingSystem = _enum_for_EPSEvent.servingSystem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servingSystem
 * @description
 * 
 * Serving system. National option when the mobile is authorized with another
 * operator; cancel location, register location, and a location-information
 * request are then also required (clause 6.5.1.1). REPORT (table 6.1).
 * 
 * @constant
 * @type {number}
 */
export
const servingSystem = EPSEvent_servingSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptionWithMSAttached
 * @description
 * 
 * Interception started after a successful GPRS attach. National option (table
 * 6.1, clause 6.5.1.1). REPORT (table 6.1).
 * Used when PS IRI is delivered on this HI2 (clause 6.5.1) or the
 * PDN-GW reports Gn/Gp behaviour as a GGSN (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptionWithMSAttached = _enum_for_EPSEvent.startOfInterceptionWithMSAttached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithMSAttached
 * @description
 * 
 * Interception started after a successful GPRS attach. National option (table
 * 6.1, clause 6.5.1.1). REPORT (table 6.1).
 * 
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithMSAttached = EPSEvent_startOfInterceptionWithMSAttached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_e_UTRANAttach
 * @description
 * 
 * E-UTRAN attach, successful or unsuccessful, including via a HeNB. REPORT
 * (table 10.5.1.1.1). Also used for IoT NIDD via the SCEF (table 10.5.1 note
 * 2).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_e_UTRANAttach = _enum_for_EPSEvent.e_UTRANAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_UTRANAttach
 * @description
 * 
 * E-UTRAN attach REPORT, including a failed attach and IoT NIDD (clause
 * 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const e_UTRANAttach = EPSEvent_e_UTRANAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_e_UTRANDetach
 * @description
 * 
 * E-UTRAN detach, including via a HeNB. REPORT (table 10.5.1.1.2). Also used
 * for IoT NIDD via the SCEF (table 10.5.1 note 2).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_e_UTRANDetach = _enum_for_EPSEvent.e_UTRANDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_UTRANDetach
 * @description
 * 
 * E-UTRAN detach REPORT, including IoT NIDD (clause 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const e_UTRANDetach = EPSEvent_e_UTRANDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_bearerActivation
 * @description
 * 
 * EPS bearer activation. BEGIN when it succeeds (table 10.5.1.2.1); REPORT when
 * it fails (table 10.5.1.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_bearerActivation = _enum_for_EPSEvent.bearerActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerActivation
 * @description
 * 
 * Bearer activation: BEGIN if successful, REPORT if not (clause 10.5.1).
 * 
 * @constant
 * @type {number}
 */
export
const bearerActivation = EPSEvent_bearerActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptionWithActiveBearer
 * @description
 * 
 * Interception started with at least one EPS bearer already active. BEGIN, or
 * optionally CONTINUE, one record per bearer (table 10.5.1, clause 10.5.1.2).
 * Parameters that the node no longer has need not be stored for a later
 * warrant. Do not send this BEGIN to a LEMF that was already intercepting the
 * target.
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptionWithActiveBearer = _enum_for_EPSEvent.startOfInterceptionWithActiveBearer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithActiveBearer
 * @description
 * 
 * Start of interception with an active bearer: BEGIN or optional CONTINUE
 * (clause 10.5.1.2).
 * 
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithActiveBearer = EPSEvent_startOfInterceptionWithActiveBearer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_bearerModification
 * @description
 * 
 * EPS bearer modification. CONTINUE (table 10.5.1.3.1).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_bearerModification = _enum_for_EPSEvent.bearerModification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerModification
 * @description
 * 
 * Bearer modification CONTINUE (clause 10.5.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const bearerModification = EPSEvent_bearerModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_bearerDeactivation
 * @description
 * 
 * EPS bearer deactivation. END (table 10.5.1.4.1).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_bearerDeactivation = _enum_for_EPSEvent.bearerDeactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerDeactivation
 * @description
 * 
 * Bearer deactivation END (clause 10.5.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const bearerDeactivation = EPSEvent_bearerDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_uERequestedBearerResourceModification
 * @description
 * 
 * The UE requested a bearer-resource modification. REPORT (table 10.5.1.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_uERequestedBearerResourceModification = _enum_for_EPSEvent.uERequestedBearerResourceModification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uERequestedBearerResourceModification
 * @description
 * 
 * UE-requested bearer-resource modification REPORT (clause 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const uERequestedBearerResourceModification = EPSEvent_uERequestedBearerResourceModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_uERequestedPDNConnectivity
 * @description
 * 
 * The UE requested PDN connectivity. REPORT (table 10.5.1.1.6). Also used for
 * IoT NIDD via the SCEF (table 10.5.1 note 2).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_uERequestedPDNConnectivity = _enum_for_EPSEvent.uERequestedPDNConnectivity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uERequestedPDNConnectivity
 * @description
 * 
 * UE-requested PDN connectivity REPORT (clause 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const uERequestedPDNConnectivity = EPSEvent_uERequestedPDNConnectivity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_uERequestedPDNDisconnection
 * @description
 * 
 * The UE requested PDN disconnection. REPORT (table 10.5.1.1.7). Also used for
 * IoT NIDD via the SCEF (table 10.5.1 note 2).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_uERequestedPDNDisconnection = _enum_for_EPSEvent.uERequestedPDNDisconnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uERequestedPDNDisconnection
 * @description
 * 
 * UE-requested PDN disconnection REPORT (clause 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const uERequestedPDNDisconnection = EPSEvent_uERequestedPDNDisconnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_trackingAreaEpsLocationUpdate
 * @description
 * 
 * Tracking-area or EPS location update. REPORT (table 10.5.1.1.5). Also sent
 * for a UE-triggered service request, an X2 handover, an S1 handover, and an
 * S1AP E-RAB modification indication from Dual Connectivity. On an inter-MME
 * update the new MME sends it; the old MME may send it when the UE leaves. Also
 * IoT NIDD (table 10.5.1 note 2).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_trackingAreaEpsLocationUpdate = _enum_for_EPSEvent.trackingAreaEpsLocationUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trackingAreaEpsLocationUpdate
 * @description
 * 
 * Tracking-area or EPS location update REPORT (clause 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const trackingAreaEpsLocationUpdate = EPSEvent_trackingAreaEpsLocationUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_servingEvolvedPacketSystem
 * @description
 * 
 * Serving evolved packet system. REPORT (table 10.5.1.1.12). National option
 * when the UE is authorized with another operator; cancel location, register
 * location, and a location-information request then also apply (clause
 * 10.5.1.1). Also IoT NIDD (note 2). Clause 15.2.3 uses it for SMS over IMS
 * while roaming.
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_servingEvolvedPacketSystem = _enum_for_EPSEvent.servingEvolvedPacketSystem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servingEvolvedPacketSystem
 * @description
 * 
 * Serving EPS REPORT, including the roaming SMS-over-IMS case (clause 10.5.1.1,
 * clause 15.2.3).
 * 
 * @constant
 * @type {number}
 */
export
const servingEvolvedPacketSystem = EPSEvent_servingEvolvedPacketSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pMIPAttachTunnelActivation
 * @description
 * 
 * PMIP attach or tunnel activation. BEGIN when it succeeds (table 10.5.1.2.2);
 * REPORT when it fails (table 10.5.1.1.8).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_pMIPAttachTunnelActivation = _enum_for_EPSEvent.pMIPAttachTunnelActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPAttachTunnelActivation
 * @description
 * 
 * PMIP attach or tunnel activation: BEGIN if successful, REPORT if not.
 * 
 * @constant
 * @type {number}
 */
export
const pMIPAttachTunnelActivation = EPSEvent_pMIPAttachTunnelActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pMIPDetachTunnelDeactivation
 * @description
 * 
 * PMIP detach or tunnel deactivation. END (table 10.5.1.4.2).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_pMIPDetachTunnelDeactivation = _enum_for_EPSEvent.pMIPDetachTunnelDeactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPDetachTunnelDeactivation
 * @description
 * 
 * PMIP detach or tunnel deactivation END (clause 10.5.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const pMIPDetachTunnelDeactivation = EPSEvent_pMIPDetachTunnelDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptWithActivePMIPTunnel
 * @description
 * 
 * Interception started with an active PMIP tunnel. BEGIN, or optionally
 * CONTINUE (table 10.5.1).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptWithActivePMIPTunnel = _enum_for_EPSEvent.startOfInterceptWithActivePMIPTunnel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptWithActivePMIPTunnel
 * @description
 * 
 * Start of interception with an active PMIP tunnel: BEGIN or optional CONTINUE.
 * 
 * @constant
 * @type {number}
 */
export
const startOfInterceptWithActivePMIPTunnel = EPSEvent_startOfInterceptWithActivePMIPTunnel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pMIPPdnGwInitiatedPdnDisconnection
 * @description
 * 
 * The PDN-GW initiated a PDN disconnection over PMIP. END (table 10.5.1.4.6).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_pMIPPdnGwInitiatedPdnDisconnection = _enum_for_EPSEvent.pMIPPdnGwInitiatedPdnDisconnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPPdnGwInitiatedPdnDisconnection
 * @description
 * 
 * PMIP PDN-GW-initiated PDN disconnection END (clause 10.5.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const pMIPPdnGwInitiatedPdnDisconnection = EPSEvent_pMIPPdnGwInitiatedPdnDisconnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_mIPRegistrationTunnelActivation
 * @description
 * 
 * MIP registration or tunnel activation. BEGIN when it succeeds (table
 * 10.5.1.2.3); REPORT when it fails (table 10.5.1.1.9).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_mIPRegistrationTunnelActivation = _enum_for_EPSEvent.mIPRegistrationTunnelActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mIPRegistrationTunnelActivation
 * @description
 * 
 * MIP registration or tunnel activation: BEGIN if successful, REPORT if not.
 * 
 * @constant
 * @type {number}
 */
export
const mIPRegistrationTunnelActivation = EPSEvent_mIPRegistrationTunnelActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_mIPDeregistrationTunnelDeactivation
 * @description
 * 
 * MIP deregistration or tunnel deactivation. END (table 10.5.1.4.3).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_mIPDeregistrationTunnelDeactivation = _enum_for_EPSEvent.mIPDeregistrationTunnelDeactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mIPDeregistrationTunnelDeactivation
 * @description
 * 
 * MIP deregistration or tunnel deactivation END (clause 10.5.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const mIPDeregistrationTunnelDeactivation = EPSEvent_mIPDeregistrationTunnelDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptWithActiveMIPTunnel
 * @description
 * 
 * Interception started with an active MIP tunnel. BEGIN (table 10.5.1). Clause
 * 10.5.1.3 says the optional CONTINUE form of a start-of-interception record
 * does not apply to MIP.
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptWithActiveMIPTunnel = _enum_for_EPSEvent.startOfInterceptWithActiveMIPTunnel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptWithActiveMIPTunnel
 * @description
 * 
 * Start of interception with an active MIP tunnel: BEGIN (clause 10.5.1.2).
 * 
 * @constant
 * @type {number}
 */
export
const startOfInterceptWithActiveMIPTunnel = EPSEvent_startOfInterceptWithActiveMIPTunnel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_dSMIPRegistrationTunnelActivation
 * @description
 * 
 * DSMIP registration or tunnel activation. BEGIN when it succeeds (table
 * 10.5.1.2.4); REPORT when it fails (table 10.5.1.1.10).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_dSMIPRegistrationTunnelActivation = _enum_for_EPSEvent.dSMIPRegistrationTunnelActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSMIPRegistrationTunnelActivation
 * @description
 * 
 * DSMIP registration or tunnel activation: BEGIN if successful, REPORT if not.
 * 
 * @constant
 * @type {number}
 */
export
const dSMIPRegistrationTunnelActivation = EPSEvent_dSMIPRegistrationTunnelActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_dSMIPDeregistrationTunnelDeactivation
 * @description
 * 
 * DSMIP deregistration or tunnel deactivation. END (table 10.5.1.4.4).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_dSMIPDeregistrationTunnelDeactivation = _enum_for_EPSEvent.dSMIPDeregistrationTunnelDeactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSMIPDeregistrationTunnelDeactivation
 * @description
 * 
 * DSMIP deregistration or tunnel deactivation END (clause 10.5.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const dSMIPDeregistrationTunnelDeactivation = EPSEvent_dSMIPDeregistrationTunnelDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptWithActiveDsmipTunnel
 * @description
 * 
 * Interception started with an active DSMIP tunnel. BEGIN (table 10.5.1).
 * Clause 10.5.1.3 says the optional CONTINUE form does not apply to DSMIP.
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptWithActiveDsmipTunnel = _enum_for_EPSEvent.startOfInterceptWithActiveDsmipTunnel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptWithActiveDsmipTunnel
 * @description
 * 
 * Start of interception with an active DSMIP tunnel: BEGIN.
 * 
 * @constant
 * @type {number}
 */
export
const startOfInterceptWithActiveDsmipTunnel = EPSEvent_startOfInterceptWithActiveDsmipTunnel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_dSMipHaSwitch
 * @description
 * 
 * The network ordered a home-agent switch. REPORT (table 10.5.1.1.11).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_dSMipHaSwitch = _enum_for_EPSEvent.dSMipHaSwitch; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSMipHaSwitch
 * @description
 * 
 * DSMIP home-agent switch REPORT (clause 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const dSMipHaSwitch = EPSEvent_dSMipHaSwitch; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pMIPResourceAllocationDeactivation
 * @description
 * 
 * PMIP resource-allocation deactivation. END (table 10.5.1.4.5).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_pMIPResourceAllocationDeactivation = _enum_for_EPSEvent.pMIPResourceAllocationDeactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPResourceAllocationDeactivation
 * @description
 * 
 * PMIP resource-allocation deactivation END (clause 10.5.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const pMIPResourceAllocationDeactivation = EPSEvent_pMIPResourceAllocationDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_mIPResourceAllocationDeactivation
 * @description
 * 
 * MIP resource-allocation deactivation. END (table 10.5.1.4.7).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_mIPResourceAllocationDeactivation = _enum_for_EPSEvent.mIPResourceAllocationDeactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mIPResourceAllocationDeactivation
 * @description
 * 
 * MIP resource-allocation deactivation END (clause 10.5.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const mIPResourceAllocationDeactivation = EPSEvent_mIPResourceAllocationDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_pMIPsessionModification
 * @description
 * 
 * PMIP session modification. CONTINUE (table 10.5.1.3.4).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_pMIPsessionModification = _enum_for_EPSEvent.pMIPsessionModification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pMIPsessionModification
 * @description
 * 
 * PMIP session modification CONTINUE (clause 10.5.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const pMIPsessionModification = EPSEvent_pMIPsessionModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfInterceptWithEUTRANAttachedUE
 * @description
 * 
 * Interception started while the UE was E-UTRAN attached. REPORT, one record
 * per PDN connection (table 10.5.1.1.13). Also IoT NIDD (table 10.5.1 note 2).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfInterceptWithEUTRANAttachedUE = _enum_for_EPSEvent.startOfInterceptWithEUTRANAttachedUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptWithEUTRANAttachedUE
 * @description
 * 
 * Start of interception with an E-UTRAN-attached UE: REPORT per PDN connection.
 * 
 * @constant
 * @type {number}
 */
export
const startOfInterceptWithEUTRANAttachedUE = EPSEvent_startOfInterceptWithEUTRANAttachedUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_dSMIPSessionModification
 * @description
 * 
 * DSMIP session modification. CONTINUE (table 10.5.1.3.5).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_dSMIPSessionModification = _enum_for_EPSEvent.dSMIPSessionModification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSMIPSessionModification
 * @description
 * 
 * DSMIP session modification CONTINUE (clause 10.5.1.3).
 * 
 * @constant
 * @type {number}
 */
export
const dSMIPSessionModification = EPSEvent_dSMIPSessionModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_packetDataHeaderInformation
 * @description
 * 
 * Packet-data header report, either per packet or as a summary for one flow.
 * REPORT (clause 10.5.1.1). Table 6.1 uses the same event when a GPRS PDP
 * context is reported on this HI2.
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_packetDataHeaderInformation = _enum_for_EPSEvent.packetDataHeaderInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary packetDataHeaderInformation
 * @description
 * 
 * Packet-data header REPORT for an EPS bearer or, on this HI2, a PDP context.
 * 
 * @constant
 * @type {number}
 */
export
const packetDataHeaderInformation = EPSEvent_packetDataHeaderInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_hSS_Subscriber_Record_Change
 * @description
 * 
 * HSS subscriber-record change of IMSI, MSISDN, A-MSISDN, IMEI, or external
 * identifier. REPORT, national option (table 10.5.1.1.17). Also IoT NIDD (table
 * 10.5.1 note 2).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_hSS_Subscriber_Record_Change = _enum_for_EPSEvent.hSS_Subscriber_Record_Change; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSS_Subscriber_Record_Change
 * @description
 * 
 * HSS subscriber-record change REPORT (clause 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const hSS_Subscriber_Record_Change = EPSEvent_hSS_Subscriber_Record_Change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_registration_Termination
 * @description
 * 
 * The module marks this value for further study. Table 10.5.1 does not map it.
 * IMS registration termination is a separate IMS event (table 7.1), not this
 * value.
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_registration_Termination = _enum_for_EPSEvent.registration_Termination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration_Termination
 * @description
 * 
 * Marked for further study. Table 10.5.1 does not map it.
 * 
 * @constant
 * @type {number}
 */
export
const registration_Termination = EPSEvent_registration_Termination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_location_Up_Date
 * @description
 * 
 * The module marks this value for further study. Table 10.5.1 does not map it.
 * The EPS tracking-area update is a different value.
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_location_Up_Date = _enum_for_EPSEvent.location_Up_Date; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary location_Up_Date
 * @description
 * 
 * Marked for further study. Not the tracking-area update value.
 * 
 * @constant
 * @type {number}
 */
export
const location_Up_Date = EPSEvent_location_Up_Date; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_cancel_Location
 * @description
 * 
 * Cancel location, including a purge from the HSS toward the SGSN. REPORT
 * (table 10.5.1.1.18). Also IoT NIDD (table 10.5.1 note 2).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_cancel_Location = _enum_for_EPSEvent.cancel_Location; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel_Location
 * @description
 * 
 * Cancel location REPORT (clause 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const cancel_Location = EPSEvent_cancel_Location; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_register_Location
 * @description
 * 
 * Register location. REPORT (table 10.5.1.1.19).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_register_Location = _enum_for_EPSEvent.register_Location; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary register_Location
 * @description
 * 
 * Register location REPORT (clause 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const register_Location = EPSEvent_register_Location; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_location_Information_Request
 * @description
 * 
 * Location information request. REPORT (table 10.5.1.1.20).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_location_Information_Request = _enum_for_EPSEvent.location_Information_Request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary location_Information_Request
 * @description
 * 
 * Location information request REPORT (clause 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const location_Information_Request = EPSEvent_location_Information_Request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_proSeRemoteUEReport
 * @description
 * 
 * ProSe remote-UE report. REPORT (table 10.5.1, table 13.3.1-1). Clause 13
 * applies in addition to clause 10 when the target is a remote UE or a
 * UE-to-network relay (clause 10.0).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_proSeRemoteUEReport = _enum_for_EPSEvent.proSeRemoteUEReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proSeRemoteUEReport
 * @description
 * 
 * ProSe remote-UE report: REPORT (clause 13.3).
 * 
 * @constant
 * @type {number}
 */
export
const proSeRemoteUEReport = EPSEvent_proSeRemoteUEReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_proSeRemoteUEStartOfCommunication
 * @description
 * 
 * ProSe remote UE started communication. BEGIN (table 10.5.1, table 13.3.1-1).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_proSeRemoteUEStartOfCommunication = _enum_for_EPSEvent.proSeRemoteUEStartOfCommunication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proSeRemoteUEStartOfCommunication
 * @description
 * 
 * ProSe remote-UE start of communication: BEGIN (clause 13.3).
 * 
 * @constant
 * @type {number}
 */
export
const proSeRemoteUEStartOfCommunication = EPSEvent_proSeRemoteUEStartOfCommunication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_proSeRemoteUEEndOfCommunication
 * @description
 * 
 * ProSe remote UE ended communication. END (table 10.5.1, table 13.3.1-1).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_proSeRemoteUEEndOfCommunication = _enum_for_EPSEvent.proSeRemoteUEEndOfCommunication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proSeRemoteUEEndOfCommunication
 * @description
 * 
 * ProSe remote-UE end of communication: END (clause 13.3).
 * 
 * @constant
 * @type {number}
 */
export
const proSeRemoteUEEndOfCommunication = EPSEvent_proSeRemoteUEEndOfCommunication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfLIwithProSeRemoteUEOngoingComm
 * @description
 * 
 * Interception started during ongoing ProSe remote-UE communication. Table
 * 10.5.1 maps it to BEGIN. Table 13.3.1-1 allows BEGIN or CONTINUE.
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfLIwithProSeRemoteUEOngoingComm = _enum_for_EPSEvent.startOfLIwithProSeRemoteUEOngoingComm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfLIwithProSeRemoteUEOngoingComm
 * @description
 * 
 * Start of interception with ongoing ProSe remote-UE communication (clause
 * 13.3).
 * 
 * @constant
 * @type {number}
 */
export
const startOfLIwithProSeRemoteUEOngoingComm = EPSEvent_startOfLIwithProSeRemoteUEOngoingComm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_startOfLIforProSeUEtoNWRelay
 * @description
 * 
 * Interception started for a ProSe UE-to-network relay. REPORT (table 10.5.1,
 * table 13.3.1-1).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_startOfLIforProSeUEtoNWRelay = _enum_for_EPSEvent.startOfLIforProSeUEtoNWRelay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfLIforProSeUEtoNWRelay
 * @description
 * 
 * Start of interception for a ProSe UE-to-network relay: REPORT.
 * 
 * @constant
 * @type {number}
 */
export
const startOfLIforProSeUEtoNWRelay = EPSEvent_startOfLIforProSeUEtoNWRelay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSEvent_scefRequestednonIPPDNDisconnection
 * @description
 * 
 * The SCEF requested a non-IP PDN disconnection. REPORT (table 10.5.1, table
 * 10.5.1.1.7A).
 * 
 * @constant
 * @type {number}
 */
export
const EPSEvent_scefRequestednonIPPDNDisconnection = _enum_for_EPSEvent.scefRequestednonIPPDNDisconnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary scefRequestednonIPPDNDisconnection
 * @description
 * 
 * SCEF-requested non-IP PDN disconnection REPORT (clause 10.5.1.1).
 * 
 * @constant
 * @type {number}
 */
export
const scefRequestednonIPPDNDisconnection = EPSEvent_scefRequestednonIPPDNDisconnection; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EPSEvent: $.ASN1Decoder<EPSEvent> = $._decodeEnumerated;
export const _encode_EPSEvent: $.ASN1Encoder<EPSEvent> = $._encodeEnumerated;


/* eslint-enable */
