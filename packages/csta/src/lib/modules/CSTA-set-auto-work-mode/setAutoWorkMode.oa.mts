/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetAutoWorkModeArgument, _decode_SetAutoWorkModeArgument, _encode_SetAutoWorkModeArgument } from "../CSTA-set-auto-work-mode/SetAutoWorkModeArgument.ta.mjs";

import { SetAutoWorkModeResult, _decode_SetAutoWorkModeResult, _encode_SetAutoWorkModeResult } from "../CSTA-set-auto-work-mode/SetAutoWorkModeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setAutoWorkMode
 * @description
 *
 * Set Auto Work Mode (ECMA-269 §22.1.17 / ECMA-285 §20.1.17). Direction: CF→SF.
 * ROSE local CODE 314. Errors: `universalFailure`. Persistent until changed
 * manually or by this service. If already at the requested value: positive ack
 * and no event (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setAutoWorkMode OPERATION ::= {    ARGUMENT         SetAutoWorkModeArgument
 *     RESULT             SetAutoWorkModeResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 314 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetAutoWorkModeArgument, SetAutoWorkModeResult>}
 * @implements {OPERATION<SetAutoWorkModeArgument, SetAutoWorkModeResult>}
 */
export
const setAutoWorkMode: OPERATION<SetAutoWorkModeArgument, SetAutoWorkModeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetAutoWorkModeArgument,
        "&ResultType": _decode_SetAutoWorkModeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetAutoWorkModeArgument,
        "&ResultType": _encode_SetAutoWorkModeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 314 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
