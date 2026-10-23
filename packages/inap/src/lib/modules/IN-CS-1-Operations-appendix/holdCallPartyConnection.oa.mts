/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { HoldCallPartyConnectionArg, _decode_HoldCallPartyConnectionArg, _encode_HoldCallPartyConnectionArg } from "../IN-CS-1-DataTypes-appendix/HoldCallPartyConnectionArg.ta.mjs";
// export { HoldCallPartyConnectionArg, _decode_HoldCallPartyConnectionArg, _encode_HoldCallPartyConnectionArg } from "../IN-CS-1-DataTypes-appendix/HoldCallPartyConnectionArg.ta.mjs";
import { CallPartyHandlingResultsArg, _decode_CallPartyHandlingResultsArg, _encode_CallPartyHandlingResultsArg } from "../IN-CS-1-DataTypes-appendix/CallPartyHandlingResultsArg.ta.mjs";
// export { CallPartyHandlingResultsArg, _decode_CallPartyHandlingResultsArg, _encode_CallPartyHandlingResultsArg } from "../IN-CS-1-DataTypes-appendix/CallPartyHandlingResultsArg.ta.mjs";
import { dataUnavailable } from "../IN-CS-1-Errors-appendix/dataUnavailable.oa.mjs";
// export { dataUnavailable } from "../IN-CS-1-Errors-appendix/dataUnavailable.oa.mjs";
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
import { op_holdCallPartyConnection } from "../IN-CS-1-Codes-appendix/op-holdCallPartyConnection.va.mjs";
// export { op_holdCallPartyConnection } from "../IN-CS-1-Codes-appendix/op-holdCallPartyConnection.va.mjs";


/**
 * @summary holdCallPartyConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * holdCallPartyConnection OPERATION ::= {
 *   ARGUMENT       HoldCallPartyConnectionArg
 *   RESULT         CallPartyHandlingResultsArg
 *   RETURN RESULT  TRUE
 *   ERRORS
 *     {dataUnavailable | missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE           op-holdCallPartyConnection
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<HoldCallPartyConnectionArg, CallPartyHandlingResultsArg>}
 * @implements {OPERATION<HoldCallPartyConnectionArg, CallPartyHandlingResultsArg>}
 */
export
const holdCallPartyConnection: OPERATION<HoldCallPartyConnectionArg, CallPartyHandlingResultsArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_HoldCallPartyConnectionArg,
        "&ResultType": _decode_CallPartyHandlingResultsArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_HoldCallPartyConnectionArg,
        "&ResultType": _encode_CallPartyHandlingResultsArg,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ dataUnavailable, missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_holdCallPartyConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
