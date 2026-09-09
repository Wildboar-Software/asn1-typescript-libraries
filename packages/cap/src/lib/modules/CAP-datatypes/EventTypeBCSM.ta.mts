import {
    ENUMERATED,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EventTypeBCSM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventTypeBCSM ::= ENUMERATED {
 collectedInfo			(2),
 analyzedInformation			(3),
 routeSelectFailure			(4),
 oCalledPartyBusy			(5),
 oNoAnswer				(6),
 oAnswer				(7),
 oMidCall				(8),
 oDisconnect				(9),
 oAbandon				(10),
 termAttemptAuthorized		(12),
 tBusy				(13),
 tNoAnswer				(14),
 tAnswer				(15),
 tMidCall				(16),
 tDisconnect				(17),
 tAbandon				(18),
 oTermSeized				(19),
 callAccepted			(27),
 oChangeOfPosition			(50),
 tChangeOfPosition			(51),
 ...,
 oServiceChange			(52),
 tServiceChange			(53)
 }
 * ```
 *
 */
export enum _enum_for_EventTypeBCSM {
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
    tBusy = 13,
    tNoAnswer = 14,
    tAnswer = 15,
    tMidCall = 16,
    tDisconnect = 17,
    tAbandon = 18,
    oTermSeized = 19,
    callAccepted = 27,
    oChangeOfPosition = 50,
    tChangeOfPosition = 51,
    oServiceChange = 52,
    tServiceChange = 53,
}
export type EventTypeBCSM = _enum_for_EventTypeBCSM;
export const EventTypeBCSM = _enum_for_EventTypeBCSM;
export const EventTypeBCSM_collectedInfo: EventTypeBCSM = EventTypeBCSM.collectedInfo;
export const collectedInfo: EventTypeBCSM = EventTypeBCSM.collectedInfo;
export const EventTypeBCSM_analyzedInformation: EventTypeBCSM = EventTypeBCSM.analyzedInformation;
export const analyzedInformation: EventTypeBCSM = EventTypeBCSM.analyzedInformation;
export const EventTypeBCSM_routeSelectFailure: EventTypeBCSM = EventTypeBCSM.routeSelectFailure;
export const routeSelectFailure: EventTypeBCSM = EventTypeBCSM.routeSelectFailure;
export const EventTypeBCSM_oCalledPartyBusy: EventTypeBCSM = EventTypeBCSM.oCalledPartyBusy;
export const oCalledPartyBusy: EventTypeBCSM = EventTypeBCSM.oCalledPartyBusy;
export const EventTypeBCSM_oNoAnswer: EventTypeBCSM = EventTypeBCSM.oNoAnswer;
export const oNoAnswer: EventTypeBCSM = EventTypeBCSM.oNoAnswer;
export const EventTypeBCSM_oAnswer: EventTypeBCSM = EventTypeBCSM.oAnswer;
export const oAnswer: EventTypeBCSM = EventTypeBCSM.oAnswer;
export const EventTypeBCSM_oMidCall: EventTypeBCSM = EventTypeBCSM.oMidCall;
export const oMidCall: EventTypeBCSM = EventTypeBCSM.oMidCall;
export const EventTypeBCSM_oDisconnect: EventTypeBCSM = EventTypeBCSM.oDisconnect;
export const oDisconnect: EventTypeBCSM = EventTypeBCSM.oDisconnect;
export const EventTypeBCSM_oAbandon: EventTypeBCSM = EventTypeBCSM.oAbandon;
export const oAbandon: EventTypeBCSM = EventTypeBCSM.oAbandon;
export const EventTypeBCSM_termAttemptAuthorized: EventTypeBCSM = EventTypeBCSM.termAttemptAuthorized;
export const termAttemptAuthorized: EventTypeBCSM = EventTypeBCSM.termAttemptAuthorized;
export const EventTypeBCSM_tBusy: EventTypeBCSM = EventTypeBCSM.tBusy;
export const tBusy: EventTypeBCSM = EventTypeBCSM.tBusy;
export const EventTypeBCSM_tNoAnswer: EventTypeBCSM = EventTypeBCSM.tNoAnswer;
export const tNoAnswer: EventTypeBCSM = EventTypeBCSM.tNoAnswer;
export const EventTypeBCSM_tAnswer: EventTypeBCSM = EventTypeBCSM.tAnswer;
export const tAnswer: EventTypeBCSM = EventTypeBCSM.tAnswer;
export const EventTypeBCSM_tMidCall: EventTypeBCSM = EventTypeBCSM.tMidCall;
export const tMidCall: EventTypeBCSM = EventTypeBCSM.tMidCall;
export const EventTypeBCSM_tDisconnect: EventTypeBCSM = EventTypeBCSM.tDisconnect;
export const tDisconnect: EventTypeBCSM = EventTypeBCSM.tDisconnect;
export const EventTypeBCSM_tAbandon: EventTypeBCSM = EventTypeBCSM.tAbandon;
export const tAbandon: EventTypeBCSM = EventTypeBCSM.tAbandon;
export const EventTypeBCSM_oTermSeized: EventTypeBCSM = EventTypeBCSM.oTermSeized;
export const oTermSeized: EventTypeBCSM = EventTypeBCSM.oTermSeized;
export const EventTypeBCSM_callAccepted: EventTypeBCSM = EventTypeBCSM.callAccepted;
export const callAccepted: EventTypeBCSM = EventTypeBCSM.callAccepted;
export const EventTypeBCSM_oChangeOfPosition: EventTypeBCSM = EventTypeBCSM.oChangeOfPosition;
export const oChangeOfPosition: EventTypeBCSM = EventTypeBCSM.oChangeOfPosition;
export const EventTypeBCSM_tChangeOfPosition: EventTypeBCSM = EventTypeBCSM.tChangeOfPosition;
export const tChangeOfPosition: EventTypeBCSM = EventTypeBCSM.tChangeOfPosition;
export const EventTypeBCSM_oServiceChange: EventTypeBCSM = EventTypeBCSM.oServiceChange;
export const oServiceChange: EventTypeBCSM = EventTypeBCSM.oServiceChange;
export const EventTypeBCSM_tServiceChange: EventTypeBCSM = EventTypeBCSM.tServiceChange;
export const tServiceChange: EventTypeBCSM = EventTypeBCSM.tServiceChange;
export const _decode_EventTypeBCSM = $._decodeEnumerated;
export const _encode_EventTypeBCSM = $._encodeEnumerated;
