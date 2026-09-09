import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { EventReportGPRSArg, _decode_EventReportGPRSArg, _encode_EventReportGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/EventReportGPRSArg.ta.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { opcode_eventReportGPRS } from "../CAP-operationcodes/opcode-eventReportGPRS.va.mjs";

/**
 * @summary eventReportGPRS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * eventReportGPRS OPERATION ::= {
 * 	ARGUMENT	EventReportGPRSArg {bound}
 * 	RETURN RESULT	TRUE
 * 	ERRORS		{unknownPDPID}
 * 	CODE		opcode-eventReportGPRS}
 * ```
 *
 * @constant
 * @type {OPERATION<EventReportGPRSArg>}
 * @implements {OPERATION<EventReportGPRSArg>}
 */
export
const eventReportGPRS: OPERATION<EventReportGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EventReportGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EventReportGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ unknownPDPID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_eventReportGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
