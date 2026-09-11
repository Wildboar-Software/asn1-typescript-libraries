/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { AnswerCallArgument, _decode_AnswerCallArgument, _encode_AnswerCallArgument } from "../CSTA-answer-call/AnswerCallArgument.ta.mjs";

import { AnswerCallResult, _decode_AnswerCallResult, _encode_AnswerCallResult } from "../CSTA-answer-call/AnswerCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary answerCall
 * @description
 *
 * Answer Call (ECMA-269 §17.1.3 / ECMA-285 §15.1.3). Invoked by the computing
 * function on the switching function. Atomic vs multi-step acknowledgement is
 * via capability exchange. Errors are `universalFailure` (§12.2.14).
 * `callToBeAnswered` must be Alerting, Initiated, or Queued and becomes
 * Connected. Other connections are unaffected. To clear an active call first,
 * Clear Connection then Answer (FR 1). ROSE local CODE 2.
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * answerCall OPERATION ::= {     ARGUMENT         AnswerCallArgument
 *     RESULT             AnswerCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 2 }
 * ```
 * 
 * @constant
 * @type {OPERATION<AnswerCallArgument, AnswerCallResult>}
 * @implements {OPERATION<AnswerCallArgument, AnswerCallResult>}
 */
export
const answerCall: OPERATION<AnswerCallArgument, AnswerCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AnswerCallArgument,
        "&ResultType": _decode_AnswerCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AnswerCallArgument,
        "&ResultType": _encode_AnswerCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 2 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
