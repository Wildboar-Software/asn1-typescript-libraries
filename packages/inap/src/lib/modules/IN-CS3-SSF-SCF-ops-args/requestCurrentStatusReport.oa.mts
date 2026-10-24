/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type RequestCurrentStatusReportArg, _decode_RequestCurrentStatusReportArg, _encode_RequestCurrentStatusReportArg } from "../IN-CS3-SSF-SCF-ops-args/RequestCurrentStatusReportArg.ta.mjs";
// export { RequestCurrentStatusReportArg, _decode_RequestCurrentStatusReportArg, _encode_RequestCurrentStatusReportArg } from "../IN-CS3-SSF-SCF-ops-args/RequestCurrentStatusReportArg.ta.mjs";
import { RequestCurrentStatusReportResultArg, _decode_RequestCurrentStatusReportResultArg, _encode_RequestCurrentStatusReportResultArg } from "../IN-CS3-SSF-SCF-ops-args/RequestCurrentStatusReportResultArg.ta.mjs";
// export { RequestCurrentStatusReportResultArg, _decode_RequestCurrentStatusReportResultArg, _encode_RequestCurrentStatusReportResultArg } from "../IN-CS3-SSF-SCF-ops-args/RequestCurrentStatusReportResultArg.ta.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { unknownResource } from "../IN-CS3-errortypes/unknownResource.oa.mjs";
// export { unknownResource } from "../IN-CS3-errortypes/unknownResource.oa.mjs";
import { opcode_requestCurrentStatusReport } from "../IN-CS3-operationcodes/opcode-requestCurrentStatusReport.va.mjs";
// export { opcode_requestCurrentStatusReport } from "../IN-CS3-operationcodes/opcode-requestCurrentStatusReport.va.mjs";


/**
 * @summary requestCurrentStatusReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestCurrentStatusReport OPERATION ::= {
 *   ARGUMENT  RequestCurrentStatusReportArg
 *   RESULT    RequestCurrentStatusReportResultArg
 *   ERRORS
 *     {missingParameter | parameterOutOfRange | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter |
 *       unknownResource}
 *   CODE      opcode-requestCurrentStatusReport
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<RequestCurrentStatusReportArg, RequestCurrentStatusReportResultArg>}
 * @implements {OPERATION<RequestCurrentStatusReportArg, RequestCurrentStatusReportResultArg>}
 */
export
const requestCurrentStatusReport: OPERATION<RequestCurrentStatusReportArg, RequestCurrentStatusReportResultArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RequestCurrentStatusReportArg,
        "&ResultType": _decode_RequestCurrentStatusReportResultArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_RequestCurrentStatusReportArg,
        "&ResultType": _encode_RequestCurrentStatusReportResultArg,
    },
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownResource, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_requestCurrentStatusReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
