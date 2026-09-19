/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CallInfoFromResourceArg, _decode_CallInfoFromResourceArg, _encode_CallInfoFromResourceArg } from "../AIN-Operations/CallInfoFromResourceArg.ta.mjs";
// export { CallInfoFromResourceArg, _decode_CallInfoFromResourceArg, _encode_CallInfoFromResourceArg } from "../AIN-Operations/CallInfoFromResourceArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary callInfoFromResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callInfoFromResource OPERATION ::= {
 *         ARGUMENT
 *             CallInfoFromResourceArg
 *         ERRORS{
 *             applicationError,
 *             failureReport
 *             }
 *         CODE private: 26116
 *         --Family Name is "Caller Interaction"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallInfoFromResourceArg>}
 * @implements {OPERATION<CallInfoFromResourceArg>}
 */
export
const callInfoFromResource: OPERATION<CallInfoFromResourceArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallInfoFromResourceArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallInfoFromResourceArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26116 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
