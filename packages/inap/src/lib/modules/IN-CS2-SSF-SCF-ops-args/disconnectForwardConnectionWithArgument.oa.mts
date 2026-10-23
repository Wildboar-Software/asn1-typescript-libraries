/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { DisconnectForwardConnectionWithArgumentArg, _decode_DisconnectForwardConnectionWithArgumentArg, _encode_DisconnectForwardConnectionWithArgumentArg } from "../IN-CS2-SSF-SCF-ops-args/DisconnectForwardConnectionWithArgumentArg.ta.mjs";
// export { DisconnectForwardConnectionWithArgumentArg, _decode_DisconnectForwardConnectionWithArgumentArg, _encode_DisconnectForwardConnectionWithArgumentArg } from "../IN-CS2-SSF-SCF-ops-args/DisconnectForwardConnectionWithArgumentArg.ta.mjs";
import { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS2-errortypes/missingParameter.oa.mjs";
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
import { opcode_dFCWithArgument } from "../IN-CS2-operationcodes/opcode-dFCWithArgument.va.mjs";
// export { opcode_dFCWithArgument } from "../IN-CS2-operationcodes/opcode-dFCWithArgument.va.mjs";


/**
 * @summary disconnectForwardConnectionWithArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * disconnectForwardConnectionWithArgument OPERATION ::= {
 *   ARGUMENT       DisconnectForwardConnectionWithArgumentArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter |
 *       unknownLegID}
 *   CODE           opcode-dFCWithArgument
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DisconnectForwardConnectionWithArgumentArg>}
 * @implements {OPERATION<DisconnectForwardConnectionWithArgumentArg>}
 */
export
const disconnectForwardConnectionWithArgument: OPERATION<DisconnectForwardConnectionWithArgumentArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DisconnectForwardConnectionWithArgumentArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DisconnectForwardConnectionWithArgumentArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_dFCWithArgument /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
