/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { DataPathResumedArgument, _decode_DataPathResumedArgument, _encode_DataPathResumedArgument } from "../CSTA-data-path-resumed/DataPathResumedArgument.ta.mjs";

import { DataPathResumedResult, _decode_DataPathResumedResult, _encode_DataPathResumedResult } from "../CSTA-data-path-resumed/DataPathResumedResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary dataPathResumed
 * @description
 *
 * Informs the computing function that the switching function has resumed a
 * previously suspended data path (ECMA-269 §24.2.1).
 *
 * Switching function → computing function.
 *
 * ROSE local:118. Errors: `universalFailure` (ECMA-285 §22.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataPathResumed    OPERATION ::= {    ARGUMENT        DataPathResumedArgument
 *     RESULT            DataPathResumedResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 118 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DataPathResumedArgument, DataPathResumedResult>}
 * @implements {OPERATION<DataPathResumedArgument, DataPathResumedResult>}
 */
export
const dataPathResumed: OPERATION<DataPathResumedArgument, DataPathResumedResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DataPathResumedArgument,
        "&ResultType": _decode_DataPathResumedResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DataPathResumedArgument,
        "&ResultType": _encode_DataPathResumedResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 118 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
