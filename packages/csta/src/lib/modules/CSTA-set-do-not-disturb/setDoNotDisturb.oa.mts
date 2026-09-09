/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetDoNotDisturbArgument, _decode_SetDoNotDisturbArgument, _encode_SetDoNotDisturbArgument } from "../CSTA-set-do-not-disturb/SetDoNotDisturbArgument.ta.mjs";

import { SetDoNotDisturbResult, _decode_SetDoNotDisturbResult, _encode_SetDoNotDisturbResult } from "../CSTA-set-do-not-disturb/SetDoNotDisturbResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setDoNotDisturb
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setDoNotDisturb OPERATION ::= {    ARGUMENT         SetDoNotDisturbArgument
 *     RESULT             SetDoNotDisturbResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 316 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetDoNotDisturbArgument, SetDoNotDisturbResult>}
 * @implements {OPERATION<SetDoNotDisturbArgument, SetDoNotDisturbResult>}
 */
export
const setDoNotDisturb: OPERATION<SetDoNotDisturbArgument, SetDoNotDisturbResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetDoNotDisturbArgument,
        "&ResultType": _decode_SetDoNotDisturbResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetDoNotDisturbArgument,
        "&ResultType": _encode_SetDoNotDisturbResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 316 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
