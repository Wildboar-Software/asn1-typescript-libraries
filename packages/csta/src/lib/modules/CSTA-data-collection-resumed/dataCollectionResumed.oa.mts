/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { DataCollectionResumedArgument, _decode_DataCollectionResumedArgument, _encode_DataCollectionResumedArgument } from "../CSTA-data-collection-resumed/DataCollectionResumedArgument.ta.mjs";

import { DataCollectionResumedResult, _decode_DataCollectionResumedResult, _encode_DataCollectionResumedResult } from "../CSTA-data-collection-resumed/DataCollectionResumedResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary dataCollectionResumed
 * @description
 *
 * Informs the computing function that a previously suspended data collection
 * has been resumed (ECMA-269 §25.1.2).
 *
 * Switching function → computing function.
 *
 * ROSE local:344. Errors: `universalFailure` (ECMA-285 §23.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataCollectionResumed OPERATION ::= {    ARGUMENT         DataCollectionResumedArgument
 *     RESULT             DataCollectionResumedResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 344 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DataCollectionResumedArgument, DataCollectionResumedResult>}
 * @implements {OPERATION<DataCollectionResumedArgument, DataCollectionResumedResult>}
 */
export
const dataCollectionResumed: OPERATION<DataCollectionResumedArgument, DataCollectionResumedResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DataCollectionResumedArgument,
        "&ResultType": _decode_DataCollectionResumedResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DataCollectionResumedArgument,
        "&ResultType": _encode_DataCollectionResumedResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 344 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
