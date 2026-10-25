/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
 *   tAbandon(18), oTermSeized(19), oSuspend(20), tSuspend(21), origAttempt(22),
 *   termAttempt(23), oReAnswer(24), tReAnswer(25),
 *   facilitySelectedAndAvailable(26), callAccepted(27),
 *   authorizeRouteFailure(28), originationAttemptDenied(29),
 *   terminationAttemptDenied(30), oModifyRequest(100), oModifyResult(101),
 *   tModifyRequest(102), tModifyResult(103)}
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
    oSuspend = 20,
    tSuspend = 21,
    origAttempt = 22,
    termAttempt = 23,
    oReAnswer = 24,
    tReAnswer = 25,
    facilitySelectedAndAvailable = 26,
    callAccepted = 27,
    authorizeRouteFailure = 28,
    originationAttemptDenied = 29,
    terminationAttemptDenied = 30,
    oModifyRequest = 100,
    oModifyResult = 101,
    tModifyRequest = 102,
    tModifyResult = 103,
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
 *   tAbandon(18), oTermSeized(19), oSuspend(20), tSuspend(21), origAttempt(22),
 *   termAttempt(23), oReAnswer(24), tReAnswer(25),
 *   facilitySelectedAndAvailable(26), callAccepted(27),
 *   authorizeRouteFailure(28), originationAttemptDenied(29),
 *   terminationAttemptDenied(30), oModifyRequest(100), oModifyResult(101),
 *   tModifyRequest(102), tModifyResult(103)}
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
 *   tAbandon(18), oTermSeized(19), oSuspend(20), tSuspend(21), origAttempt(22),
 *   termAttempt(23), oReAnswer(24), tReAnswer(25),
 *   facilitySelectedAndAvailable(26), callAccepted(27),
 *   authorizeRouteFailure(28), originationAttemptDenied(29),
 *   terminationAttemptDenied(30), oModifyRequest(100), oModifyResult(101),
 *   tModifyRequest(102), tModifyResult(103)}
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
const EventTypeBCSM_origAttemptAuthorized = EventTypeBCSM.origAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary origAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const origAttemptAuthorized = EventTypeBCSM.origAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_collectedInfo
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_collectedInfo = EventTypeBCSM.collectedInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary collectedInfo
 * @constant
 * @type {number}
 */
export
const collectedInfo = EventTypeBCSM.collectedInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_analysedInformation
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_analysedInformation = EventTypeBCSM.analysedInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary analysedInformation
 * @constant
 * @type {number}
 */
export
const analysedInformation = EventTypeBCSM.analysedInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_routeSelectFailure
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_routeSelectFailure = EventTypeBCSM.routeSelectFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeSelectFailure
 * @constant
 * @type {number}
 */
export
const routeSelectFailure = EventTypeBCSM.routeSelectFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oCalledPartyBusy = EventTypeBCSM.oCalledPartyBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oCalledPartyBusy
 * @constant
 * @type {number}
 */
export
const oCalledPartyBusy = EventTypeBCSM.oCalledPartyBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oNoAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oNoAnswer = EventTypeBCSM.oNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oNoAnswer
 * @constant
 * @type {number}
 */
export
const oNoAnswer = EventTypeBCSM.oNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oAnswer = EventTypeBCSM.oAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAnswer
 * @constant
 * @type {number}
 */
export
const oAnswer = EventTypeBCSM.oAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oMidCall
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oMidCall = EventTypeBCSM.oMidCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oMidCall
 * @constant
 * @type {number}
 */
export
const oMidCall = EventTypeBCSM.oMidCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oDisconnect
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oDisconnect = EventTypeBCSM.oDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oDisconnect
 * @constant
 * @type {number}
 */
export
const oDisconnect = EventTypeBCSM.oDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oAbandon
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oAbandon = EventTypeBCSM.oAbandon; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAbandon
 * @constant
 * @type {number}
 */
export
const oAbandon = EventTypeBCSM.oAbandon; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_termAttemptAuthorized = EventTypeBCSM.termAttemptAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const termAttemptAuthorized = EventTypeBCSM.termAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tBusy
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tBusy = EventTypeBCSM.tBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBusy
 * @constant
 * @type {number}
 */
