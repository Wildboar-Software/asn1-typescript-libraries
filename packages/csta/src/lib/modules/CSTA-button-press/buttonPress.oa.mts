/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ButtonPressArgument, _decode_ButtonPressArgument, _encode_ButtonPressArgument } from "../CSTA-button-press/ButtonPressArgument.ta.mjs";

import { ButtonPressResult, _decode_ButtonPressResult, _encode_ButtonPressResult } from "../CSTA-button-press/ButtonPressResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary buttonPress
 * @description
 *
 * Button Press (ECMA-269 §21.1.1 / ECMA-285 §19.1.1). Direction: CF→SF. ROSE
 * local CODE 260. Errors: `universalFailure`. Sequences appear as manual
 * presses (e.g. speed-dial).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * buttonPress OPERATION ::= {    ARGUMENT         ButtonPressArgument
 *     RESULT            ButtonPressResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 260 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ButtonPressArgument, ButtonPressResult>}
 * @implements {OPERATION<ButtonPressArgument, ButtonPressResult>}
 */
export
const buttonPress: OPERATION<ButtonPressArgument, ButtonPressResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ButtonPressArgument,
        "&ResultType": _decode_ButtonPressResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ButtonPressArgument,
        "&ResultType": _encode_ButtonPressResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 260 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
