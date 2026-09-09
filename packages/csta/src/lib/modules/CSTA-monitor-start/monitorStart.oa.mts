/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { MonitorStartArgument, _decode_MonitorStartArgument, _encode_MonitorStartArgument } from "../CSTA-monitor-start/MonitorStartArgument.ta.mjs";

import { MonitorStartResult, _decode_MonitorStartResult, _encode_MonitorStartResult } from "../CSTA-monitor-start/MonitorStartResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary monitorStart
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * monitorStart OPERATION ::= {     ARGUMENT         MonitorStartArgument
 *     RESULT             MonitorStartResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 71 }
 * ```
 * 
 * @constant
 * @type {OPERATION<MonitorStartArgument, MonitorStartResult>}
 * @implements {OPERATION<MonitorStartArgument, MonitorStartResult>}
 */
export
const monitorStart: OPERATION<MonitorStartArgument, MonitorStartResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MonitorStartArgument,
        "&ResultType": _decode_MonitorStartResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_MonitorStartArgument,
        "&ResultType": _encode_MonitorStartResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 71 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
