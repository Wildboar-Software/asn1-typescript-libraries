/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { StopArgument, _decode_StopArgument, _encode_StopArgument } from "../CSTA-stop/StopArgument.ta.mjs";

import { StopResult, _decode_StopResult, _encode_StopResult } from "../CSTA-stop/StopResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary stop
 * @description
 *
 * Voice Stop: halts the operation of a voice resource (ECMA-269 §26.1.15).
 *
 * Computing function → switching function.
 *
 * ROSE local:508. Errors: `universalFailure` (ECMA-285 §24.1.15).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * stop OPERATION ::= {    ARGUMENT        StopArgument
 *     RESULT            StopResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 508 }
 * ```
 * 
 * @constant
 * @type {OPERATION<StopArgument, StopResult>}
 * @implements {OPERATION<StopArgument, StopResult>}
 */
export
const stop: OPERATION<StopArgument, StopResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StopArgument,
        "&ResultType": _decode_StopResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_StopArgument,
        "&ResultType": _encode_StopResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 508 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
