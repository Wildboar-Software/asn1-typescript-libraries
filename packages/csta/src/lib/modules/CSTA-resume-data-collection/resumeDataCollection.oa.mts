/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ResumeDataCollectionArgument, _decode_ResumeDataCollectionArgument, _encode_ResumeDataCollectionArgument } from "../CSTA-resume-data-collection/ResumeDataCollectionArgument.ta.mjs";

import { ResumeDataCollectionResult, _decode_ResumeDataCollectionResult, _encode_ResumeDataCollectionResult } from "../CSTA-resume-data-collection/ResumeDataCollectionResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary resumeDataCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resumeDataCollection OPERATION ::= {    ARGUMENT         ResumeDataCollectionArgument
 *     RESULT             ResumeDataCollectionResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 346 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ResumeDataCollectionArgument, ResumeDataCollectionResult>}
 * @implements {OPERATION<ResumeDataCollectionArgument, ResumeDataCollectionResult>}
 */
export
const resumeDataCollection: OPERATION<ResumeDataCollectionArgument, ResumeDataCollectionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ResumeDataCollectionArgument,
        "&ResultType": _decode_ResumeDataCollectionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ResumeDataCollectionArgument,
        "&ResultType": _encode_ResumeDataCollectionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 346 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
