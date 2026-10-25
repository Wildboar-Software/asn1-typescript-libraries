/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Umts_Cs_Event {
    call_establishment = 1,
    answer = 2,
    supplementary_Service = 3,
    handover = 4,
    release = 5,
    sMS = 6,
    location_update = 7,
    subscriber_Controlled_Input = 8,
    hLR_Subscriber_Record_Change = 9,
    serving_System = 10,
    cancel_Location = 11,
    register_Location = 12,
    location_Information_Request = 13,
}

/**
 * @summary Umts_Cs_Event
 * @description
 * 
 * Circuit-switched event that caused the IRI, or that the record is associated
 * with. Table 5.4 assigns the record type. If the event is omitted, other
 * parameters stand in for it. 3GPP TS 33.108, clause 5.2.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Umts-Cs-Event  ::=  ENUMERATED
 * {
 *     call-establishment                (1),
 *     answer                            (2),
 *     supplementary-Service            (3),
 *     handover                        (4),
 *     release                            (5),
 *     sMS                                (6),
 *     location-update                    (7),
 *     subscriber-Controlled-Input     (8),
 *     ...,
 *     hLR-Subscriber-Record-Change    (9),
 *     serving-System                    (10),
 *     cancel-Location                    (11),
 *     register-Location                (12),
 *     location-Information-Request    (13)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Umts_Cs_Event = _enum_for_Umts_Cs_Event | ENUMERATED;

/**
 * @summary Umts_Cs_Event_call_establishment
 * @description
 * 
 * Call establishment, including when the target is originating, terminating, or
 * brought in by a supplementary service. IRI-BEGIN. Destination information may
 * still be incomplete; send what is known and complete it later. 3GPP TS
 * 33.108, clauses 5.2.1 and 5.2.3, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_call_establishment: _enum_for_Umts_Cs_Event.call_establishment = _enum_for_Umts_Cs_Event.call_establishment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary call_establishment
 * @description
 * 
 * Call establishment. IRI-BEGIN. 3GPP TS 33.108, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const call_establishment: _enum_for_Umts_Cs_Event.call_establishment = Umts_Cs_Event_call_establishment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_answer
 * @description
 * 
 * Answer during the active phase. IRI-CONTINUE. 3GPP TS 33.108, clause 5.2.3,
 * table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_answer: _enum_for_Umts_Cs_Event.answer = _enum_for_Umts_Cs_Event.answer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answer
 * @description
 * 
 * Answer. IRI-CONTINUE. 3GPP TS 33.108, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const answer: _enum_for_Umts_Cs_Event.answer = Umts_Cs_Event_answer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_supplementary_Service
 * @description
 * 
 * A supplementary service event on a call in progress. IRI-CONTINUE. Which IRI
 * items and content links apply depends on the service, on option A or B, and
 * on whether the target or the other party is the served user (clauses 5.4 and
 * 5.5). 3GPP TS 33.108, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_supplementary_Service: _enum_for_Umts_Cs_Event.supplementary_Service = _enum_for_Umts_Cs_Event.supplementary_Service; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supplementary_Service
 * @description
 * 
 * Supplementary service. IRI-CONTINUE. 3GPP TS 33.108, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const supplementary_Service: _enum_for_Umts_Cs_Event.supplementary_Service = Umts_Cs_Event_supplementary_Service; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_handover
 * @description
 * 
 * Handover during the active phase. IRI-CONTINUE. 3GPP TS 33.108, clause 5.2.3,
 * table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_handover: _enum_for_Umts_Cs_Event.handover = _enum_for_Umts_Cs_Event.handover; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handover
 * @description
 * 
 * Handover. IRI-CONTINUE. 3GPP TS 33.108, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const handover: _enum_for_Umts_Cs_Event.handover = Umts_Cs_Event_handover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_release
 * @description
 * 
 * Release, when the target identity becomes inactive. IRI-END. Also used when a
 * transferred target leaves the call, and when barring releases a call that
 * already has IRI. 3GPP TS 33.108, clauses 5.2.1, 5.5.4, and 5.5.16, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_release: _enum_for_Umts_Cs_Event.release = _enum_for_Umts_Cs_Event.release; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary release
 * @description
 * 
 * Release. IRI-END. 3GPP TS 33.108, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const release: _enum_for_Umts_Cs_Event.release = Umts_Cs_Event_release; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_sMS
 * @description
 * 
 * SMS. IRI-REPORT. There is no content-link correlation for this non-call
 * record. Presence of the SMS contents can indicate the event if this value is
 * omitted. 3GPP TS 33.108, clauses 5.1.2 and 5.2.3, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_sMS: _enum_for_Umts_Cs_Event.sMS = _enum_for_Umts_Cs_Event.sMS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS
 * @description
 * 
 * SMS. IRI-REPORT. 3GPP TS 33.108, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const sMS: _enum_for_Umts_Cs_Event.sMS = Umts_Cs_Event_sMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_location_update
 * @description
 * 
 * Location update. IRI-REPORT. 3GPP TS 33.108, clause 5.2.3, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_location_update: _enum_for_Umts_Cs_Event.location_update = _enum_for_Umts_Cs_Event.location_update; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary location_update
 * @description
 * 
 * Location update. IRI-REPORT. 3GPP TS 33.108, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const location_update: _enum_for_Umts_Cs_Event.location_update = Umts_Cs_Event_location_update; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_subscriber_Controlled_Input
 * @description
 * 
 * Subscriber controlled input: activation, deactivation, or interrogation of a
 * service. IRI-REPORT, which shall say whether the target's request succeeded.
 * No content correlation. 3GPP TS 33.108, clauses 5.2.2.4 and 5.4.5, table 5.4.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_subscriber_Controlled_Input: _enum_for_Umts_Cs_Event.subscriber_Controlled_Input = _enum_for_Umts_Cs_Event.subscriber_Controlled_Input; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriber_Controlled_Input
 * @description
 * 
 * Subscriber controlled input. IRI-REPORT. 3GPP TS 33.108, clause 5.4.5.
 * 
 * @constant
 * @type {number}
 */
