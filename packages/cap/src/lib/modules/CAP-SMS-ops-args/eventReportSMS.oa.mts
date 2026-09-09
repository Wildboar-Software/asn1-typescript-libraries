import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { EventReportSMSArg, _decode_EventReportSMSArg, _encode_EventReportSMSArg } from "../CAP-SMS-ops-args/EventReportSMSArg.ta.mjs";
import { opcode_eventReportSMS } from "../CAP-operationcodes/opcode-eventReportSMS.va.mjs";

/**
 * @summary eventReportSMS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * eventReportSMS OPERATION ::= {
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
