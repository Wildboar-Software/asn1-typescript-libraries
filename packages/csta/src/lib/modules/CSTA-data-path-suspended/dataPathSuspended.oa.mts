/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { DataPathSuspendedArgument, _decode_DataPathSuspendedArgument, _encode_DataPathSuspendedArgument } from "../CSTA-data-path-suspended/DataPathSuspendedArgument.ta.mjs";

import { DataPathSuspendedResult, _decode_DataPathSuspendedResult, _encode_DataPathSuspendedResult } from "../CSTA-data-path-suspended/DataPathSuspendedResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary dataPathSuspended
 * @description
 *
 * Informs the computing function that the switching function has suspended a
 * data path without destroying it (ECMA-269 §24.2.2).
 *
 * Switching function → computing function.
 *
 * ROSE local:116. Errors: `universalFailure` (ECMA-285 §22.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataPathSuspended OPERATION ::= {    ARGUMENT        DataPathSuspendedArgument
 *     RESULT            DataPathSuspendedResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 116 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DataPathSuspendedArgument, DataPathSuspendedResult>}
 * @implements {OPERATION<DataPathSuspendedArgument, DataPathSuspendedResult>}
 */
export
const dataPathSuspended: OPERATION<DataPathSuspendedArgument, DataPathSuspendedResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DataPathSuspendedArgument,
        "&ResultType": _decode_DataPathSuspendedResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DataPathSuspendedArgument,
        "&ResultType": _encode_DataPathSuspendedResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 116 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
