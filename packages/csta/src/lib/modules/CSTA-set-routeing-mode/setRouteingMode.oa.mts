/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetRouteingModeArgument, _decode_SetRouteingModeArgument, _encode_SetRouteingModeArgument } from "../CSTA-set-routeing-mode/SetRouteingModeArgument.ta.mjs";

import { SetRouteingModeResult, _decode_SetRouteingModeResult, _encode_SetRouteingModeResult } from "../CSTA-set-routeing-mode/SetRouteingModeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setRouteingMode
 * @description
 *
 * Set Routeing Mode (ECMA-269 §22.1.22 / ECMA-285 §20.1.22). Direction: CF→SF.
 * ROSE local CODE 318. Errors: `universalFailure`. Typically generates a
 * Routeing Mode event. TRUE enables routeing
 * requests from this device.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setRouteingMode OPERATION ::= {    ARGUMENT         SetRouteingModeArgument
 *     RESULT             SetRouteingModeResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 318 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetRouteingModeArgument, SetRouteingModeResult>}
 * @implements {OPERATION<SetRouteingModeArgument, SetRouteingModeResult>}
 */
export
const setRouteingMode: OPERATION<SetRouteingModeArgument, SetRouteingModeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetRouteingModeArgument,
        "&ResultType": _decode_SetRouteingModeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetRouteingModeArgument,
        "&ResultType": _encode_SetRouteingModeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 318 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
