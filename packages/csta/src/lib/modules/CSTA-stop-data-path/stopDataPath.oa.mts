/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { StopDataPathArgument, _decode_StopDataPathArgument, _encode_StopDataPathArgument } from "../CSTA-stop-data-path/StopDataPathArgument.ta.mjs";

import { StopDataPathResult, _decode_StopDataPathResult, _encode_StopDataPathResult } from "../CSTA-stop-data-path/StopDataPathResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary stopDataPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * stopDataPath    OPERATION ::= {    ARGUMENT        StopDataPathArgument
 *     RESULT            StopDataPathResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 111
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<StopDataPathArgument, StopDataPathResult>}
 * @implements {OPERATION<StopDataPathArgument, StopDataPathResult>}
 */
export
const stopDataPath: OPERATION<StopDataPathArgument, StopDataPathResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StopDataPathArgument,
        "&ResultType": _decode_StopDataPathResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_StopDataPathArgument,
        "&ResultType": _encode_StopDataPathResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 111 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
