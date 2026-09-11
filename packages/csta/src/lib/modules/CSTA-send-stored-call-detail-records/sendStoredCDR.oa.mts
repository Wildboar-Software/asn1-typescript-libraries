/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SendStoredCDRArgument, _decode_SendStoredCDRArgument, _encode_SendStoredCDRArgument } from "../CSTA-send-stored-call-detail-records/SendStoredCDRArgument.ta.mjs";

import { SendStoredCDRResult, _decode_SendStoredCDRResult, _encode_SendStoredCDRResult } from "../CSTA-send-stored-call-detail-records/SendStoredCDRResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary sendStoredCDR
 * @description
 *
 * Initiates en-bloc transfer of stored CDR records, optionally for a time
 * interval of recordCreationTime. Records arrive via Call Detail Records Report
 * (ECMA-269 §27.1.3).
 *
 * Computing function → switching function.
 *
 * ROSE local:362. Errors: `universalFailure` (ECMA-285 §25.1.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendStoredCDR OPERATION ::= {    ARGUMENT        SendStoredCDRArgument
 *     RESULT            SendStoredCDRResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 362 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendStoredCDRArgument, SendStoredCDRResult>}
 * @implements {OPERATION<SendStoredCDRArgument, SendStoredCDRResult>}
 */
export
const sendStoredCDR: OPERATION<SendStoredCDRArgument, SendStoredCDRResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendStoredCDRArgument,
        "&ResultType": _decode_SendStoredCDRResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendStoredCDRArgument,
        "&ResultType": _encode_SendStoredCDRResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 362 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
