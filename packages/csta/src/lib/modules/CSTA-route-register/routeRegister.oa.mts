/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RouteRegisterArgument, _decode_RouteRegisterArgument, _encode_RouteRegisterArgument } from "../CSTA-route-register/RouteRegisterArgument.ta.mjs";

import { RouteRegisterResult, _decode_RouteRegisterResult, _encode_RouteRegisterResult } from "../CSTA-route-register/RouteRegisterResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary routeRegister
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * routeRegister OPERATION ::= {    ARGUMENT        RouteRegisterArgument
 *     RESULT            RouteRegisterResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 248 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RouteRegisterArgument, RouteRegisterResult>}
 * @implements {OPERATION<RouteRegisterArgument, RouteRegisterResult>}
 */
export
const routeRegister: OPERATION<RouteRegisterArgument, RouteRegisterResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RouteRegisterArgument,
        "&ResultType": _decode_RouteRegisterResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_RouteRegisterArgument,
        "&ResultType": _encode_RouteRegisterResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 248 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
