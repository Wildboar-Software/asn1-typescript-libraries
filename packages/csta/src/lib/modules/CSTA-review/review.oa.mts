/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ReviewArgument, _decode_ReviewArgument, _encode_ReviewArgument } from "../CSTA-review/ReviewArgument.ta.mjs";

import { ReviewResult, _decode_ReviewResult, _encode_ReviewResult } from "../CSTA-review/ReviewResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary review
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * review OPERATION ::= {    ARGUMENT        ReviewArgument
 *     RESULT            ReviewResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 506 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReviewArgument, ReviewResult>}
 * @implements {OPERATION<ReviewArgument, ReviewResult>}
 */
export
const review: OPERATION<ReviewArgument, ReviewResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReviewArgument,
        "&ResultType": _decode_ReviewResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReviewArgument,
        "&ResultType": _encode_ReviewResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 506 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
