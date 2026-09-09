/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { AttachMediaServiceArgument, _decode_AttachMediaServiceArgument, _encode_AttachMediaServiceArgument } from "../CSTA-attach-media-service/AttachMediaServiceArgument.ta.mjs";

import { AttachMediaServiceResult, _decode_AttachMediaServiceResult, _encode_AttachMediaServiceResult } from "../CSTA-attach-media-service/AttachMediaServiceResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary attachMediaService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attachMediaService OPERATION ::= {    ARGUMENT         AttachMediaServiceArgument
 *     RESULT             AttachMediaServiceResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 244 }
 * ```
 * 
 * @constant
 * @type {OPERATION<AttachMediaServiceArgument, AttachMediaServiceResult>}
 * @implements {OPERATION<AttachMediaServiceArgument, AttachMediaServiceResult>}
 */
export
const attachMediaService: OPERATION<AttachMediaServiceArgument, AttachMediaServiceResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AttachMediaServiceArgument,
        "&ResultType": _decode_AttachMediaServiceResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AttachMediaServiceArgument,
        "&ResultType": _encode_AttachMediaServiceResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 244 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
