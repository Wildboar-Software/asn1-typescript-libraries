/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GenerateDigitsArgument, _decode_GenerateDigitsArgument, _encode_GenerateDigitsArgument } from "../CSTA-generate-digits/GenerateDigitsArgument.ta.mjs";

import { GenerateDigitsResult, _decode_GenerateDigitsResult, _encode_GenerateDigitsResult } from "../CSTA-generate-digits/GenerateDigitsResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary generateDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * generateDigits    OPERATION ::= {    ARGUMENT        GenerateDigitsArgument
 *     RESULT            GenerateDigitsResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 232 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GenerateDigitsArgument, GenerateDigitsResult>}
 * @implements {OPERATION<GenerateDigitsArgument, GenerateDigitsResult>}
 */
export
const generateDigits: OPERATION<GenerateDigitsArgument, GenerateDigitsResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GenerateDigitsArgument,
        "&ResultType": _decode_GenerateDigitsResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GenerateDigitsArgument,
        "&ResultType": _encode_GenerateDigitsResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 232 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
