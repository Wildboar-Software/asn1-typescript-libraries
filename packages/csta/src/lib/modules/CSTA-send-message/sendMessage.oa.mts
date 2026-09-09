/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SendMessageArgument, _decode_SendMessageArgument, _encode_SendMessageArgument } from "../CSTA-send-message/SendMessageArgument.ta.mjs";

import { SendMessageResult, _decode_SendMessageResult, _encode_SendMessageResult } from "../CSTA-send-message/SendMessageResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary sendMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendMessage OPERATION ::= {     ARGUMENT         SendMessageArgument
 *     RESULT             SendMessageResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 376 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendMessageArgument, SendMessageResult>}
 * @implements {OPERATION<SendMessageArgument, SendMessageResult>}
 */
export
const sendMessage: OPERATION<SendMessageArgument, SendMessageResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendMessageArgument,
        "&ResultType": _decode_SendMessageResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendMessageArgument,
        "&ResultType": _encode_SendMessageResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 376 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
