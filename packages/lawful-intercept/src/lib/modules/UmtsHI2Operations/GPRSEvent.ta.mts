/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_GPRSEvent {
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
    packetDataHeaderInformation = 16,
    hSS_Subscriber_Record_Change = 17,
    registration_Termination = 18,
    location_Up_Date = 19,
    cancel_Location = 20,
    register_Location = 21,
    location_Information_Request = 22,
}

/**
 * @summary GPRSEvent
 * @description
 * 
 * Packet-domain or HLR action that caused this IRI. Clause 6.5.0 also uses
 * these names for the corresponding mobile-station and PDP-context events. LALS
 * reports are sent with no event parameter.
 * 
 * Table 6.1 maps each event to an IRI-Begin, Continue, End, or Report. Two
 * values, registration termination and location update under a second name, are
 * marked for further study and have no procedure in clause 6.
 * 
 * 3GPP TS 33.108, clause 6.5 and table 6.1.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSEvent  ::=  ENUMERATED
 * {
 *     pDPContextActivation                     (1),
 *     startOfInterceptionWithPDPContextActive    (2),
 *     pDPContextDeactivation                    (4),
 *     gPRSAttach                                 (5),
 *     gPRSDetach                                 (6),
 *     locationInfoUpdate                         (10),
 *     sMS                                     (11),
 *     pDPContextModification                    (13),
 *     servingSystem                            (14),
 *     ... ,
 *     startOfInterceptionWithMSAttached        (15),
 *     packetDataHeaderInformation                (16) ,    hSS-Subscriber-Record-Change            (17),
 *     registration-Termination                (18),
 *     -- FFS
 *     location-Up-Date                        (19),
 *     -- FFS
 *     cancel-Location                            (20),
 *     register-Location                        (21),
 *     location-Information-Request            (22)
 * 
 * }
 * ```
 * 
 * @enum {number}
 */
export
type GPRSEvent = _enum_for_GPRSEvent | ENUMERATED;

/**
 * @summary GPRSEvent_pDPContextActivation
 * @description
 * 
 * PDP-context activation. Success is an IRI-Begin (table 6.10). Failure is an
 * IRI-Report (table 6.5).
 * 
 * 3GPP TS 33.108, table 6.1.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextActivation = _enum_for_GPRSEvent.pDPContextActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextActivation
 * @description
 * 
 * PDP-context activation: Begin if it succeeds, Report if it fails (table 6.1).
 * @constant
 * @type {number}
 */
export
const pDPContextActivation = GPRSEvent_pDPContextActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_startOfInterceptionWithPDPContextActive
 * @description
 * 
 * Interception started while at least one PDP context was active. Send an
 * IRI-Begin for each active context. A Continue is optional (table 6.1). Do not
 * send that Begin to a LEMF that was already intercepting the target.
 * 
 * 3GPP TS 33.108, clause 6.5.1.2 and clause 4.5.3.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_startOfInterceptionWithPDPContextActive = _enum_for_GPRSEvent.startOfInterceptionWithPDPContextActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithPDPContextActive
 * @description
 * 
 * Start of interception with a PDP context already active (clause 6.5.1.2).
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithPDPContextActive = GPRSEvent_startOfInterceptionWithPDPContextActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_pDPContextDeactivation
 * @description
 * 
 * PDP-context deactivation, the IRI-End of the packet communication (table
 * 6.14). If interception itself is turned off while the context stays up, no
 * IRI-End is sent.
 * 
 * 3GPP TS 33.108, table 6.1 and clause 4.5.3.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextDeactivation = _enum_for_GPRSEvent.pDPContextDeactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextDeactivation
 * @description
 * 
 * PDP-context deactivation, reported as an IRI-End (table 6.14).
 * @constant
 * @type {number}
 */
export
const pDPContextDeactivation = GPRSEvent_pDPContextDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_gPRSAttach
 * @description
 * 
 * GPRS attach, successful or not, as an IRI-Report. The same event covers a
 * mobile-station attach. A failed attempt includes the failure cause when it is
 * available.
 * 
 * 3GPP TS 33.108, table 6.3 and clause 6.5.0.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_gPRSAttach = _enum_for_GPRSEvent.gPRSAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSAttach
 * @description
 * 
 * GPRS or mobile-station attach, as an IRI-Report (table 6.3).
 * @constant
 * @type {number}
 */
