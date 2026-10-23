/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TAnswerArg, _decode_TAnswerArg, _encode_TAnswerArg } from "../IN-CS3-SSF-SCF-ops-args/TAnswerArg.ta.mjs";
// export { TAnswerArg, _decode_TAnswerArg, _encode_TAnswerArg } from "../IN-CS3-SSF-SCF-ops-args/TAnswerArg.ta.mjs";
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
import { opcode_tAnswer } from "../IN-CS3-operationcodes/opcode-tAnswer.va.mjs";
// export { opcode_tAnswer } from "../IN-CS3-operationcodes/opcode-tAnswer.va.mjs";


/**
 * @summary tAnswer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tAnswer OPERATION ::= {
 *   ARGUMENT         TAnswerArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | parameterOutOfRange |
 *       unexpectedComponentSequence | unexpectedParameter | unexpectedDataValue |
 *       systemFailure | taskRefused}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-tAnswer
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<TAnswerArg>}
 * @implements {OPERATION<TAnswerArg>}
 */
export
const tAnswer: OPERATION<TAnswerArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TAnswerArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TAnswerArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, parameterOutOfRange, unexpectedComponentSequence, unexpectedParameter, unexpectedDataValue, systemFailure, taskRefused, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_tAnswer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
