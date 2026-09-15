/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetMicrophoneMuteArgument, _decode_SetMicrophoneMuteArgument, _encode_SetMicrophoneMuteArgument } from "../CSTA-set-microphone-mute/SetMicrophoneMuteArgument.ta.mjs";

import { SetMicrophoneMuteResult, _decode_SetMicrophoneMuteResult, _encode_SetMicrophoneMuteResult } from "../CSTA-set-microphone-mute/SetMicrophoneMuteResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setMicrophoneMute
 * @description
 *
 * Set Microphone Mute (ECMA-269 §21.1.20 / ECMA-285 §19.1.20). Direction:
 * CF→SF. ROSE local CODE 279. Errors: `universalFailure`. Generates Microphone
 * Mute. If already at the requested value: positive ack and no event (ECMA-269
 * §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setMicrophoneMute OPERATION ::= {    ARGUMENT         SetMicrophoneMuteArgument
 *     RESULT            SetMicrophoneMuteResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 279 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetMicrophoneMuteArgument, SetMicrophoneMuteResult>}
 * @implements {OPERATION<SetMicrophoneMuteArgument, SetMicrophoneMuteResult>}
 */
export
const setMicrophoneMute: OPERATION<SetMicrophoneMuteArgument, SetMicrophoneMuteResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetMicrophoneMuteArgument,
        "&ResultType": _decode_SetMicrophoneMuteResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetMicrophoneMuteArgument,
        "&ResultType": _encode_SetMicrophoneMuteResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 279 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
