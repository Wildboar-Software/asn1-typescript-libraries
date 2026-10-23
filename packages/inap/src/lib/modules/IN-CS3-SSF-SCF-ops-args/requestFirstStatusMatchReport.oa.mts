/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { RequestFirstStatusMatchReportArg, _decode_RequestFirstStatusMatchReportArg, _encode_RequestFirstStatusMatchReportArg } from "../IN-CS3-SSF-SCF-ops-args/RequestFirstStatusMatchReportArg.ta.mjs";
// export { RequestFirstStatusMatchReportArg, _decode_RequestFirstStatusMatchReportArg, _encode_RequestFirstStatusMatchReportArg } from "../IN-CS3-SSF-SCF-ops-args/RequestFirstStatusMatchReportArg.ta.mjs";
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
import { opcode_requestFirstStatusMatchReport } from "../IN-CS3-operationcodes/opcode-requestFirstStatusMatchReport.va.mjs";
// export { opcode_requestFirstStatusMatchReport } from "../IN-CS3-operationcodes/opcode-requestFirstStatusMatchReport.va.mjs";


/**
 * @summary requestFirstStatusMatchReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestFirstStatusMatchReport OPERATION ::= {
 *   ARGUMENT       RequestFirstStatusMatchReportArg
 *   RETURN RESULT  TRUE
 *   ERRORS
 *     {missingParameter | parameterOutOfRange | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter |
 *       unknownResource}
 *   CODE           opcode-requestFirstStatusMatchReport
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<RequestFirstStatusMatchReportArg>}
 * @implements {OPERATION<RequestFirstStatusMatchReportArg>}
 */
export
const requestFirstStatusMatchReport: OPERATION<RequestFirstStatusMatchReportArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RequestFirstStatusMatchReportArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_RequestFirstStatusMatchReportArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownResource, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_requestFirstStatusMatchReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
