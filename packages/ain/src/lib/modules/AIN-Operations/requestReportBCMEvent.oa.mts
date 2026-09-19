/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { RequestReportBCMEventArg, _decode_RequestReportBCMEventArg, _encode_RequestReportBCMEventArg } from "../AIN-Operations/RequestReportBCMEventArg.ta.mjs";
// export { RequestReportBCMEventArg, _decode_RequestReportBCMEventArg, _encode_RequestReportBCMEventArg } from "../AIN-Operations/RequestReportBCMEventArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary requestReportBCMEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestReportBCMEvent OPERATION ::= {
 *         ARGUMENT
 *         RequestReportBCMEventArg
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 27905
 *         --Family Name is "Request Event"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<RequestReportBCMEventArg>}
 * @implements {OPERATION<RequestReportBCMEventArg>}
 */
export
const requestReportBCMEvent: OPERATION<RequestReportBCMEventArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RequestReportBCMEventArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_RequestReportBCMEventArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 27905 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
