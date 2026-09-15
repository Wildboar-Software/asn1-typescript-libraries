/* eslint-disable */
import { FALSE } from "@wildboar/asn1";

import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RouteEndRequestArgument, _decode_RouteEndRequestArgument, _encode_RouteEndRequestArgument } from "../CSTA-route-end-request/RouteEndRequestArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary routeEndRequest
 * @description
 *
 * Route End (ECMA-269 §20.2.2 / ECMA-285 §18.2.2). Direction: CF→SF or SF→CF.
 * ROSE local CODE 35. Errors: `universalFailure`. Invalidates
 * `routeingCrossRefID`. Does not clear the call.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * routeEndRequest OPERATION ::= {    ARGUMENT         RouteEndRequestArgument
 *     ERRORS          {universalFailure }
 *     ALWAYS RESPONDS        FALSE
 *     CODE            local: 35 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RouteEndRequestArgument>}
 * @implements {OPERATION<RouteEndRequestArgument>}
 */
export
const routeEndRequest: OPERATION<RouteEndRequestArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RouteEndRequestArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_RouteEndRequestArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 35 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
