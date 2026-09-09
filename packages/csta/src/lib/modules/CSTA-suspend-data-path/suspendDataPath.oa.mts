/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SuspendDataPathArgument, _decode_SuspendDataPathArgument, _encode_SuspendDataPathArgument } from "../CSTA-suspend-data-path/SuspendDataPathArgument.ta.mjs";

import { SuspendDataPathResult, _decode_SuspendDataPathResult, _encode_SuspendDataPathResult } from "../CSTA-suspend-data-path/SuspendDataPathResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary suspendDataPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * suspendDataPath    OPERATION ::= {    ARGUMENT        SuspendDataPathArgument
 *     RESULT            SuspendDataPathResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 115 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SuspendDataPathArgument, SuspendDataPathResult>}
 * @implements {OPERATION<SuspendDataPathArgument, SuspendDataPathResult>}
 */
export
const suspendDataPath: OPERATION<SuspendDataPathArgument, SuspendDataPathResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SuspendDataPathArgument,
        "&ResultType": _decode_SuspendDataPathResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SuspendDataPathArgument,
        "&ResultType": _encode_SuspendDataPathResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 115 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
