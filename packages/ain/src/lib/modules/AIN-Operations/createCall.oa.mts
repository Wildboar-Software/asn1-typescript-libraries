/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CreateCallArg, _decode_CreateCallArg, _encode_CreateCallArg } from "../AIN-Operations/CreateCallArg.ta.mjs";
// export { CreateCallArg, _decode_CreateCallArg, _encode_CreateCallArg } from "../AIN-Operations/CreateCallArg.ta.mjs";
import { CreateCallRes, _decode_CreateCallRes, _encode_CreateCallRes } from "../AIN-Operations/CreateCallRes.ta.mjs";
// export { CreateCallRes, _decode_CreateCallRes, _encode_CreateCallRes } from "../AIN-Operations/CreateCallRes.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary createCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * createCall OPERATION ::= {
 *         ARGUMENT
 *         CreateCallArg
 *         RESULT
 *         CreateCallRes
 *         ERRORS{ applicationError
 *         failureReport
 *         }
 *         --LINKED{
 *             --originationAttempt
 *             -- }
 *         CODE private: 25863
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<CreateCallArg, CreateCallRes>}
 * @implements {OPERATION<CreateCallArg, CreateCallRes>}
 */
export
const createCall: OPERATION<CreateCallArg, CreateCallRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CreateCallArg,
        "&ResultType": _decode_CreateCallRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CreateCallArg,
        "&ResultType": _encode_CreateCallRes,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25863 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
