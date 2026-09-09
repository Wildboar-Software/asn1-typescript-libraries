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



/**
 * @summary EventTypeBCSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeBCSM      ::=  ENUMERATED {
 *      origAttemptAuthorized(1),
 *      collectedInfo(2),
 *      analyzedInformation(3),
 *      routeSelectFailure(4),
 *      oCalledPartyBusy(5),
 *      oNoAnswer(6),
 *      oAnswer(7),
 *      oMidCall(8),
 *      oDisconnect(9),
 *      oAbandon(10),
 *      termAttemptAuthorized(12),
 *      tCalledPartyBusy(13),
 *      tNoAnswer(14),
 *      tAnswer(15),
 *      tMidCall(16),
 *      tDisconnect(17),
 *      tAbandon(18)
 *      }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EventTypeBCSM {
    origAttemptAuthorized = 1,
    collectedInfo = 2,
    analyzedInformation = 3,
    routeSelectFailure = 4,
    oCalledPartyBusy = 5,
    oNoAnswer = 6,
    oAnswer = 7,
    oMidCall = 8,
    oDisconnect = 9,
    oAbandon = 10,
    termAttemptAuthorized = 12,
    tCalledPartyBusy = 13,
    tNoAnswer = 14,
    tAnswer = 15,
    tMidCall = 16,
    tDisconnect = 17,
    tAbandon = 18,
}

/**
 * @summary EventTypeBCSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeBCSM      ::=  ENUMERATED {
 *      origAttemptAuthorized(1),
 *      collectedInfo(2),
 *      analyzedInformation(3),
 *      routeSelectFailure(4),
 *      oCalledPartyBusy(5),
 *      oNoAnswer(6),
 *      oAnswer(7),
 *      oMidCall(8),
 *      oDisconnect(9),
 *      oAbandon(10),
 *      termAttemptAuthorized(12),
 *      tCalledPartyBusy(13),
 *      tNoAnswer(14),
 *      tAnswer(15),
 *      tMidCall(16),
 *      tDisconnect(17),
 *      tAbandon(18)
 *      }
 * ```
 * 
 * @enum {number}
 */
export
type EventTypeBCSM = _enum_for_EventTypeBCSM;

/**
 * @summary EventTypeBCSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeBCSM      ::=  ENUMERATED {
 *      origAttemptAuthorized(1),
 *      collectedInfo(2),
 *      analyzedInformation(3),
 *      routeSelectFailure(4),
 *      oCalledPartyBusy(5),
 *      oNoAnswer(6),
 *      oAnswer(7),
 *      oMidCall(8),
 *      oDisconnect(9),
 *      oAbandon(10),
 *      termAttemptAuthorized(12),
 *      tCalledPartyBusy(13),
 *      tNoAnswer(14),
 *      tAnswer(15),
 *      tMidCall(16),
 *      tDisconnect(17),
 *      tAbandon(18)
 *      }
 * ```
 * 
 * @enum {number}
 */
export
const EventTypeBCSM = _enum_for_EventTypeBCSM;

/**
 * @summary EventTypeBCSM_origAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_origAttemptAuthorized: EventTypeBCSM = EventTypeBCSM.origAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary origAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const origAttemptAuthorized: EventTypeBCSM = EventTypeBCSM.origAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_collectedInfo
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_collectedInfo: EventTypeBCSM = EventTypeBCSM.collectedInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary collectedInfo
 * @constant
 * @type {number}
 */
export
const collectedInfo: EventTypeBCSM = EventTypeBCSM.collectedInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_analyzedInformation
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_analyzedInformation: EventTypeBCSM = EventTypeBCSM.analyzedInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary analyzedInformation
 * @constant
 * @type {number}
 */
export
const analyzedInformation: EventTypeBCSM = EventTypeBCSM.analyzedInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_routeSelectFailure
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_routeSelectFailure: EventTypeBCSM = EventTypeBCSM.routeSelectFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeSelectFailure
 * @constant
 * @type {number}
 */
