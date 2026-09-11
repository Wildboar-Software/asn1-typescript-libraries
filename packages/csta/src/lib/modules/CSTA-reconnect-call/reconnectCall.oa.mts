/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ReconnectCallArgument, _decode_ReconnectCallArgument, _encode_ReconnectCallArgument } from "../CSTA-reconnect-call/ReconnectCallArgument.ta.mjs";

import { ReconnectCallResult, _decode_ReconnectCallResult, _encode_ReconnectCallResult } from "../CSTA-reconnect-call/ReconnectCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary reconnectCall
 * @description
 *
 * Reconnect Call (ECMA-269 §17.1.22 / ECMA-285 §15.1.22). Invoked
 * by the computing function on the switching function. Compound
 * of Clear Connection on `activeCall` then Retrieve on `heldCall`
 * (FR 1). `heldCall` must be Hold (becomes Connected);
 * `activeCall` is Alerting, Connected, Initiated, Fail, or
 * Queued (becomes Null). ROSE local CODE 13. Errors are
 * `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reconnectCall OPERATION ::= {     ARGUMENT         ReconnectCallArgument
 *     RESULT             ReconnectCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 13 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReconnectCallArgument, ReconnectCallResult>}
 * @implements {OPERATION<ReconnectCallArgument, ReconnectCallResult>}
 */
export
const reconnectCall: OPERATION<ReconnectCallArgument, ReconnectCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReconnectCallArgument,
        "&ResultType": _decode_ReconnectCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReconnectCallArgument,
        "&ResultType": _encode_ReconnectCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 13 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
