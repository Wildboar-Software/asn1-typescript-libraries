/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { MonitorStopArgument, _decode_MonitorStopArgument, _encode_MonitorStopArgument } from "../CSTA-monitor-stop/MonitorStopArgument.ta.mjs";

import { MonitorStopResult, _decode_MonitorStopResult, _encode_MonitorStopResult } from "../CSTA-monitor-stop/MonitorStopResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary monitorStop
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * monitorStop OPERATION ::= {     ARGUMENT         MonitorStopArgument
 *     RESULT             MonitorStopResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 73 }
 * ```
 * 
 * @constant
 * @type {OPERATION<MonitorStopArgument, MonitorStopResult>}
 * @implements {OPERATION<MonitorStopArgument, MonitorStopResult>}
 */
export
const monitorStop: OPERATION<MonitorStopArgument, MonitorStopResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MonitorStopArgument,
        "&ResultType": _decode_MonitorStopResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_MonitorStopArgument,
        "&ResultType": _encode_MonitorStopResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 73 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
