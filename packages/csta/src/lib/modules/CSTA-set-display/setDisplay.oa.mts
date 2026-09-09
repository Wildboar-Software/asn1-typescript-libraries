/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetDisplayArgument, _decode_SetDisplayArgument, _encode_SetDisplayArgument } from "../CSTA-set-display/SetDisplayArgument.ta.mjs";

import { SetDisplayResult, _decode_SetDisplayResult, _encode_SetDisplayResult } from "../CSTA-set-display/SetDisplayResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setDisplay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setDisplay OPERATION ::= {    ARGUMENT         SetDisplayArgument
 *     RESULT            SetDisplayResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 274 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetDisplayArgument, SetDisplayResult>}
 * @implements {OPERATION<SetDisplayArgument, SetDisplayResult>}
 */
export
const setDisplay: OPERATION<SetDisplayArgument, SetDisplayResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetDisplayArgument,
        "&ResultType": _decode_SetDisplayResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetDisplayArgument,
        "&ResultType": _encode_SetDisplayResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 274 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
