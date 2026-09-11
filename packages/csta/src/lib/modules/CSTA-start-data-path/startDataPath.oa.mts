/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { StartDataPathArgument, _decode_StartDataPathArgument, _encode_StartDataPathArgument } from "../CSTA-start-data-path/StartDataPathArgument.ta.mjs";

import { StartDataPathResult, _decode_StartDataPathResult, _encode_StartDataPathResult } from "../CSTA-start-data-path/StartDataPathResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary startDataPath
 * @description
 *
 * Starts a data path on the specified device or connection. Bidirectional
 * (ECMA-269 §24.2.8).
 *
 * Bidirectional: computing function or switching function may invoke.
 *
 * ROSE local:110. Errors: `universalFailure` (ECMA-285 §22.2.8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * startDataPath    OPERATION ::= {    ARGUMENT        StartDataPathArgument
 *     RESULT            StartDataPathResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 110 }
 * ```
 * 
 * @constant
 * @type {OPERATION<StartDataPathArgument, StartDataPathResult>}
 * @implements {OPERATION<StartDataPathArgument, StartDataPathResult>}
 */
export
const startDataPath: OPERATION<StartDataPathArgument, StartDataPathResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StartDataPathArgument,
        "&ResultType": _decode_StartDataPathResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_StartDataPathArgument,
        "&ResultType": _encode_StartDataPathResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 110 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
