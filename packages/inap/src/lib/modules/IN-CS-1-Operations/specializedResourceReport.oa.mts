/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type SpecializedResourceReportArg, _decode_SpecializedResourceReportArg, _encode_SpecializedResourceReportArg } from "../IN-CS-1-Datatypes/SpecializedResourceReportArg.ta.mjs";
// export { SpecializedResourceReportArg, _decode_SpecializedResourceReportArg, _encode_SpecializedResourceReportArg } from "../IN-CS-1-Datatypes/SpecializedResourceReportArg.ta.mjs";
import { op_specializedResourceReport } from "../IN-CS-1-Codes/op-specializedResourceReport.va.mjs";
// export { op_specializedResourceReport } from "../IN-CS-1-Codes/op-specializedResourceReport.va.mjs";


/**
 * @summary specializedResourceReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * specializedResourceReport OPERATION ::= {
 *   ARGUMENT       SpecializedResourceReportArg
 *   RETURN RESULT  FALSE
 *   CODE           op-specializedResourceReport
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SpecializedResourceReportArg>}
 * @implements {OPERATION<SpecializedResourceReportArg>}
 */
export
const specializedResourceReport: OPERATION<SpecializedResourceReportArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SpecializedResourceReportArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SpecializedResourceReportArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_specializedResourceReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
