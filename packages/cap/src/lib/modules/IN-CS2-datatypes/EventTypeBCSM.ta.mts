/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * EventTypeBCSM  ::=  ENUMERATED {
 *   origAttemptAuthorized(1), collectedInfo(2), analysedInformation(3),
 *   routeSelectFailure(4), oCalledPartyBusy(5), oNoAnswer(6), oAnswer(7),
 *   oMidCall(8), oDisconnect(9), oAbandon(10), termAttemptAuthorized(12),
 *   tBusy(13), tNoAnswer(14), tAnswer(15), tMidCall(16), tDisconnect(17),
 *   tAbandon(18), oTermSeized(19), oSuspended(20), tSuspended(21),
 *   origAttempt(22), termAttempt(23), oReAnswer(24), tReAnswer(25),
 *   facilitySelectedAndAvailable(26), callAccepted(27)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EventTypeBCSM {
    origAttemptAuthorized = 1,
    collectedInfo = 2,
    analysedInformation = 3,
    routeSelectFailure = 4,
    oCalledPartyBusy = 5,
    oNoAnswer = 6,
    oAnswer = 7,
    oMidCall = 8,
    oDisconnect = 9,
    oAbandon = 10,
    termAttemptAuthorized = 12,
    tBusy = 13,
    tNoAnswer = 14,
    tAnswer = 15,
    tMidCall = 16,
    tDisconnect = 17,
    tAbandon = 18,
    oTermSeized = 19,
    oSuspended = 20,
    tSuspended = 21,
    origAttempt = 22,
    termAttempt = 23,
    oReAnswer = 24,
    tReAnswer = 25,
    facilitySelectedAndAvailable = 26,
    callAccepted = 27,
}

/**
 * @summary EventTypeBCSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeBCSM  ::=  ENUMERATED {
 *   origAttemptAuthorized(1), collectedInfo(2), analysedInformation(3),
 *   routeSelectFailure(4), oCalledPartyBusy(5), oNoAnswer(6), oAnswer(7),
 *   oMidCall(8), oDisconnect(9), oAbandon(10), termAttemptAuthorized(12),
 *   tBusy(13), tNoAnswer(14), tAnswer(15), tMidCall(16), tDisconnect(17),
 *   tAbandon(18), oTermSeized(19), oSuspended(20), tSuspended(21),
 *   origAttempt(22), termAttempt(23), oReAnswer(24), tReAnswer(25),
 *   facilitySelectedAndAvailable(26), callAccepted(27)}
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
 * EventTypeBCSM  ::=  ENUMERATED {
 *   origAttemptAuthorized(1), collectedInfo(2), analysedInformation(3),
 *   routeSelectFailure(4), oCalledPartyBusy(5), oNoAnswer(6), oAnswer(7),
 *   oMidCall(8), oDisconnect(9), oAbandon(10), termAttemptAuthorized(12),
 *   tBusy(13), tNoAnswer(14), tAnswer(15), tMidCall(16), tDisconnect(17),
 *   tAbandon(18), oTermSeized(19), oSuspended(20), tSuspended(21),
 *   origAttempt(22), termAttempt(23), oReAnswer(24), tReAnswer(25),
 *   facilitySelectedAndAvailable(26), callAccepted(27)}
 * ```
 * 
 * @enum {number}
 */
export
const EventTypeBCSM: typeof _enum_for_EventTypeBCSM = _enum_for_EventTypeBCSM;

/**
 * @summary EventTypeBCSM_origAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_origAttemptAuthorized: _enum_for_EventTypeBCSM.origAttemptAuthorized = EventTypeBCSM.origAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary origAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const origAttemptAuthorized: _enum_for_EventTypeBCSM.origAttemptAuthorized = EventTypeBCSM.origAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_collectedInfo
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_collectedInfo: _enum_for_EventTypeBCSM.collectedInfo = EventTypeBCSM.collectedInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary collectedInfo
 * @constant
 * @type {number}
 */
export
const collectedInfo: _enum_for_EventTypeBCSM.collectedInfo = EventTypeBCSM.collectedInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_analysedInformation
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_analysedInformation: _enum_for_EventTypeBCSM.analysedInformation = EventTypeBCSM.analysedInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary analysedInformation
 * @constant
 * @type {number}
 */
export
const analysedInformation: _enum_for_EventTypeBCSM.analysedInformation = EventTypeBCSM.analysedInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_routeSelectFailure
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_routeSelectFailure: _enum_for_EventTypeBCSM.routeSelectFailure = EventTypeBCSM.routeSelectFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeSelectFailure
 * @constant
 * @type {number}
 */
export
const routeSelectFailure: _enum_for_EventTypeBCSM.routeSelectFailure = EventTypeBCSM.routeSelectFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oCalledPartyBusy: _enum_for_EventTypeBCSM.oCalledPartyBusy = EventTypeBCSM.oCalledPartyBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const oCalledPartyBusy: _enum_for_EventTypeBCSM.oCalledPartyBusy = EventTypeBCSM.oCalledPartyBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oNoAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oNoAnswer: _enum_for_EventTypeBCSM.oNoAnswer = EventTypeBCSM.oNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oNoAnswer
 * @constant
 * @type {number}
 */
export
const oNoAnswer: _enum_for_EventTypeBCSM.oNoAnswer = EventTypeBCSM.oNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oAnswer: _enum_for_EventTypeBCSM.oAnswer = EventTypeBCSM.oAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAnswer
 * @constant
 * @type {number}
 */
export
const oAnswer: _enum_for_EventTypeBCSM.oAnswer = EventTypeBCSM.oAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oMidCall
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oMidCall: _enum_for_EventTypeBCSM.oMidCall = EventTypeBCSM.oMidCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oMidCall
 * @constant
 * @type {number}
 */
export
const oMidCall: _enum_for_EventTypeBCSM.oMidCall = EventTypeBCSM.oMidCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oDisconnect
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oDisconnect: _enum_for_EventTypeBCSM.oDisconnect = EventTypeBCSM.oDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oDisconnect
 * @constant
 * @type {number}
 */
export
const oDisconnect: _enum_for_EventTypeBCSM.oDisconnect = EventTypeBCSM.oDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oAbandon
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oAbandon: _enum_for_EventTypeBCSM.oAbandon = EventTypeBCSM.oAbandon; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAbandon
 * @constant
 * @type {number}
 */
export
const oAbandon: _enum_for_EventTypeBCSM.oAbandon = EventTypeBCSM.oAbandon; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_termAttemptAuthorized: _enum_for_EventTypeBCSM.termAttemptAuthorized = EventTypeBCSM.termAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const termAttemptAuthorized: _enum_for_EventTypeBCSM.termAttemptAuthorized = EventTypeBCSM.termAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tBusy
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tBusy: _enum_for_EventTypeBCSM.tBusy = EventTypeBCSM.tBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBusy
 * @constant
 * @type {number}
 */
export
const tBusy: _enum_for_EventTypeBCSM.tBusy = EventTypeBCSM.tBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tNoAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tNoAnswer: _enum_for_EventTypeBCSM.tNoAnswer = EventTypeBCSM.tNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNoAnswer
 * @constant
 * @type {number}
 */
export
const tNoAnswer: _enum_for_EventTypeBCSM.tNoAnswer = EventTypeBCSM.tNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tAnswer: _enum_for_EventTypeBCSM.tAnswer = EventTypeBCSM.tAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAnswer
 * @constant
 * @type {number}
 */
export
const tAnswer: _enum_for_EventTypeBCSM.tAnswer = EventTypeBCSM.tAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tMidCall
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tMidCall: _enum_for_EventTypeBCSM.tMidCall = EventTypeBCSM.tMidCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tMidCall
 * @constant
 * @type {number}
 */
export
const tMidCall: _enum_for_EventTypeBCSM.tMidCall = EventTypeBCSM.tMidCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tDisconnect
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tDisconnect: _enum_for_EventTypeBCSM.tDisconnect = EventTypeBCSM.tDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tDisconnect
 * @constant
 * @type {number}
 */
export
const tDisconnect: _enum_for_EventTypeBCSM.tDisconnect = EventTypeBCSM.tDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tAbandon
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tAbandon: _enum_for_EventTypeBCSM.tAbandon = EventTypeBCSM.tAbandon; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAbandon
 * @constant
 * @type {number}
 */
export
const tAbandon: _enum_for_EventTypeBCSM.tAbandon = EventTypeBCSM.tAbandon; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oTermSeized
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oTermSeized: _enum_for_EventTypeBCSM.oTermSeized = EventTypeBCSM.oTermSeized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTermSeized
 * @constant
 * @type {number}
 */
export
const oTermSeized: _enum_for_EventTypeBCSM.oTermSeized = EventTypeBCSM.oTermSeized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oSuspended
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oSuspended: _enum_for_EventTypeBCSM.oSuspended = EventTypeBCSM.oSuspended; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oSuspended
 * @constant
 * @type {number}
 */
export
const oSuspended: _enum_for_EventTypeBCSM.oSuspended = EventTypeBCSM.oSuspended; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tSuspended
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tSuspended: _enum_for_EventTypeBCSM.tSuspended = EventTypeBCSM.tSuspended; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tSuspended
 * @constant
 * @type {number}
 */
export
const tSuspended: _enum_for_EventTypeBCSM.tSuspended = EventTypeBCSM.tSuspended; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_origAttempt
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_origAttempt: _enum_for_EventTypeBCSM.origAttempt = EventTypeBCSM.origAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary origAttempt
 * @constant
 * @type {number}
 */
export
const origAttempt: _enum_for_EventTypeBCSM.origAttempt = EventTypeBCSM.origAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_termAttempt
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_termAttempt: _enum_for_EventTypeBCSM.termAttempt = EventTypeBCSM.termAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttempt
 * @constant
 * @type {number}
 */
export
const termAttempt: _enum_for_EventTypeBCSM.termAttempt = EventTypeBCSM.termAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oReAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oReAnswer: _enum_for_EventTypeBCSM.oReAnswer = EventTypeBCSM.oReAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oReAnswer
 * @constant
 * @type {number}
 */
export
const oReAnswer: _enum_for_EventTypeBCSM.oReAnswer = EventTypeBCSM.oReAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tReAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tReAnswer: _enum_for_EventTypeBCSM.tReAnswer = EventTypeBCSM.tReAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tReAnswer
 * @constant
 * @type {number}
 */
export
const tReAnswer: _enum_for_EventTypeBCSM.tReAnswer = EventTypeBCSM.tReAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_facilitySelectedAndAvailable
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_facilitySelectedAndAvailable: _enum_for_EventTypeBCSM.facilitySelectedAndAvailable = EventTypeBCSM.facilitySelectedAndAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary facilitySelectedAndAvailable
 * @constant
 * @type {number}
 */
export
const facilitySelectedAndAvailable: _enum_for_EventTypeBCSM.facilitySelectedAndAvailable = EventTypeBCSM.facilitySelectedAndAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_callAccepted
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_callAccepted: _enum_for_EventTypeBCSM.callAccepted = EventTypeBCSM.callAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callAccepted
 * @constant
 * @type {number}
 */
export
const callAccepted: _enum_for_EventTypeBCSM.callAccepted = EventTypeBCSM.callAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EventTypeBCSM: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_EventTypeBCSM: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
