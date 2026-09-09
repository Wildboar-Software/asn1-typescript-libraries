/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SendMulticastDataArgument, _decode_SendMulticastDataArgument, _encode_SendMulticastDataArgument } from "../CSTA-send-multicast-data/SendMulticastDataArgument.ta.mjs";

import { SendMulticastDataResult, _decode_SendMulticastDataResult, _encode_SendMulticastDataResult } from "../CSTA-send-multicast-data/SendMulticastDataResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary sendMulticastData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendMulticastData OPERATION ::= {    ARGUMENT        SendMulticastDataArgument
 *     RESULT            SendMulticastDataResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 113 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendMulticastDataArgument, SendMulticastDataResult>}
 * @implements {OPERATION<SendMulticastDataArgument, SendMulticastDataResult>}
 */
export
const sendMulticastData: OPERATION<SendMulticastDataArgument, SendMulticastDataResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendMulticastDataArgument,
        "&ResultType": _decode_SendMulticastDataResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendMulticastDataArgument,
        "&ResultType": _encode_SendMulticastDataResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 113 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
