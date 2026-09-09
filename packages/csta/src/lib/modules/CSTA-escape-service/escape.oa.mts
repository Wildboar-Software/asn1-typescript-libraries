/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { EscapeArgument, _decode_EscapeArgument, _encode_EscapeArgument } from "../CSTA-escape-service/EscapeArgument.ta.mjs";

import { EscapeResult, _decode_EscapeResult, _encode_EscapeResult } from "../CSTA-escape-service/EscapeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary escape
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * escape OPERATION ::= {     ARGUMENT         EscapeArgument
 *     RESULT            EscapeResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 51 }
 * ```
 * 
 * @constant
 * @type {OPERATION<EscapeArgument, EscapeResult>}
 * @implements {OPERATION<EscapeArgument, EscapeResult>}
 */
export
const escape: OPERATION<EscapeArgument, EscapeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EscapeArgument,
        "&ResultType": _decode_EscapeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_EscapeArgument,
        "&ResultType": _encode_EscapeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 51 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
