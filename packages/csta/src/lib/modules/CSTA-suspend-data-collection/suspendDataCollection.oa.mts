/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SuspendDataCollectionArgument, _decode_SuspendDataCollectionArgument, _encode_SuspendDataCollectionArgument } from "../CSTA-suspend-data-collection/SuspendDataCollectionArgument.ta.mjs";

import { SuspendDataCollectionResult, _decode_SuspendDataCollectionResult, _encode_SuspendDataCollectionResult } from "../CSTA-suspend-data-collection/SuspendDataCollectionResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary suspendDataCollection
 * @description
 *
 * Suspends a specified data collection without destroying it (ECMA-269
 * §25.1.7). Service table direction is switching function → computing function.
 *
 * Switching function → computing function.
 *
 * ROSE local:349. Errors: `universalFailure` (ECMA-285 §23.1.7).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * suspendDataCollection OPERATION ::= {    ARGUMENT         SuspendDataCollectionArgument
 *     RESULT             SuspendDataCollectionResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 349 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SuspendDataCollectionArgument, SuspendDataCollectionResult>}
 * @implements {OPERATION<SuspendDataCollectionArgument, SuspendDataCollectionResult>}
 */
export
const suspendDataCollection: OPERATION<SuspendDataCollectionArgument, SuspendDataCollectionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SuspendDataCollectionArgument,
        "&ResultType": _decode_SuspendDataCollectionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SuspendDataCollectionArgument,
        "&ResultType": _encode_SuspendDataCollectionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 349 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
