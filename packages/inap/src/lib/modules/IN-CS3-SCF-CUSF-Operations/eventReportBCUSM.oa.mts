/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { EventReportBCUSMArg, _decode_EventReportBCUSMArg, _encode_EventReportBCUSMArg } from "../IN-CS3-SCF-CUSF-Operations/EventReportBCUSMArg.ta.mjs";
// export { EventReportBCUSMArg, _decode_EventReportBCUSMArg, _encode_EventReportBCUSMArg } from "../IN-CS3-SCF-CUSF-Operations/EventReportBCUSMArg.ta.mjs";
import { opcode_eventReportBCUSM } from "../IN-CS3-operationcodes/opcode-eventReportBCUSM.va.mjs";
// export { opcode_eventReportBCUSM } from "../IN-CS3-operationcodes/opcode-eventReportBCUSM.va.mjs";


/**
 * @summary eventReportBCUSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eventReportBCUSM OPERATION ::= {
 *   ARGUMENT         EventReportBCUSMArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-eventReportBCUSM
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<EventReportBCUSMArg>}
 * @implements {OPERATION<EventReportBCUSMArg>}
 */
export
const eventReportBCUSM: OPERATION<EventReportBCUSMArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EventReportBCUSMArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EventReportBCUSMArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_eventReportBCUSM /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
