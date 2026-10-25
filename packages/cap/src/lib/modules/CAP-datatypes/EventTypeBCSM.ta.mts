import {
    type ASN1Element as _Element,
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
export const EventTypeBCSM: typeof _enum_for_EventTypeBCSM = _enum_for_EventTypeBCSM;
/**
 * @summary EventTypeBCSM_collectedInfo
 * @description
 *
 * Collected_Info DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_collectedInfo: _enum_for_EventTypeBCSM.collectedInfo = EventTypeBCSM.collectedInfo;
/**
 * @summary collectedInfo
 * @description
 *
 * Collected_Info DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const collectedInfo: _enum_for_EventTypeBCSM.collectedInfo = EventTypeBCSM.collectedInfo;
/**
 * @summary EventTypeBCSM_analyzedInformation
 * @description
 *
 * Analysed_Information DP. May be used for TDPs only. (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_analyzedInformation: _enum_for_EventTypeBCSM.analyzedInformation = EventTypeBCSM.analyzedInformation;
/**
 * @summary analyzedInformation
 * @description
 *
 * Analysed_Information DP. May be used for TDPs only. (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * @constant
 */
export const analyzedInformation: _enum_for_EventTypeBCSM.analyzedInformation = EventTypeBCSM.analyzedInformation;
/**
 * @summary EventTypeBCSM_routeSelectFailure
 * @description
 *
 * Route_Select_Failure DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_routeSelectFailure: _enum_for_EventTypeBCSM.routeSelectFailure = EventTypeBCSM.routeSelectFailure;
/**
 * @summary routeSelectFailure
 * @description
 *
 * Route_Select_Failure DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const routeSelectFailure: _enum_for_EventTypeBCSM.routeSelectFailure = EventTypeBCSM.routeSelectFailure;
/**
 * @summary EventTypeBCSM_oCalledPartyBusy
 * @description
 *
 * O_Called_Party_Busy DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oCalledPartyBusy: _enum_for_EventTypeBCSM.oCalledPartyBusy = EventTypeBCSM.oCalledPartyBusy;
/**
 * @summary oCalledPartyBusy
 * @description
 *
 * O_Called_Party_Busy DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oCalledPartyBusy: _enum_for_EventTypeBCSM.oCalledPartyBusy = EventTypeBCSM.oCalledPartyBusy;
/**
 * @summary EventTypeBCSM_oNoAnswer
 * @description
 *
 * O_No_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oNoAnswer: _enum_for_EventTypeBCSM.oNoAnswer = EventTypeBCSM.oNoAnswer;
/**
 * @summary oNoAnswer
 * @description
 *
 * O_No_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oNoAnswer: _enum_for_EventTypeBCSM.oNoAnswer = EventTypeBCSM.oNoAnswer;
/**
 * @summary EventTypeBCSM_oAnswer
 * @description
 *
 * O_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oAnswer: _enum_for_EventTypeBCSM.oAnswer = EventTypeBCSM.oAnswer;
/**
 * @summary oAnswer
 * @description
 *
 * O_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oAnswer: _enum_for_EventTypeBCSM.oAnswer = EventTypeBCSM.oAnswer;
/**
 * @summary EventTypeBCSM_oMidCall
 * @description
 *
 * O_Mid_Call DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oMidCall: _enum_for_EventTypeBCSM.oMidCall = EventTypeBCSM.oMidCall;
/**
 * @summary oMidCall
 * @description
 *
 * O_Mid_Call DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oMidCall: _enum_for_EventTypeBCSM.oMidCall = EventTypeBCSM.oMidCall;
/**
 * @summary EventTypeBCSM_oDisconnect
 * @description
 *
 * O_Disconnect DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oDisconnect: _enum_for_EventTypeBCSM.oDisconnect = EventTypeBCSM.oDisconnect;
/**
 * @summary oDisconnect
 * @description
 *
 * O_Disconnect DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oDisconnect: _enum_for_EventTypeBCSM.oDisconnect = EventTypeBCSM.oDisconnect;
/**
 * @summary EventTypeBCSM_oAbandon
 * @description
 *
 * O_Abandon DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oAbandon: _enum_for_EventTypeBCSM.oAbandon = EventTypeBCSM.oAbandon;
/**
 * @summary oAbandon
 * @description
 *
 * O_Abandon DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oAbandon: _enum_for_EventTypeBCSM.oAbandon = EventTypeBCSM.oAbandon;
/**
 * @summary EventTypeBCSM_termAttemptAuthorized
 * @description
 *
 * Terminating_Attempt_Authorised DP. May be used for TDPs only. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_termAttemptAuthorized: _enum_for_EventTypeBCSM.termAttemptAuthorized = EventTypeBCSM.termAttemptAuthorized;
/**
 * @summary termAttemptAuthorized
 * @description
 *
 * Terminating_Attempt_Authorised DP. May be used for TDPs only. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * @constant
 */
export const termAttemptAuthorized: _enum_for_EventTypeBCSM.termAttemptAuthorized = EventTypeBCSM.termAttemptAuthorized;
/**
 * @summary EventTypeBCSM_tBusy
 * @description
 *
 * T_Busy DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tBusy: _enum_for_EventTypeBCSM.tBusy = EventTypeBCSM.tBusy;
/**
 * @summary tBusy
 * @description
 *
 * T_Busy DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tBusy: _enum_for_EventTypeBCSM.tBusy = EventTypeBCSM.tBusy;
/**
 * @summary EventTypeBCSM_tNoAnswer
 * @description
 *
 * T_No_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tNoAnswer: _enum_for_EventTypeBCSM.tNoAnswer = EventTypeBCSM.tNoAnswer;
/**
 * @summary tNoAnswer
 * @description
 *
 * T_No_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tNoAnswer: _enum_for_EventTypeBCSM.tNoAnswer = EventTypeBCSM.tNoAnswer;
/**
 * @summary EventTypeBCSM_tAnswer
 * @description
 *
 * T_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tAnswer: _enum_for_EventTypeBCSM.tAnswer = EventTypeBCSM.tAnswer;
/**
 * @summary tAnswer
 * @description
 *
 * T_Answer DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tAnswer: _enum_for_EventTypeBCSM.tAnswer = EventTypeBCSM.tAnswer;
/**
 * @summary EventTypeBCSM_tMidCall
 * @description
 *
 * T_Mid_Call DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tMidCall: _enum_for_EventTypeBCSM.tMidCall = EventTypeBCSM.tMidCall;
/**
 * @summary tMidCall
 * @description
 *
 * T_Mid_Call DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tMidCall: _enum_for_EventTypeBCSM.tMidCall = EventTypeBCSM.tMidCall;
/**
 * @summary EventTypeBCSM_tDisconnect
 * @description
 *
 * T_Disconnect DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tDisconnect: _enum_for_EventTypeBCSM.tDisconnect = EventTypeBCSM.tDisconnect;
/**
 * @summary tDisconnect
 * @description
 *
 * T_Disconnect DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tDisconnect: _enum_for_EventTypeBCSM.tDisconnect = EventTypeBCSM.tDisconnect;
/**
 * @summary EventTypeBCSM_tAbandon
 * @description
 *
 * T_Abandon DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tAbandon: _enum_for_EventTypeBCSM.tAbandon = EventTypeBCSM.tAbandon;
/**
 * @summary tAbandon
 * @description
 *
 * T_Abandon DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tAbandon: _enum_for_EventTypeBCSM.tAbandon = EventTypeBCSM.tAbandon;
/**
 * @summary EventTypeBCSM_oTermSeized
 * @description
 *
 * O_Term_Seized DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oTermSeized: _enum_for_EventTypeBCSM.oTermSeized = EventTypeBCSM.oTermSeized;
/**
 * @summary oTermSeized
 * @description
 *
 * O_Term_Seized DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oTermSeized: _enum_for_EventTypeBCSM.oTermSeized = EventTypeBCSM.oTermSeized;
/**
 * @summary EventTypeBCSM_callAccepted
 * @description
 *
 * Call_Accepted DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_callAccepted: _enum_for_EventTypeBCSM.callAccepted = EventTypeBCSM.callAccepted;
/**
 * @summary callAccepted
 * @description
 *
 * Call_Accepted DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const callAccepted: _enum_for_EventTypeBCSM.callAccepted = EventTypeBCSM.callAccepted;
/**
 * @summary EventTypeBCSM_oChangeOfPosition
 * @description
 *
 * O_Change_Of_Position DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oChangeOfPosition: _enum_for_EventTypeBCSM.oChangeOfPosition = EventTypeBCSM.oChangeOfPosition;
/**
 * @summary oChangeOfPosition
 * @description
 *
 * O_Change_Of_Position DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oChangeOfPosition: _enum_for_EventTypeBCSM.oChangeOfPosition = EventTypeBCSM.oChangeOfPosition;
/**
 * @summary EventTypeBCSM_tChangeOfPosition
 * @description
 *
 * T_Change_Of_Position DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tChangeOfPosition: _enum_for_EventTypeBCSM.tChangeOfPosition = EventTypeBCSM.tChangeOfPosition;
/**
 * @summary tChangeOfPosition
 * @description
 *
 * T_Change_Of_Position DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tChangeOfPosition: _enum_for_EventTypeBCSM.tChangeOfPosition = EventTypeBCSM.tChangeOfPosition;
/**
 * @summary EventTypeBCSM_oServiceChange
 * @description
 *
 * O_Service_Change DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_oServiceChange: _enum_for_EventTypeBCSM.oServiceChange = EventTypeBCSM.oServiceChange;
/**
 * @summary oServiceChange
 * @description
 *
 * O_Service_Change DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const oServiceChange: _enum_for_EventTypeBCSM.oServiceChange = EventTypeBCSM.oServiceChange;
/**
 * @summary EventTypeBCSM_tServiceChange
 * @description
 *
 * T_Service_Change DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const EventTypeBCSM_tServiceChange: _enum_for_EventTypeBCSM.tServiceChange = EventTypeBCSM.tServiceChange;
/**
 * @summary tServiceChange
 * @description
 *
 * T_Service_Change DP. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tServiceChange: _enum_for_EventTypeBCSM.tServiceChange = EventTypeBCSM.tServiceChange;
export const _decode_EventTypeBCSM: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_EventTypeBCSM: $.ASN1Encoder<number> = $._encodeEnumerated;
