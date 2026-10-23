/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ReportUTSIArg, _decode_ReportUTSIArg, _encode_ReportUTSIArg } from "../IN-SSF-SCF-ops-args/ReportUTSIArg.ta.mjs";
// export { ReportUTSIArg, _decode_ReportUTSIArg, _encode_ReportUTSIArg } from "../IN-SSF-SCF-ops-args/ReportUTSIArg.ta.mjs";
import { opcode_reportUTSI } from "../IN-operationcodes/opcode-reportUTSI.va.mjs";
// export { opcode_reportUTSI } from "../IN-operationcodes/opcode-reportUTSI.va.mjs";


/**
 * @summary reportUTSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reportUTSI OPERATION ::= {
 *   ARGUMENT         ReportUTSIArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-reportUTSI
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReportUTSIArg>}
 * @implements {OPERATION<ReportUTSIArg>}
 */
export
const reportUTSI: OPERATION<ReportUTSIArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReportUTSIArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReportUTSIArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_reportUTSI /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
