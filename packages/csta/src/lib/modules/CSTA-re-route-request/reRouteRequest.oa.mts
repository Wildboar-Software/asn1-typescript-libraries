/* eslint-disable */
import { FALSE } from "@wildboar/asn1";

import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ReRouteRequestArgument, _decode_ReRouteRequestArgument, _encode_ReRouteRequestArgument } from "../CSTA-re-route-request/ReRouteRequestArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary reRouteRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reRouteRequest OPERATION ::= {    ARGUMENT        ReRouteRequestArgument
 *     ERRORS          {universalFailure }
 *     ALWAYS RESPONDS        FALSE
 *     CODE            local: 32 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReRouteRequestArgument>}
 * @implements {OPERATION<ReRouteRequestArgument>}
 */
export
const reRouteRequest: OPERATION<ReRouteRequestArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReRouteRequestArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReRouteRequestArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 32 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
