/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PTCType {
    pTCStartofInterception = 1,
    pTCServinSystem = 2,
    pTCSessionInitiation = 3,
    pTCSessionAbandonEndRecord = 4,
    pTCSessionStartContinueRecord = 5,
    pTCSessionEndRecord = 6,
    pTCPre_EstablishedSessionSessionRecord = 7,
    pTCInstantPersonalAlert = 8,
    pTCPartyJoin = 9,
    pTCPartyDrop = 10,
    pTCPartyHold_RetrieveRecord = 11,
    pTCMediaModification = 12,
    pTCGroupAdvertizement = 13,
    pTCFloorConttrol = 14,
    pTCTargetPressence = 15,
    pTCAssociatePressence = 16,
    pTCListManagementEvents = 17,
    pTCAccessPolicyEvents = 18,
    pTCMediaTypeNotification = 19,
    pTCGroupCallRequest = 20,
    pTCGroupCallCancel = 21,
    pTCGroupCallResponse = 22,
    pTCGroupCallInterrogate = 23,
    pTCMCPTTImminentGroupCall = 24,
    pTCCC = 25,
    pTCRegistration = 26,
    pTCEncryption = 27,
}

/**
 * @summary PTCType
 * @description
 * 
 * Which PTC event the record reports. Clause 17 names the IRI record kind
 * (begin, continue, end, or report) in the event title, except for the
 * pre-established session record, the encryption message, and the CC value,
 * where the record kind is not stated. Stage 2 requires the event type on the
 * PTC records.
 * 
 * 3GPP TS 33.108, clauses 17 and 18; annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCType                     ::=  ENUMERATED
 * {
 *     pTCStartofInterception                      (1),
 *     pTCServinSystem                                (2),
 *     pTCSessionInitiation                        (3),
 *     pTCSessionAbandonEndRecord                    (4),
 *     pTCSessionStartContinueRecord                (5),
 *     pTCSessionEndRecord                         (6),
 *     pTCPre-EstablishedSessionSessionRecord        (7),
 *     pTCInstantPersonalAlert                        (8),
 *     pTCPartyJoin                                (9),
 *     pTCPartyDrop                                (10),
 *     pTCPartyHold-RetrieveRecord                    (11),
 *     pTCMediaModification                        (12),
 *     pTCGroupAdvertizement                        (13),
 *     pTCFloorConttrol                            (14),
 *     pTCTargetPressence                            (15),
 *     pTCAssociatePressence                        (16),
 *     pTCListManagementEvents                        (17),
 *     pTCAccessPolicyEvents                        (18),
 *     pTCMediaTypeNotification                    (19),
 *     pTCGroupCallRequest                            (20),
 *     pTCGroupCallCancel                            (21),
 *     pTCGroupCallResponse                        (22),
 *     pTCGroupCallInterrogate                        (23),
 *     pTCMCPTTImminentGroupCall                    (24),
 *     pTCCC                                        (25),
 *     pTCRegistration                                (26),
 *     pTCEncryption                                (27),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCType = _enum_for_PTCType | ENUMERATED;

/**
 * @summary PTCType_pTCStartofInterception
 * @description
 * 
 * Start of interception with a PTC session. A begin record is sent when a
 * session has been initiated but not yet established, and again when
 * interception starts while the target has at least one PTC session active (one
 * record per active session). Not sent for an instant personal alert. 3GPP TS
 * 33.108, clause 17.2.2.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCStartofInterception = _enum_for_PTCType.pTCStartofInterception; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCStartofInterception
 * @description
 * 
 * PTC start-of-interception begin record (3GPP TS 33.108, clause 17.2.2).
 * 
 * @constant
 * @type {number}
 */
