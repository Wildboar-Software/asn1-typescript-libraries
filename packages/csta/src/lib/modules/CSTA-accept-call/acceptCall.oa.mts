/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { AcceptCallArgument, _decode_AcceptCallArgument, _encode_AcceptCallArgument } from "../CSTA-accept-call/AcceptCallArgument.ta.mjs";

import { AcceptCallResult, _decode_AcceptCallResult, _encode_AcceptCallResult } from "../CSTA-accept-call/AcceptCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary acceptCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * acceptCall OPERATION ::= {     ARGUMENT         AcceptCallArgument
 *     RESULT             AcceptCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 214 }
 * ```
 * 
 * @constant
 * @type {OPERATION<AcceptCallArgument, AcceptCallResult>}
 * @implements {OPERATION<AcceptCallArgument, AcceptCallResult>}
 */
export
const acceptCall: OPERATION<AcceptCallArgument, AcceptCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AcceptCallArgument,
        "&ResultType": _decode_AcceptCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AcceptCallArgument,
        "&ResultType": _encode_AcceptCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 214 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
