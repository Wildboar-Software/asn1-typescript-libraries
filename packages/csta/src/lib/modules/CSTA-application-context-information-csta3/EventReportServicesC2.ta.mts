/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary EventReportServicesC2
 * @description
 *
 * Phase II event-report services. Phase II (ECMA-218) compatibility BIT STRING
 * in ACSE user-information. For Phase III and later, use Capability Exchange to
 * learn supported services and events. ECMA-285 §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventReportServicesC2  ::=  BIT STRING
 *     {
 * 
 *     -- Call events
 * 
 *      callCleared                    (0),
 *      conferenced                    (1),
 *      connectionCleared              (2),
 *      delivered                      (3),
 *      diverted                       (4),
 *      established                    (5),
 *      failed                         (6),
 *      held                           (7),
 *      networkReached             (8),
 *      originated                     (9),
 *      queued                     (10),
 *      retrieved                      (11),
 *      serviceInitiated                  (12),
 *      transferred                    (13),
 * 
 *     -- Feature events
 * 
 *      autoAnswer                     (14),
 *      callInformation                (15),
 *      doNotDisturb                   (16),
 *      forwarding                     (17),
 *      messageWaiting             (18),
 *      microphoneMute             (19),
 *      speakerMute                    (20),
 *      speakerVolume              (21),
 * 
 *     -- Agent state events
 * 
 *      agentBusy                      (22),
 *      loggedOn                       (23),
 *      loggedOff                      (24),
 *      notReady                       (25),
 *      ready                          (26),
 *      workingAfterCall               (27),
 * 
 *     -- Maintenance events
 * 
 *      backInService                  (28),
 *      outOfServiceEvent              (29),
 * 
 *     -- Private events
 * 
 *      privateEvent                   (30),
 * 
 *     -- Voice unit events
 * 
 *      playEvent                      (31),
 *      recordEvent                    (32),
 *      reviewEvent                    (33),
 *      stopEvent                      (34),
 *      suspendPlayEvent               (35),
 *      suspendRecordEvent             (36),
 *      voiceAttributesChangeEvent     (37)    }
 * ```
 */
export
type EventReportServicesC2 = BIT_STRING;

/**
 * @summary EventReportServicesC2_callCleared
 * @description
 * Advertises the `callCleared` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_callCleared: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callCleared
 * @description Alias of {@link EventReportServicesC2_callCleared}.
 * @constant
 */
export
const callCleared: number = EventReportServicesC2_callCleared; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_conferenced
 * @description
 * Advertises the `conferenced` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_conferenced: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary conferenced
 * @description Alias of {@link EventReportServicesC2_conferenced}.
 * @constant
 */
export
const conferenced: number = EventReportServicesC2_conferenced; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_connectionCleared
 * @description
 * Advertises the `connectionCleared` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_connectionCleared: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary connectionCleared
 * @description Alias of {@link EventReportServicesC2_connectionCleared}.
 * @constant
 */
export
const connectionCleared: number = EventReportServicesC2_connectionCleared; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_delivered
 * @description
 * Advertises the `delivered` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_delivered: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary delivered
 * @description Alias of {@link EventReportServicesC2_delivered}.
 * @constant
 */
export
const delivered: number = EventReportServicesC2_delivered; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_diverted
 * @description
 * Advertises the `diverted` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_diverted: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary diverted
 * @description Alias of {@link EventReportServicesC2_diverted}.
 * @constant
 */
export
const diverted: number = EventReportServicesC2_diverted; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_established
 * @description
 * Advertises the `established` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_established: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary established
 * @description Alias of {@link EventReportServicesC2_established}.
 * @constant
 */
export
const established: number = EventReportServicesC2_established; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_failed
 * @description
 * Advertises the `failed` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_failed: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary failed
 * @description Alias of {@link EventReportServicesC2_failed}.
 * @constant
 */
export
const failed: number = EventReportServicesC2_failed; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_held
 * @description Advertises the `held` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_held: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary held
 * @description Alias of {@link EventReportServicesC2_held}.
 * @constant
 */
export
const held: number = EventReportServicesC2_held; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_networkReached
 * @description
 * Advertises the `networkReached` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_networkReached: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary networkReached
 * @description Alias of {@link EventReportServicesC2_networkReached}.
 * @constant
 */
export
const networkReached: number = EventReportServicesC2_networkReached; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_originated
 * @description
 * Advertises the `originated` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_originated: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary originated
 * @description Alias of {@link EventReportServicesC2_originated}.
 * @constant
 */
export
const originated: number = EventReportServicesC2_originated; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_queued
 * @description
 * Advertises the `queued` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_queued: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @description Alias of {@link EventReportServicesC2_queued}.
 * @constant
 */
export
const queued: number = EventReportServicesC2_queued; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_retrieved
 * @description
 * Advertises the `retrieved` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_retrieved: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary retrieved
 * @description Alias of {@link EventReportServicesC2_retrieved}.
 * @constant
 */
export
const retrieved: number = EventReportServicesC2_retrieved; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_serviceInitiated
 * @description
 * Advertises the `serviceInitiated` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_serviceInitiated: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary serviceInitiated
 * @description Alias of {@link EventReportServicesC2_serviceInitiated}.
 * @constant
 */
export
const serviceInitiated: number = EventReportServicesC2_serviceInitiated; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_transferred
 * @description
 * Advertises the `transferred` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_transferred: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary transferred
 * @description Alias of {@link EventReportServicesC2_transferred}.
 * @constant
 */
export
const transferred: number = EventReportServicesC2_transferred; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_autoAnswer
 * @description
 * Advertises the `autoAnswer` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_autoAnswer: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary autoAnswer
 * @description Alias of {@link EventReportServicesC2_autoAnswer}.
 * @constant
 */
export
const autoAnswer: number = EventReportServicesC2_autoAnswer; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_callInformation
 * @description
 * Advertises the `callInformation` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_callInformation: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary callInformation
 * @description Alias of {@link EventReportServicesC2_callInformation}.
 * @constant
 */
export
const callInformation: number = EventReportServicesC2_callInformation; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_doNotDisturb
 * @description
 * Advertises the `doNotDisturb` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_doNotDisturb: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary doNotDisturb
 * @description Alias of {@link EventReportServicesC2_doNotDisturb}.
 * @constant
 */
export
const doNotDisturb: number = EventReportServicesC2_doNotDisturb; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_forwarding
 * @description
 * Advertises the `forwarding` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_forwarding: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary forwarding
 * @description Alias of {@link EventReportServicesC2_forwarding}.
 * @constant
 */
export
const forwarding: number = EventReportServicesC2_forwarding; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_messageWaiting
 * @description
 * Advertises the `messageWaiting` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_messageWaiting: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary messageWaiting
 * @description Alias of {@link EventReportServicesC2_messageWaiting}.
 * @constant
 */
export
const messageWaiting: number = EventReportServicesC2_messageWaiting; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_microphoneMute
 * @description
 * Advertises the `microphoneMute` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_microphoneMute: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary microphoneMute
 * @description Alias of {@link EventReportServicesC2_microphoneMute}.
 * @constant
 */
export
const microphoneMute: number = EventReportServicesC2_microphoneMute; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_speakerMute
 * @description
 * Advertises the `speakerMute` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_speakerMute: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary speakerMute
 * @description Alias of {@link EventReportServicesC2_speakerMute}.
 * @constant
 */
export
const speakerMute: number = EventReportServicesC2_speakerMute; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_speakerVolume
 * @description
 * Advertises the `speakerVolume` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_speakerVolume: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolume
 * @description Alias of {@link EventReportServicesC2_speakerVolume}.
 * @constant
 */
export
const speakerVolume: number = EventReportServicesC2_speakerVolume; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_agentBusy
 * @description
 * Advertises the `agentBusy` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_agentBusy: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary agentBusy
 * @description Alias of {@link EventReportServicesC2_agentBusy}.
 * @constant
 */
export
const agentBusy: number = EventReportServicesC2_agentBusy; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_loggedOn
 * @description
 * Advertises the `loggedOn` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_loggedOn: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary loggedOn
 * @description Alias of {@link EventReportServicesC2_loggedOn}.
 * @constant
 */
export
const loggedOn: number = EventReportServicesC2_loggedOn; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_loggedOff
 * @description
 * Advertises the `loggedOff` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_loggedOff: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary loggedOff
 * @description Alias of {@link EventReportServicesC2_loggedOff}.
 * @constant
 */
export
const loggedOff: number = EventReportServicesC2_loggedOff; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_notReady
 * @description
 * Advertises the `notReady` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_notReady: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary notReady
 * @description Alias of {@link EventReportServicesC2_notReady}.
 * @constant
 */
export
const notReady: number = EventReportServicesC2_notReady; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_ready
 * @description
 * Advertises the `ready` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_ready: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary ready
 * @description Alias of {@link EventReportServicesC2_ready}.
 * @constant
 */
export
const ready: number = EventReportServicesC2_ready; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_workingAfterCall
 * @description
 * Advertises the `workingAfterCall` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_workingAfterCall: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary workingAfterCall
 * @description Alias of {@link EventReportServicesC2_workingAfterCall}.
 * @constant
 */
export
const workingAfterCall: number = EventReportServicesC2_workingAfterCall; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_backInService
 * @description
 * Advertises the `backInService` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_backInService: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary backInService
 * @description Alias of {@link EventReportServicesC2_backInService}.
 * @constant
 */
export
const backInService: number = EventReportServicesC2_backInService; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_outOfServiceEvent
 * @description
 * Advertises the `outOfServiceEvent` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_outOfServiceEvent: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary outOfServiceEvent
 * @description Alias of {@link EventReportServicesC2_outOfServiceEvent}.
 * @constant
 */
export
const outOfServiceEvent: number = EventReportServicesC2_outOfServiceEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_privateEvent
 * @description
 * Advertises the `privateEvent` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_privateEvent: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary privateEvent
 * @description Alias of {@link EventReportServicesC2_privateEvent}.
 * @constant
 */
export
const privateEvent: number = EventReportServicesC2_privateEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_playEvent
 * @description
 * Advertises the `playEvent` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_playEvent: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary playEvent
 * @description Alias of {@link EventReportServicesC2_playEvent}.
 * @constant
 */
export
const playEvent: number = EventReportServicesC2_playEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_recordEvent
 * @description
 * Advertises the `recordEvent` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_recordEvent: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary recordEvent
 * @description Alias of {@link EventReportServicesC2_recordEvent}.
 * @constant
 */
export
const recordEvent: number = EventReportServicesC2_recordEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_reviewEvent
 * @description
 * Advertises the `reviewEvent` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_reviewEvent: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary reviewEvent
 * @description Alias of {@link EventReportServicesC2_reviewEvent}.
 * @constant
 */
export
const reviewEvent: number = EventReportServicesC2_reviewEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_stopEvent
 * @description
 * Advertises the `stopEvent` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_stopEvent: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary stopEvent
 * @description Alias of {@link EventReportServicesC2_stopEvent}.
 * @constant
 */
export
const stopEvent: number = EventReportServicesC2_stopEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_suspendPlayEvent
 * @description
 * Advertises the `suspendPlayEvent` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_suspendPlayEvent: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary suspendPlayEvent
 * @description Alias of {@link EventReportServicesC2_suspendPlayEvent}.
 * @constant
 */
export
const suspendPlayEvent: number = EventReportServicesC2_suspendPlayEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_suspendRecordEvent
 * @description
 * Advertises the `suspendRecordEvent` event for this association. ECMA-285
 * §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_suspendRecordEvent: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary suspendRecordEvent
 * @description Alias of {@link EventReportServicesC2_suspendRecordEvent}.
 * @constant
 */
export
const suspendRecordEvent: number = EventReportServicesC2_suspendRecordEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_voiceAttributesChangeEvent
 * @description
 * Advertises the `voiceAttributesChangeEvent` event for this association.
 * ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const EventReportServicesC2_voiceAttributesChangeEvent: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary voiceAttributesChangeEvent
 * @description
 * Alias of {@link EventReportServicesC2_voiceAttributesChangeEvent}.
 * @constant
 */
export
const voiceAttributesChangeEvent: number = EventReportServicesC2_voiceAttributesChangeEvent; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EventReportServicesC2: $.ASN1Decoder<EventReportServicesC2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventReportServicesC2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventReportServicesC2 (el: _Element): EventReportServicesC2 {
    if (!_cached_decoder_for_EventReportServicesC2) { _cached_decoder_for_EventReportServicesC2 = $._decodeBitString; }
    return _cached_decoder_for_EventReportServicesC2(el);
}

let _cached_encoder_for_EventReportServicesC2: $.ASN1Encoder<EventReportServicesC2> | null = null;

/**
 * @summary Encodes a(n) EventReportServicesC2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventReportServicesC2, encoded as an ASN.1 Element.
 */
export
function _encode_EventReportServicesC2 (value: EventReportServicesC2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventReportServicesC2) { _cached_encoder_for_EventReportServicesC2 = $._encodeBitString; }
    return _cached_encoder_for_EventReportServicesC2(value, elGetter);
}


/* eslint-enable */
