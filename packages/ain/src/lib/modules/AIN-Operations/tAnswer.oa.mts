/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TAnswerArg, _decode_TAnswerArg, _encode_TAnswerArg } from "../AIN-Operations/TAnswerArg.ta.mjs";
// export { TAnswerArg, _decode_TAnswerArg, _encode_TAnswerArg } from "../AIN-Operations/TAnswerArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary tAnswer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tAnswer OPERATION ::= {
 *         ARGUMENT
 *         TAnswerArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         CODE private: 25610
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<TAnswerArg>}
 * @implements {OPERATION<TAnswerArg>}
 */
export
const tAnswer: OPERATION<TAnswerArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TAnswerArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TAnswerArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25610 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
