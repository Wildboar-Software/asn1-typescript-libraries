/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetRingerStatusArgument, _decode_SetRingerStatusArgument, _encode_SetRingerStatusArgument } from "../CSTA-set-ringer-status/SetRingerStatusArgument.ta.mjs";

import { SetRingerStatusResult, _decode_SetRingerStatusResult, _encode_SetRingerStatusResult } from "../CSTA-set-ringer-status/SetRingerStatusResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setRingerStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setRingerStatus OPERATION ::= {    ARGUMENT         SetRingerStatusArgument
 *     RESULT            SetRingerStatusResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 280 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetRingerStatusArgument, SetRingerStatusResult>}
 * @implements {OPERATION<SetRingerStatusArgument, SetRingerStatusResult>}
 */
export
const setRingerStatus: OPERATION<SetRingerStatusArgument, SetRingerStatusResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetRingerStatusArgument,
        "&ResultType": _decode_SetRingerStatusResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetRingerStatusArgument,
        "&ResultType": _encode_SetRingerStatusResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 280 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
