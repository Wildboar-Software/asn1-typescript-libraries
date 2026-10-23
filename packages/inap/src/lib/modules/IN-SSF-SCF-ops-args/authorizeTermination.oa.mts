/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AuthorizeTerminationArg, _decode_AuthorizeTerminationArg, _encode_AuthorizeTerminationArg } from "../IN-SSF-SCF-ops-args/AuthorizeTerminationArg.ta.mjs";
// export { AuthorizeTerminationArg, _decode_AuthorizeTerminationArg, _encode_AuthorizeTerminationArg } from "../IN-SSF-SCF-ops-args/AuthorizeTerminationArg.ta.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
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
import { opcode_authorizeTermination } from "../IN-operationcodes/opcode-authorizeTermination.va.mjs";
// export { opcode_authorizeTermination } from "../IN-operationcodes/opcode-authorizeTermination.va.mjs";


/**
 * @summary authorizeTermination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authorizeTermination OPERATION ::= {
 *   ARGUMENT         AuthorizeTerminationArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-authorizeTermination
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AuthorizeTerminationArg>}
 * @implements {OPERATION<AuthorizeTerminationArg>}
 */
export
const authorizeTermination: OPERATION<AuthorizeTerminationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AuthorizeTerminationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AuthorizeTerminationArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_authorizeTermination /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
