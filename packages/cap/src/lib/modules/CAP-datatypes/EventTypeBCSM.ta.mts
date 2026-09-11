import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EventTypeBCSM
 * @description
 *
 * BCSM detection point event. Values `analyzedInformation` and
 * `termAttemptAuthorized` may be used for TDPs only. Reception of an
 * unrecognized value shall be treated as no detection point. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventTypeBCSM ::= ENUMERATED {
 *  collectedInfo			(2),
 *  analyzedInformation			(3),
 *  routeSelectFailure			(4),
 *  oCalledPartyBusy			(5),
 *  oNoAnswer				(6),
 *  oAnswer				(7),
 *  oMidCall				(8),
 *  oDisconnect				(9),
 *  oAbandon				(10),
 *  termAttemptAuthorized		(12),
 *  tBusy				(13),
 *  tNoAnswer				(14),
 *  tAnswer				(15),
 *  tMidCall				(16),
 *  tDisconnect				(17),
 *  tAbandon				(18),
 *  oTermSeized				(19),
 *  callAccepted			(27),
 *  oChangeOfPosition			(50),
 *  tChangeOfPosition			(51),
 *  ...,
 *  oServiceChange			(52),
 *  tServiceChange			(53)
 *  }
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
/**
 * @summary EventTypeBCSM_collectedInfo
 * @description
 *
 * Collected_Info DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_collectedInfo: EventTypeBCSM = EventTypeBCSM.collectedInfo;
/**
 * @summary collectedInfo
 * @description
 *
 * Collected_Info DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const collectedInfo: EventTypeBCSM = EventTypeBCSM.collectedInfo;
/**
 * @summary EventTypeBCSM_analyzedInformation
 * @description
 *
 * Analysed_Information DP. May be used for TDPs only. (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_analyzedInformation: EventTypeBCSM = EventTypeBCSM.analyzedInformation;
/**
 * @summary analyzedInformation
 * @description
 *
 * Analysed_Information DP. May be used for TDPs only. (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * @constant
 */
export const analyzedInformation: EventTypeBCSM = EventTypeBCSM.analyzedInformation;
/**
 * @summary EventTypeBCSM_routeSelectFailure
 * @description
 *
 * Route_Select_Failure DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_routeSelectFailure: EventTypeBCSM = EventTypeBCSM.routeSelectFailure;
/**
 * @summary routeSelectFailure
 * @description
 *
 * Route_Select_Failure DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const routeSelectFailure: EventTypeBCSM = EventTypeBCSM.routeSelectFailure;
/**
 * @summary EventTypeBCSM_oCalledPartyBusy
 * @description
 *
 * O_Called_Party_Busy DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oCalledPartyBusy: EventTypeBCSM = EventTypeBCSM.oCalledPartyBusy;
/**
 * @summary oCalledPartyBusy
 * @description
 *
 * O_Called_Party_Busy DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oCalledPartyBusy: EventTypeBCSM = EventTypeBCSM.oCalledPartyBusy;
/**
 * @summary EventTypeBCSM_oNoAnswer
 * @description
 *
 * O_No_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oNoAnswer: EventTypeBCSM = EventTypeBCSM.oNoAnswer;
/**
 * @summary oNoAnswer
 * @description
 *
 * O_No_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oNoAnswer: EventTypeBCSM = EventTypeBCSM.oNoAnswer;
/**
 * @summary EventTypeBCSM_oAnswer
 * @description
 *
 * O_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oAnswer: EventTypeBCSM = EventTypeBCSM.oAnswer;
/**
 * @summary oAnswer
 * @description
 *
 * O_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oAnswer: EventTypeBCSM = EventTypeBCSM.oAnswer;
/**
 * @summary EventTypeBCSM_oMidCall
 * @description
 *
 * O_Mid_Call DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oMidCall: EventTypeBCSM = EventTypeBCSM.oMidCall;
/**
 * @summary oMidCall
 * @description
 *
 * O_Mid_Call DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oMidCall: EventTypeBCSM = EventTypeBCSM.oMidCall;
/**
 * @summary EventTypeBCSM_oDisconnect
 * @description
 *
 * O_Disconnect DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oDisconnect: EventTypeBCSM = EventTypeBCSM.oDisconnect;
/**
 * @summary oDisconnect
 * @description
 *
 * O_Disconnect DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oDisconnect: EventTypeBCSM = EventTypeBCSM.oDisconnect;
/**
 * @summary EventTypeBCSM_oAbandon
 * @description
 *
 * O_Abandon DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oAbandon: EventTypeBCSM = EventTypeBCSM.oAbandon;
/**
 * @summary oAbandon
 * @description
 *
 * O_Abandon DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oAbandon: EventTypeBCSM = EventTypeBCSM.oAbandon;
/**
 * @summary EventTypeBCSM_termAttemptAuthorized
 * @description
 *
 * Terminating_Attempt_Authorised DP. May be used for TDPs only. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_termAttemptAuthorized: EventTypeBCSM = EventTypeBCSM.termAttemptAuthorized;
/**
 * @summary termAttemptAuthorized
 * @description
 *
 * Terminating_Attempt_Authorised DP. May be used for TDPs only. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * @constant
 */
