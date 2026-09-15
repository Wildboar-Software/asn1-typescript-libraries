/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetCallerIDStatusArgument, _decode_GetCallerIDStatusArgument, _encode_GetCallerIDStatusArgument } from "../CSTA-get-caller-id-status/GetCallerIDStatusArgument.ta.mjs";

import { GetCallerIDStatusResult, _decode_GetCallerIDStatusResult, _encode_GetCallerIDStatusResult } from "../CSTA-get-caller-id-status/GetCallerIDStatusResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getCallerIDStatus
 * @description
 *
 * Get Caller ID Status (ECMA-269 §22.1.9 / ECMA-285 §20.1.9). Direction: CF→SF.
 * ROSE local CODE 307. Errors: `universalFailure`. Atomic acknowledgement.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getCallerIDStatus OPERATION ::= {    ARGUMENT         GetCallerIDStatusArgument
 *     RESULT             GetCallerIDStatusResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 307 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetCallerIDStatusArgument, GetCallerIDStatusResult>}
 * @implements {OPERATION<GetCallerIDStatusArgument, GetCallerIDStatusResult>}
 */
export
const getCallerIDStatus: OPERATION<GetCallerIDStatusArgument, GetCallerIDStatusResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetCallerIDStatusArgument,
        "&ResultType": _decode_GetCallerIDStatusResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetCallerIDStatusArgument,
        "&ResultType": _encode_GetCallerIDStatusResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 307 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
