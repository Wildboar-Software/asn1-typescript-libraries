/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ChangePartiesArg, _decode_ChangePartiesArg, _encode_ChangePartiesArg } from "../IN-CS-1-DataTypes-appendix/ChangePartiesArg.ta.mjs";
// export { ChangePartiesArg, _decode_ChangePartiesArg, _encode_ChangePartiesArg } from "../IN-CS-1-DataTypes-appendix/ChangePartiesArg.ta.mjs";
import { CallPartyHandlingResultsArg, _decode_CallPartyHandlingResultsArg, _encode_CallPartyHandlingResultsArg } from "../IN-CS-1-DataTypes-appendix/CallPartyHandlingResultsArg.ta.mjs";
// export { CallPartyHandlingResultsArg, _decode_CallPartyHandlingResultsArg, _encode_CallPartyHandlingResultsArg } from "../IN-CS-1-DataTypes-appendix/CallPartyHandlingResultsArg.ta.mjs";
import { dataAlreadyExists } from "../IN-CS-1-Errors-appendix/dataAlreadyExists.oa.mjs";
// export { dataAlreadyExists } from "../IN-CS-1-Errors-appendix/dataAlreadyExists.oa.mjs";
import { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
import { systemFailure } from "../IN-CS-1-Errors/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS-1-Errors/systemFailure.oa.mjs";
import { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
import { op_changeParties } from "../IN-CS-1-Codes-appendix/op-changeParties.va.mjs";
// export { op_changeParties } from "../IN-CS-1-Codes-appendix/op-changeParties.va.mjs";


/**
 * @summary changeParties
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * changeParties OPERATION ::= {
 *   ARGUMENT       ChangePartiesArg
 *   RESULT         CallPartyHandlingResultsArg
 *   RETURN RESULT  TRUE
 *   ERRORS
 *     {dataAlreadyExists | missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE           op-changeParties
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ChangePartiesArg, CallPartyHandlingResultsArg>}
 * @implements {OPERATION<ChangePartiesArg, CallPartyHandlingResultsArg>}
 */
export
const changeParties: OPERATION<ChangePartiesArg, CallPartyHandlingResultsArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ChangePartiesArg,
        "&ResultType": _decode_CallPartyHandlingResultsArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_ChangePartiesArg,
        "&ResultType": _encode_CallPartyHandlingResultsArg,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ dataAlreadyExists, missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_changeParties /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
