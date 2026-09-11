/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RouteRegisterCancelArgument, _decode_RouteRegisterCancelArgument, _encode_RouteRegisterCancelArgument } from "../CSTA-route-register-cancel/RouteRegisterCancelArgument.ta.mjs";

import { RouteRegisterCancelResult, _decode_RouteRegisterCancelResult, _encode_RouteRegisterCancelResult } from "../CSTA-route-register-cancel/RouteRegisterCancelResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary routeRegisterCancel
 * @description
 *
 * Route Register Cancel (ECMA-269 §20.1.3 / ECMA-285 §18.1.3). Direction:
 * CF→SF. ROSE local CODE 250. Errors: `universalFailure`. Does not disable
 * Route Mode; use Set Routeing Mode to suspend
 * routeing without cancelling registration (§6.7.8.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * routeRegisterCancel OPERATION ::= {    ARGUMENT        RouteRegisterCancelArgument
 *     RESULT            RouteRegisterCancelResult
 *     ERRORS            {universalFailure }
 *     CODE            local:     250 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RouteRegisterCancelArgument, RouteRegisterCancelResult>}
 * @implements {OPERATION<RouteRegisterCancelArgument, RouteRegisterCancelResult>}
 */
export
const routeRegisterCancel: OPERATION<RouteRegisterCancelArgument, RouteRegisterCancelResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RouteRegisterCancelArgument,
        "&ResultType": _decode_RouteRegisterCancelResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_RouteRegisterCancelArgument,
        "&ResultType": _encode_RouteRegisterCancelResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 250 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
