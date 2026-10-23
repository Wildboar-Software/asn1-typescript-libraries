/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CallInformationRequestArg, _decode_CallInformationRequestArg, _encode_CallInformationRequestArg } from "../IN-CS-1-Datatypes/CallInformationRequestArg.ta.mjs";
// export { CallInformationRequestArg, _decode_CallInformationRequestArg, _encode_CallInformationRequestArg } from "../IN-CS-1-Datatypes/CallInformationRequestArg.ta.mjs";
import { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS-1-Errors/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS-1-Errors/parameterOutOfRange.oa.mjs";
import { requestedInfoError } from "../IN-CS-1-Errors/requestedInfoError.oa.mjs";
// export { requestedInfoError } from "../IN-CS-1-Errors/requestedInfoError.oa.mjs";
import { systemFailure } from "../IN-CS-1-Errors/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS-1-Errors/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
import { op_callInformationRequest } from "../IN-CS-1-Codes/op-callInformationRequest.va.mjs";
// export { op_callInformationRequest } from "../IN-CS-1-Codes/op-callInformationRequest.va.mjs";


/**
 * @summary callInformationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callInformationRequest OPERATION ::= {
 *   ARGUMENT       CallInformationRequestArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {missingParameter | parameterOutOfRange | requestedInfoError |
 *       systemFailure | taskRefused | unexpectedComponentSequence |
 *       unexpectedDataValue | unexpectedParameter}
 *   CODE           op-callInformationRequest
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallInformationRequestArg>}
 * @implements {OPERATION<CallInformationRequestArg>}
 */
export
const callInformationRequest: OPERATION<CallInformationRequestArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallInformationRequestArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallInformationRequestArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, requestedInfoError, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_callInformationRequest /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
