/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { CallBackNonCallRelatedArgument, _decode_CallBackNonCallRelatedArgument, _encode_CallBackNonCallRelatedArgument } from "../CSTA-call-back-non-call-related/CallBackNonCallRelatedArgument.ta.mjs";

import { CallBackNonCallRelatedResult, _decode_CallBackNonCallRelatedResult, _encode_CallBackNonCallRelatedResult } from "../CSTA-call-back-non-call-related/CallBackNonCallRelatedResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary callBackNonCallRelated
 * @description
 *
 * Call Back Non-Call-Related (ECMA-269 §22.1.1 / ECMA-285 §20.1.1). Direction:
 * CF→SF. ROSE local CODE 300. Errors: `universalFailure`. Cancel with Cancel
 * Call Back. Duplicate pairs: SF option.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callBackNonCallRelated OPERATION ::= {    ARGUMENT         CallBackNonCallRelatedArgument
 *     RESULT             CallBackNonCallRelatedResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 300 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallBackNonCallRelatedArgument, CallBackNonCallRelatedResult>}
 * @implements {OPERATION<CallBackNonCallRelatedArgument, CallBackNonCallRelatedResult>}
 */
export
const callBackNonCallRelated: OPERATION<CallBackNonCallRelatedArgument, CallBackNonCallRelatedResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallBackNonCallRelatedArgument,
        "&ResultType": _decode_CallBackNonCallRelatedResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallBackNonCallRelatedArgument,
        "&ResultType": _encode_CallBackNonCallRelatedResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 300 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
