/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetPresenceStateArgument, _decode_SetPresenceStateArgument, _encode_SetPresenceStateArgument } from "../CSTA-set-presence-state/SetPresenceStateArgument.ta.mjs";

import { SetPresenceStateResult, _decode_SetPresenceStateResult, _encode_SetPresenceStateResult } from "../CSTA-set-presence-state/SetPresenceStateResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setPresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setPresenceState OPERATION ::= {    ARGUMENT         SetPresenceStateArgument
 *     RESULT             SetPresenceStateResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 551 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetPresenceStateArgument, SetPresenceStateResult>}
 * @implements {OPERATION<SetPresenceStateArgument, SetPresenceStateResult>}
 */
export
const setPresenceState: OPERATION<SetPresenceStateArgument, SetPresenceStateResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetPresenceStateArgument,
        "&ResultType": _decode_SetPresenceStateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetPresenceStateArgument,
        "&ResultType": _encode_SetPresenceStateResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 551 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
