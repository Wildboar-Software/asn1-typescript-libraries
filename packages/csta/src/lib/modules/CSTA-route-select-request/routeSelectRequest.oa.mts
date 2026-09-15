/* eslint-disable */
import { FALSE } from "@wildboar/asn1";

import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RouteSelectRequestArgument, _decode_RouteSelectRequestArgument, _encode_RouteSelectRequestArgument } from "../CSTA-route-select-request/RouteSelectRequestArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary routeSelectRequest
 * @description
 *
 * Route Select (ECMA-269 §20.2.5 / ECMA-285 §18.2.5). Direction: CF→SF. ROSE
 * local CODE 33. Errors: `universalFailure`. `remainRetries` may be a count or
 * noCountAvailable. Alternate
 * routes may be supplied for subsequent Re-Route.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * routeSelectRequest OPERATION ::= {    ARGUMENT         RouteSelectRequestArgument
 *     ERRORS             {universalFailure }
 *     ALWAYS RESPONDS        FALSE
 *     CODE            local: 33 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RouteSelectRequestArgument>}
 * @implements {OPERATION<RouteSelectRequestArgument>}
 */
export
const routeSelectRequest: OPERATION<RouteSelectRequestArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RouteSelectRequestArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_RouteSelectRequestArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 33 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
