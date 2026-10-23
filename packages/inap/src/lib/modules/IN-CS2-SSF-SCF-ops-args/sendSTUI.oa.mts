/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SendSTUIArg, _decode_SendSTUIArg, _encode_SendSTUIArg } from "../IN-CS2-SSF-SCF-ops-args/SendSTUIArg.ta.mjs";
// export { SendSTUIArg, _decode_SendSTUIArg, _encode_SendSTUIArg } from "../IN-CS2-SSF-SCF-ops-args/SendSTUIArg.ta.mjs";
import { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS2-errortypes/parameterOutOfRange.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS2-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS2-errortypes/unexpectedParameter.oa.mjs";
import { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS2-errortypes/unexpectedDataValue.oa.mjs";
import { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS2-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS2-errortypes/taskRefused.oa.mjs";
import { unknownLegID } from "../IN-CS2-errortypes/unknownLegID.oa.mjs";
// export { unknownLegID } from "../IN-CS2-errortypes/unknownLegID.oa.mjs";
import { opcode_sendSTUI } from "../IN-CS2-operationcodes/opcode-sendSTUI.va.mjs";
// export { opcode_sendSTUI } from "../IN-CS2-operationcodes/opcode-sendSTUI.va.mjs";


/**
 * @summary sendSTUI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendSTUI OPERATION ::= {
 *   ARGUMENT       SendSTUIArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {missingParameter | parameterOutOfRange | unexpectedComponentSequence |
 *       unexpectedParameter | unexpectedDataValue | systemFailure | taskRefused |
 *       unknownLegID}
 *   CODE           opcode-sendSTUI
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendSTUIArg>}
 * @implements {OPERATION<SendSTUIArg>}
 */
export
const sendSTUI: OPERATION<SendSTUIArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendSTUIArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendSTUIArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, unexpectedComponentSequence, unexpectedParameter, unexpectedDataValue, systemFailure, taskRefused, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_sendSTUI /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
