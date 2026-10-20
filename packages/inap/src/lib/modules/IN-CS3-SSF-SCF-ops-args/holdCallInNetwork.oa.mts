/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { HoldCallInNetworkArg, _decode_HoldCallInNetworkArg, _encode_HoldCallInNetworkArg } from "../IN-CS3-SSF-SCF-ops-args/HoldCallInNetworkArg.ta.mjs";
// export { HoldCallInNetworkArg, _decode_HoldCallInNetworkArg, _encode_HoldCallInNetworkArg } from "../IN-CS3-SSF-SCF-ops-args/HoldCallInNetworkArg.ta.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
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
import { opcode_holdCallInNetwork } from "../IN-CS3-operationcodes/opcode-holdCallInNetwork.va.mjs";
// export { opcode_holdCallInNetwork } from "../IN-CS3-operationcodes/opcode-holdCallInNetwork.va.mjs";


/**
 * @summary holdCallInNetwork
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * holdCallInNetwork OPERATION ::= {
 *   ARGUMENT         HoldCallInNetworkArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-holdCallInNetwork
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<HoldCallInNetworkArg>}
 * @implements {OPERATION<HoldCallInNetworkArg>}
 */
export
const holdCallInNetwork: OPERATION<HoldCallInNetworkArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_HoldCallInNetworkArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_HoldCallInNetworkArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_holdCallInNetwork /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
