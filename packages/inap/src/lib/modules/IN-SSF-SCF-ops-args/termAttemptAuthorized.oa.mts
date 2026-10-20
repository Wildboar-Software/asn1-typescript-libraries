/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TermAttemptAuthorizedArg, _decode_TermAttemptAuthorizedArg, _encode_TermAttemptAuthorizedArg } from "../IN-SSF-SCF-ops-args/TermAttemptAuthorizedArg.ta.mjs";
// export { TermAttemptAuthorizedArg, _decode_TermAttemptAuthorizedArg, _encode_TermAttemptAuthorizedArg } from "../IN-SSF-SCF-ops-args/TermAttemptAuthorizedArg.ta.mjs";
import { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
import { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
import { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
import { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-errortypes/taskRefused.oa.mjs";
import { opcode_termAttemptAuthorized } from "../IN-operationcodes/opcode-termAttemptAuthorized.va.mjs";
// export { opcode_termAttemptAuthorized } from "../IN-operationcodes/opcode-termAttemptAuthorized.va.mjs";


/**
 * @summary termAttemptAuthorized
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * termAttemptAuthorized OPERATION ::= {
 *   ARGUMENT         TermAttemptAuthorizedArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | parameterOutOfRange |
 *       unexpectedComponentSequence | unexpectedParameter | unexpectedDataValue |
 *       systemFailure | taskRefused}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-termAttemptAuthorized
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<TermAttemptAuthorizedArg>}
 * @implements {OPERATION<TermAttemptAuthorizedArg>}
 */
export
const termAttemptAuthorized: OPERATION<TermAttemptAuthorizedArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TermAttemptAuthorizedArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TermAttemptAuthorizedArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, parameterOutOfRange, unexpectedComponentSequence, unexpectedParameter, unexpectedDataValue, systemFailure, taskRefused, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_termAttemptAuthorized /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
