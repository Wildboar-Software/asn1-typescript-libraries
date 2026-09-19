/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { OAnswerArg, _decode_OAnswerArg, _encode_OAnswerArg } from "../AIN-Operations/OAnswerArg.ta.mjs";
// export { OAnswerArg, _decode_OAnswerArg, _encode_OAnswerArg } from "../AIN-Operations/OAnswerArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary oAnswer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oAnswer OPERATION ::= {
 *         ARGUMENT
 *         OAnswerArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         CODE private: 25611
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<OAnswerArg>}
 * @implements {OPERATION<OAnswerArg>}
 */
export
const oAnswer: OPERATION<OAnswerArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_OAnswerArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_OAnswerArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25611 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
