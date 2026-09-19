/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CallTypeRequestArg, _decode_CallTypeRequestArg, _encode_CallTypeRequestArg } from "../AIN-Operations/CallTypeRequestArg.ta.mjs";
// export { CallTypeRequestArg, _decode_CallTypeRequestArg, _encode_CallTypeRequestArg } from "../AIN-Operations/CallTypeRequestArg.ta.mjs";
import { _decode_callTypeRequest_ResultType, _encode_callTypeRequest_ResultType, callTypeRequest_ResultType } from "../AIN-Operations/callTypeRequest-ResultType.ta.mjs";
// export { callTypeRequest_ResultType, _decode_callTypeRequest_ResultType, _encode_callTypeRequest_ResultType } from "../AIN-Operations/callTypeRequest-ResultType.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary callTypeRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTypeRequest OPERATION ::= {
 *         ARGUMENT
 *         CallTypeRequestArg
 *         RESULT SEQUENCE{
 *             callType                      CallType,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 *         ERRORS{ applicationError,
 *         faultReport
 *         }
 *         CODE private: 26887
 *         --Family Name is “Information Revision”
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallTypeRequestArg, callTypeRequest_ResultType>}
 * @implements {OPERATION<CallTypeRequestArg, callTypeRequest_ResultType>}
 */
export
const callTypeRequest: OPERATION<CallTypeRequestArg, callTypeRequest_ResultType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallTypeRequestArg,
        "&ResultType": _decode_callTypeRequest_ResultType,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallTypeRequestArg,
        "&ResultType": _encode_callTypeRequest_ResultType,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26887 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
