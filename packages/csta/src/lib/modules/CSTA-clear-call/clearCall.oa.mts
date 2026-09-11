/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ClearCallArgument, _decode_ClearCallArgument, _encode_ClearCallArgument } from "../CSTA-clear-call/ClearCallArgument.ta.mjs";

import { ClearCallResult, _decode_ClearCallResult, _encode_ClearCallResult } from "../CSTA-clear-call/ClearCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary clearCall
 * @description
 *
 * Clear Call (ECMA-269 §17.1.7 / ECMA-285 §15.1.7). Invoked by
 * the computing function on the switching function. Affects only
 * the named call (FR 1). The ConnectionID may be Call-ID-only
 * (FR 2; exception to §12.3.9). Some connections may Fail before
 * Null. ROSE local CODE 4. Errors are `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * clearCall OPERATION ::= {     ARGUMENT         ClearCallArgument
 *     RESULT             ClearCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 4 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ClearCallArgument, ClearCallResult>}
 * @implements {OPERATION<ClearCallArgument, ClearCallResult>}
 */
export
const clearCall: OPERATION<ClearCallArgument, ClearCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ClearCallArgument,
        "&ResultType": _decode_ClearCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ClearCallArgument,
        "&ResultType": _encode_ClearCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 4 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
