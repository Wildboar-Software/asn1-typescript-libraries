/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { DataCollectionSuspendedArgument, _decode_DataCollectionSuspendedArgument, _encode_DataCollectionSuspendedArgument } from "../CSTA-data-collection-suspended/DataCollectionSuspendedArgument.ta.mjs";

import { DataCollectionSuspendedResult, _decode_DataCollectionSuspendedResult, _encode_DataCollectionSuspendedResult } from "../CSTA-data-collection-suspended/DataCollectionSuspendedResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary dataCollectionSuspended
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataCollectionSuspended OPERATION ::= {    ARGUMENT         DataCollectionSuspendedArgument
 *     RESULT             DataCollectionSuspendedResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 345 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DataCollectionSuspendedArgument, DataCollectionSuspendedResult>}
 * @implements {OPERATION<DataCollectionSuspendedArgument, DataCollectionSuspendedResult>}
 */
export
const dataCollectionSuspended: OPERATION<DataCollectionSuspendedArgument, DataCollectionSuspendedResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DataCollectionSuspendedArgument,
        "&ResultType": _decode_DataCollectionSuspendedResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DataCollectionSuspendedArgument,
        "&ResultType": _encode_DataCollectionSuspendedResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 345 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
