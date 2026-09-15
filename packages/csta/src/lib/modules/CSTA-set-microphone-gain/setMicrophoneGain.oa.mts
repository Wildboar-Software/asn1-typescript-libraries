/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetMicrophoneGainArgument, _decode_SetMicrophoneGainArgument, _encode_SetMicrophoneGainArgument } from "../CSTA-set-microphone-gain/SetMicrophoneGainArgument.ta.mjs";

import { SetMicrophoneGainResult, _decode_SetMicrophoneGainResult, _encode_SetMicrophoneGainResult } from "../CSTA-set-microphone-gain/SetMicrophoneGainResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setMicrophoneGain
 * @description
 *
 * Set Microphone Gain (ECMA-269 §21.1.19 / ECMA-285 §19.1.19). Direction:
 * CF→SF. ROSE local CODE 278. Errors: `universalFailure`. Generates Microphone
 * Gain. If already at the requested value: positive ack and no event (ECMA-269
 * §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setMicrophoneGain OPERATION ::= {    ARGUMENT         SetMicrophoneGainArgument
 *     RESULT            SetMicrophoneGainResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 278 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetMicrophoneGainArgument, SetMicrophoneGainResult>}
 * @implements {OPERATION<SetMicrophoneGainArgument, SetMicrophoneGainResult>}
 */
export
const setMicrophoneGain: OPERATION<SetMicrophoneGainArgument, SetMicrophoneGainResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetMicrophoneGainArgument,
        "&ResultType": _decode_SetMicrophoneGainResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetMicrophoneGainArgument,
        "&ResultType": _encode_SetMicrophoneGainResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 278 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
