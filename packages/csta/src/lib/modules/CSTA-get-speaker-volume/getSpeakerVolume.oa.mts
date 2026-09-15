/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetSpeakerVolumeArgument, _decode_GetSpeakerVolumeArgument, _encode_GetSpeakerVolumeArgument } from "../CSTA-get-speaker-volume/GetSpeakerVolumeArgument.ta.mjs";

import { GetSpeakerVolumeResult, _decode_GetSpeakerVolumeResult, _encode_GetSpeakerVolumeResult } from "../CSTA-get-speaker-volume/GetSpeakerVolumeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getSpeakerVolume
 * @description
 *
 * Get Speaker Volume (ECMA-269 §21.1.13 / ECMA-285 §19.1.13). Direction: CF→SF.
 * ROSE local CODE 272. Errors: `universalFailure`. Atomic acknowledgement.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getSpeakerVolume OPERATION ::= {    ARGUMENT         GetSpeakerVolumeArgument
 *     RESULT            GetSpeakerVolumeResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 272 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetSpeakerVolumeArgument, GetSpeakerVolumeResult>}
 * @implements {OPERATION<GetSpeakerVolumeArgument, GetSpeakerVolumeResult>}
 */
export
const getSpeakerVolume: OPERATION<GetSpeakerVolumeArgument, GetSpeakerVolumeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetSpeakerVolumeArgument,
        "&ResultType": _decode_GetSpeakerVolumeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetSpeakerVolumeArgument,
        "&ResultType": _encode_GetSpeakerVolumeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 272 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
