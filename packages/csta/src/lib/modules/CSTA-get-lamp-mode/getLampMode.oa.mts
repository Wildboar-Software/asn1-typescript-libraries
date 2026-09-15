/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetLampModeArgument, _decode_GetLampModeArgument, _encode_GetLampModeArgument } from "../CSTA-get-lamp-mode/GetLampModeArgument.ta.mjs";

import { GetLampModeResult, _decode_GetLampModeResult, _encode_GetLampModeResult } from "../CSTA-get-lamp-mode/GetLampModeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getLampMode
 * @description
 *
 * Get Lamp Mode (ECMA-269 §21.1.7 / ECMA-285 §19.1.7). Direction: CF→SF. ROSE
 * local CODE 266. Errors: `universalFailure`. Atomic acknowledgement.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getLampMode OPERATION ::= {    ARGUMENT         GetLampModeArgument
 *     RESULT            GetLampModeResult
 *     ERRORS            {universalFailure }
 *     CODE            local:     266 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetLampModeArgument, GetLampModeResult>}
 * @implements {OPERATION<GetLampModeArgument, GetLampModeResult>}
 */
export
const getLampMode: OPERATION<GetLampModeArgument, GetLampModeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetLampModeArgument,
        "&ResultType": _decode_GetLampModeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetLampModeArgument,
        "&ResultType": _encode_GetLampModeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 266 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
