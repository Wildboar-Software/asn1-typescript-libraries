/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AssistRequestInstructionsArg, _decode_AssistRequestInstructionsArg, _encode_AssistRequestInstructionsArg } from "../IN-CS2-SSF-SCF-ops-args/AssistRequestInstructionsArg.ta.mjs";
// export { AssistRequestInstructionsArg, _decode_AssistRequestInstructionsArg, _encode_AssistRequestInstructionsArg } from "../IN-CS2-SSF-SCF-ops-args/AssistRequestInstructionsArg.ta.mjs";
import { missingCustomerRecord } from "../IN-CS2-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-CS2-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
import { opcode_assistRequestInstructions } from "../IN-CS2-operationcodes/opcode-assistRequestInstructions.va.mjs";
// export { opcode_assistRequestInstructions } from "../IN-CS2-operationcodes/opcode-assistRequestInstructions.va.mjs";


/**
 * @summary assistRequestInstructions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * assistRequestInstructions OPERATION ::= {
 *   ARGUMENT       AssistRequestInstructionsArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE           opcode-assistRequestInstructions
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AssistRequestInstructionsArg>}
 * @implements {OPERATION<AssistRequestInstructionsArg>}
 */
export
const assistRequestInstructions: OPERATION<AssistRequestInstructionsArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AssistRequestInstructionsArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AssistRequestInstructionsArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_assistRequestInstructions /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
