/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetForwardingArgument, _decode_GetForwardingArgument, _encode_GetForwardingArgument } from "../CSTA-get-forwarding/GetForwardingArgument.ta.mjs";

import { GetForwardingResult, _decode_GetForwardingResult, _encode_GetForwardingResult } from "../CSTA-get-forwarding/GetForwardingResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getForwarding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getForwarding OPERATION ::= {    ARGUMENT         GetForwardingArgument
 *     RESULT             GetForwardingResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 309 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetForwardingArgument, GetForwardingResult>}
 * @implements {OPERATION<GetForwardingArgument, GetForwardingResult>}
 */
export
const getForwarding: OPERATION<GetForwardingArgument, GetForwardingResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetForwardingArgument,
        "&ResultType": _decode_GetForwardingResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetForwardingArgument,
        "&ResultType": _encode_GetForwardingResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 309 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
