/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetSpeakerVolumeArgument, _decode_SetSpeakerVolumeArgument, _encode_SetSpeakerVolumeArgument } from "../CSTA-set-speaker-volume/SetSpeakerVolumeArgument.ta.mjs";

import { SetSpeakerVolumeResult, _decode_SetSpeakerVolumeResult, _encode_SetSpeakerVolumeResult } from "../CSTA-set-speaker-volume/SetSpeakerVolumeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setSpeakerVolume
 * @description
 *
 * Set Speaker Volume (ECMA-269 §21.1.23 / ECMA-285 §19.1.23). Direction: CF→SF.
 * ROSE local CODE 282. Errors: `universalFailure`. Generates Speaker Volume. If
 * already at the requested value: positive ack and no event (ECMA-269 §9.5.1 FR
 * 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setSpeakerVolume OPERATION ::= {    ARGUMENT         SetSpeakerVolumeArgument
 *     RESULT            SetSpeakerVolumeResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 282 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetSpeakerVolumeArgument, SetSpeakerVolumeResult>}
 * @implements {OPERATION<SetSpeakerVolumeArgument, SetSpeakerVolumeResult>}
 */
export
const setSpeakerVolume: OPERATION<SetSpeakerVolumeArgument, SetSpeakerVolumeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetSpeakerVolumeArgument,
        "&ResultType": _decode_SetSpeakerVolumeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetSpeakerVolumeArgument,
        "&ResultType": _encode_SetSpeakerVolumeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 282 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
