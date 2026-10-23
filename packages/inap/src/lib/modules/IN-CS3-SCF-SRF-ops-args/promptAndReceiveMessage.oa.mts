/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PromptAndReceiveMessageArg, _decode_PromptAndReceiveMessageArg, _encode_PromptAndReceiveMessageArg } from "../IN-CS3-SCF-SRF-ops-args/PromptAndReceiveMessageArg.ta.mjs";
// export { PromptAndReceiveMessageArg, _decode_PromptAndReceiveMessageArg, _encode_PromptAndReceiveMessageArg } from "../IN-CS3-SCF-SRF-ops-args/PromptAndReceiveMessageArg.ta.mjs";
import { MessageReceivedArg, _decode_MessageReceivedArg, _encode_MessageReceivedArg } from "../IN-CS3-SCF-SRF-ops-args/MessageReceivedArg.ta.mjs";
// export { MessageReceivedArg, _decode_MessageReceivedArg, _encode_MessageReceivedArg } from "../IN-CS3-SCF-SRF-ops-args/MessageReceivedArg.ta.mjs";
import { canceled } from "../IN-CS3-errortypes/canceled.oa.mjs";
// export { canceled } from "../IN-CS3-errortypes/canceled.oa.mjs";
import { improperCallerResponse } from "../IN-CS3-errortypes/improperCallerResponse.oa.mjs";
// export { improperCallerResponse } from "../IN-CS3-errortypes/improperCallerResponse.oa.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
import { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
import { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
import { unavailableResource } from "../IN-CS3-errortypes/unavailableResource.oa.mjs";
// export { unavailableResource } from "../IN-CS3-errortypes/unavailableResource.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { opcode_promptAndReceiveMessage } from "../IN-CS3-operationcodes/opcode-promptAndReceiveMessage.va.mjs";
// export { opcode_promptAndReceiveMessage } from "../IN-CS3-operationcodes/opcode-promptAndReceiveMessage.va.mjs";


/**
 * @summary promptAndReceiveMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * promptAndReceiveMessage OPERATION ::= {
 *   ARGUMENT  PromptAndReceiveMessageArg
 *   RESULT    MessageReceivedArg
 *   ERRORS
 *     {canceled | improperCallerResponse | missingParameter | parameterOutOfRange
 *       | taskRefused | systemFailure | unavailableResource |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE      opcode-promptAndReceiveMessage
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PromptAndReceiveMessageArg, MessageReceivedArg>}
 * @implements {OPERATION<PromptAndReceiveMessageArg, MessageReceivedArg>}
 */
export
const promptAndReceiveMessage: OPERATION<PromptAndReceiveMessageArg, MessageReceivedArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PromptAndReceiveMessageArg,
        "&ResultType": _decode_MessageReceivedArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_PromptAndReceiveMessageArg,
        "&ResultType": _encode_MessageReceivedArg,
    },
    "&Errors": [ canceled, improperCallerResponse, missingParameter, parameterOutOfRange, taskRefused, systemFailure, unavailableResource, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_promptAndReceiveMessage /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
