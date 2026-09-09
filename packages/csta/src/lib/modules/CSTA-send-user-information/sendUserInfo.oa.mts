/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SendUserInfoArgument, _decode_SendUserInfoArgument, _encode_SendUserInfoArgument } from "../CSTA-send-user-information/SendUserInfoArgument.ta.mjs";

import { SendUserInfoResult, _decode_SendUserInfoResult, _encode_SendUserInfoResult } from "../CSTA-send-user-information/SendUserInfoResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary sendUserInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendUserInfo    OPERATION ::= {    ARGUMENT        SendUserInfoArgument
 *     RESULT            SendUserInfoResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 234 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendUserInfoArgument, SendUserInfoResult>}
 * @implements {OPERATION<SendUserInfoArgument, SendUserInfoResult>}
 */
export
const sendUserInfo: OPERATION<SendUserInfoArgument, SendUserInfoResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendUserInfoArgument,
        "&ResultType": _decode_SendUserInfoResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendUserInfoArgument,
        "&ResultType": _encode_SendUserInfoResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 234 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
