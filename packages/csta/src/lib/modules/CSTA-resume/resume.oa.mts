/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ResumeArgument, _decode_ResumeArgument, _encode_ResumeArgument } from "../CSTA-resume/ResumeArgument.ta.mjs";

import { ResumeResult, _decode_ResumeResult, _encode_ResumeResult } from "../CSTA-resume/ResumeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary resume
 * @description
 *
 * Voice Resume: restarts playing or recording of a previously suspended message
 * (ECMA-269 §26.1.11).
 *
 * Computing function → switching function.
 *
 * ROSE local:505. Errors: `universalFailure` (ECMA-285 §24.1.11).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resume    OPERATION ::= {    ARGUMENT        ResumeArgument
 *     RESULT            ResumeResult
 *     ERRORS            {universalFailure }
 *     CODE             local: 505 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ResumeArgument, ResumeResult>}
 * @implements {OPERATION<ResumeArgument, ResumeResult>}
 */
export
const resume: OPERATION<ResumeArgument, ResumeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ResumeArgument,
        "&ResultType": _decode_ResumeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ResumeArgument,
        "&ResultType": _encode_ResumeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 505 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
