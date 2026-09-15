/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ResumeDataPathArgument, _decode_ResumeDataPathArgument, _encode_ResumeDataPathArgument } from "../CSTA-resume-data-path/ResumeDataPathArgument.ta.mjs";

import { ResumeDataPathResult, _decode_ResumeDataPathResult, _encode_ResumeDataPathResult } from "../CSTA-resume-data-path/ResumeDataPathResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary resumeDataPath
 * @description
 *
 * Requests the switching function to resume a currently suspended data path.
 * Some implementations also send Data Path Resumed (ECMA-269 §24.2.4).
 *
 * Computing function → switching function.
 *
 * ROSE local:117. Errors: `universalFailure` (ECMA-285 §22.2.4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resumeDataPath OPERATION ::= {    ARGUMENT        ResumeDataPathArgument
 *     RESULT            ResumeDataPathResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 117 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ResumeDataPathArgument, ResumeDataPathResult>}
 * @implements {OPERATION<ResumeDataPathArgument, ResumeDataPathResult>}
 */
export
const resumeDataPath: OPERATION<ResumeDataPathArgument, ResumeDataPathResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ResumeDataPathArgument,
        "&ResultType": _decode_ResumeDataPathResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ResumeDataPathArgument,
        "&ResultType": _encode_ResumeDataPathResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 117 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
