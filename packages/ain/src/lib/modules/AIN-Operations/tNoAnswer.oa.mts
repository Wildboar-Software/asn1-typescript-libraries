/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TNoAnswerArg, _decode_TNoAnswerArg, _encode_TNoAnswerArg } from "../AIN-Operations/TNoAnswerArg.ta.mjs";
// export { TNoAnswerArg, _decode_TNoAnswerArg, _encode_TNoAnswerArg } from "../AIN-Operations/TNoAnswerArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary tNoAnswer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tNoAnswer OPERATION ::= {
 *         ARGUMENT
 *         TNoAnswerArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --forwardCall,
 *             --sendToResource,
 *             -- continue
 *             -- }
 *         CODE private: 25608
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<TNoAnswerArg>}
 * @implements {OPERATION<TNoAnswerArg>}
 */
export
const tNoAnswer: OPERATION<TNoAnswerArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TNoAnswerArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TNoAnswerArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25608 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
