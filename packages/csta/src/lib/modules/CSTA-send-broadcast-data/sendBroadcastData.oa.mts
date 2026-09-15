/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SendBroadcastDataArgument, _decode_SendBroadcastDataArgument, _encode_SendBroadcastDataArgument } from "../CSTA-send-broadcast-data/SendBroadcastDataArgument.ta.mjs";

import { SendBroadcastDataResult, _decode_SendBroadcastDataResult, _encode_SendBroadcastDataResult } from "../CSTA-send-broadcast-data/SendBroadcastDataResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary sendBroadcastData
 * @description
 *
 * Writes `ioData` to all open data paths for this association and
 * `dataPathType` (ECMA-269 §24.2.5).
 *
 * Computing function → switching function.
 *
 * ROSE local:114. Errors: `universalFailure` (ECMA-285 §22.2.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendBroadcastData OPERATION ::= {    ARGUMENT        SendBroadcastDataArgument
 *     RESULT            SendBroadcastDataResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 114 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendBroadcastDataArgument, SendBroadcastDataResult>}
 * @implements {OPERATION<SendBroadcastDataArgument, SendBroadcastDataResult>}
 */
export
const sendBroadcastData: OPERATION<SendBroadcastDataArgument, SendBroadcastDataResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendBroadcastDataArgument,
        "&ResultType": _decode_SendBroadcastDataResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendBroadcastDataArgument,
        "&ResultType": _encode_SendBroadcastDataResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 114 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
