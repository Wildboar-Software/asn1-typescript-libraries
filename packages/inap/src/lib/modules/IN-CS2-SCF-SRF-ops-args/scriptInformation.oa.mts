/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ScriptInformationArg, _decode_ScriptInformationArg, _encode_ScriptInformationArg } from "../IN-CS2-SCF-SRF-ops-args/ScriptInformationArg.ta.mjs";
// export { ScriptInformationArg, _decode_ScriptInformationArg, _encode_ScriptInformationArg } from "../IN-CS2-SCF-SRF-ops-args/ScriptInformationArg.ta.mjs";
import { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
import { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
import { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
import { unavailableResource } from "../IN-CS2-errortypes/unavailableResource.oa.mjs";
// export { unavailableResource } from "../IN-CS2-errortypes/unavailableResource.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
import { opcode_scriptInformation } from "../IN-CS2-operationcodes/opcode-scriptInformation.va.mjs";
// export { opcode_scriptInformation } from "../IN-CS2-operationcodes/opcode-scriptInformation.va.mjs";


/**
 * @summary scriptInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scriptInformation OPERATION ::= {
 *   ARGUMENT       ScriptInformationArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {systemFailure | missingParameter | taskRefused | unavailableResource |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE           opcode-scriptInformation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ScriptInformationArg>}
 * @implements {OPERATION<ScriptInformationArg>}
 */
export
const scriptInformation: OPERATION<ScriptInformationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ScriptInformationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ScriptInformationArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ systemFailure, missingParameter, taskRefused, unavailableResource, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_scriptInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
