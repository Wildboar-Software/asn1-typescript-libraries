/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { CancelCallBackArgument, _decode_CancelCallBackArgument, _encode_CancelCallBackArgument } from "../CSTA-cancel-call-back/CancelCallBackArgument.ta.mjs";

import { CancelCallBackResult, _decode_CancelCallBackResult, _encode_CancelCallBackResult } from "../CSTA-cancel-call-back/CancelCallBackResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary cancelCallBack
 * @description
 *
 * Cancel Call Back (ECMA-269 §22.1.3 / ECMA-285 §20.1.3). Direction: CF→SF.
 * ROSE local CODE 302. Errors: `universalFailure`. Originating and target
 * DeviceIDs shall be known to the SF.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelCallBack OPERATION ::= {    ARGUMENT         CancelCallBackArgument
 *     RESULT             CancelCallBackResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 302 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CancelCallBackArgument, CancelCallBackResult>}
 * @implements {OPERATION<CancelCallBackArgument, CancelCallBackResult>}
 */
export
const cancelCallBack: OPERATION<CancelCallBackArgument, CancelCallBackResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CancelCallBackArgument,
        "&ResultType": _decode_CancelCallBackResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CancelCallBackArgument,
        "&ResultType": _encode_CancelCallBackResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 302 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
