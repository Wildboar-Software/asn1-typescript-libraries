/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { DataCollectedArgument, _decode_DataCollectedArgument, _encode_DataCollectedArgument } from "../CSTA-data-collected/DataCollectedArgument.ta.mjs";

import { DataCollectedResult, _decode_DataCollectedResult, _encode_DataCollectedResult } from "../CSTA-data-collected/DataCollectedResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary dataCollected
 * @description
 *
 * Sends data received over a connection to the computing function as part of an
 * active data collection (ECMA-269 §25.1.1).
 *
 * Switching function → computing function.
 *
 * ROSE local:343. Errors: `universalFailure` (ECMA-285 §23.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataCollected OPERATION ::= {    ARGUMENT         DataCollectedArgument
 *     RESULT             DataCollectedResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 343 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DataCollectedArgument, DataCollectedResult>}
 * @implements {OPERATION<DataCollectedArgument, DataCollectedResult>}
 */
export
const dataCollected: OPERATION<DataCollectedArgument, DataCollectedResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DataCollectedArgument,
        "&ResultType": _decode_DataCollectedResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DataCollectedArgument,
        "&ResultType": _encode_DataCollectedResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 343 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
