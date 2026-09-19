/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SetTimerArg, _decode_SetTimerArg, _encode_SetTimerArg } from "../AIN-Operations/SetTimerArg.ta.mjs";
// export { SetTimerArg, _decode_SetTimerArg, _encode_SetTimerArg } from "../AIN-Operations/SetTimerArg.ta.mjs";
import { TimerUpdated, _decode_TimerUpdated, _encode_TimerUpdated } from "../AIN-Parameters/TimerUpdated.ta.mjs";
// export { TimerUpdated, _decode_TimerUpdated, _encode_TimerUpdated } from "../AIN-Parameters/TimerUpdated.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary setTimer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setTimer OPERATION ::= {
 *         ARGUMENT
 *         SetTimerArg
 *         RESULT
 *         TimerUpdated
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 26889
 *         --Family Name is "Information Revision"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetTimerArg, TimerUpdated>}
 * @implements {OPERATION<SetTimerArg, TimerUpdated>}
 */
export
const setTimer: OPERATION<SetTimerArg, TimerUpdated> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetTimerArg,
        "&ResultType": _decode_TimerUpdated,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetTimerArg,
        "&ResultType": _encode_TimerUpdated,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26889 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