export
const tBusy = EventTypeBCSM.tBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tNoAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tNoAnswer = EventTypeBCSM.tNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNoAnswer
 * @constant
 * @type {number}
 */
export
const tNoAnswer = EventTypeBCSM.tNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tAnswer = EventTypeBCSM.tAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAnswer
 * @constant
 * @type {number}
 */
export
const tAnswer = EventTypeBCSM.tAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tMidCall
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tMidCall = EventTypeBCSM.tMidCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tMidCall
 * @constant
 * @type {number}
 */
export
const tMidCall = EventTypeBCSM.tMidCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tDisconnect
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tDisconnect = EventTypeBCSM.tDisconnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tDisconnect
 * @constant
 * @type {number}
 */
export
const tDisconnect = EventTypeBCSM.tDisconnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tAbandon
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tAbandon = EventTypeBCSM.tAbandon; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tAbandon
 * @constant
 * @type {number}
 */
export
const tAbandon = EventTypeBCSM.tAbandon; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oTermSeized
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oTermSeized = EventTypeBCSM.oTermSeized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oTermSeized
 * @constant
 * @type {number}
 */
export
const oTermSeized = EventTypeBCSM.oTermSeized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oSuspend
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oSuspend = EventTypeBCSM.oSuspend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oSuspend
 * @constant
 * @type {number}
 */
export
const oSuspend = EventTypeBCSM.oSuspend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tSuspend
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tSuspend = EventTypeBCSM.tSuspend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tSuspend
 * @constant
 * @type {number}
 */
export
const tSuspend = EventTypeBCSM.tSuspend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_origAttempt
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_origAttempt = EventTypeBCSM.origAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary origAttempt
 * @constant
 * @type {number}
 */
export
const origAttempt = EventTypeBCSM.origAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_termAttempt
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_termAttempt = EventTypeBCSM.termAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttempt
 * @constant
 * @type {number}
 */
export
const termAttempt = EventTypeBCSM.termAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oReAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oReAnswer = EventTypeBCSM.oReAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oReAnswer
 * @constant
 * @type {number}
 */
export
const oReAnswer = EventTypeBCSM.oReAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tReAnswer
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tReAnswer = EventTypeBCSM.tReAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tReAnswer
 * @constant
 * @type {number}
 */
export
const tReAnswer = EventTypeBCSM.tReAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_facilitySelectedAndAvailable
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_facilitySelectedAndAvailable = EventTypeBCSM.facilitySelectedAndAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary facilitySelectedAndAvailable
 * @constant
 * @type {number}
 */
export
const facilitySelectedAndAvailable = EventTypeBCSM.facilitySelectedAndAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_callAccepted
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_callAccepted = EventTypeBCSM.callAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callAccepted
 * @constant
 * @type {number}
 */
export
const callAccepted = EventTypeBCSM.callAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_authorizeRouteFailure
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_authorizeRouteFailure = EventTypeBCSM.authorizeRouteFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorizeRouteFailure
 * @constant
 * @type {number}
 */
export
const authorizeRouteFailure = EventTypeBCSM.authorizeRouteFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_originationAttemptDenied
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_originationAttemptDenied = EventTypeBCSM.originationAttemptDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originationAttemptDenied
 * @constant
 * @type {number}
 */
export
const originationAttemptDenied = EventTypeBCSM.originationAttemptDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_terminationAttemptDenied
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_terminationAttemptDenied = EventTypeBCSM.terminationAttemptDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminationAttemptDenied
 * @constant
 * @type {number}
 */
export
const terminationAttemptDenied = EventTypeBCSM.terminationAttemptDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oModifyRequest
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oModifyRequest = EventTypeBCSM.oModifyRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oModifyRequest
 * @constant
 * @type {number}
 */
export
const oModifyRequest = EventTypeBCSM.oModifyRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_oModifyResult
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_oModifyResult = EventTypeBCSM.oModifyResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oModifyResult
 * @constant
 * @type {number}
 */
