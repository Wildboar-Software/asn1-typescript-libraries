/* eslint-disable */
import { FALSE } from "@wildboar/asn1";

import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RouteRegisterAbortArgument, _decode_RouteRegisterAbortArgument, _encode_RouteRegisterAbortArgument } from "../CSTA-route-register-abort/RouteRegisterAbortArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary routeRegisterAbort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * routeRegisterAbort OPERATION ::= {    ARGUMENT        RouteRegisterAbortArgument
 *     ERRORS            {universalFailure }
 *     ALWAYS RESPONDS        FALSE
 *     CODE            local: 249 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RouteRegisterAbortArgument>}
 * @implements {OPERATION<RouteRegisterAbortArgument>}
 */
export
const routeRegisterAbort: OPERATION<RouteRegisterAbortArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RouteRegisterAbortArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_RouteRegisterAbortArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 249 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
