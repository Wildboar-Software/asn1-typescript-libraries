/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CancelArg, _decode_CancelArg, _encode_CancelArg } from "../IN-CS-1-Datatypes/CancelArg.ta.mjs";
// export { CancelArg, _decode_CancelArg, _encode_CancelArg } from "../IN-CS-1-Datatypes/CancelArg.ta.mjs";
import { cancelFailed } from "../IN-CS-1-Errors/cancelFailed.oa.mjs";
// export { cancelFailed } from "../IN-CS-1-Errors/cancelFailed.oa.mjs";
import { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
import { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
import { op_cancel } from "../IN-CS-1-Codes/op-cancel.va.mjs";
// export { op_cancel } from "../IN-CS-1-Codes/op-cancel.va.mjs";


/**
 * @summary cancel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancel OPERATION ::= {
 *   ARGUMENT       CancelArg
 *   RETURN RESULT  FALSE
 *   ERRORS         {cancelFailed | missingParameter | taskRefused}
 *   CODE           op-cancel
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
    "&operationCode": op_cancel /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
