/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PromptAndCollectUserInformationArg, _decode_PromptAndCollectUserInformationArg, _encode_PromptAndCollectUserInformationArg } from "../IN-CS3-SCF-SRF-ops-args/PromptAndCollectUserInformationArg.ta.mjs";
// export { PromptAndCollectUserInformationArg, _decode_PromptAndCollectUserInformationArg, _encode_PromptAndCollectUserInformationArg } from "../IN-CS3-SCF-SRF-ops-args/PromptAndCollectUserInformationArg.ta.mjs";
import { type ReceivedInformationArg, _decode_ReceivedInformationArg, _encode_ReceivedInformationArg } from "../IN-CS3-SCF-SRF-ops-args/ReceivedInformationArg.ta.mjs";
// export { ReceivedInformationArg, _decode_ReceivedInformationArg, _encode_ReceivedInformationArg } from "../IN-CS3-SCF-SRF-ops-args/ReceivedInformationArg.ta.mjs";
import { canceled } from "../IN-CS3-errortypes/canceled.oa.mjs";
// export { canceled } from "../IN-CS3-errortypes/canceled.oa.mjs";
import { improperCallerResponse } from "../IN-CS3-errortypes/improperCallerResponse.oa.mjs";
// export { improperCallerResponse } from "../IN-CS3-errortypes/improperCallerResponse.oa.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
import { unavailableResource } from "../IN-CS3-errortypes/unavailableResource.oa.mjs";
// export { unavailableResource } from "../IN-CS3-errortypes/unavailableResource.oa.mjs";
import { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { opcode_promptAndCollectUserInformation } from "../IN-CS3-operationcodes/opcode-promptAndCollectUserInformation.va.mjs";
// export { opcode_promptAndCollectUserInformation } from "../IN-CS3-operationcodes/opcode-promptAndCollectUserInformation.va.mjs";


/**
 * @summary promptAndCollectUserInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * promptAndCollectUserInformation OPERATION ::= {
 *   ARGUMENT  PromptAndCollectUserInformationArg
 *   RESULT    ReceivedInformationArg
 *   ERRORS
 *     {canceled | improperCallerResponse | missingParameter | parameterOutOfRange
 *       | systemFailure | taskRefused | unexpectedComponentSequence |
 *       unavailableResource | unexpectedDataValue | unexpectedParameter}
 *   CODE      opcode-promptAndCollectUserInformation
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
    "&Errors": [ canceled, improperCallerResponse, missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unavailableResource, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_promptAndCollectUserInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
