/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ClearCallArgument, _decode_ClearCallArgument, _encode_ClearCallArgument } from "../CSTA-clear-call/ClearCallArgument.ta.mjs";

import { ClearCallResult, _decode_ClearCallResult, _encode_ClearCallResult } from "../CSTA-clear-call/ClearCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary clearCall
 * @description
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
