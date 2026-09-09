/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { CallBackArgument, _decode_CallBackArgument, _encode_CallBackArgument } from "../CSTA-call-back-call-related/CallBackArgument.ta.mjs";

import { CallBackResult, _decode_CallBackResult, _encode_CallBackResult } from "../CSTA-call-back-call-related/CallBackResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary callBack
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callBack OPERATION ::= {     ARGUMENT         CallBackArgument
 *     RESULT             CallBackResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 215 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallBackArgument, CallBackResult>}
 * @implements {OPERATION<CallBackArgument, CallBackResult>}
 */
export
const callBack: OPERATION<CallBackArgument, CallBackResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallBackArgument,
        "&ResultType": _decode_CallBackResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallBackArgument,
        "&ResultType": _encode_CallBackResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 215 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
