/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AttachArg, _decode_AttachArg, _encode_AttachArg } from "../IN-CS-1-DataTypes-appendix/AttachArg.ta.mjs";
// export { AttachArg, _decode_AttachArg, _encode_AttachArg } from "../IN-CS-1-DataTypes-appendix/AttachArg.ta.mjs";
import { dataAlreadyExists } from "../IN-CS-1-Errors-appendix/dataAlreadyExists.oa.mjs";
// export { dataAlreadyExists } from "../IN-CS-1-Errors-appendix/dataAlreadyExists.oa.mjs";
import { legIDAlreadyAssigned } from "../IN-CS-1-Errors-appendix/legIDAlreadyAssigned.oa.mjs";
// export { legIDAlreadyAssigned } from "../IN-CS-1-Errors-appendix/legIDAlreadyAssigned.oa.mjs";
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
import { op_attach } from "../IN-CS-1-Codes-appendix/op-attach.va.mjs";
// export { op_attach } from "../IN-CS-1-Codes-appendix/op-attach.va.mjs";


/**
 * @summary attach
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attach OPERATION ::= {
 *   ARGUMENT       AttachArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {dataAlreadyExists | legIDAlreadyAssigned | missingParameter |
 *       systemFailure | taskRefused | tooLate | unexpectedComponentSequence |
 *       unexpectedDataValue | unexpectedParameter}
 *   CODE           op-attach
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AttachArg>}
 * @implements {OPERATION<AttachArg>}
 */
export
const attach: OPERATION<AttachArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AttachArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AttachArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ dataAlreadyExists, legIDAlreadyAssigned, missingParameter, systemFailure, taskRefused, tooLate, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_attach /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
