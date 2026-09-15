/* eslint-disable */
import { FALSE } from "@wildboar/asn1";

import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RouteRequestArgument, _decode_RouteRequestArgument, _encode_RouteRequestArgument } from "../CSTA-route-request/RouteRequestArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary routeRequest
 * @description
 *
 * Route Request (ECMA-269 §20.2.4 / ECMA-285 §18.2.4). Direction: SF→CF. ROSE
 * local CODE 31. Errors: `universalFailure`. Includes current destination and
 * optional calling/called data.
 * CF responds with Route Select, Route Reject, or Route End.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * routeRequest OPERATION ::= {     ARGUMENT           RouteRequestArgument
 *     ERRORS             {universalFailure }
 *     ALWAYS RESPONDS        FALSE
 *     CODE            local: 31 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RouteRequestArgument>}
 * @implements {OPERATION<RouteRequestArgument>}
 */
export
const routeRequest: OPERATION<RouteRequestArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RouteRequestArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_RouteRequestArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 31 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
