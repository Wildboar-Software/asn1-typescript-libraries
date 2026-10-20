/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ActivationReceivedAndAuthorizedArg, _decode_ActivationReceivedAndAuthorizedArg, _encode_ActivationReceivedAndAuthorizedArg } from "../IN-SCF-CUSF-Operations/ActivationReceivedAndAuthorizedArg.ta.mjs";
// export { ActivationReceivedAndAuthorizedArg, _decode_ActivationReceivedAndAuthorizedArg, _encode_ActivationReceivedAndAuthorizedArg } from "../IN-SCF-CUSF-Operations/ActivationReceivedAndAuthorizedArg.ta.mjs";
import { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
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
import { opcode_activationReceivedAndAuthorized } from "../IN-operationcodes/opcode-activationReceivedAndAuthorized.va.mjs";
// export { opcode_activationReceivedAndAuthorized } from "../IN-operationcodes/opcode-activationReceivedAndAuthorized.va.mjs";


/**
 * @summary activationReceivedAndAuthorized
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activationReceivedAndAuthorized OPERATION ::= {
 *   ARGUMENT         ActivationReceivedAndAuthorizedArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | parameterOutOfRange |
 *       systemFailure | taskRefused | unexpectedComponentSequence |
 *       unexpectedDataValue | unexpectedParameter}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-activationReceivedAndAuthorized
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ActivationReceivedAndAuthorizedArg>}
 * @implements {OPERATION<ActivationReceivedAndAuthorizedArg>}
 */
export
const activationReceivedAndAuthorized: OPERATION<ActivationReceivedAndAuthorizedArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ActivationReceivedAndAuthorizedArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ActivationReceivedAndAuthorizedArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_activationReceivedAndAuthorized /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
