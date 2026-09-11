/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetMicrophoneMuteArgument, _decode_GetMicrophoneMuteArgument, _encode_GetMicrophoneMuteArgument } from "../CSTA-get-microphone-mute/GetMicrophoneMuteArgument.ta.mjs";

import { GetMicrophoneMuteResult, _decode_GetMicrophoneMuteResult, _encode_GetMicrophoneMuteResult } from "../CSTA-get-microphone-mute/GetMicrophoneMuteResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getMicrophoneMute
 * @description
 *
 * Get Microphone Mute (ECMA-269 §21.1.10 / ECMA-285 §19.1.10). Direction:
 * CF→SF. ROSE local CODE 269. Errors: `universalFailure`. Atomic
 * acknowledgement.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getMicrophoneMute OPERATION ::= {    ARGUMENT         GetMicrophoneMuteArgument
 *     RESULT            GetMicrophoneMuteResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 269 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetMicrophoneMuteArgument, GetMicrophoneMuteResult>}
 * @implements {OPERATION<GetMicrophoneMuteArgument, GetMicrophoneMuteResult>}
 */
export
const getMicrophoneMute: OPERATION<GetMicrophoneMuteArgument, GetMicrophoneMuteResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetMicrophoneMuteArgument,
        "&ResultType": _decode_GetMicrophoneMuteResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetMicrophoneMuteArgument,
        "&ResultType": _encode_GetMicrophoneMuteResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 269 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