export
const oModifyResult = EventTypeBCSM.oModifyResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tModifyRequest
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tModifyRequest = EventTypeBCSM.tModifyRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tModifyRequest
 * @constant
 * @type {number}
 */
export
const tModifyRequest = EventTypeBCSM.tModifyRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCSM_tModifyResult
 * @constant
 * @type {number}
 */
export
const EventTypeBCSM_tModifyResult = EventTypeBCSM.tModifyResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tModifyResult
 * @constant
 * @type {number}
 */
export
const tModifyResult = EventTypeBCSM.tModifyResult; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_EventTypeBCSM(el: _Element): EventTypeBCSM {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case EventTypeBCSM.origAttemptAuthorized: return EventTypeBCSM.origAttemptAuthorized;
        case EventTypeBCSM.collectedInfo: return EventTypeBCSM.collectedInfo;
        case EventTypeBCSM.analysedInformation: return EventTypeBCSM.analysedInformation;
        case EventTypeBCSM.routeSelectFailure: return EventTypeBCSM.routeSelectFailure;
        case EventTypeBCSM.oCalledPartyBusy: return EventTypeBCSM.oCalledPartyBusy;
        case EventTypeBCSM.oNoAnswer: return EventTypeBCSM.oNoAnswer;
        case EventTypeBCSM.oAnswer: return EventTypeBCSM.oAnswer;
        case EventTypeBCSM.oMidCall: return EventTypeBCSM.oMidCall;
        case EventTypeBCSM.oDisconnect: return EventTypeBCSM.oDisconnect;
        case EventTypeBCSM.oAbandon: return EventTypeBCSM.oAbandon;
        case EventTypeBCSM.termAttemptAuthorized: return EventTypeBCSM.termAttemptAuthorized;
        case EventTypeBCSM.tBusy: return EventTypeBCSM.tBusy;
        case EventTypeBCSM.tNoAnswer: return EventTypeBCSM.tNoAnswer;
        case EventTypeBCSM.tAnswer: return EventTypeBCSM.tAnswer;
        case EventTypeBCSM.tMidCall: return EventTypeBCSM.tMidCall;
        case EventTypeBCSM.tDisconnect: return EventTypeBCSM.tDisconnect;
        case EventTypeBCSM.tAbandon: return EventTypeBCSM.tAbandon;
        case EventTypeBCSM.oTermSeized: return EventTypeBCSM.oTermSeized;
        case EventTypeBCSM.oSuspend: return EventTypeBCSM.oSuspend;
        case EventTypeBCSM.tSuspend: return EventTypeBCSM.tSuspend;
        case EventTypeBCSM.origAttempt: return EventTypeBCSM.origAttempt;
        case EventTypeBCSM.termAttempt: return EventTypeBCSM.termAttempt;
        case EventTypeBCSM.oReAnswer: return EventTypeBCSM.oReAnswer;
        case EventTypeBCSM.tReAnswer: return EventTypeBCSM.tReAnswer;
        case EventTypeBCSM.facilitySelectedAndAvailable: return EventTypeBCSM.facilitySelectedAndAvailable;
        case EventTypeBCSM.callAccepted: return EventTypeBCSM.callAccepted;
        case EventTypeBCSM.authorizeRouteFailure: return EventTypeBCSM.authorizeRouteFailure;
        case EventTypeBCSM.originationAttemptDenied: return EventTypeBCSM.originationAttemptDenied;
        case EventTypeBCSM.terminationAttemptDenied: return EventTypeBCSM.terminationAttemptDenied;
        case EventTypeBCSM.oModifyRequest: return EventTypeBCSM.oModifyRequest;
        case EventTypeBCSM.oModifyResult: return EventTypeBCSM.oModifyResult;
        case EventTypeBCSM.tModifyRequest: return EventTypeBCSM.tModifyRequest;
        case EventTypeBCSM.tModifyResult: return EventTypeBCSM.tModifyResult;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for EventTypeBCSM.",
                el,
            );
    }
}

export
const _encode_EventTypeBCSM: $.ASN1Encoder<EventTypeBCSM> = $._encodeEnumerated as $.ASN1Encoder<EventTypeBCSM>;

/* eslint-enable */
