/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetLastNumberDialedArgument, _decode_GetLastNumberDialedArgument, _encode_GetLastNumberDialedArgument } from "../CSTA-get-last-number-dialed/GetLastNumberDialedArgument.ta.mjs";

import { GetLastNumberDialedResult, _decode_GetLastNumberDialedResult, _encode_GetLastNumberDialedResult } from "../CSTA-get-last-number-dialed/GetLastNumberDialedResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getLastNumberDialed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getLastNumberDialed OPERATION ::= {    ARGUMENT         GetLastNumberDialedArgument
 *     RESULT             GetLastNumberDialedResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 310 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetLastNumberDialedArgument, GetLastNumberDialedResult>}
 * @implements {OPERATION<GetLastNumberDialedArgument, GetLastNumberDialedResult>}
 */
export
const getLastNumberDialed: OPERATION<GetLastNumberDialedArgument, GetLastNumberDialedResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetLastNumberDialedArgument,
        "&ResultType": _decode_GetLastNumberDialedResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetLastNumberDialedArgument,
        "&ResultType": _encode_GetLastNumberDialedResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 310 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
