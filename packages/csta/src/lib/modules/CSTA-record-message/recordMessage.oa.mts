/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RecordMessageArgument, _decode_RecordMessageArgument, _encode_RecordMessageArgument } from "../CSTA-record-message/RecordMessageArgument.ta.mjs";

import { RecordMessageResult, _decode_RecordMessageResult, _encode_RecordMessageResult } from "../CSTA-record-message/RecordMessageResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary recordMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * recordMessage OPERATION ::= {    ARGUMENT        RecordMessageArgument
 *     RESULT            RecordMessageResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 511 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RecordMessageArgument, RecordMessageResult>}
 * @implements {OPERATION<RecordMessageArgument, RecordMessageResult>}
 */
export
const recordMessage: OPERATION<RecordMessageArgument, RecordMessageResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RecordMessageArgument,
        "&ResultType": _decode_RecordMessageResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_RecordMessageArgument,
        "&ResultType": _encode_RecordMessageResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 511 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
