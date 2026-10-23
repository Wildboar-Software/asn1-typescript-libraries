/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { EstablishTemporaryConnectionArg, _decode_EstablishTemporaryConnectionArg, _encode_EstablishTemporaryConnectionArg } from "../IN-CS-1-Datatypes/EstablishTemporaryConnectionArg.ta.mjs";
// export { EstablishTemporaryConnectionArg, _decode_EstablishTemporaryConnectionArg, _encode_EstablishTemporaryConnectionArg } from "../IN-CS-1-Datatypes/EstablishTemporaryConnectionArg.ta.mjs";
import { eTCFailed } from "../IN-CS-1-Errors/eTCFailed.oa.mjs";
// export { eTCFailed } from "../IN-CS-1-Errors/eTCFailed.oa.mjs";
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
import { op_establishTemporaryConnection } from "../IN-CS-1-Codes/op-establishTemporaryConnection.va.mjs";
// export { op_establishTemporaryConnection } from "../IN-CS-1-Codes/op-establishTemporaryConnection.va.mjs";


/**
 * @summary establishTemporaryConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * establishTemporaryConnection OPERATION ::= {
 *   ARGUMENT       EstablishTemporaryConnectionArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {eTCFailed | missingParameter | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE           op-establishTemporaryConnection
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<EstablishTemporaryConnectionArg>}
 * @implements {OPERATION<EstablishTemporaryConnectionArg>}
 */
export
const establishTemporaryConnection: OPERATION<EstablishTemporaryConnectionArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EstablishTemporaryConnectionArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EstablishTemporaryConnectionArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ eTCFailed, missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_establishTemporaryConnection /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
