/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ConcatenateMessageArgument, _decode_ConcatenateMessageArgument, _encode_ConcatenateMessageArgument } from "../CSTA-concatenate-message/ConcatenateMessageArgument.ta.mjs";

import { ConcatenateMessageResult, _decode_ConcatenateMessageResult, _encode_ConcatenateMessageResult } from "../CSTA-concatenate-message/ConcatenateMessageResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary concatenateMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * concatenateMessage OPERATION ::= {    ARGUMENT        ConcatenateMessageArgument
 *     RESULT            ConcatenateMessageResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 500 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ConcatenateMessageArgument, ConcatenateMessageResult>}
 * @implements {OPERATION<ConcatenateMessageArgument, ConcatenateMessageResult>}
 */
export
const concatenateMessage: OPERATION<ConcatenateMessageArgument, ConcatenateMessageResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ConcatenateMessageArgument,
        "&ResultType": _decode_ConcatenateMessageResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ConcatenateMessageArgument,
        "&ResultType": _encode_ConcatenateMessageResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 500 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
