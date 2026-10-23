/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { RequestReportBCSMEventArg, _decode_RequestReportBCSMEventArg, _encode_RequestReportBCSMEventArg } from "../IN-CS-1-Datatypes/RequestReportBCSMEventArg.ta.mjs";
// export { RequestReportBCSMEventArg, _decode_RequestReportBCSMEventArg, _encode_RequestReportBCSMEventArg } from "../IN-CS-1-Datatypes/RequestReportBCSMEventArg.ta.mjs";
import { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS-1-Errors/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-CS-1-Errors/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-CS-1-Errors/parameterOutOfRange.oa.mjs";
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
import { op_requestReportBCSMEvent } from "../IN-CS-1-Codes/op-requestReportBCSMEvent.va.mjs";
// export { op_requestReportBCSMEvent } from "../IN-CS-1-Codes/op-requestReportBCSMEvent.va.mjs";


/**
 * @summary requestReportBCSMEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestReportBCSMEvent OPERATION ::= {
 *   ARGUMENT       RequestReportBCSMEventArg
 *   RETURN RESULT  FALSE
 *   ERRORS
 *     {missingParameter | parameterOutOfRange | systemFailure | taskRefused |
 *       unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter}
 *   CODE           op-requestReportBCSMEvent
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<RequestReportBCSMEventArg>}
 * @implements {OPERATION<RequestReportBCSMEventArg>}
 */
export
const requestReportBCSMEvent: OPERATION<RequestReportBCSMEventArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RequestReportBCSMEventArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_RequestReportBCSMEventArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_requestReportBCSMEvent /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
