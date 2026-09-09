/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { DialDigitsArgument, _decode_DialDigitsArgument, _encode_DialDigitsArgument } from "../CSTA-dial-digits/DialDigitsArgument.ta.mjs";

import { DialDigitsResult, _decode_DialDigitsResult, _encode_DialDigitsResult } from "../CSTA-dial-digits/DialDigitsResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary dialDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dialDigits OPERATION ::= {     ARGUMENT         DialDigitsArgument
 *     RESULT             DialDigitsResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 219 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DialDigitsArgument, DialDigitsResult>}
 * @implements {OPERATION<DialDigitsArgument, DialDigitsResult>}
 */
export
const dialDigits: OPERATION<DialDigitsArgument, DialDigitsResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DialDigitsArgument,
        "&ResultType": _decode_DialDigitsResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DialDigitsArgument,
        "&ResultType": _encode_DialDigitsResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 219 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
