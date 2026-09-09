/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetLampModeArgument, _decode_SetLampModeArgument, _encode_SetLampModeArgument } from "../CSTA-set-lamp-mode/SetLampModeArgument.ta.mjs";

import { SetLampModeResult, _decode_SetLampModeResult, _encode_SetLampModeResult } from "../CSTA-set-lamp-mode/SetLampModeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setLampMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setLampMode OPERATION ::= {    ARGUMENT         SetLampModeArgument
 *     RESULT            SetLampModeResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 276 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetLampModeArgument, SetLampModeResult>}
 * @implements {OPERATION<SetLampModeArgument, SetLampModeResult>}
 */
export
const setLampMode: OPERATION<SetLampModeArgument, SetLampModeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetLampModeArgument,
        "&ResultType": _decode_SetLampModeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetLampModeArgument,
        "&ResultType": _encode_SetLampModeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 276 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
