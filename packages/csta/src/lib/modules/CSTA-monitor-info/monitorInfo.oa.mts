/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { MonitorInfoArgument, _decode_MonitorInfoArgument, _encode_MonitorInfoArgument } from "../CSTA-monitor-info/MonitorInfoArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary monitorInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * monitorInfo OPERATION ::= {     ARGUMENT         MonitorInfoArgument
 *     ERRORS             {universalFailure }
 *     CODE             local: 374 }
 * ```
 * 
 * @constant
 * @type {OPERATION<MonitorInfoArgument>}
 * @implements {OPERATION<MonitorInfoArgument>}
 */
export
const monitorInfo: OPERATION<MonitorInfoArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MonitorInfoArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MonitorInfoArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 374 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
