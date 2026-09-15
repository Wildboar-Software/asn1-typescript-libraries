/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetSpeakerMuteArgument, _decode_SetSpeakerMuteArgument, _encode_SetSpeakerMuteArgument } from "../CSTA-set-speaker-mute/SetSpeakerMuteArgument.ta.mjs";

import { SetSpeakerMuteResult, _decode_SetSpeakerMuteResult, _encode_SetSpeakerMuteResult } from "../CSTA-set-speaker-mute/SetSpeakerMuteResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setSpeakerMute
 * @description
 *
 * Set Speaker Mute (ECMA-269 §21.1.22 / ECMA-285 §19.1.22). Direction: CF→SF.
 * ROSE local CODE 281. Errors: `universalFailure`. Generates Speaker Mute. If
 * already at the requested value: positive ack and no event (ECMA-269 §9.5.1 FR
 * 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setSpeakerMute OPERATION ::= {    ARGUMENT         SetSpeakerMuteArgument
 *     RESULT            SetSpeakerMuteResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 281 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetSpeakerMuteArgument, SetSpeakerMuteResult>}
 * @implements {OPERATION<SetSpeakerMuteArgument, SetSpeakerMuteResult>}
 */
export
const setSpeakerMute: OPERATION<SetSpeakerMuteArgument, SetSpeakerMuteResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetSpeakerMuteArgument,
        "&ResultType": _decode_SetSpeakerMuteResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetSpeakerMuteArgument,
        "&ResultType": _encode_SetSpeakerMuteResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 281 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
