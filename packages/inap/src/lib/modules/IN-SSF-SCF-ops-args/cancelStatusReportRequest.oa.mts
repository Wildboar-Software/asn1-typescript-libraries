/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CancelStatusReportRequestArg, _decode_CancelStatusReportRequestArg, _encode_CancelStatusReportRequestArg } from "../IN-SSF-SCF-ops-args/CancelStatusReportRequestArg.ta.mjs";
// export { CancelStatusReportRequestArg, _decode_CancelStatusReportRequestArg, _encode_CancelStatusReportRequestArg } from "../IN-SSF-SCF-ops-args/CancelStatusReportRequestArg.ta.mjs";
import { cancelFailed } from "../IN-errortypes/cancelFailed.oa.mjs";
// export { cancelFailed } from "../IN-errortypes/cancelFailed.oa.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
import { opcode_cancelStatusReportRequest } from "../IN-operationcodes/opcode-cancelStatusReportRequest.va.mjs";
// export { opcode_cancelStatusReportRequest } from "../IN-operationcodes/opcode-cancelStatusReportRequest.va.mjs";


/**
 * @summary cancelStatusReportRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelStatusReportRequest OPERATION ::= {
 *   ARGUMENT         CancelStatusReportRequestArg
 *   RETURN RESULT    FALSE
 *   ERRORS           {cancelFailed | missingParameter | taskRefused}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-cancelStatusReportRequest
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CancelStatusReportRequestArg>}
 * @implements {OPERATION<CancelStatusReportRequestArg>}
 */
export
const cancelStatusReportRequest: OPERATION<CancelStatusReportRequestArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CancelStatusReportRequestArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CancelStatusReportRequestArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ cancelFailed, missingParameter, taskRefused, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_cancelStatusReportRequest /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
