/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetAutoAnswerArgument, _decode_GetAutoAnswerArgument, _encode_GetAutoAnswerArgument } from "../CSTA-get-auto-answer/GetAutoAnswerArgument.ta.mjs";

import { GetAutoAnswerResult, _decode_GetAutoAnswerResult, _encode_GetAutoAnswerResult } from "../CSTA-get-auto-answer/GetAutoAnswerResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getAutoAnswer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getAutoAnswer OPERATION ::= {    ARGUMENT         GetAutoAnswerArgument
 *     RESULT             GetAutoAnswerResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 305 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetAutoAnswerArgument, GetAutoAnswerResult>}
 * @implements {OPERATION<GetAutoAnswerArgument, GetAutoAnswerResult>}
 */
export
const getAutoAnswer: OPERATION<GetAutoAnswerArgument, GetAutoAnswerResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetAutoAnswerArgument,
        "&ResultType": _decode_GetAutoAnswerResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetAutoAnswerArgument,
        "&ResultType": _encode_GetAutoAnswerResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 305 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
