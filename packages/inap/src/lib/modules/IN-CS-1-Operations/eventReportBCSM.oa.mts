/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { EventReportBCSMArg, _decode_EventReportBCSMArg, _encode_EventReportBCSMArg } from "../IN-CS-1-Datatypes/EventReportBCSMArg.ta.mjs";
// export { EventReportBCSMArg, _decode_EventReportBCSMArg, _encode_EventReportBCSMArg } from "../IN-CS-1-Datatypes/EventReportBCSMArg.ta.mjs";
import { op_eventReportBCSM } from "../IN-CS-1-Codes/op-eventReportBCSM.va.mjs";
// export { op_eventReportBCSM } from "../IN-CS-1-Codes/op-eventReportBCSM.va.mjs";


/**
 * @summary eventReportBCSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eventReportBCSM OPERATION ::= {
 *   ARGUMENT       EventReportBCSMArg
 *   RETURN RESULT  FALSE
 *   CODE           op-eventReportBCSM
 * }
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
    "&operationCode": op_eventReportBCSM /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
