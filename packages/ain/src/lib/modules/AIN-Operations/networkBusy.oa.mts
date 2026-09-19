/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { NetworkBusyArg, _decode_NetworkBusyArg, _encode_NetworkBusyArg } from "../AIN-Operations/NetworkBusyArg.ta.mjs";
// export { NetworkBusyArg, _decode_NetworkBusyArg, _encode_NetworkBusyArg } from "../AIN-Operations/NetworkBusyArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary networkBusy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkBusy OPERATION ::= {
 *         ARGUMENT
 *         NetworkBusyArg
 *     ERRORS{ applicationError,
 *         failureReport
 *         }
 *     --LINKED{
 *         --analyzeRoute,
 *         --sendToResource,
 *         --disconnect,
 *         -- continue,
 *         --forwardCall
 *         -- }
 *     CODE private: 25623
 *     }
 * ```
 * 
 * @constant
 * @type {OPERATION<NetworkBusyArg>}
 * @implements {OPERATION<NetworkBusyArg>}
 */
export
const networkBusy: OPERATION<NetworkBusyArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_NetworkBusyArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_NetworkBusyArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25623 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
