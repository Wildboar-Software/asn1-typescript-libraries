/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CancelArg, _decode_CancelArg, _encode_CancelArg } from "../IN-SSF-SCF-ops-args/CancelArg.ta.mjs";
// export { CancelArg, _decode_CancelArg, _encode_CancelArg } from "../IN-SSF-SCF-ops-args/CancelArg.ta.mjs";
import { cancelFailed } from "../IN-errortypes/cancelFailed.oa.mjs";
// export { cancelFailed } from "../IN-errortypes/cancelFailed.oa.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
import { opcode_cancel } from "../IN-operationcodes/opcode-cancel.va.mjs";
// export { opcode_cancel } from "../IN-operationcodes/opcode-cancel.va.mjs";


/**
 * @summary cancel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancel OPERATION ::= {
 *   ARGUMENT         CancelArg
 *   RETURN RESULT    FALSE
 *   ERRORS           {cancelFailed | missingParameter | taskRefused}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-cancel
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CancelArg>}
 * @implements {OPERATION<CancelArg>}
 */
export
const cancel: OPERATION<CancelArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CancelArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CancelArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ cancelFailed, missingParameter, taskRefused, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_cancel /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