export
const routeSelectFailure: EventTypeBCSM = EventTypeBCSM.routeSelectFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oCalledPartyBusy: EventTypeBCSM = EventTypeBCSM.oCalledPartyBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const oCalledPartyBusy: EventTypeBCSM = EventTypeBCSM.oCalledPartyBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oNoAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oNoAnswer: EventTypeBCSM = EventTypeBCSM.oNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oNoAnswer
 * @constant
 * @type {number}
 */
export
const oNoAnswer: EventTypeBCSM = EventTypeBCSM.oNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oAnswer: EventTypeBCSM = EventTypeBCSM.oAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAnswer
 * @constant
 * @type {number}
 */
export
const oAnswer: EventTypeBCSM = EventTypeBCSM.oAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oMidCall
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oMidCall: EventTypeBCSM = EventTypeBCSM.oMidCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oMidCall
 * @constant
 * @type {number}
 */
export
const oMidCall: EventTypeBCSM = EventTypeBCSM.oMidCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oDisconnect
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oDisconnect: EventTypeBCSM = EventTypeBCSM.oDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oDisconnect
 * @constant
 * @type {number}
 */
export
const oDisconnect: EventTypeBCSM = EventTypeBCSM.oDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oAbandon
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oAbandon: EventTypeBCSM = EventTypeBCSM.oAbandon; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAbandon
 * @constant
 * @type {number}
 */
export
const oAbandon: EventTypeBCSM = EventTypeBCSM.oAbandon; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_termAttemptAuthorized: EventTypeBCSM = EventTypeBCSM.termAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const termAttemptAuthorized: EventTypeBCSM = EventTypeBCSM.termAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tCalledPartyBusy: EventTypeBCSM = EventTypeBCSM.tCalledPartyBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const tCalledPartyBusy: EventTypeBCSM = EventTypeBCSM.tCalledPartyBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tNoAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tNoAnswer: EventTypeBCSM = EventTypeBCSM.tNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNoAnswer
 * @constant
 * @type {number}
 */
export
const tNoAnswer: EventTypeBCSM = EventTypeBCSM.tNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tAnswer: EventTypeBCSM = EventTypeBCSM.tAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAnswer
 * @constant
 * @type {number}
 */
export
const tAnswer: EventTypeBCSM = EventTypeBCSM.tAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tMidCall
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tMidCall: EventTypeBCSM = EventTypeBCSM.tMidCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tMidCall
 * @constant
 * @type {number}
 */
export
const tMidCall: EventTypeBCSM = EventTypeBCSM.tMidCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tDisconnect
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tDisconnect: EventTypeBCSM = EventTypeBCSM.tDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tDisconnect
 * @constant
 * @type {number}
 */
export
const tDisconnect: EventTypeBCSM = EventTypeBCSM.tDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tAbandon
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tAbandon: EventTypeBCSM = EventTypeBCSM.tAbandon; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAbandon
 * @constant
 * @type {number}
 */
export
const tAbandon: EventTypeBCSM = EventTypeBCSM.tAbandon; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EventTypeBCSM: $.ASN1Decoder<EventTypeBCSM> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventTypeBCSM
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventTypeBCSM (el: _Element): EventTypeBCSM {
    if (!_cached_decoder_for_EventTypeBCSM) { _cached_decoder_for_EventTypeBCSM = $._decodeEnumerated; }
    return _cached_decoder_for_EventTypeBCSM(el);
}

let _cached_encoder_for_EventTypeBCSM: $.ASN1Encoder<EventTypeBCSM> | null = null;

/**
 * @summary Encodes a(n) EventTypeBCSM into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventTypeBCSM, encoded as an ASN.1 Element.
 */
export
function _encode_EventTypeBCSM (value: EventTypeBCSM, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventTypeBCSM) { _cached_encoder_for_EventTypeBCSM = $._encodeEnumerated; }
    return _cached_encoder_for_EventTypeBCSM(value, elGetter);
}


/* eslint-enable */
