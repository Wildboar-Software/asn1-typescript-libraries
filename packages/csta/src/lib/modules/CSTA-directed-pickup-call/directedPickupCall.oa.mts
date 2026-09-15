/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { DirectedPickupCallArgument, _decode_DirectedPickupCallArgument, _encode_DirectedPickupCallArgument } from "../CSTA-directed-pickup-call/DirectedPickupCallArgument.ta.mjs";

import { DirectedPickupCallResult, _decode_DirectedPickupCallResult, _encode_DirectedPickupCallResult } from "../CSTA-directed-pickup-call/DirectedPickupCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary directedPickupCall
 * @description
 *
 * Directed Pickup Call (ECMA-269 §17.1.13 / ECMA-285 §15.1.13).
 * Invoked by the computing function on the switching function.
 * Unlike Deflect, the requesting device is immediately Connected
 * (FR 1). CallID is unchanged (FR 3). Forwarding and DND at the
 * destination are ignored (FR 2). Rejected if pickup and
 * destination devices are the same (FR 6). ROSE local CODE 220.
 * Errors are `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directedPickupCall OPERATION ::= {     ARGUMENT         DirectedPickupCallArgument
 *     RESULT             DirectedPickupCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 220 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DirectedPickupCallArgument, DirectedPickupCallResult>}
 * @implements {OPERATION<DirectedPickupCallArgument, DirectedPickupCallResult>}
 */
export
const directedPickupCall: OPERATION<DirectedPickupCallArgument, DirectedPickupCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DirectedPickupCallArgument,
        "&ResultType": _decode_DirectedPickupCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DirectedPickupCallArgument,
        "&ResultType": _encode_DirectedPickupCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 220 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
