/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { OriginationAttemptArg, _decode_OriginationAttemptArg, _encode_OriginationAttemptArg } from "../AIN-Operations/OriginationAttemptArg.ta.mjs";
// export { OriginationAttemptArg, _decode_OriginationAttemptArg, _encode_OriginationAttemptArg } from "../AIN-Operations/OriginationAttemptArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary originationAttempt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * originationAttempt OPERATION ::= {
 *         ARGUMENT
 *         OriginationAttemptArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --analyzeRoute,
 *             --sendToResource,
 *             --disconnect
 *             -- }
 *         CODE private: 25624
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<OriginationAttemptArg>}
 * @implements {OPERATION<OriginationAttemptArg>}
 */
export
const originationAttempt: OPERATION<OriginationAttemptArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_OriginationAttemptArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_OriginationAttemptArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25624 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