export
const pTCStartofInterception = PTCType_pTCStartofInterception; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCServinSystem
 * @description
 * 
 * The CSP serving the PTC target's access network changed (mobility). Delivered
 * as a serving-system report. 3GPP TS 33.108, clause 17.2.3.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCServinSystem = _enum_for_PTCType.pTCServinSystem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCServinSystem
 * @description
 * 
 * PTC serving-system report (3GPP TS 33.108, clause 17.2.3).
 * 
 * @constant
 * @type {number}
 */
export
const pTCServinSystem = PTCType_pTCServinSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionInitiation
 * @description
 * 
 * The target initiated a PTC session or received an invitation to join one,
 * whatever the final disposition of the invitation. Delivered as a
 * session-initiation begin record. 3GPP TS 33.108, clause 17.2.4.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionInitiation = _enum_for_PTCType.pTCSessionInitiation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionInitiation
 * @description
 * 
 * PTC session-initiation begin record (3GPP TS 33.108, clause 17.2.4).
 * 
 * @constant
 * @type {number}
 */
export
const pTCSessionInitiation = PTCType_pTCSessionInitiation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionAbandonEndRecord
 * @description
 * 
 * The PTC session was not established, and the request was abandoned before
 * end-to-end connectivity. Delivered as a session-abandon end record. 3GPP TS
 * 33.108, clause 17.2.5.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionAbandonEndRecord = _enum_for_PTCType.pTCSessionAbandonEndRecord; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionAbandonEndRecord
 * @description
 * 
 * PTC session-abandon end record (3GPP TS 33.108, clause 17.2.5).
 * 
 * @constant
 * @type {number}
 */
export
const pTCSessionAbandonEndRecord = PTCType_pTCSessionAbandonEndRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionStartContinueRecord
 * @description
 * 
 * A one-to-one, one-to-many, or one-to-many-to-one PTC session was established
 * and communication began. Delivered as a session-start continue record. 3GPP
 * TS 33.108, clause 17.2.6.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionStartContinueRecord = _enum_for_PTCType.pTCSessionStartContinueRecord; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionStartContinueRecord
 * @description
 * 
 * PTC session-start continue record (3GPP TS 33.108, clause 17.2.6).
 * 
 * @constant
 * @type {number}
 */
export
const pTCSessionStartContinueRecord = PTCType_pTCSessionStartContinueRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionEndRecord
 * @description
 * 
 * The PTC session was released, normally or abnormally, and voice communication
 * ended. Delivered as a session-end record. 3GPP TS 33.108, clause 17.2.7.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionEndRecord = _enum_for_PTCType.pTCSessionEndRecord; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionEndRecord
 * @description
 * 
 * PTC session-end record (3GPP TS 33.108, clause 17.2.7).
 * 
 * @constant
 * @type {number}
 */
export
const pTCSessionEndRecord = PTCType_pTCSessionEndRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPre_EstablishedSessionSessionRecord
 * @description
 * 
 * A pre-established session was set up, modified, or released between the
 * client in the target's UE and the associated PTC server. Clause 17.2.20 does
 * not say whether the IRI record is begin, continue, end, or report. 3GPP TS
 * 33.108, clause 17.2.20.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPre_EstablishedSessionSessionRecord = _enum_for_PTCType.pTCPre_EstablishedSessionSessionRecord; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPre_EstablishedSessionSessionRecord
 * @description
 * 
 * PTC pre-established session record (3GPP TS 33.108, clause 17.2.20).
 * 
 * @constant
 * @type {number}
 */
export
const pTCPre_EstablishedSessionSessionRecord = PTCType_pTCPre_EstablishedSessionSessionRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCInstantPersonalAlert
 * @description
 * 
 * An instant personal alert, a request that one PTC subscriber initiate a
 * one-to-one session, was initiated or was sent to the target. Delivered as a
 * report. Start of interception is not reported for this session type. 3GPP TS
 * 33.108, clause 17.2.8.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCInstantPersonalAlert = _enum_for_PTCType.pTCInstantPersonalAlert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCInstantPersonalAlert
 * @description
 * 
 * PTC instant-personal-alert report (3GPP TS 33.108, clause 17.2.8).
 * 
 * @constant
 * @type {number}
 */
