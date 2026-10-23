/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { EventReportFacilityArg, _decode_EventReportFacilityArg, _encode_EventReportFacilityArg } from "../IN-CS2-SSF-SCF-ops-args/EventReportFacilityArg.ta.mjs";
// export { EventReportFacilityArg, _decode_EventReportFacilityArg, _encode_EventReportFacilityArg } from "../IN-CS2-SSF-SCF-ops-args/EventReportFacilityArg.ta.mjs";
import { opcode_eventReportFacility } from "../IN-CS2-operationcodes/opcode-eventReportFacility.va.mjs";
// export { opcode_eventReportFacility } from "../IN-CS2-operationcodes/opcode-eventReportFacility.va.mjs";


/**
 * @summary eventReportFacility
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eventReportFacility OPERATION ::= {
 *   ARGUMENT         EventReportFacilityArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-eventReportFacility
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<EventReportFacilityArg>}
 * @implements {OPERATION<EventReportFacilityArg>}
 */
export
const eventReportFacility: OPERATION<EventReportFacilityArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EventReportFacilityArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EventReportFacilityArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_eventReportFacility /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
