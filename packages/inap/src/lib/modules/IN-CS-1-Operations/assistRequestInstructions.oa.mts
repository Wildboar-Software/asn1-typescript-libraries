/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AssistRequestInstructionsArg, _decode_AssistRequestInstructionsArg, _encode_AssistRequestInstructionsArg } from "../IN-CS-1-Datatypes/AssistRequestInstructionsArg.ta.mjs";
// export { AssistRequestInstructionsArg, _decode_AssistRequestInstructionsArg, _encode_AssistRequestInstructionsArg } from "../IN-CS-1-Datatypes/AssistRequestInstructionsArg.ta.mjs";
import { missingCustomerRecord } from "../IN-CS-1-Errors/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-CS-1-Errors/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
import { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
import { op_assistRequestInstructions } from "../IN-CS-1-Codes/op-assistRequestInstructions.va.mjs";
// export { op_assistRequestInstructions } from "../IN-CS-1-Codes/op-assistRequestInstructions.va.mjs";


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
 *     {missingCustomerRecord | missingParameter | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE           op-assistRequestInstructions
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
    "&Errors": [ missingCustomerRecord, missingParameter, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_assistRequestInstructions /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
