/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetRingerStatusArgument, _decode_GetRingerStatusArgument, _encode_GetRingerStatusArgument } from "../CSTA-get-ringer-status/GetRingerStatusArgument.ta.mjs";

import { GetRingerStatusResult, _decode_GetRingerStatusResult, _encode_GetRingerStatusResult } from "../CSTA-get-ringer-status/GetRingerStatusResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getRingerStatus
 * @description
 *
 * Get Ringer Status (ECMA-269 §21.1.11 / ECMA-285 §19.1.11). Direction: CF→SF.
 * ROSE local CODE 270. Errors: `universalFailure`. Atomic acknowledgement.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getRingerStatus OPERATION ::= {    ARGUMENT         GetRingerStatusArgument
 *     RESULT            GetRingerStatusResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 270 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetRingerStatusArgument, GetRingerStatusResult>}
 * @implements {OPERATION<GetRingerStatusArgument, GetRingerStatusResult>}
 */
export
const getRingerStatus: OPERATION<GetRingerStatusArgument, GetRingerStatusResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetRingerStatusArgument,
        "&ResultType": _decode_GetRingerStatusResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetRingerStatusArgument,
        "&ResultType": _encode_GetRingerStatusResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 270 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