export
const pTCInstantPersonalAlert = PTCType_pTCInstantPersonalAlert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPartyJoin
 * @description
 * 
 * The target requested to join, or to rejoin, a PTC group session that is
 * already in progress. Delivered as a party-join continue record. 3GPP TS
 * 33.108, clause 17.2.9.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPartyJoin = _enum_for_PTCType.pTCPartyJoin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPartyJoin
 * @description
 * 
 * PTC party-join continue record (3GPP TS 33.108, clause 17.2.9).
 * 
 * @constant
 * @type {number}
 */
export
const pTCPartyJoin = PTCType_pTCPartyJoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPartyDrop
 * @description
 * 
 * An associate left a PTC group session in which the target is participating.
 * Delivered as a party-drop continue record. 3GPP TS 33.108, clause 17.2.10.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPartyDrop = _enum_for_PTCType.pTCPartyDrop; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPartyDrop
 * @description
 * 
 * PTC party-drop continue record (3GPP TS 33.108, clause 17.2.10).
 * 
 * @constant
 * @type {number}
 */
export
const pTCPartyDrop = PTCType_pTCPartyDrop; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPartyHold_RetrieveRecord
 * @description
 * 
 * An ongoing PTC session with the target was placed on hold or retrieved from
 * hold. Delivered as a party-hold continue record. 3GPP TS 33.108, clause
 * 17.2.11.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPartyHold_RetrieveRecord = _enum_for_PTCType.pTCPartyHold_RetrieveRecord; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPartyHold_RetrieveRecord
 * @description
 * 
 * PTC party hold or retrieve record (3GPP TS 33.108, clause 17.2.11).
 * 
 * @constant
 * @type {number}
 */
export
const pTCPartyHold_RetrieveRecord = PTCType_pTCPartyHold_RetrieveRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCMediaModification
 * @description
 * 
 * Media parameters were renegotiated during a PTC session, for example
 * voice-frame packetization or codec mode, using SDP in SIP. Delivered as a
 * media-modification continue record. 3GPP TS 33.108, clause 17.2.12.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCMediaModification = _enum_for_PTCType.pTCMediaModification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCMediaModification
 * @description
 * 
 * PTC media-modification continue record (3GPP TS 33.108, clause 17.2.12).
 * 
 * @constant
 * @type {number}
 */
export
const pTCMediaModification = PTCType_pTCMediaModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupAdvertizement
 * @description
 * 
 * The target sent group-advertisement information to one PTC user, to a list of
 * users, or to all members of the group. Delivered as a group-advertisement
 * report. 3GPP TS 33.108, clause 17.2.13.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupAdvertizement = _enum_for_PTCType.pTCGroupAdvertizement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupAdvertizement
 * @description
 * 
 * PTC group-advertisement report (3GPP TS 33.108, clause 17.2.13).
 * 
 * @constant
 * @type {number}
 */
export
const pTCGroupAdvertizement = PTCType_pTCGroupAdvertizement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCFloorConttrol
 * @description
 * 
 * Floor control, which clause 17.2.14 treats as talk-burst control, changed for
 * a session the target is in: request, grant, refusal, queueing, release,
 * revoke, idle, or an associate being given the floor. Delivered as a
 * floor-control continue record. 3GPP TS 33.108, clause 17.2.14.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCFloorConttrol = _enum_for_PTCType.pTCFloorConttrol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCFloorConttrol
 * @description
 * 
 * PTC floor-control continue record (3GPP TS 33.108, clause 17.2.14).
 * 
 * @constant
 * @type {number}
 */
