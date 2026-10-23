/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CallInformationReportArg, _decode_CallInformationReportArg, _encode_CallInformationReportArg } from "../IN-CS2-SSF-SCF-ops-args/CallInformationReportArg.ta.mjs";
// export { CallInformationReportArg, _decode_CallInformationReportArg, _encode_CallInformationReportArg } from "../IN-CS2-SSF-SCF-ops-args/CallInformationReportArg.ta.mjs";
import { opcode_callInformationReport } from "../IN-CS2-operationcodes/opcode-callInformationReport.va.mjs";
// export { opcode_callInformationReport } from "../IN-CS2-operationcodes/opcode-callInformationReport.va.mjs";


/**
 * @summary callInformationReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callInformationReport OPERATION ::= {
 *   ARGUMENT         CallInformationReportArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-callInformationReport
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallInformationReportArg>}
 * @implements {OPERATION<CallInformationReportArg>}
 */
export
const callInformationReport: OPERATION<CallInformationReportArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallInformationReportArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallInformationReportArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_callInformationReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