export
const gPRSAttach = GPRSEvent_gPRSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_gPRSDetach
 * @description
 * 
 * GPRS detach, as an IRI-Report. The same event covers a mobile-station detach.
 * 
 * 3GPP TS 33.108, table 6.4 and clause 6.5.0.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_gPRSDetach = _enum_for_GPRSEvent.gPRSDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSDetach
 * @description
 * 
 * GPRS or mobile-station detach, as an IRI-Report (table 6.4).
 * @constant
 * @type {number}
 */
export
const gPRSDetach = GPRSEvent_gPRSDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_locationInfoUpdate
 * @description
 * 
 * The target changed cell, routing area, or both. An IRI-Report is sent when
 * the mobile station moves to a new SGSN, and optionally when it leaves the old
 * SGSN.
 * 
 * 3GPP TS 33.108, table 6.6.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_locationInfoUpdate = _enum_for_GPRSEvent.locationInfoUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationInfoUpdate
 * @description
 * 
 * Cell or routing-area update, as an IRI-Report (table 6.6).
 * @constant
 * @type {number}
 */
export
const locationInfoUpdate = GPRSEvent_locationInfoUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_sMS
 * @description
 * 
 * SMS originated by the target or delivered to the target, as an IRI-Report.
 * National requirements choose whether the trigger is receipt at the SGSN or
 * acceptance by the SMSC or the MS. The same report is used when the other
 * party is a non-local identity.
 * 
 * 3GPP TS 33.108, clause 6.5.1.1 and table 6.7.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_sMS = _enum_for_GPRSEvent.sMS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS
 * @description
 * 
 * Mobile-originated or mobile-terminated SMS, as an IRI-Report (table 6.7).
 * @constant
 * @type {number}
 */
export
const sMS = GPRSEvent_sMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_pDPContextModification
 * @description
 * 
 * PDP-context modification, as an IRI-Continue.
 * 
 * 3GPP TS 33.108, table 6.1 and table 6.12.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextModification = _enum_for_GPRSEvent.pDPContextModification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextModification
 * @description
 * 
 * PDP-context modification, as an IRI-Continue (table 6.12).
 * @constant
 * @type {number}
 */
export
const pDPContextModification = GPRSEvent_pDPContextModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_servingSystem
 * @description
 * 
 * The mobile is authorized for service with another operator or service
 * provider. National option, sent as an IRI-Report. The HLR's network
 * identifier is included.
 * 
 * 3GPP TS 33.108, clause 6.5.1.1 and table 6.8.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_servingSystem = _enum_for_GPRSEvent.servingSystem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servingSystem
 * @description
 * 
 * Serving-system report when the target is authorized on another network (table
 * 6.8).
 * @constant
 * @type {number}
 */
export
const servingSystem = GPRSEvent_servingSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_startOfInterceptionWithMSAttached
 * @description
 * 
 * Interception was activated after a successful GPRS attach. National option,
 * sent as an IRI-Report. Do not send it to a LEMF that was already intercepting
 * the target. If the SGSN or GGSN does not know about a further intercept, the
 * MF builds the record from information it kept.
 * 
 * 3GPP TS 33.108, table 6.9 and clause 6.5.1.1.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_startOfInterceptionWithMSAttached = _enum_for_GPRSEvent.startOfInterceptionWithMSAttached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithMSAttached
 * @description
 * 
 * Start of interception after GPRS attach, as an IRI-Report (table 6.9).
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithMSAttached = GPRSEvent_startOfInterceptionWithMSAttached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_packetDataHeaderInformation
 * @description
 * 
 * Packet-header reporting for an active PDP context, either per packet or as a
 * flow summary.
 * 
 * 3GPP TS 33.108, clause 6.5.1.1 and table 6.1.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_packetDataHeaderInformation = _enum_for_GPRSEvent.packetDataHeaderInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary packetDataHeaderInformation
 * @description
 * 
 * Packet-data header report for an active PDP context (clause 6.5.1.1).
 * @constant
 * @type {number}
 */
