/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { FurnishChargingInformationArg, _decode_FurnishChargingInformationArg, _encode_FurnishChargingInformationArg } from "../IN-CS-1-Datatypes/FurnishChargingInformationArg.ta.mjs";
// export { FurnishChargingInformationArg, _decode_FurnishChargingInformationArg, _encode_FurnishChargingInformationArg } from "../IN-CS-1-Datatypes/FurnishChargingInformationArg.ta.mjs";
import { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
import { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
// export { taskRefused } from "../IN-CS-1-Errors/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS-1-Errors/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS-1-Errors/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS-1-Errors/unexpectedParameter.oa.mjs";
import { op_furnishChargingInformation } from "../IN-CS-1-Codes/op-furnishChargingInformation.va.mjs";
// export { op_furnishChargingInformation } from "../IN-CS-1-Codes/op-furnishChargingInformation.va.mjs";


/**
 * @summary furnishChargingInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * furnishChargingInformation OPERATION ::= {
 *   ARGUMENT       FurnishChargingInformationArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {missingParameter | taskRefused | unexpectedComponentSequence |
 *       unexpectedDataValue | unexpectedParameter}
 *   CODE           op-furnishChargingInformation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<FurnishChargingInformationArg>}
 * @implements {OPERATION<FurnishChargingInformationArg>}
 */
export
const furnishChargingInformation: OPERATION<FurnishChargingInformationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_FurnishChargingInformationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_FurnishChargingInformationArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_furnishChargingInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
