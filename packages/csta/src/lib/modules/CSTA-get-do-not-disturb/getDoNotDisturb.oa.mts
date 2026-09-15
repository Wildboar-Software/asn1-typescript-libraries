/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetDoNotDisturbArgument, _decode_GetDoNotDisturbArgument, _encode_GetDoNotDisturbArgument } from "../CSTA-get-do-not-disturb/GetDoNotDisturbArgument.ta.mjs";

import { GetDoNotDisturbResult, _decode_GetDoNotDisturbResult, _encode_GetDoNotDisturbResult } from "../CSTA-get-do-not-disturb/GetDoNotDisturbResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getDoNotDisturb
 * @description
 *
 * Get Do Not Disturb (ECMA-269 §22.1.10 / ECMA-285 §20.1.10). Direction: CF→SF.
 * ROSE local CODE 308. Errors: `universalFailure`. Atomic acknowledgement.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getDoNotDisturb OPERATION ::= {    ARGUMENT         GetDoNotDisturbArgument
 *     RESULT             GetDoNotDisturbResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 308 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetDoNotDisturbArgument, GetDoNotDisturbResult>}
 * @implements {OPERATION<GetDoNotDisturbArgument, GetDoNotDisturbResult>}
 */
export
const getDoNotDisturb: OPERATION<GetDoNotDisturbArgument, GetDoNotDisturbResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetDoNotDisturbArgument,
        "&ResultType": _decode_GetDoNotDisturbResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetDoNotDisturbArgument,
        "&ResultType": _encode_GetDoNotDisturbResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 308 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
