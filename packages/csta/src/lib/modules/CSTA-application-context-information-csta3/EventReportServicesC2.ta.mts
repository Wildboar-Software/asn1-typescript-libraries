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
 * @summary EventReportServicesC2
 * @description
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
 * @constant
 */
export
const EventReportServicesC2_callCleared: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callCleared
 * @constant
 */
export
const callCleared: number = EventReportServicesC2_callCleared; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_conferenced
 * @constant
 */
export
const EventReportServicesC2_conferenced: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary conferenced
 * @constant
 */
export
const conferenced: number = EventReportServicesC2_conferenced; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_connectionCleared
 * @constant
 */
export
const EventReportServicesC2_connectionCleared: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary connectionCleared
 * @constant
 */
export
const connectionCleared: number = EventReportServicesC2_connectionCleared; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_delivered
 * @constant
 */
export
const EventReportServicesC2_delivered: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary delivered
 * @constant
 */
export
const delivered: number = EventReportServicesC2_delivered; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_diverted
 * @constant
 */
export
const EventReportServicesC2_diverted: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary diverted
 * @constant
 */
export
const diverted: number = EventReportServicesC2_diverted; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_established
 * @constant
 */
export
const EventReportServicesC2_established: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary established
 * @constant
 */
export
const established: number = EventReportServicesC2_established; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_failed
 * @constant
 */
export
const EventReportServicesC2_failed: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary failed
 * @constant
 */
export
const failed: number = EventReportServicesC2_failed; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_held
 * @constant
 */
export
const EventReportServicesC2_held: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary held
 * @constant
 */
export
const held: number = EventReportServicesC2_held; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_networkReached
 * @constant
 */
export
const EventReportServicesC2_networkReached: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary networkReached
 * @constant
 */
export
const networkReached: number = EventReportServicesC2_networkReached; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_originated
 * @constant
 */
export
const EventReportServicesC2_originated: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary originated
 * @constant
 */
export
const originated: number = EventReportServicesC2_originated; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_queued
 * @constant
 */
export
const EventReportServicesC2_queued: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = EventReportServicesC2_queued; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_retrieved
 * @constant
 */
export
const EventReportServicesC2_retrieved: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary retrieved
 * @constant
 */
export
const retrieved: number = EventReportServicesC2_retrieved; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_serviceInitiated
 * @constant
 */
export
const EventReportServicesC2_serviceInitiated: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary serviceInitiated
 * @constant
 */
export
const serviceInitiated: number = EventReportServicesC2_serviceInitiated; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_transferred
 * @constant
 */
export
const EventReportServicesC2_transferred: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary transferred
 * @constant
 */
export
const transferred: number = EventReportServicesC2_transferred; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_autoAnswer
 * @constant
 */
export
const EventReportServicesC2_autoAnswer: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary autoAnswer
 * @constant
 */
export
const autoAnswer: number = EventReportServicesC2_autoAnswer; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_callInformation
 * @constant
 */
export
const EventReportServicesC2_callInformation: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary callInformation
 * @constant
 */
export
const callInformation: number = EventReportServicesC2_callInformation; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_doNotDisturb
 * @constant
 */
export
const EventReportServicesC2_doNotDisturb: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary doNotDisturb
 * @constant
 */
export
const doNotDisturb: number = EventReportServicesC2_doNotDisturb; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_forwarding
 * @constant
 */
export
const EventReportServicesC2_forwarding: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary forwarding
 * @constant
 */
export
const forwarding: number = EventReportServicesC2_forwarding; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_messageWaiting
 * @constant
 */
export
const EventReportServicesC2_messageWaiting: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary messageWaiting
 * @constant
 */
export
const messageWaiting: number = EventReportServicesC2_messageWaiting; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_microphoneMute
 * @constant
 */
export
const EventReportServicesC2_microphoneMute: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary microphoneMute
 * @constant
 */
export
const microphoneMute: number = EventReportServicesC2_microphoneMute; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_speakerMute
 * @constant
 */
export
const EventReportServicesC2_speakerMute: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary speakerMute
 * @constant
 */
export
const speakerMute: number = EventReportServicesC2_speakerMute; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_speakerVolume
 * @constant
 */
export
const EventReportServicesC2_speakerVolume: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolume
 * @constant
 */
export
const speakerVolume: number = EventReportServicesC2_speakerVolume; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_agentBusy
 * @constant
 */
export
const EventReportServicesC2_agentBusy: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary agentBusy
 * @constant
 */
export
const agentBusy: number = EventReportServicesC2_agentBusy; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_loggedOn
 * @constant
 */
export
const EventReportServicesC2_loggedOn: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary loggedOn
 * @constant
 */
export
const loggedOn: number = EventReportServicesC2_loggedOn; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_loggedOff
 * @constant
 */
export
const EventReportServicesC2_loggedOff: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary loggedOff
 * @constant
 */
export
const loggedOff: number = EventReportServicesC2_loggedOff; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_notReady
 * @constant
 */
export
const EventReportServicesC2_notReady: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary notReady
 * @constant
 */
export
const notReady: number = EventReportServicesC2_notReady; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_ready
 * @constant
 */
export
const EventReportServicesC2_ready: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary ready
 * @constant
 */
export
const ready: number = EventReportServicesC2_ready; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_workingAfterCall
 * @constant
 */
export
const EventReportServicesC2_workingAfterCall: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary workingAfterCall
 * @constant
 */
export
const workingAfterCall: number = EventReportServicesC2_workingAfterCall; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_backInService
 * @constant
 */
export
const EventReportServicesC2_backInService: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary backInService
 * @constant
 */
export
const backInService: number = EventReportServicesC2_backInService; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_outOfServiceEvent
 * @constant
 */
export
const EventReportServicesC2_outOfServiceEvent: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary outOfServiceEvent
 * @constant
 */
export
const outOfServiceEvent: number = EventReportServicesC2_outOfServiceEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_privateEvent
 * @constant
 */
export
const EventReportServicesC2_privateEvent: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary privateEvent
 * @constant
 */
export
const privateEvent: number = EventReportServicesC2_privateEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_playEvent
 * @constant
 */
export
const EventReportServicesC2_playEvent: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary playEvent
 * @constant
 */
export
const playEvent: number = EventReportServicesC2_playEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_recordEvent
 * @constant
 */
export
const EventReportServicesC2_recordEvent: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary recordEvent
 * @constant
 */
export
const recordEvent: number = EventReportServicesC2_recordEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_reviewEvent
 * @constant
 */
export
const EventReportServicesC2_reviewEvent: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary reviewEvent
 * @constant
 */
export
const reviewEvent: number = EventReportServicesC2_reviewEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_stopEvent
 * @constant
 */
export
const EventReportServicesC2_stopEvent: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary stopEvent
 * @constant
 */
export
const stopEvent: number = EventReportServicesC2_stopEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_suspendPlayEvent
 * @constant
 */
export
const EventReportServicesC2_suspendPlayEvent: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary suspendPlayEvent
 * @constant
 */
export
const suspendPlayEvent: number = EventReportServicesC2_suspendPlayEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_suspendRecordEvent
 * @constant
 */
export
const EventReportServicesC2_suspendRecordEvent: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary suspendRecordEvent
 * @constant
 */
export
const suspendRecordEvent: number = EventReportServicesC2_suspendRecordEvent; /* SHORT_NAMED_BIT */

/**
 * @summary EventReportServicesC2_voiceAttributesChangeEvent
 * @constant
 */
export
const EventReportServicesC2_voiceAttributesChangeEvent: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary voiceAttributesChangeEvent
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
