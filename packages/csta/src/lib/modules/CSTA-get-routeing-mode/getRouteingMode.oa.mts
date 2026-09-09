/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetRouteingModeArgument, _decode_GetRouteingModeArgument, _encode_GetRouteingModeArgument } from "../CSTA-get-routeing-mode/GetRouteingModeArgument.ta.mjs";

import { GetRouteingModeResult, _decode_GetRouteingModeResult, _encode_GetRouteingModeResult } from "../CSTA-get-routeing-mode/GetRouteingModeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getRouteingMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getRouteingMode OPERATION ::= {    ARGUMENT         GetRouteingModeArgument
 *     RESULT             GetRouteingModeResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 311 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetRouteingModeArgument, GetRouteingModeResult>}
 * @implements {OPERATION<GetRouteingModeArgument, GetRouteingModeResult>}
 */
export
const getRouteingMode: OPERATION<GetRouteingModeArgument, GetRouteingModeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetRouteingModeArgument,
        "&ResultType": _decode_GetRouteingModeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetRouteingModeArgument,
        "&ResultType": _encode_GetRouteingModeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 311 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