export
const subscriber_Controlled_Input: _enum_for_Umts_Cs_Event.subscriber_Controlled_Input = Umts_Cs_Event_subscriber_Controlled_Input; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_hLR_Subscriber_Record_Change
 * @description
 * 
 * HLR subscriber record change. IRI-REPORT. State the old and new MSISDN, IMSI,
 * or IMEI. Carrier-specific HLR data is conditional. 3GPP TS 33.108, table 5.4
 * and table 5.5B.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_hLR_Subscriber_Record_Change: _enum_for_Umts_Cs_Event.hLR_Subscriber_Record_Change = _enum_for_Umts_Cs_Event.hLR_Subscriber_Record_Change; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hLR_Subscriber_Record_Change
 * @description
 * 
 * HLR subscriber record changed. IRI-REPORT. 3GPP TS 33.108, table 5.5B.
 * 
 * @constant
 * @type {number}
 */
export
const hLR_Subscriber_Record_Change: _enum_for_Umts_Cs_Event.hLR_Subscriber_Record_Change = Umts_Cs_Event_hLR_Subscriber_Record_Change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_serving_System
 * @description
 * 
 * Serving system. IRI-REPORT from the HLR. The serving-system PLMN identity is
 * conditional. The network identifier includes the HLR's network-element
 * identifier. 3GPP TS 33.108, table 5.4 and table 5.5A.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_serving_System: _enum_for_Umts_Cs_Event.serving_System = _enum_for_Umts_Cs_Event.serving_System; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serving_System
 * @description
 * 
 * Serving system report. IRI-REPORT. 3GPP TS 33.108, table 5.5A.
 * 
 * @constant
 * @type {number}
 */
export
const serving_System: _enum_for_Umts_Cs_Event.serving_System = Umts_Cs_Event_serving_System; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_cancel_Location
 * @description
 * 
 * Cancel location, including a purge from the HLR sent to the SGSN. IRI-REPORT.
 * Previous serving system, MSC number, and MSC address are conditional. 3GPP TS
 * 33.108, table 5.4 and table 5.5C.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_cancel_Location: _enum_for_Umts_Cs_Event.cancel_Location = _enum_for_Umts_Cs_Event.cancel_Location; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel_Location
 * @description
 * 
 * Cancel location. IRI-REPORT. 3GPP TS 33.108, table 5.5C.
 * 
 * @constant
 * @type {number}
 */
export
const cancel_Location: _enum_for_Umts_Cs_Event.cancel_Location = Umts_Cs_Event_cancel_Location; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_register_Location
 * @description
 * 
 * Register location. IRI-REPORT. Previous and current serving system, MSC
 * number, and MSC address are conditional. 3GPP TS 33.108, table 5.4 and table
 * 5.5D.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_register_Location: _enum_for_Umts_Cs_Event.register_Location = _enum_for_Umts_Cs_Event.register_Location; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary register_Location
 * @description
 * 
 * Register location. IRI-REPORT. 3GPP TS 33.108, table 5.5D.
 * 
 * @constant
 * @type {number}
 */
export
const register_Location: _enum_for_Umts_Cs_Event.register_Location = Umts_Cs_Event_register_Location; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_location_Information_Request
 * @description
 * 
 * Location information request. IRI-REPORT from the HLR. Requesting network
 * identity and requesting node type are conditional. 3GPP TS 33.108, table 5.4
 * and table 5.5E.
 * 
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_location_Information_Request: _enum_for_Umts_Cs_Event.location_Information_Request = _enum_for_Umts_Cs_Event.location_Information_Request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary location_Information_Request
 * @description
 * 
 * Location information request. IRI-REPORT. 3GPP TS 33.108, table 5.5E.
 * 
 * @constant
 * @type {number}
 */
export
const location_Information_Request: _enum_for_Umts_Cs_Event.location_Information_Request = Umts_Cs_Event_location_Information_Request; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Umts_Cs_Event: $.ASN1Decoder<Umts_Cs_Event> = $._decodeEnumerated;
export const _encode_Umts_Cs_Event: $.ASN1Encoder<Umts_Cs_Event> = $._encodeEnumerated;


/* eslint-enable */
