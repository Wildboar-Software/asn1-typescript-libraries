/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { CancelCallBackMessageArgument, _decode_CancelCallBackMessageArgument, _encode_CancelCallBackMessageArgument } from "../CSTA-cancel-call-back-message/CancelCallBackMessageArgument.ta.mjs";

import { CancelCallBackMessageResult, _decode_CancelCallBackMessageResult, _encode_CancelCallBackMessageResult } from "../CSTA-cancel-call-back-message/CancelCallBackMessageResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary cancelCallBackMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelCallBackMessage OPERATION ::= {    ARGUMENT         CancelCallBackMessageArgument
 *     RESULT             CancelCallBackMessageResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 303 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CancelCallBackMessageArgument, CancelCallBackMessageResult>}
 * @implements {OPERATION<CancelCallBackMessageArgument, CancelCallBackMessageResult>}
 */
export
const cancelCallBackMessage: OPERATION<CancelCallBackMessageArgument, CancelCallBackMessageResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CancelCallBackMessageArgument,
        "&ResultType": _decode_CancelCallBackMessageResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CancelCallBackMessageArgument,
        "&ResultType": _encode_CancelCallBackMessageResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 303 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
