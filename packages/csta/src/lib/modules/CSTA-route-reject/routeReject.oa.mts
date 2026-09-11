/* eslint-disable */
import { FALSE } from "@wildboar/asn1";

import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RouteRejectArgument, _decode_RouteRejectArgument, _encode_RouteRejectArgument } from "../CSTA-route-reject/RouteRejectArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary routeReject
 * @description
 *
 * Route Reject (ECMA-269 §20.2.3 / ECMA-285 §18.2.3). Direction: CF→SF. ROSE
 * local CODE 36. Errors: `universalFailure`. `rejectCause`
 * (busy/queue/capacity/calendar/unknown overflow)
 * may be passed toward the originating network.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * routeReject OPERATION ::= {     ARGUMENT         RouteRejectArgument
 *     ERRORS             {universalFailure }
 *     ALWAYS RESPONDS        FALSE
 *     CODE            local: 36 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RouteRejectArgument>}
 * @implements {OPERATION<RouteRejectArgument>}
 */
export
const routeReject: OPERATION<RouteRejectArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RouteRejectArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_RouteRejectArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 36 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
