/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetMonitorArgument, _decode_GetMonitorArgument, _encode_GetMonitorArgument } from "../CSTA-get-monitor/GetMonitorArgument.ta.mjs";

import { GetMonitorResult, _decode_GetMonitorResult, _encode_GetMonitorResult } from "../CSTA-get-monitor/GetMonitorResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getMonitors
 * @description
 *
 * Get Monitors (ECMA-269 §15.1.4 / ECMA-285 §13.1.4). Direction: CF→SF. ROSE
 * local CODE 373. Errors: `universalFailure`. Obtains existing monitors.
 * Capability exchange selects inline
 * vs Monitor Info segmentation.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getMonitors OPERATION ::= {     ARGUMENT         GetMonitorArgument
 *     RESULT             GetMonitorResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 373 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetMonitorArgument, GetMonitorResult>}
 * @implements {OPERATION<GetMonitorArgument, GetMonitorResult>}
 */
export
const getMonitors: OPERATION<GetMonitorArgument, GetMonitorResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetMonitorArgument,
        "&ResultType": _decode_GetMonitorResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetMonitorArgument,
        "&ResultType": _encode_GetMonitorResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 373 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
