/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetCallBackArgument, _decode_GetCallBackArgument, _encode_GetCallBackArgument } from "../CSTA-get-call-back/GetCallBackArgument.ta.mjs";

import { GetCallBackResult, _decode_GetCallBackResult, _encode_GetCallBackResult } from "../CSTA-get-call-back/GetCallBackResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getCallBack
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getCallBack OPERATION ::= {    ARGUMENT         GetCallBackArgument
 *     RESULT             GetCallBackResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 378 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetCallBackArgument, GetCallBackResult>}
 * @implements {OPERATION<GetCallBackArgument, GetCallBackResult>}
 */
export
const getCallBack: OPERATION<GetCallBackArgument, GetCallBackResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetCallBackArgument,
        "&ResultType": _decode_GetCallBackResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetCallBackArgument,
        "&ResultType": _encode_GetCallBackResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 378 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
