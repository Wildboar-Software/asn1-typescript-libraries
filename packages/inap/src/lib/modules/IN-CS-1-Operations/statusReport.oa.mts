/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { StatusReportArg, _decode_StatusReportArg, _encode_StatusReportArg } from "../IN-CS-1-Datatypes/StatusReportArg.ta.mjs";
// export { StatusReportArg, _decode_StatusReportArg, _encode_StatusReportArg } from "../IN-CS-1-Datatypes/StatusReportArg.ta.mjs";
import { op_statusReport } from "../IN-CS-1-Codes/op-statusReport.va.mjs";
// export { op_statusReport } from "../IN-CS-1-Codes/op-statusReport.va.mjs";


/**
 * @summary statusReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * statusReport OPERATION ::= {
 *   ARGUMENT       StatusReportArg
 *   RETURN RESULT  FALSE
 *   CODE           op-statusReport
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<StatusReportArg>}
 * @implements {OPERATION<StatusReportArg>}
 */
export
const statusReport: OPERATION<StatusReportArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StatusReportArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_StatusReportArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_statusReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
