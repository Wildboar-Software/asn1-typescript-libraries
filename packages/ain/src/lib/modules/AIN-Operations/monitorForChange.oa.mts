/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MonitorForChangeArg, _decode_MonitorForChangeArg, _encode_MonitorForChangeArg } from "../AIN-Operations/MonitorForChangeArg.ta.mjs";
// export { MonitorForChangeArg, _decode_MonitorForChangeArg, _encode_MonitorForChangeArg } from "../AIN-Operations/MonitorForChangeArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary monitorForChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * monitorForChange OPERATION ::= {
 *         ARGUMENT
 *         MonitorForChangeArg
 *         ERRORS{ applicationError
 *         }
 *         --LINKED{
 *             --monitorSuccess,
 *             --statusReported
 *             -- }
 *         CODE private: 26369
 *         --Family Name is "Status Notification"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<MonitorForChangeArg>}
 * @implements {OPERATION<MonitorForChangeArg>}
 */
export
const monitorForChange: OPERATION<MonitorForChangeArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MonitorForChangeArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MonitorForChangeArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26369 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