export
const pTCFloorConttrol = PTCType_pTCFloorConttrol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCTargetPressence
 * @description
 * 
 * The PTC server, acting as a presence source, published network presence for
 * the target. Delivered as a target-presence report when presence is supported.
 * 3GPP TS 33.108, clause 17.2.15.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCTargetPressence = _enum_for_PTCType.pTCTargetPressence; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCTargetPressence
 * @description
 * 
 * PTC target-presence report (3GPP TS 33.108, clause 17.2.15).
 * 
 * @constant
 * @type {number}
 */
export
const pTCTargetPressence = PTCType_pTCTargetPressence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCAssociatePressence
 * @description
 * 
 * The PTC server received presence notifications for other PTC clients after
 * subscribing as a watcher for the target. Delivered as an associate-presence
 * report. 3GPP TS 33.108, clause 17.2.16.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCAssociatePressence = _enum_for_PTCType.pTCAssociatePressence; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCAssociatePressence
 * @description
 * 
 * PTC associate-presence report (3GPP TS 33.108, clause 17.2.16).
 * 
 * @constant
 * @type {number}
 */
export
const pTCAssociatePressence = PTCType_pTCAssociatePressence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCListManagementEvents
 * @description
 * 
 * The target's client attempted to change a contact list or a PTC group list,
 * or the network notified the client of such a change, successfully or not.
 * Delivered as a list-management report. 3GPP TS 33.108, clause 17.2.17.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCListManagementEvents = _enum_for_PTCType.pTCListManagementEvents; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCListManagementEvents
 * @description
 * 
 * PTC list-management report (3GPP TS 33.108, clause 17.2.17).
 * 
 * @constant
 * @type {number}
 */
export
const pTCListManagementEvents = PTCType_pTCListManagementEvents; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCAccessPolicyEvents
 * @description
 * 
 * The target attempted to change or query PTC user access policy or group
 * authorization rules on the XDMS, or the network responded or notified the
 * target, successfully or not. Delivered as an access-policy report. 3GPP TS
 * 33.108, clause 17.2.18.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCAccessPolicyEvents = _enum_for_PTCType.pTCAccessPolicyEvents; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCAccessPolicyEvents
 * @description
 * 
 * PTC access-policy report (3GPP TS 33.108, clause 17.2.18).
 * 
 * @constant
 * @type {number}
 */
export
const pTCAccessPolicyEvents = PTCType_pTCAccessPolicyEvents; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCMediaTypeNotification
 * @description
 * 
 * Media other than PTC speech (for example video, images, text, or files) was
 * detected to or from the target's PTC client. Delivered as a media-type
 * notification continue record. 3GPP TS 33.108, clause 17.2.19.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCMediaTypeNotification = _enum_for_PTCType.pTCMediaTypeNotification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCMediaTypeNotification
 * @description
 * 
 * PTC media-type notification continue record (3GPP TS 33.108, clause 17.2.19).
 * 
 * @constant
 * @type {number}
 */
export
const pTCMediaTypeNotification = PTCType_pTCMediaTypeNotification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallRequest
 * @description
 * 
 * The PTC server serving the target received a group-session request, or sent
 * the target's client a request to join, rejoin, or release a group call.
 * Delivered as a group-call request begin record. 3GPP TS 33.108, clause
 * 17.3.2.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallRequest = _enum_for_PTCType.pTCGroupCallRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallRequest
 * @description
 * 
 * PTC group-call request begin record (3GPP TS 33.108, clause 17.3.2).
 * 
 * @constant
 * @type {number}
 */
export
const pTCGroupCallRequest = PTCType_pTCGroupCallRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallCancel
 * @description
 * 
 * A group-call cancel was detected from the target's client or from the group,
 * including a request to release the group call. Delivered as a group-call
 * cancel end record. 3GPP TS 33.108, clause 17.3.3.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallCancel = _enum_for_PTCType.pTCGroupCallCancel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallCancel
 * @description
 * 
 * PTC group-call cancel end record (3GPP TS 33.108, clause 17.3.3).
 * 
 * @constant
 * @type {number}
 */
