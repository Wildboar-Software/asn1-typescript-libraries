/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TerminationAttemptArg, _decode_TerminationAttemptArg, _encode_TerminationAttemptArg } from "../IN-CS3-SSF-SCF-ops-args/TerminationAttemptArg.ta.mjs";
// export { TerminationAttemptArg, _decode_TerminationAttemptArg, _encode_TerminationAttemptArg } from "../IN-CS3-SSF-SCF-ops-args/TerminationAttemptArg.ta.mjs";
import { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS3-errortypes/parameterOutOfRange.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
import { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS3-errortypes/taskRefused.oa.mjs";
import { opcode_terminationAttempt } from "../IN-CS3-operationcodes/opcode-terminationAttempt.va.mjs";
// export { opcode_terminationAttempt } from "../IN-CS3-operationcodes/opcode-terminationAttempt.va.mjs";


/**
 * @summary terminationAttempt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * terminationAttempt OPERATION ::= {
 *   ARGUMENT         TerminationAttemptArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | parameterOutOfRange |
 *       unexpectedComponentSequence | unexpectedParameter | unexpectedDataValue |
 *       systemFailure | taskRefused}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-terminationAttempt
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<TerminationAttemptArg>}
 * @implements {OPERATION<TerminationAttemptArg>}
 */
export
const terminationAttempt: OPERATION<TerminationAttemptArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TerminationAttemptArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TerminationAttemptArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, parameterOutOfRange, unexpectedComponentSequence, unexpectedParameter, unexpectedDataValue, systemFailure, taskRefused, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_terminationAttempt /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
