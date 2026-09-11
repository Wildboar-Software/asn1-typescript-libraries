/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetDoNotDisturbArgument, _decode_SetDoNotDisturbArgument, _encode_SetDoNotDisturbArgument } from "../CSTA-set-do-not-disturb/SetDoNotDisturbArgument.ta.mjs";

import { SetDoNotDisturbResult, _decode_SetDoNotDisturbResult, _encode_SetDoNotDisturbResult } from "../CSTA-set-do-not-disturb/SetDoNotDisturbResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setDoNotDisturb
 * @description
 *
 * Set Do Not Disturb (ECMA-269 §22.1.19 / ECMA-285 §20.1.19). Direction: CF→SF.
 * ROSE local CODE 316. Errors: `universalFailure`. Generates Do Not Disturb. If
 * already at the requested value: positive ack and no event (ECMA-269 §9.5.1 FR
 * 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
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
