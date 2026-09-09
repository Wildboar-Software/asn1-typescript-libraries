/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ClearArgument, _decode_ClearArgument, _encode_ClearArgument } from "../CSTA-clear/ClearArgument.ta.mjs";

import { ClearResult, _decode_ClearResult, _encode_ClearResult } from "../CSTA-clear/ClearResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary clear
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * clear OPERATION ::= {    ARGUMENT        ClearArgument
 *     RESULT            ClearResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 513 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ClearArgument, ClearResult>}
 * @implements {OPERATION<ClearArgument, ClearResult>}
 */
export
const clear: OPERATION<ClearArgument, ClearResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ClearArgument,
        "&ResultType": _decode_ClearResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ClearArgument,
        "&ResultType": _encode_ClearResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 513 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
