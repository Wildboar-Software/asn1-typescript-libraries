/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetDisplayArgument, _decode_SetDisplayArgument, _encode_SetDisplayArgument } from "../CSTA-set-display/SetDisplayArgument.ta.mjs";

import { SetDisplayResult, _decode_SetDisplayResult, _encode_SetDisplayResult } from "../CSTA-set-display/SetDisplayResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setDisplay
 * @description
 *
 * Set Display (ECMA-269 §21.1.15 / ECMA-285 §19.1.15). Direction: CF→SF. ROSE
 * local CODE 274. Errors: `universalFailure`. Overflow is truncated. Null
 * contentsOfDisplay clears from offset to end. If already at the requested
 * value: positive ack and no event (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setDisplay OPERATION ::= {    ARGUMENT         SetDisplayArgument
 *     RESULT            SetDisplayResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 274 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetDisplayArgument, SetDisplayResult>}
 * @implements {OPERATION<SetDisplayArgument, SetDisplayResult>}
 */
export
const setDisplay: OPERATION<SetDisplayArgument, SetDisplayResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetDisplayArgument,
        "&ResultType": _decode_SetDisplayResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetDisplayArgument,
        "&ResultType": _encode_SetDisplayResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 274 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