export const termAttemptAuthorized: EventTypeBCSM = EventTypeBCSM.termAttemptAuthorized;
/**
 * @summary EventTypeBCSM_tBusy
 * @description
 *
 * T_Busy DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tBusy: EventTypeBCSM = EventTypeBCSM.tBusy;
/**
 * @summary tBusy
 * @description
 *
 * T_Busy DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tBusy: EventTypeBCSM = EventTypeBCSM.tBusy;
/**
 * @summary EventTypeBCSM_tNoAnswer
 * @description
 *
 * T_No_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tNoAnswer: EventTypeBCSM = EventTypeBCSM.tNoAnswer;
/**
 * @summary tNoAnswer
 * @description
 *
 * T_No_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tNoAnswer: EventTypeBCSM = EventTypeBCSM.tNoAnswer;
/**
 * @summary EventTypeBCSM_tAnswer
 * @description
 *
 * T_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tAnswer: EventTypeBCSM = EventTypeBCSM.tAnswer;
/**
 * @summary tAnswer
 * @description
 *
 * T_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tAnswer: EventTypeBCSM = EventTypeBCSM.tAnswer;
/**
 * @summary EventTypeBCSM_tMidCall
 * @description
 *
 * T_Mid_Call DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tMidCall: EventTypeBCSM = EventTypeBCSM.tMidCall;
/**
 * @summary tMidCall
 * @description
 *
 * T_Mid_Call DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tMidCall: EventTypeBCSM = EventTypeBCSM.tMidCall;
/**
 * @summary EventTypeBCSM_tDisconnect
 * @description
 *
 * T_Disconnect DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tDisconnect: EventTypeBCSM = EventTypeBCSM.tDisconnect;
/**
 * @summary tDisconnect
 * @description
 *
 * T_Disconnect DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tDisconnect: EventTypeBCSM = EventTypeBCSM.tDisconnect;
/**
 * @summary EventTypeBCSM_tAbandon
 * @description
 *
 * T_Abandon DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tAbandon: EventTypeBCSM = EventTypeBCSM.tAbandon;
/**
 * @summary tAbandon
 * @description
 *
 * T_Abandon DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tAbandon: EventTypeBCSM = EventTypeBCSM.tAbandon;
/**
 * @summary EventTypeBCSM_oTermSeized
 * @description
 *
 * O_Term_Seized DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oTermSeized: EventTypeBCSM = EventTypeBCSM.oTermSeized;
/**
 * @summary oTermSeized
 * @description
 *
 * O_Term_Seized DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oTermSeized: EventTypeBCSM = EventTypeBCSM.oTermSeized;
/**
 * @summary EventTypeBCSM_callAccepted
 * @description
 *
 * Call_Accepted DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_callAccepted: EventTypeBCSM = EventTypeBCSM.callAccepted;
/**
 * @summary callAccepted
 * @description
 *
 * Call_Accepted DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const callAccepted: EventTypeBCSM = EventTypeBCSM.callAccepted;
/**
 * @summary EventTypeBCSM_oChangeOfPosition
 * @description
 *
 * O_Change_Of_Position DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oChangeOfPosition: EventTypeBCSM = EventTypeBCSM.oChangeOfPosition;
/**
 * @summary oChangeOfPosition
 * @description
 *
 * O_Change_Of_Position DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oChangeOfPosition: EventTypeBCSM = EventTypeBCSM.oChangeOfPosition;
/**
 * @summary EventTypeBCSM_tChangeOfPosition
 * @description
 *
 * T_Change_Of_Position DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tChangeOfPosition: EventTypeBCSM = EventTypeBCSM.tChangeOfPosition;
/**
 * @summary tChangeOfPosition
 * @description
 *
 * T_Change_Of_Position DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tChangeOfPosition: EventTypeBCSM = EventTypeBCSM.tChangeOfPosition;
/**
 * @summary EventTypeBCSM_oServiceChange
 * @description
 *
 * O_Service_Change DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oServiceChange: EventTypeBCSM = EventTypeBCSM.oServiceChange;
/**
 * @summary oServiceChange
 * @description
 *
 * O_Service_Change DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oServiceChange: EventTypeBCSM = EventTypeBCSM.oServiceChange;
/**
 * @summary EventTypeBCSM_tServiceChange
 * @description
 *
 * T_Service_Change DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tServiceChange: EventTypeBCSM = EventTypeBCSM.tServiceChange;
/**
 * @summary tServiceChange
 * @description
 *
 * T_Service_Change DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tServiceChange: EventTypeBCSM = EventTypeBCSM.tServiceChange;
export const _decode_EventTypeBCSM = $._decodeEnumerated;
export const _encode_EventTypeBCSM = $._encodeEnumerated;
