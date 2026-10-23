/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CreateOrRemoveTriggerDataArg, _decode_CreateOrRemoveTriggerDataArg, _encode_CreateOrRemoveTriggerDataArg } from "../IN-CS3-SSF-SCF-ops-args/CreateOrRemoveTriggerDataArg.ta.mjs";
// export { CreateOrRemoveTriggerDataArg, _decode_CreateOrRemoveTriggerDataArg, _encode_CreateOrRemoveTriggerDataArg } from "../IN-CS3-SSF-SCF-ops-args/CreateOrRemoveTriggerDataArg.ta.mjs";
import { CreateOrRemoveTriggerDataResultArg, _decode_CreateOrRemoveTriggerDataResultArg, _encode_CreateOrRemoveTriggerDataResultArg } from "../IN-CS3-SSF-SCF-ops-args/CreateOrRemoveTriggerDataResultArg.ta.mjs";
// export { CreateOrRemoveTriggerDataResultArg, _decode_CreateOrRemoveTriggerDataResultArg, _encode_CreateOrRemoveTriggerDataResultArg } from "../IN-CS3-SSF-SCF-ops-args/CreateOrRemoveTriggerDataResultArg.ta.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
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
import { opcode_createOrRemoveTriggerData } from "../IN-CS3-operationcodes/opcode-createOrRemoveTriggerData.va.mjs";
// export { opcode_createOrRemoveTriggerData } from "../IN-CS3-operationcodes/opcode-createOrRemoveTriggerData.va.mjs";


/**
 * @summary createOrRemoveTriggerData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * createOrRemoveTriggerData OPERATION ::= {
 *   ARGUMENT  CreateOrRemoveTriggerDataArg
 *   RESULT    CreateOrRemoveTriggerDataResultArg
 *   ERRORS
 *     {missingParameter | missingCustomerRecord | parameterOutOfRange |
 *       systemFailure | taskRefused | unexpectedComponentSequence |
 *       unexpectedDataValue | unexpectedParameter}
 *   CODE      opcode-createOrRemoveTriggerData
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CreateOrRemoveTriggerDataArg, CreateOrRemoveTriggerDataResultArg>}
 * @implements {OPERATION<CreateOrRemoveTriggerDataArg, CreateOrRemoveTriggerDataResultArg>}
 */
export
const createOrRemoveTriggerData: OPERATION<CreateOrRemoveTriggerDataArg, CreateOrRemoveTriggerDataResultArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CreateOrRemoveTriggerDataArg,
        "&ResultType": _decode_CreateOrRemoveTriggerDataResultArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_CreateOrRemoveTriggerDataArg,
        "&ResultType": _encode_CreateOrRemoveTriggerDataResultArg,
    },
    "&Errors": [ missingParameter, missingCustomerRecord, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_createOrRemoveTriggerData /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
