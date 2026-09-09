/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { DeleteMessageArgument, _decode_DeleteMessageArgument, _encode_DeleteMessageArgument } from "../CSTA-delete-message/DeleteMessageArgument.ta.mjs";

import { DeleteMessageResult, _decode_DeleteMessageResult, _encode_DeleteMessageResult } from "../CSTA-delete-message/DeleteMessageResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary deleteMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * deleteMessage OPERATION ::= {    ARGUMENT        DeleteMessageArgument
 *     RESULT            DeleteMessageResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 501 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DeleteMessageArgument, DeleteMessageResult>}
 * @implements {OPERATION<DeleteMessageArgument, DeleteMessageResult>}
 */
export
const deleteMessage: OPERATION<DeleteMessageArgument, DeleteMessageResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DeleteMessageArgument,
        "&ResultType": _decode_DeleteMessageResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DeleteMessageArgument,
        "&ResultType": _encode_DeleteMessageResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 501 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
