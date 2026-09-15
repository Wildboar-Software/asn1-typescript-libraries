/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GenerateTelephonyTonesArgument, _decode_GenerateTelephonyTonesArgument, _encode_GenerateTelephonyTonesArgument } from "../CSTA-generate-telephony-tones/GenerateTelephonyTonesArgument.ta.mjs";

import { GenerateTelephonyTonesResult, _decode_GenerateTelephonyTonesResult, _encode_GenerateTelephonyTonesResult } from "../CSTA-generate-telephony-tones/GenerateTelephonyTonesResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary generateTelephonyTones
 * @description
 *
 * Generate Telephony Tones (ECMA-269 §18.1.5 / ECMA-285 §16.1.5). Direction:
 * CF→SF. ROSE local CODE 233. Errors: `universalFailure`. Generates
 * `toneToSend` on `connectionToSendTone`. Telephony
 * Tones Generated reports generation; `toneFrequency` / duration
 * / pause apply only when the tone is `other`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * generateTelephonyTones     OPERATION ::= {    ARGUMENT        GenerateTelephonyTonesArgument
 *     RESULT            GenerateTelephonyTonesResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 233 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GenerateTelephonyTonesArgument, GenerateTelephonyTonesResult>}
 * @implements {OPERATION<GenerateTelephonyTonesArgument, GenerateTelephonyTonesResult>}
 */
export
const generateTelephonyTones: OPERATION<GenerateTelephonyTonesArgument, GenerateTelephonyTonesResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GenerateTelephonyTonesArgument,
        "&ResultType": _decode_GenerateTelephonyTonesResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GenerateTelephonyTonesArgument,
        "&ResultType": _encode_GenerateTelephonyTonesResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 233 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
