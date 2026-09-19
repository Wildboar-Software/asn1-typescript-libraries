/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ODisconnectArg, _decode_ODisconnectArg, _encode_ODisconnectArg } from "../AIN-Operations/ODisconnectArg.ta.mjs";
// export { ODisconnectArg, _decode_ODisconnectArg, _encode_ODisconnectArg } from "../AIN-Operations/ODisconnectArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary oDisconnect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oDisconnect OPERATION ::= {
 *         ARGUMENT
 *         ODisconnectArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --collectInformation,
 *             --sendToResource,
 *             --analyzeRoute,
 *             --connectToResource,
 *             --disconnect,
 *             --disconnectLeg,
 *             --mergeCall,
 *             --reconnect
 *             -- }
 *         CODE private: 25626
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<ODisconnectArg>}
 * @implements {OPERATION<ODisconnectArg>}
 */
export
const oDisconnect: OPERATION<ODisconnectArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ODisconnectArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ODisconnectArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25626 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
