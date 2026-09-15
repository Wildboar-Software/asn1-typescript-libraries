/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { StartArgument, _decode_StartArgument, _encode_StartArgument } from "../CSTA-start/StartArgument.ta.mjs";

import { StartResult, _decode_StartResult, _encode_StartResult } from "../CSTA-start/StartResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary start
 * @description
 *
 * Voice Start: starts interaction between a call and an interactive voice
 * resource. For Prompt with Prompt Queue, equivalent to Queue then Start on the
 * queue (ECMA-269 §26.1.14).
 *
 * Computing function → switching function.
 *
 * ROSE local:516. Errors: `universalFailure` (ECMA-285 §24.1.14).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * start OPERATION ::= {    ARGUMENT        StartArgument
 *     RESULT            StartResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 516}
 * ```
 * 
 * @constant
 * @type {OPERATION<StartArgument, StartResult>}
 * @implements {OPERATION<StartArgument, StartResult>}
 */
export
const start: OPERATION<StartArgument, StartResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StartArgument,
        "&ResultType": _decode_StartResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_StartArgument,
        "&ResultType": _encode_StartResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 516 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
