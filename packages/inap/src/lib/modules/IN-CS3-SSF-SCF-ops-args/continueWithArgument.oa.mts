/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ContinueWithArgumentArg, _decode_ContinueWithArgumentArg, _encode_ContinueWithArgumentArg } from "../IN-CS3-SSF-SCF-ops-args/ContinueWithArgumentArg.ta.mjs";
// export { ContinueWithArgumentArg, _decode_ContinueWithArgumentArg, _encode_ContinueWithArgumentArg } from "../IN-CS3-SSF-SCF-ops-args/ContinueWithArgumentArg.ta.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
import { unknownLegID } from "../IN-CS3-errortypes/unknownLegID.oa.mjs";
// export { unknownLegID } from "../IN-CS3-errortypes/unknownLegID.oa.mjs";
import { opcode_continueWithArgument } from "../IN-CS3-operationcodes/opcode-continueWithArgument.va.mjs";
// export { opcode_continueWithArgument } from "../IN-CS3-operationcodes/opcode-continueWithArgument.va.mjs";


/**
 * @summary continueWithArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * continueWithArgument OPERATION ::= {
 *   ARGUMENT         ContinueWithArgumentArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingParameter | unexpectedComponentSequence | unexpectedParameter |
 *       unexpectedDataValue | unknownLegID}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-continueWithArgument
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ContinueWithArgumentArg>}
 * @implements {OPERATION<ContinueWithArgumentArg>}
 */
export
const continueWithArgument: OPERATION<ContinueWithArgumentArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ContinueWithArgumentArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ContinueWithArgumentArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, unexpectedComponentSequence, unexpectedParameter, unexpectedDataValue, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_continueWithArgument /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
