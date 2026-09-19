/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MonitorSuccessArg, _decode_MonitorSuccessArg, _encode_MonitorSuccessArg } from "../AIN-Operations/MonitorSuccessArg.ta.mjs";
// export { MonitorSuccessArg, _decode_MonitorSuccessArg, _encode_MonitorSuccessArg } from "../AIN-Operations/MonitorSuccessArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary monitorSuccess
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * monitorSuccess OPERATION ::= {
 *         ARGUMENT
 *         MonitorSuccessArg
 *         ERRORS{ applicationError
 *         failureReport
 *         }
 *         CODE private: 26371
 *         --Family Name is "Status Notification"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<MonitorSuccessArg>}
 * @implements {OPERATION<MonitorSuccessArg>}
 */
export
const monitorSuccess: OPERATION<MonitorSuccessArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MonitorSuccessArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MonitorSuccessArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26371 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