export
const packetDataHeaderInformation = GPRSEvent_packetDataHeaderInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_hSS_Subscriber_Record_Change
 * @description
 * 
 * HLR subscriber-record change of IMSI, MSISDN, or IMEI. National option, sent
 * as an IRI-Report. The record shall state what changed. The enumeration name
 * says HSS; table 6.9D says HLR.
 * 
 * 3GPP TS 33.108, clause 6.5.1.1 and table 6.9D.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_hSS_Subscriber_Record_Change = _enum_for_GPRSEvent.hSS_Subscriber_Record_Change; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSS_Subscriber_Record_Change
 * @description
 * 
 * HLR subscriber-record change of IMSI, MSISDN, or IMEI (table 6.9D).
 * @constant
 * @type {number}
 */
export
const hSS_Subscriber_Record_Change = GPRSEvent_hSS_Subscriber_Record_Change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_registration_Termination
 * @description
 * 
 * Annex B.3 marks registration termination for further study. Clause 7.9
 * defines an HSS registration-termination report, but this value has no
 * packet-domain procedure.
 * 
 * 3GPP TS 33.108, annex B.3 and clause 7.9.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_registration_Termination = _enum_for_GPRSEvent.registration_Termination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration_Termination
 * @description
 * 
 * Registration termination, marked for further study in annex B.3.
 * @constant
 * @type {number}
 */
export
const registration_Termination = GPRSEvent_registration_Termination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_location_Up_Date
 * @description
 * 
 * Annex B.3 marks this value for further study. A location update is reported
 * as locationInfoUpdate (table 6.6), not as this value.
 * 
 * 3GPP TS 33.108, annex B.3 and table 6.6.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_location_Up_Date = _enum_for_GPRSEvent.location_Up_Date; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary location_Up_Date
 * @description
 * 
 * Marked for further study. Location update uses locationInfoUpdate (table
 * 6.6).
 * @constant
 * @type {number}
 */
export
const location_Up_Date = GPRSEvent_location_Up_Date; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_cancel_Location
 * @description
 * 
 * Cancel location from the HLR, including a purge sent toward the SGSN.
 * National option, sent as an IRI-Report.
 * 
 * 3GPP TS 33.108, table 6.9E and clause 6.5.1.1.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_cancel_Location = _enum_for_GPRSEvent.cancel_Location; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel_Location
 * @description
 * 
 * HLR cancel location, including purge toward the SGSN (table 6.9E).
 * @constant
 * @type {number}
 */
export
const cancel_Location = GPRSEvent_cancel_Location; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_register_Location
 * @description
 * 
 * Register location at the HLR. National option, sent as an IRI-Report. The
 * current VPLMN identity is mandatory.
 * 
 * 3GPP TS 33.108, table 6.9F and clause 6.5.1.1.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_register_Location = _enum_for_GPRSEvent.register_Location; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary register_Location
 * @description
 * 
 * HLR register location, as an IRI-Report (table 6.9F).
 * @constant
 * @type {number}
 */
export
const register_Location = GPRSEvent_register_Location; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_location_Information_Request
 * @description
 * 
 * A third-party node asked the HLR for location information. National option,
 * sent as an IRI-Report. Include the requesting PLMN when available, and the
 * node type for a GMSC, SMS Centre, GMLC, MME, or SGSN.
 * 
 * 3GPP TS 33.108, table 6.9G and clause 6.5.1.1.
 * @constant
 * @type {number}
 */
export
const GPRSEvent_location_Information_Request = _enum_for_GPRSEvent.location_Information_Request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary location_Information_Request
 * @description
 * 
 * HLR location-information request, as an IRI-Report (table 6.9G).
 * @constant
 * @type {number}
 */
export
const location_Information_Request = GPRSEvent_location_Information_Request; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_GPRSEvent: $.ASN1Decoder<GPRSEvent> = $._decodeEnumerated;
export const _encode_GPRSEvent: $.ASN1Encoder<GPRSEvent> = $._encodeEnumerated;


/* eslint-enable */
