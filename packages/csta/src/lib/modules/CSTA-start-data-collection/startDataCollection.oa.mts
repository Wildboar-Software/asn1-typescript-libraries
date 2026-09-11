/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { StartDataCollectionArgument, _decode_StartDataCollectionArgument, _encode_StartDataCollectionArgument } from "../CSTA-start-data-collection/StartDataCollectionArgument.ta.mjs";

import { StartDataCollectionResult, _decode_StartDataCollectionResult, _encode_StartDataCollectionResult } from "../CSTA-start-data-collection/StartDataCollectionResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary startDataCollection
 * @description
 *
 * Starts collection of DTMF/rotary digits or telephony tones on an existing
 * connection, or on the next connection at a device. Continues until Stop or
 * the connection clears (ECMA-269 §25.1.5).
 *
 * Computing function → switching function.
 *
 * ROSE local:347. Errors: `universalFailure` (ECMA-285 §23.1.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * startDataCollection OPERATION ::= {    ARGUMENT         StartDataCollectionArgument
 *     RESULT             StartDataCollectionResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 347 }
 * ```
 * 
 * @constant
 * @type {OPERATION<StartDataCollectionArgument, StartDataCollectionResult>}
 * @implements {OPERATION<StartDataCollectionArgument, StartDataCollectionResult>}
 */
export
const startDataCollection: OPERATION<StartDataCollectionArgument, StartDataCollectionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StartDataCollectionArgument,
        "&ResultType": _decode_StartDataCollectionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_StartDataCollectionArgument,
        "&ResultType": _encode_StartDataCollectionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 347 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
