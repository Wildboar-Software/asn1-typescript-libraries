/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { DetachArg, _decode_DetachArg, _encode_DetachArg } from "../IN-CS-1-DataTypes-appendix/DetachArg.ta.mjs";
// export { DetachArg, _decode_DetachArg, _encode_DetachArg } from "../IN-CS-1-DataTypes-appendix/DetachArg.ta.mjs";
import { dataAlreadyExists } from "../IN-CS-1-Errors-appendix/dataAlreadyExists.oa.mjs";
// export { dataAlreadyExists } from "../IN-CS-1-Errors-appendix/dataAlreadyExists.oa.mjs";
import { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
import { systemFailure } from "../IN-CS-1-Errors/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS-1-Errors/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
import { tooLate } from "../IN-CS-1-Errors-appendix/tooLate.oa.mjs";
// export { tooLate } from "../IN-CS-1-Errors-appendix/tooLate.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
import { unknownLegID } from "../IN-CS-1-Errors/unknownLegID.oa.mjs";
// export { unknownLegID } from "../IN-CS-1-Errors/unknownLegID.oa.mjs";
import { op_detach } from "../IN-CS-1-Codes-appendix/op-detach.va.mjs";
// export { op_detach } from "../IN-CS-1-Codes-appendix/op-detach.va.mjs";


/**
 * @summary detach
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * detach OPERATION ::= {
 *   ARGUMENT       DetachArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {dataAlreadyExists | missingParameter | systemFailure | taskRefused |
 *       tooLate | unexpectedComponentSequence | unexpectedDataValue |
 *       unexpectedParameter | unknownLegID}
 *   CODE           op-detach
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DetachArg>}
 * @implements {OPERATION<DetachArg>}
 */
export
const detach: OPERATION<DetachArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DetachArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DetachArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ dataAlreadyExists, missingParameter, systemFailure, taskRefused, tooLate, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_detach /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
