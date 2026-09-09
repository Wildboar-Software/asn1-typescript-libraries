/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { FastDataArgument, _decode_FastDataArgument, _encode_FastDataArgument } from "../CSTA-fast-data/FastDataArgument.ta.mjs";

import { FastDataResult, _decode_FastDataResult, _encode_FastDataResult } from "../CSTA-fast-data/FastDataResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary fastData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fastData     OPERATION ::= {    ARGUMENT        FastDataArgument
 *     RESULT            FastDataResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 119 }
 * ```
 * 
 * @constant
 * @type {OPERATION<FastDataArgument, FastDataResult>}
 * @implements {OPERATION<FastDataArgument, FastDataResult>}
 */
export
const fastData: OPERATION<FastDataArgument, FastDataResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_FastDataArgument,
        "&ResultType": _decode_FastDataResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_FastDataArgument,
        "&ResultType": _encode_FastDataResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 119 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
