/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { IntrudeCallArgument, _decode_IntrudeCallArgument, _encode_IntrudeCallArgument } from "../CSTA-intrude-call/IntrudeCallArgument.ta.mjs";

import { IntrudeCallResult, _decode_IntrudeCallResult, _encode_IntrudeCallResult } from "../CSTA-intrude-call/IntrudeCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary intrudeCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * intrudeCall OPERATION ::= {     ARGUMENT         IntrudeCallArgument
 *     RESULT             IntrudeCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 222 }
 * ```
 * 
 * @constant
 * @type {OPERATION<IntrudeCallArgument, IntrudeCallResult>}
 * @implements {OPERATION<IntrudeCallArgument, IntrudeCallResult>}
 */
export
const intrudeCall: OPERATION<IntrudeCallArgument, IntrudeCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IntrudeCallArgument,
        "&ResultType": _decode_IntrudeCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_IntrudeCallArgument,
        "&ResultType": _encode_IntrudeCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 222 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
