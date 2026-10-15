/* eslint-disable */
import {
    ENUMERATED
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
 * Which PTC record is being delivered. Clause 17.1.5 lists the events. Each
 * clause 17 record table requires the event type. Annex B.9 carries it inside
 * the PTC IRI parameter.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * ...
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
 * Start-of-interception BEGIN record (clause 17.2.2). Sent for a PTC session
 * that has been initiated and is not yet established, and again when
 * interception starts on each already active PTC session. An instant personal
 * alert does not use this record.
 * @constant
 * @type {number}
 */
export
const PTCType_pTCStartofInterception: PTCType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCStartofInterception
 * @description
 * 
 * Start of interception for a PTC session (clause 17.2.2).
 * @constant
 * @type {number}
 */
export
const pTCStartofInterception: PTCType = PTCType_pTCStartofInterception; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCServinSystem
 * @description
 * 
 * Serving-system REPORT when the CSP that serves the target access network
 * changes, for mobility (clause 17.2.3). The spelling is the module's.
 * @constant
 * @type {number}
 */
export
const PTCType_pTCServinSystem: PTCType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCServinSystem
 * @description
 * 
 * PTC serving system changed (clause 17.2.3).
 * @constant
 * @type {number}
 */
export
const pTCServinSystem: PTCType = PTCType_pTCServinSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionInitiation
 * @description
 * 
 * Session-initiation BEGIN record when the target starts a session or receives
 * an invitation, whatever the outcome (clause 17.2.4).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionInitiation: PTCType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionInitiation
 * @description
 * 
 * PTC session initiation (clause 17.2.4).
 * @constant
 * @type {number}
 */
export
const pTCSessionInitiation: PTCType = PTCType_pTCSessionInitiation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionAbandonEndRecord
 * @description
 * 
 * Session-abandon END record when the session is not established and the
 * request is abandoned before end-to-end connectivity (clause 17.2.5).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionAbandonEndRecord: PTCType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionAbandonEndRecord
 * @description
 * 
 * PTC session abandoned before establishment (clause 17.2.5).
 * @constant
 * @type {number}
 */
export
const pTCSessionAbandonEndRecord: PTCType = PTCType_pTCSessionAbandonEndRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionStartContinueRecord
 * @description
 * 
 * Session-start CONTINUE record when the session is established and
 * communication begins (clause 17.2.6).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionStartContinueRecord: PTCType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionStartContinueRecord
 * @description
 * 
 * PTC session established and communication started (clause 17.2.6).
 * @constant
 * @type {number}
 */
export
const pTCSessionStartContinueRecord: PTCType = PTCType_pTCSessionStartContinueRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionEndRecord
 * @description
 * 
 * Session-end record when the session is released, normally or abnormally, and
 * voice communication ends (clause 17.2.7).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionEndRecord: PTCType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionEndRecord
 * @description
 * 
 * PTC session released (clause 17.2.7).
 * @constant
 * @type {number}
 */
export
const pTCSessionEndRecord: PTCType = PTCType_pTCSessionEndRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPre_EstablishedSessionSessionRecord
 * @description
 * 
 * Pre-established session record when that session is set up, modified, or
 * released between the target UE and its PTC server (clause 17.2.20).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPre_EstablishedSessionSessionRecord: PTCType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPre_EstablishedSessionSessionRecord
 * @description
 * 
 * PTC pre-established session setup, modification, or release (clause 17.2.20).
 * @constant
 * @type {number}
 */
export
const pTCPre_EstablishedSessionSessionRecord: PTCType = PTCType_pTCPre_EstablishedSessionSessionRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCInstantPersonalAlert
 * @description
 * 
 * Instant personal alert REPORT: a request that one PTC subscriber initiate a
 * one-to-one session, sent or received by the target (clause 17.2.8).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCInstantPersonalAlert: PTCType = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCInstantPersonalAlert
 * @description
 * 
 * Instant personal alert to or from the target (clause 17.2.8).
 * @constant
 * @type {number}
 */
export
const pTCInstantPersonalAlert: PTCType = PTCType_pTCInstantPersonalAlert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPartyJoin
 * @description
 * 
 * Party-join CONTINUE record when the target asks to join or rejoin a group
 * session that is already in progress (clause 17.2.9).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPartyJoin: PTCType = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPartyJoin
 * @description
 * 
 * Target joins an in-progress PTC group session (clause 17.2.9).
 * @constant
 * @type {number}
 */
export
const pTCPartyJoin: PTCType = PTCType_pTCPartyJoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPartyDrop
 * @description
 * 
 * Party-drop CONTINUE record when an associate leaves a group session in which
 * the target is participating (clause 17.2.10).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPartyDrop: PTCType = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPartyDrop
 * @description
 * 
 * Associate leaves the target's PTC group session (clause 17.2.10).
 * @constant
 * @type {number}
 */
export
const pTCPartyDrop: PTCType = PTCType_pTCPartyDrop; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPartyHold_RetrieveRecord
 * @description
 * 
 * Hold-retrieve CONTINUE record when an on-going PTC session with the target is
 * placed on hold or retrieved from hold (clause 17.2.11).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPartyHold_RetrieveRecord: PTCType = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPartyHold_RetrieveRecord
 * @description
 * 
 * PTC session placed on hold or retrieved (clause 17.2.11).
 * @constant
 * @type {number}
 */
export
const pTCPartyHold_RetrieveRecord: PTCType = PTCType_pTCPartyHold_RetrieveRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCMediaModification
 * @description
 * 
 * Media-modification CONTINUE record when media parameters are renegotiated
 * during a PTC session, by SDP in SIP (clause 17.2.12).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCMediaModification: PTCType = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCMediaModification
 * @description
 * 
 * PTC media parameters renegotiated (clause 17.2.12).
 * @constant
 * @type {number}
 */
export
const pTCMediaModification: PTCType = PTCType_pTCMediaModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupAdvertizement
 * @description
 * 
 * Group-advertisement REPORT when the target sends group advertisement to one
 * user, a list of users, or all members of the group (clause 17.2.13). The
 * spelling is the module's.
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupAdvertizement: PTCType = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupAdvertizement
 * @description
 * 
 * Target sends a PTC group advertisement (clause 17.2.13).
 * @constant
 * @type {number}
 */
export
const pTCGroupAdvertizement: PTCType = PTCType_pTCGroupAdvertizement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCFloorConttrol
 * @description
 * 
 * Floor-control CONTINUE record for talk-burst request, grant, denial, queue,
 * revoke, or release (clause 17.2.14). The spelling is the module's. Floor
 * control and talk-burst control are the same function.
 * @constant
 * @type {number}
 */
export
const PTCType_pTCFloorConttrol: PTCType = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCFloorConttrol
 * @description
 * 
 * PTC floor or talk-burst control event (clause 17.2.14).
 * @constant
 * @type {number}
 */
export
const pTCFloorConttrol: PTCType = PTCType_pTCFloorConttrol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCTargetPressence
 * @description
 * 
 * Target-presence REPORT when the PTC server, acting as presence source,
 * publishes presence for the target (clause 17.2.15). The spelling is the
 * module's.
 * @constant
 * @type {number}
 */
export
const PTCType_pTCTargetPressence: PTCType = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCTargetPressence
 * @description
 * 
 * PTC server publishes the target's presence (clause 17.2.15).
 * @constant
 * @type {number}
 */
export
const pTCTargetPressence: PTCType = PTCType_pTCTargetPressence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCAssociatePressence
 * @description
 * 
 * Associate-presence REPORT when the PTC server receives presence notifications
 * for other PTC clients it subscribed to (clause 17.2.16). The spelling is the
 * module's.
 * @constant
 * @type {number}
 */
export
const PTCType_pTCAssociatePressence: PTCType = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCAssociatePressence
 * @description
 * 
 * Presence of other PTC clients (clause 17.2.16).
 * @constant
 * @type {number}
 */
export
const pTCAssociatePressence: PTCType = PTCType_pTCAssociatePressence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCListManagementEvents
 * @description
 * 
 * List-management REPORT when the target's client changes its contact list or
 * group lists, and when the network notifies the target of such a change
 * (clause 17.2.17).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCListManagementEvents: PTCType = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCListManagementEvents
 * @description
 * 
 * PTC contact-list or group-list management (clause 17.2.17).
 * @constant
 * @type {number}
 */
export
const pTCListManagementEvents: PTCType = PTCType_pTCListManagementEvents; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCAccessPolicyEvents
 * @description
 * 
 * Access-policy REPORT when the target changes or queries user-access policy or
 * group authorization rules, and when the network answers (clause 17.2.18).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCAccessPolicyEvents: PTCType = 18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCAccessPolicyEvents
 * @description
 * 
 * PTC access-policy change or query (clause 17.2.18).
 * @constant
 * @type {number}
 */
export
const pTCAccessPolicyEvents: PTCType = PTCType_pTCAccessPolicyEvents; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCMediaTypeNotification
 * @description
 * 
 * Media-type CONTINUE record when media other than PTC speech (video, images,
 * text, or files) is detected to or from the target's client (clause 17.2.19).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCMediaTypeNotification: PTCType = 19; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCMediaTypeNotification
 * @description
 * 
 * Non-speech PTC media detected (clause 17.2.19).
 * @constant
 * @type {number}
 */
export
const pTCMediaTypeNotification: PTCType = PTCType_pTCMediaTypeNotification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallRequest
 * @description
 * 
 * Group-call request BEGIN record when the serving PTC server receives a
 * group-session request, or sends the target a request to join, rejoin, or
 * release (clause 17.3.2).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallRequest: PTCType = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallRequest
 * @description
 * 
 * PTC group-call request (clause 17.3.2).
 * @constant
 * @type {number}
 */
export
const pTCGroupCallRequest: PTCType = PTCType_pTCGroupCallRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallCancel
 * @description
 * 
 * Group-call cancel END record when a cancel from the target's client or from
 * the group is received at the serving PTC server, or sent to the target
 * (clause 17.3.3).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallCancel: PTCType = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallCancel
 * @description
 * 
 * PTC group-call cancel (clause 17.3.3).
 * @constant
 * @type {number}
 */
export
const pTCGroupCallCancel: PTCType = PTCType_pTCGroupCallCancel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallResponse
 * @description
 * 
 * Group-call response (clause 17.3.4). The introductory sentence calls the
 * record a continue record; the table title calls it an END record. Sent when a
 * response is sent to the target or received from the target, including on the
 * target's behalf.
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallResponse: PTCType = 22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallResponse
 * @description
 * 
 * PTC group-call response (clause 17.3.4).
 * @constant
 * @type {number}
 */
export
const pTCGroupCallResponse: PTCType = PTCType_pTCGroupCallResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallInterrogate
 * @description
 * 
 * Group-interrogate CONTINUE record when a group interrogate request or
 * response is received at the PTC server that serves the target (clause
 * 17.3.5).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallInterrogate: PTCType = 23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallInterrogate
 * @description
 * 
 * PTC group interrogate (clause 17.3.5).
 * @constant
 * @type {number}
 */
export
const pTCGroupCallInterrogate: PTCType = PTCType_pTCGroupCallInterrogate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCMCPTTImminentGroupCall
 * @description
 * 
 * MCPTT imminent-peril group-call REPORT when a request, response, or cancel is
 * detected at the MCPTT server, from the target's client or from the group
 * (clause 17.3.6).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCMCPTTImminentGroupCall: PTCType = 24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCMCPTTImminentGroupCall
 * @description
 * 
 * MCPTT imminent-peril group call (clause 17.3.6).
 * @constant
 * @type {number}
 */
export
const pTCMCPTTImminentGroupCall: PTCType = PTCType_pTCMCPTTImminentGroupCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCCC
 * @description
 * 
 * Communication content, listed among PTC event types in clause 17.1.5. Clause
 * 17.1.4 delivers talk-burst content on HI3 using annex B.12. The handover text
 * does not define IRI parameters that belong only to this value.
 * @constant
 * @type {number}
 */
export
const PTCType_pTCCC: PTCType = 25; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCCC
 * @description
 * 
 * PTC communication content (clause 17.1.5). Talk-burst content is delivered on
 * HI3.
 * @constant
 * @type {number}
 */
export
const pTCCC: PTCType = PTCType_pTCCC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCRegistration
 * @description
 * 
 * Registration REPORT when the target registers, re-registers, or deregisters
 * for PTC, whether or not the attempt succeeds (clause 17.2.1).
 * @constant
 * @type {number}
 */
export
const PTCType_pTCRegistration: PTCType = 26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCRegistration
 * @description
 * 
 * PTC registration, re-registration, or deregistration (clause 17.2.1).
 * @constant
 * @type {number}
 */
export
const pTCRegistration: PTCType = PTCType_pTCRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCEncryption
 * @description
 * 
 * PTC encryption REPORT carrying the cipher and key material of clause 18,
 * including a further report on each rekey.
 * @constant
 * @type {number}
 */
export
const PTCType_pTCEncryption: PTCType = 27; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCEncryption
 * @description
 * 
 * PTC encryption parameters (clause 18).
 * @constant
 * @type {number}
 */
export
const pTCEncryption: PTCType = PTCType_pTCEncryption; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCType: $.ASN1Decoder<PTCType> = $._decodeEnumerated;
export const _encode_PTCType: $.ASN1Encoder<PTCType> = $._encodeEnumerated;


/* eslint-enable */
