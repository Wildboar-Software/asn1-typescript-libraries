/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { StopDataCollectionArgument, _decode_StopDataCollectionArgument, _encode_StopDataCollectionArgument } from "../CSTA-stop-data-collection/StopDataCollectionArgument.ta.mjs";

import { StopDataCollectionResult, _decode_StopDataCollectionResult, _encode_StopDataCollectionResult } from "../CSTA-stop-data-collection/StopDataCollectionResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary stopDataCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * stopDataCollection OPERATION ::= {    ARGUMENT         StopDataCollectionArgument
 *     RESULT             StopDataCollectionResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 348 }
 * ```
 * 
 * @constant
 * @type {OPERATION<StopDataCollectionArgument, StopDataCollectionResult>}
 * @implements {OPERATION<StopDataCollectionArgument, StopDataCollectionResult>}
 */
export
const stopDataCollection: OPERATION<StopDataCollectionArgument, StopDataCollectionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StopDataCollectionArgument,
        "&ResultType": _decode_StopDataCollectionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_StopDataCollectionArgument,
        "&ResultType": _encode_StopDataCollectionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 348 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
