/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { PlayMessageArgument, _decode_PlayMessageArgument, _encode_PlayMessageArgument } from "../CSTA-play-message/PlayMessageArgument.ta.mjs";

import { PlayMessageResult, _decode_PlayMessageResult, _encode_PlayMessageResult } from "../CSTA-play-message/PlayMessageResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary playMessage
 * @description
 *
 * Plays a voice message on a connection. Optional termination conditions stop
 * playback if encountered (ECMA-269 §26.1.6).
 *
 * Computing function → switching function.
 *
 * ROSE local:502. Errors: `universalFailure` (ECMA-285 §24.1.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * playMessage OPERATION ::= {    ARGUMENT        PlayMessageArgument
 *     RESULT            PlayMessageResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 502 }
 * ```
 * 
 * @constant
 * @type {OPERATION<PlayMessageArgument, PlayMessageResult>}
 * @implements {OPERATION<PlayMessageArgument, PlayMessageResult>}
 */
export
const playMessage: OPERATION<PlayMessageArgument, PlayMessageResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PlayMessageArgument,
        "&ResultType": _decode_PlayMessageResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_PlayMessageArgument,
        "&ResultType": _encode_PlayMessageResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 502 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
