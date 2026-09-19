/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TimeoutArg, _decode_TimeoutArg, _encode_TimeoutArg } from "../AIN-Operations/TimeoutArg.ta.mjs";
// export { TimeoutArg, _decode_TimeoutArg, _encode_TimeoutArg } from "../AIN-Operations/TimeoutArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary timeout
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * timeout OPERATION ::= {
 *         ARGUMENT
 *         TimeoutArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --analyzeRoute,
 *             --connectToResource,
 *             -- continue,
 *             --disconnect,
 *             --forwardCall,
 *             --sendToResource
 *             -- }
 *         CODE private:25620
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<TimeoutArg>}
 * @implements {OPERATION<TimeoutArg>}
 */
export
const timeout: OPERATION<TimeoutArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TimeoutArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TimeoutArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25620 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
