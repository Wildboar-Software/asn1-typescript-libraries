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
const EventTypeBCSM = _enum_for_EventTypeBCSM;

/**
 * @summary EventTypeBCSM_origAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_origAttemptAuthorized = EventTypeBCSM.origAttemptAuthorized satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary origAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const origAttemptAuthorized = EventTypeBCSM.origAttemptAuthorized satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_collectedInfo
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_collectedInfo = EventTypeBCSM.collectedInfo satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary collectedInfo
 * @constant
 * @type {number}
 */
export
const collectedInfo = EventTypeBCSM.collectedInfo satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_analysedInformation
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_analysedInformation = EventTypeBCSM.analysedInformation satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary analysedInformation
 * @constant
 * @type {number}
 */
export
const analysedInformation = EventTypeBCSM.analysedInformation satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_routeSelectFailure
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_routeSelectFailure = EventTypeBCSM.routeSelectFailure satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeSelectFailure
 * @constant
 * @type {number}
 */
export
const routeSelectFailure = EventTypeBCSM.routeSelectFailure satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oCalledPartyBusy = EventTypeBCSM.oCalledPartyBusy satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const oCalledPartyBusy = EventTypeBCSM.oCalledPartyBusy satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oNoAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oNoAnswer = EventTypeBCSM.oNoAnswer satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oNoAnswer
 * @constant
 * @type {number}
 */
export
const oNoAnswer = EventTypeBCSM.oNoAnswer satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oAnswer = EventTypeBCSM.oAnswer satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAnswer
 * @constant
 * @type {number}
 */
export
const oAnswer = EventTypeBCSM.oAnswer satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oMidCall
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oMidCall = EventTypeBCSM.oMidCall satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oMidCall
 * @constant
 * @type {number}
 */
export
const oMidCall = EventTypeBCSM.oMidCall satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oDisconnect
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oDisconnect = EventTypeBCSM.oDisconnect satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oDisconnect
 * @constant
 * @type {number}
 */
export
const oDisconnect = EventTypeBCSM.oDisconnect satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oAbandon
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oAbandon = EventTypeBCSM.oAbandon satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAbandon
 * @constant
 * @type {number}
 */
export
const oAbandon = EventTypeBCSM.oAbandon satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_termAttemptAuthorized = EventTypeBCSM.termAttemptAuthorized satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const termAttemptAuthorized = EventTypeBCSM.termAttemptAuthorized satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tBusy
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tBusy = EventTypeBCSM.tBusy satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBusy
 * @constant
 * @type {number}
 */
export
const tBusy = EventTypeBCSM.tBusy satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tNoAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tNoAnswer = EventTypeBCSM.tNoAnswer satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNoAnswer
 * @constant
 * @type {number}
 */
export
const tNoAnswer = EventTypeBCSM.tNoAnswer satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tAnswer = EventTypeBCSM.tAnswer satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAnswer
 * @constant
 * @type {number}
 */
export
const tAnswer = EventTypeBCSM.tAnswer satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tMidCall
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tMidCall = EventTypeBCSM.tMidCall satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tMidCall
 * @constant
 * @type {number}
 */
export
const tMidCall = EventTypeBCSM.tMidCall satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tDisconnect
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tDisconnect = EventTypeBCSM.tDisconnect satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tDisconnect
 * @constant
 * @type {number}
 */
export
const tDisconnect = EventTypeBCSM.tDisconnect satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tAbandon
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tAbandon = EventTypeBCSM.tAbandon satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAbandon
 * @constant
 * @type {number}
 */
export
const tAbandon = EventTypeBCSM.tAbandon satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oTermSeized
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oTermSeized = EventTypeBCSM.oTermSeized satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTermSeized
 * @constant
 * @type {number}
 */
export
const oTermSeized = EventTypeBCSM.oTermSeized satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oSuspended
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oSuspended = EventTypeBCSM.oSuspended satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oSuspended
 * @constant
 * @type {number}
 */
export
const oSuspended = EventTypeBCSM.oSuspended satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tSuspended
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tSuspended = EventTypeBCSM.tSuspended satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tSuspended
 * @constant
 * @type {number}
 */
export
const tSuspended = EventTypeBCSM.tSuspended satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_origAttempt
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_origAttempt = EventTypeBCSM.origAttempt satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary origAttempt
 * @constant
 * @type {number}
 */
export
const origAttempt = EventTypeBCSM.origAttempt satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_termAttempt
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_termAttempt = EventTypeBCSM.termAttempt satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttempt
 * @constant
 * @type {number}
 */
export
const termAttempt = EventTypeBCSM.termAttempt satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oReAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oReAnswer = EventTypeBCSM.oReAnswer satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oReAnswer
 * @constant
 * @type {number}
 */
export
const oReAnswer = EventTypeBCSM.oReAnswer satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tReAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tReAnswer = EventTypeBCSM.tReAnswer satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tReAnswer
 * @constant
 * @type {number}
 */
export
const tReAnswer = EventTypeBCSM.tReAnswer satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_facilitySelectedAndAvailable
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_facilitySelectedAndAvailable = EventTypeBCSM.facilitySelectedAndAvailable satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary facilitySelectedAndAvailable
 * @constant
 * @type {number}
 */
export
const facilitySelectedAndAvailable = EventTypeBCSM.facilitySelectedAndAvailable satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_callAccepted
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_callAccepted = EventTypeBCSM.callAccepted satisfies EventTypeBCSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callAccepted
 * @constant
 * @type {number}
 */
export
const callAccepted = EventTypeBCSM.callAccepted satisfies EventTypeBCSM; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EventTypeBCSM = $._decodeEnumerated;
export const _encode_EventTypeBCSM = $._encodeEnumerated;


/* eslint-enable */
