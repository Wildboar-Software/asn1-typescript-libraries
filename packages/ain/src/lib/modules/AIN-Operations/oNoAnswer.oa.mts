/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ONoAnswerArg, _decode_ONoAnswerArg, _encode_ONoAnswerArg } from "../AIN-Operations/ONoAnswerArg.ta.mjs";
// export { ONoAnswerArg, _decode_ONoAnswerArg, _encode_ONoAnswerArg } from "../AIN-Operations/ONoAnswerArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary oNoAnswer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oNoAnswer OPERATION ::= {
 *         ARGUMENT
 *         ONoAnswerArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --analyzeRoute,
 *             --sendToResource,
 *             -- continue
 *             -- }
 *         CODE private: 25609
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<ONoAnswerArg>}
 * @implements {OPERATION<ONoAnswerArg>}
 */
export
const oNoAnswer: OPERATION<ONoAnswerArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ONoAnswerArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ONoAnswerArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25609 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
