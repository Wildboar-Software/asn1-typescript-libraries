/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetMicrophoneGainArgument, _decode_GetMicrophoneGainArgument, _encode_GetMicrophoneGainArgument } from "../CSTA-get-microphone-gain/GetMicrophoneGainArgument.ta.mjs";

import { GetMicrophoneGainResult, _decode_GetMicrophoneGainResult, _encode_GetMicrophoneGainResult } from "../CSTA-get-microphone-gain/GetMicrophoneGainResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getMicrophoneGain
 * @description
 *
 * Get Microphone Gain (ECMA-269 §21.1.9 / ECMA-285 §19.1.9). Direction: CF→SF.
 * ROSE local CODE 268. Errors: `universalFailure`. Atomic acknowledgement.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getMicrophoneGain OPERATION ::= {    ARGUMENT         GetMicrophoneGainArgument
 *     RESULT            GetMicrophoneGainResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 268 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetMicrophoneGainArgument, GetMicrophoneGainResult>}
 * @implements {OPERATION<GetMicrophoneGainArgument, GetMicrophoneGainResult>}
 */
export
const getMicrophoneGain: OPERATION<GetMicrophoneGainArgument, GetMicrophoneGainResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetMicrophoneGainArgument,
        "&ResultType": _decode_GetMicrophoneGainResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetMicrophoneGainArgument,
        "&ResultType": _encode_GetMicrophoneGainResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 268 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
