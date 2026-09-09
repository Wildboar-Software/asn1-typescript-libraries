/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    CallBackMessageNonCallRelatedArgument,
    _decode_CallBackMessageNonCallRelatedArgument,
    _encode_CallBackMessageNonCallRelatedArgument
} from "../CSTA-call-back-message-non-call-related/CallBackMessageNonCallRelatedArgument.ta.mjs";

import {
    CallBackMessageNonCallRelatedResult,
    _decode_CallBackMessageNonCallRelatedResult,
    _encode_CallBackMessageNonCallRelatedResult
} from "../CSTA-call-back-message-non-call-related/CallBackMessageNonCallRelatedResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary callBackMessageNonCallRelated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callBackMessageNonCallRelated OPERATION ::= {    ARGUMENT         CallBackMessageNonCallRelatedArgument
 *     RESULT             CallBackMessageNonCallRelatedResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 301 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallBackMessageNonCallRelatedArgument, CallBackMessageNonCallRelatedResult>}
 * @implements {OPERATION<CallBackMessageNonCallRelatedArgument, CallBackMessageNonCallRelatedResult>}
 */
export
const callBackMessageNonCallRelated: OPERATION<CallBackMessageNonCallRelatedArgument, CallBackMessageNonCallRelatedResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallBackMessageNonCallRelatedArgument,
        "&ResultType": _decode_CallBackMessageNonCallRelatedResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallBackMessageNonCallRelatedArgument,
        "&ResultType": _encode_CallBackMessageNonCallRelatedResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 301 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
