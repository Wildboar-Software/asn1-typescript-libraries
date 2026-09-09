/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ChangeMonitorFilterArgument, _decode_ChangeMonitorFilterArgument, _encode_ChangeMonitorFilterArgument } from "../CSTA-change-monitor-filter/ChangeMonitorFilterArgument.ta.mjs";

import { ChangeMonitorFilterResult, _decode_ChangeMonitorFilterResult, _encode_ChangeMonitorFilterResult } from "../CSTA-change-monitor-filter/ChangeMonitorFilterResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary changeMonitorFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * changeMonitorFilter OPERATION ::= {     ARGUMENT         ChangeMonitorFilterArgument
 *     RESULT             ChangeMonitorFilterResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 72 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ChangeMonitorFilterArgument, ChangeMonitorFilterResult>}
 * @implements {OPERATION<ChangeMonitorFilterArgument, ChangeMonitorFilterResult>}
 */
export
const changeMonitorFilter: OPERATION<ChangeMonitorFilterArgument, ChangeMonitorFilterResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ChangeMonitorFilterArgument,
        "&ResultType": _decode_ChangeMonitorFilterResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ChangeMonitorFilterArgument,
        "&ResultType": _encode_ChangeMonitorFilterResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 72 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
