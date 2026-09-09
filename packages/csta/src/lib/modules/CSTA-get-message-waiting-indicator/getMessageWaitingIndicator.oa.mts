/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    GetMessageWaitingIndicatorArgument,
    _decode_GetMessageWaitingIndicatorArgument,
    _encode_GetMessageWaitingIndicatorArgument
} from "../CSTA-get-message-waiting-indicator/GetMessageWaitingIndicatorArgument.ta.mjs";

import {
    GetMessageWaitingIndicatorResult,
    _decode_GetMessageWaitingIndicatorResult,
    _encode_GetMessageWaitingIndicatorResult
} from "../CSTA-get-message-waiting-indicator/GetMessageWaitingIndicatorResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getMessageWaitingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getMessageWaitingIndicator OPERATION ::= {    ARGUMENT         GetMessageWaitingIndicatorArgument
 *     RESULT            GetMessageWaitingIndicatorResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 267 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetMessageWaitingIndicatorArgument, GetMessageWaitingIndicatorResult>}
 * @implements {OPERATION<GetMessageWaitingIndicatorArgument, GetMessageWaitingIndicatorResult>}
 */
export
const getMessageWaitingIndicator: OPERATION<GetMessageWaitingIndicatorArgument, GetMessageWaitingIndicatorResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetMessageWaitingIndicatorArgument,
        "&ResultType": _decode_GetMessageWaitingIndicatorResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetMessageWaitingIndicatorArgument,
        "&ResultType": _encode_GetMessageWaitingIndicatorResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 267 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
