/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetSpeakerMuteArgument, _decode_GetSpeakerMuteArgument, _encode_GetSpeakerMuteArgument } from "../CSTA-get-speaker-mute/GetSpeakerMuteArgument.ta.mjs";

import { GetSpeakerMuteResult, _decode_GetSpeakerMuteResult, _encode_GetSpeakerMuteResult } from "../CSTA-get-speaker-mute/GetSpeakerMuteResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getSpeakerMute
 * @description
 *
 * Get Speaker Mute (ECMA-269 §21.1.12 / ECMA-285 §19.1.12). Direction: CF→SF.
 * ROSE local CODE 271. Errors: `universalFailure`. Atomic acknowledgement.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getSpeakerMute OPERATION ::= {    ARGUMENT         GetSpeakerMuteArgument
 *     RESULT            GetSpeakerMuteResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 271 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetSpeakerMuteArgument, GetSpeakerMuteResult>}
 * @implements {OPERATION<GetSpeakerMuteArgument, GetSpeakerMuteResult>}
 */
export
const getSpeakerMute: OPERATION<GetSpeakerMuteArgument, GetSpeakerMuteResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetSpeakerMuteArgument,
        "&ResultType": _decode_GetSpeakerMuteResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetSpeakerMuteArgument,
        "&ResultType": _encode_GetSpeakerMuteResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 271 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
