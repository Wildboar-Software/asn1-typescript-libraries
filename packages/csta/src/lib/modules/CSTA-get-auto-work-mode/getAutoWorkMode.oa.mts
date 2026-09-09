/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetAutoWorkModeArgument, _decode_GetAutoWorkModeArgument, _encode_GetAutoWorkModeArgument } from "../CSTA-get-auto-work-mode/GetAutoWorkModeArgument.ta.mjs";

import { GetAutoWorkModeResult, _decode_GetAutoWorkModeResult, _encode_GetAutoWorkModeResult } from "../CSTA-get-auto-work-mode/GetAutoWorkModeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getAutoWorkMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getAutoWorkMode OPERATION ::= {    ARGUMENT         GetAutoWorkModeArgument
 *     RESULT             GetAutoWorkModeResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 306 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetAutoWorkModeArgument, GetAutoWorkModeResult>}
 * @implements {OPERATION<GetAutoWorkModeArgument, GetAutoWorkModeResult>}
 */
export
const getAutoWorkMode: OPERATION<GetAutoWorkModeArgument, GetAutoWorkModeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetAutoWorkModeArgument,
        "&ResultType": _decode_GetAutoWorkModeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetAutoWorkModeArgument,
        "&ResultType": _encode_GetAutoWorkModeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 306 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
