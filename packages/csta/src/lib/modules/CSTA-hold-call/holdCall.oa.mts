/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { HoldCallArgument, _decode_HoldCallArgument, _encode_HoldCallArgument } from "../CSTA-hold-call/HoldCallArgument.ta.mjs";

import { HoldCallResult, _decode_HoldCallResult, _encode_HoldCallResult } from "../CSTA-hold-call/HoldCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary holdCall
 * @description
 *
 * Hold Call (ECMA-269 §17.1.15 / ECMA-285 §15.1.15). Invoked by
 * the computing function on the switching function.
 * `callToBeHeld` must be Connected and becomes Hold. Other
 * connections in the call are unaffected. The switching function
 * may time out a held call and recall (FR 1). ROSE local CODE 9.
 * Errors are `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * holdCall OPERATION ::= {     ARGUMENT         HoldCallArgument
 *     RESULT             HoldCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 9 }
 * ```
 * 
 * @constant
 * @type {OPERATION<HoldCallArgument, HoldCallResult>}
 * @implements {OPERATION<HoldCallArgument, HoldCallResult>}
 */
export
const holdCall: OPERATION<HoldCallArgument, HoldCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_HoldCallArgument,
        "&ResultType": _decode_HoldCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_HoldCallArgument,
        "&ResultType": _encode_HoldCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 9 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
