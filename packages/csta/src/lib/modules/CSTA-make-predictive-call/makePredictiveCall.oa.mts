/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { MakePredictiveCallArgument, _decode_MakePredictiveCallArgument, _encode_MakePredictiveCallArgument } from "../CSTA-make-predictive-call/MakePredictiveCallArgument.ta.mjs";

import { MakePredictiveCallResult, _decode_MakePredictiveCallResult, _encode_MakePredictiveCallResult } from "../CSTA-make-predictive-call/MakePredictiveCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary makePredictiveCall
 * @description
 *
 * Make Predictive Call (ECMA-269 §17.1.20 / ECMA-285
 * §15.1.20). Invoked by the computing function on the
 * switching function. Creates the called-device connection
 * first; later actions follow `signallingDetection` /
 * `destinationDetection`. Multi-stage dialling is not
 * supported (FR 9). ROSE local CODE 11. Errors are
 * `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * makePredictiveCall OPERATION ::= {     ARGUMENT         MakePredictiveCallArgument
 *     RESULT             MakePredictiveCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 11 }
 * ```
 * 
 * @constant
 * @type {OPERATION<MakePredictiveCallArgument, MakePredictiveCallResult>}
 * @implements {OPERATION<MakePredictiveCallArgument, MakePredictiveCallResult>}
 */
export
const makePredictiveCall: OPERATION<MakePredictiveCallArgument, MakePredictiveCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MakePredictiveCallArgument,
        "&ResultType": _decode_MakePredictiveCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_MakePredictiveCallArgument,
        "&ResultType": _encode_MakePredictiveCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 11 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
