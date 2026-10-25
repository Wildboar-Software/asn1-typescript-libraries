/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ManageTriggerDataArg, _decode_ManageTriggerDataArg, _encode_ManageTriggerDataArg } from "../IN-SSF-SCF-ops-args/ManageTriggerDataArg.ta.mjs";
// export { ManageTriggerDataArg, _decode_ManageTriggerDataArg, _encode_ManageTriggerDataArg } from "../IN-SSF-SCF-ops-args/ManageTriggerDataArg.ta.mjs";
import { type ManageTriggerDataResultArg, _decode_ManageTriggerDataResultArg, _encode_ManageTriggerDataResultArg } from "../IN-SSF-SCF-ops-args/ManageTriggerDataResultArg.ta.mjs";
// export { ManageTriggerDataResultArg, _decode_ManageTriggerDataResultArg, _encode_ManageTriggerDataResultArg } from "../IN-SSF-SCF-ops-args/ManageTriggerDataResultArg.ta.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
import { opcode_manageTriggerData } from "../IN-operationcodes/opcode-manageTriggerData.va.mjs";
// export { opcode_manageTriggerData } from "../IN-operationcodes/opcode-manageTriggerData.va.mjs";


/**
 * @summary manageTriggerData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * manageTriggerData OPERATION ::= {
 *   ARGUMENT  ManageTriggerDataArg
 *   RESULT    ManageTriggerDataResultArg
 *   ERRORS
 *     {missingParameter | parameterOutOfRange | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE      opcode-manageTriggerData
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ManageTriggerDataArg, ManageTriggerDataResultArg>}
 * @implements {OPERATION<ManageTriggerDataArg, ManageTriggerDataResultArg>}
 */
export
const manageTriggerData: OPERATION<ManageTriggerDataArg, ManageTriggerDataResultArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ManageTriggerDataArg,
        "&ResultType": _decode_ManageTriggerDataResultArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_ManageTriggerDataArg,
        "&ResultType": _encode_ManageTriggerDataResultArg,
    },
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_manageTriggerData /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
