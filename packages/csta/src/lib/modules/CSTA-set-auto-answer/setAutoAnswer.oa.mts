/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetAutoAnswerArgument, _decode_SetAutoAnswerArgument, _encode_SetAutoAnswerArgument } from "../CSTA-set-auto-answer/SetAutoAnswerArgument.ta.mjs";

import { SetAutoAnswerResult, _decode_SetAutoAnswerResult, _encode_SetAutoAnswerResult } from "../CSTA-set-auto-answer/SetAutoAnswerResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setAutoAnswer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setAutoAnswer OPERATION ::= {    ARGUMENT         SetAutoAnswerArgument
 *     RESULT             SetAutoAnswerResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 313 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetAutoAnswerArgument, SetAutoAnswerResult>}
 * @implements {OPERATION<SetAutoAnswerArgument, SetAutoAnswerResult>}
 */
export
const setAutoAnswer: OPERATION<SetAutoAnswerArgument, SetAutoAnswerResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetAutoAnswerArgument,
        "&ResultType": _decode_SetAutoAnswerResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetAutoAnswerArgument,
        "&ResultType": _encode_SetAutoAnswerResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 313 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
