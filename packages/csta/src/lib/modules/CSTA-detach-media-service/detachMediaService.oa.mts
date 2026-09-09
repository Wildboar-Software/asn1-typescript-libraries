/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { DetachMediaServiceArgument, _decode_DetachMediaServiceArgument, _encode_DetachMediaServiceArgument } from "../CSTA-detach-media-service/DetachMediaServiceArgument.ta.mjs";

import { DetachMediaServiceResult, _decode_DetachMediaServiceResult, _encode_DetachMediaServiceResult } from "../CSTA-detach-media-service/DetachMediaServiceResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary detachMediaService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * detachMediaService OPERATION ::= {    ARGUMENT         DetachMediaServiceArgument
 *     RESULT             DetachMediaServiceResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 245 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DetachMediaServiceArgument, DetachMediaServiceResult>}
 * @implements {OPERATION<DetachMediaServiceArgument, DetachMediaServiceResult>}
 */
export
const detachMediaService: OPERATION<DetachMediaServiceArgument, DetachMediaServiceResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DetachMediaServiceArgument,
        "&ResultType": _decode_DetachMediaServiceResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DetachMediaServiceArgument,
        "&ResultType": _encode_DetachMediaServiceResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 245 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
