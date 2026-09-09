/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetPresenceStateArgument, _decode_GetPresenceStateArgument, _encode_GetPresenceStateArgument } from "../CSTA-get-presence-state/GetPresenceStateArgument.ta.mjs";

import { GetPresenceStateResult, _decode_GetPresenceStateResult, _encode_GetPresenceStateResult } from "../CSTA-get-presence-state/GetPresenceStateResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getPresenceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getPresenceState OPERATION ::= {    ARGUMENT         GetPresenceStateArgument
 *     RESULT             GetPresenceStateResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 550 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetPresenceStateArgument, GetPresenceStateResult>}
 * @implements {OPERATION<GetPresenceStateArgument, GetPresenceStateResult>}
 */
export
const getPresenceState: OPERATION<GetPresenceStateArgument, GetPresenceStateResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetPresenceStateArgument,
        "&ResultType": _decode_GetPresenceStateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetPresenceStateArgument,
        "&ResultType": _encode_GetPresenceStateResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 550 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
