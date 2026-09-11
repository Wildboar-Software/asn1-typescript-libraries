/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SendDataArgument, _decode_SendDataArgument, _encode_SendDataArgument } from "../CSTA-send-data/SendDataArgument.ta.mjs";

import { SendDataResult, _decode_SendDataResult, _encode_SendDataResult } from "../CSTA-send-data/SendDataResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary sendData
 * @description
 *
 * Sends data on a specified data path. Bidirectional (ECMA-269 §24.2.6).
 *
 * Bidirectional: computing function or switching function may invoke.
 *
 * ROSE local:112. Errors: `universalFailure` (ECMA-285 §22.2.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendData OPERATION ::= {    ARGUMENT        SendDataArgument
 *     RESULT            SendDataResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 112 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendDataArgument, SendDataResult>}
 * @implements {OPERATION<SendDataArgument, SendDataResult>}
 */
export
const sendData: OPERATION<SendDataArgument, SendDataResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendDataArgument,
        "&ResultType": _decode_SendDataResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendDataArgument,
        "&ResultType": _encode_SendDataResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 112 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
