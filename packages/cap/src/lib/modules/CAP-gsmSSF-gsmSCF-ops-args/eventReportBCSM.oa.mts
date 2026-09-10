import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { EventReportBCSMArg, _decode_EventReportBCSMArg, _encode_EventReportBCSMArg } from "../CAP-gsmSSF-gsmSCF-ops-args/EventReportBCSMArg.ta.mjs";
import { opcode_eventReportBCSM } from "../CAP-operationcodes/opcode-eventReportBCSM.va.mjs";

/**
 * @summary eventReportBCSM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * eventReportBCSM {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	EventReportBCSMArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ALWAYS RESPONDS	FALSE
 * 	CODE		opcode-eventReportBCSM}
 * ```
 *
 * @constant
 * @type {OPERATION<EventReportBCSMArg>}
 * @implements {OPERATION<EventReportBCSMArg>}
 */
export
const eventReportBCSM: OPERATION<EventReportBCSMArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EventReportBCSMArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EventReportBCSMArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_eventReportBCSM /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
