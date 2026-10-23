/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ScriptRunArg, _decode_ScriptRunArg, _encode_ScriptRunArg } from "../IN-SCF-SRF-ops-args/ScriptRunArg.ta.mjs";
// export { ScriptRunArg, _decode_ScriptRunArg, _encode_ScriptRunArg } from "../IN-SCF-SRF-ops-args/ScriptRunArg.ta.mjs";
import { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
import { unavailableResource } from "../IN-errortypes/unavailableResource.oa.mjs";
// export { unavailableResource } from "../IN-errortypes/unavailableResource.oa.mjs";
import { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
import { opcode_scriptRun } from "../IN-operationcodes/opcode-scriptRun.va.mjs";
// export { opcode_scriptRun } from "../IN-operationcodes/opcode-scriptRun.va.mjs";


/**
 * @summary scriptRun
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scriptRun OPERATION ::= {
 *   ARGUMENT         ScriptRunArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {systemFailure | missingParameter | taskRefused | unavailableResource |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-scriptRun
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ScriptRunArg>}
 * @implements {OPERATION<ScriptRunArg>}
 */
export
const scriptRun: OPERATION<ScriptRunArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ScriptRunArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ScriptRunArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ systemFailure, missingParameter, taskRefused, unavailableResource, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_scriptRun /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