export
const pTCGroupCallCancel = PTCType_pTCGroupCallCancel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallResponse
 * @description
 * 
 * A group-call response was sent to the target, received from the target, or
 * sent onward for the target. Clause 17.3.4 calls the record a continue record;
 * table 17.3.4 titles it an end record. 3GPP TS 33.108, clause 17.3.4.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallResponse = _enum_for_PTCType.pTCGroupCallResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallResponse
 * @description
 * 
 * PTC group-call response. Clause 17.3.4 says continue; table 17.3.4 says end
 * (3GPP TS 33.108).
 * 
 * @constant
 * @type {number}
 */
export
const pTCGroupCallResponse = PTCType_pTCGroupCallResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallInterrogate
 * @description
 * 
 * A group interrogate request or response was received at the PTC server
 * serving the target. Delivered as a group-interrogate continue record. 3GPP TS
 * 33.108, clause 17.3.5.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallInterrogate = _enum_for_PTCType.pTCGroupCallInterrogate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallInterrogate
 * @description
 * 
 * PTC group-interrogate continue record (3GPP TS 33.108, clause 17.3.5).
 * 
 * @constant
 * @type {number}
 */
export
const pTCGroupCallInterrogate = PTCType_pTCGroupCallInterrogate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCMCPTTImminentGroupCall
 * @description
 * 
 * An MCPTT imminent-peril group-call request, response, or cancel was detected
 * at the MCPTT server, from the target's client or toward that client from a
 * group. Delivered as a report. 3GPP TS 33.108, clause 17.3.6.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCMCPTTImminentGroupCall = _enum_for_PTCType.pTCMCPTTImminentGroupCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCMCPTTImminentGroupCall
 * @description
 * 
 * MCPTT imminent-peril group-call report (3GPP TS 33.108, clause 17.3.6).
 * 
 * @constant
 * @type {number}
 */
export
const pTCMCPTTImminentGroupCall = PTCType_pTCMCPTTImminentGroupCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCCC
 * @description
 * 
 * Annex B.3 names a PTC CC event. Clause 17.1.4 requires CC for every
 * authorized talk burst, delivered with the IMS VoIP HI3 provisions of annex
 * B.12. Table 17.1.5 lists communication content among event descriptions. TS
 * 33.108 does not give this value its own IRI record table.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCCC = _enum_for_PTCType.pTCCC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCCC
 * @description
 * 
 * PTC communication-content event; clause 17 does not define a separate IRI
 * table for it (3GPP TS 33.108, clause 17.1.4).
 * 
 * @constant
 * @type {number}
 */
export
const pTCCC = PTCType_pTCCC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCRegistration
 * @description
 * 
 * The target registered, re-registered, or deregistered for PTC, successfully
 * or not. Delivered as a registration report. 3GPP TS 33.108, clause 17.2.1.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCRegistration = _enum_for_PTCType.pTCRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCRegistration
 * @description
 * 
 * PTC registration report (3GPP TS 33.108, clause 17.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const pTCRegistration = PTCType_pTCRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCEncryption
 * @description
 * 
 * PTC encryption parameters: cipher, key, and related material so the LEMF can
 * decipher CSP-managed PTC content. Table 18.1 requires this event type. Clause
 * 18 does not say whether the IRI record is begin, continue, end, or report.
 * 3GPP TS 33.108, clause 18.
 * 
 * @constant
 * @type {number}
 */
export
const PTCType_pTCEncryption = _enum_for_PTCType.pTCEncryption; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCEncryption
 * @description
 * 
 * PTC encryption-parameters event (3GPP TS 33.108, clause 18).
 * 
 * @constant
 * @type {number}
 */
export
const pTCEncryption = PTCType_pTCEncryption; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCType: $.ASN1Decoder<PTCType> = $._decodeEnumerated;
export const _encode_PTCType: $.ASN1Encoder<PTCType> = $._encodeEnumerated;


/* eslint-enable */
