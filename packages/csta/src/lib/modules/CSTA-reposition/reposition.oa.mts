/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RepositionArgument, _decode_RepositionArgument, _encode_RepositionArgument } from "../CSTA-reposition/RepositionArgument.ta.mjs";

import { RepositionResult, _decode_RepositionResult, _encode_RepositionResult } from "../CSTA-reposition/RepositionResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary reposition
 * @description
 *
 * Moves the current position pointer forward or backward a specified amount in
 * a message (ECMA-269 §26.1.10).
 *
 * Computing function → switching function.
 *
 * ROSE local:504. Errors: `universalFailure` (ECMA-285 §24.1.10).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reposition OPERATION ::= {    ARGUMENT        RepositionArgument
 *     RESULT            RepositionResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 504 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RepositionArgument, RepositionResult>}
 * @implements {OPERATION<RepositionArgument, RepositionResult>}
 */
export
const reposition: OPERATION<RepositionArgument, RepositionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RepositionArgument,
        "&ResultType": _decode_RepositionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_RepositionArgument,
        "&ResultType": _encode_RepositionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 504 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
