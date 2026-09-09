/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetCallerIDStatusArgument, _decode_SetCallerIDStatusArgument, _encode_SetCallerIDStatusArgument } from "../CSTA-set-caller-id-status/SetCallerIDStatusArgument.ta.mjs";

import { SetCallerIDStatusResult, _decode_SetCallerIDStatusResult, _encode_SetCallerIDStatusResult } from "../CSTA-set-caller-id-status/SetCallerIDStatusResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setCallerIDStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setCallerIDStatus OPERATION ::= {    ARGUMENT         SetCallerIDStatusArgument
 *     RESULT             SetCallerIDStatusResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 315 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetCallerIDStatusArgument, SetCallerIDStatusResult>}
 * @implements {OPERATION<SetCallerIDStatusArgument, SetCallerIDStatusResult>}
 */
export
const setCallerIDStatus: OPERATION<SetCallerIDStatusArgument, SetCallerIDStatusResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetCallerIDStatusArgument,
        "&ResultType": _decode_SetCallerIDStatusResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetCallerIDStatusArgument,
        "&ResultType": _encode_SetCallerIDStatusResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 315 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
