/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { InitiateCallAttemptArg, _decode_InitiateCallAttemptArg, _encode_InitiateCallAttemptArg } from "../IN-CS2-SSF-SCF-ops-args/InitiateCallAttemptArg.ta.mjs";
// export { InitiateCallAttemptArg, _decode_InitiateCallAttemptArg, _encode_InitiateCallAttemptArg } from "../IN-CS2-SSF-SCF-ops-args/InitiateCallAttemptArg.ta.mjs";
import { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
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
import { unknownLegID } from "../IN-CS2-errortypes/unknownLegID.oa.mjs";
// export { unknownLegID } from "../IN-CS2-errortypes/unknownLegID.oa.mjs";
import { opcode_initiateCallAttempt } from "../IN-CS2-operationcodes/opcode-initiateCallAttempt.va.mjs";
// export { opcode_initiateCallAttempt } from "../IN-CS2-operationcodes/opcode-initiateCallAttempt.va.mjs";


/**
 * @summary initiateCallAttempt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * initiateCallAttempt OPERATION ::= {
 *   ARGUMENT       InitiateCallAttemptArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {missingParameter | parameterOutOfRange | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter |
 *       unknownLegID}
 *   CODE           opcode-initiateCallAttempt
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<InitiateCallAttemptArg>}
 * @implements {OPERATION<InitiateCallAttemptArg>}
 */
export
const initiateCallAttempt: OPERATION<InitiateCallAttemptArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InitiateCallAttemptArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_InitiateCallAttemptArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_initiateCallAttempt /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
