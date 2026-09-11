import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { EventReportSMSArg, _decode_EventReportSMSArg, _encode_EventReportSMSArg } from "../CAP-SMS-ops-args/EventReportSMSArg.ta.mjs";
import { opcode_eventReportSMS } from "../CAP-operationcodes/opcode-eventReportSMS.va.mjs";

/**
 * @summary eventReportSMS
 * @description
 *
 * Notifies the gsmSCF of an SM-related FSM event previously armed
 * by RequestReportSMSEvent (submission, delivery, or failure).
 * (3GPP TS 29.078 V19.0.0 clause 12.3).
 *
 * Direction: smsSSF → gsmSCF. Unconfirmed (class 4). Local opcode
 * 64. Timer Terbsms (Short; 1–20 s, operator-defined).
 *
 * Invoked from Monitoring when an armed EDP is met. Implicit EDP
 * disarming applies. Notification with no remaining EDPs → Idle;
 * otherwise Waiting_for_Instructions. Errors not applicable
 * (class 4). (3GPP TS 29.078 V19.0.0 clauses 7.1 and 12.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * eventReportSMS {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	EventReportSMSArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ALWAYS RESPONDS	FALSE
 * 	CODE		opcode-eventReportSMS}
 * ```
 *
 * @constant
 * @type {OPERATION<EventReportSMSArg>}
 * @implements {OPERATION<EventReportSMSArg>}
 */
export
const eventReportSMS: OPERATION<EventReportSMSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EventReportSMSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EventReportSMSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_eventReportSMS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
