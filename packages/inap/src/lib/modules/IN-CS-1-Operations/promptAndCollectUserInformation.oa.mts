/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PromptAndCollectUserInformationArg, _decode_PromptAndCollectUserInformationArg, _encode_PromptAndCollectUserInformationArg } from "../IN-CS-1-Datatypes/PromptAndCollectUserInformationArg.ta.mjs";
// export { PromptAndCollectUserInformationArg, _decode_PromptAndCollectUserInformationArg, _encode_PromptAndCollectUserInformationArg } from "../IN-CS-1-Datatypes/PromptAndCollectUserInformationArg.ta.mjs";
import { type ReceivedInformationArg, _decode_ReceivedInformationArg, _encode_ReceivedInformationArg } from "../IN-CS-1-Datatypes/ReceivedInformationArg.ta.mjs";
// export { ReceivedInformationArg, _decode_ReceivedInformationArg, _encode_ReceivedInformationArg } from "../IN-CS-1-Datatypes/ReceivedInformationArg.ta.mjs";
import { cancelled } from "../IN-CS-1-Errors/cancelled.oa.mjs";
// export { cancelled } from "../IN-CS-1-Errors/cancelled.oa.mjs";
import { improperCallerResponse } from "../IN-CS-1-Errors/improperCallerResponse.oa.mjs";
// export { improperCallerResponse } from "../IN-CS-1-Errors/improperCallerResponse.oa.mjs";
import { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS-1-Errors/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS-1-Errors/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../IN-CS-1-Errors/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS-1-Errors/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
import { unavailableResource } from "../IN-CS-1-Errors/unavailableResource.oa.mjs";
// export { unavailableResource } from "../IN-CS-1-Errors/unavailableResource.oa.mjs";
import { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
import { op_promptAndCollectUserInformation } from "../IN-CS-1-Codes/op-promptAndCollectUserInformation.va.mjs";
// export { op_promptAndCollectUserInformation } from "../IN-CS-1-Codes/op-promptAndCollectUserInformation.va.mjs";


/**
 * @summary promptAndCollectUserInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * promptAndCollectUserInformation OPERATION ::= {
 *   ARGUMENT       PromptAndCollectUserInformationArg
 *   RESULT         ReceivedInformationArg
 *   RETURN RESULT  TRUE
 *   ERRORS
 *     {cancelled | improperCallerResponse | missingParameter |
 *       parameterOutOfRange | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unavailableResource | unexpectedDataValue |
 *       unexpectedParameter}
 *   CODE           op-promptAndCollectUserInformation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PromptAndCollectUserInformationArg, ReceivedInformationArg>}
 * @implements {OPERATION<PromptAndCollectUserInformationArg, ReceivedInformationArg>}
 */
export
const promptAndCollectUserInformation: OPERATION<PromptAndCollectUserInformationArg, ReceivedInformationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PromptAndCollectUserInformationArg,
        "&ResultType": _decode_ReceivedInformationArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_PromptAndCollectUserInformationArg,
        "&ResultType": _encode_ReceivedInformationArg,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ cancelled, improperCallerResponse, missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unavailableResource, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_promptAndCollectUserInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
