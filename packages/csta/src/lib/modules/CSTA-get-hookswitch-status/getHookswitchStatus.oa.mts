/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetHookswitchStatusArgument, _decode_GetHookswitchStatusArgument, _encode_GetHookswitchStatusArgument } from "../CSTA-get-hookswitch-status/GetHookswitchStatusArgument.ta.mjs";

import { GetHookswitchStatusResult, _decode_GetHookswitchStatusResult, _encode_GetHookswitchStatusResult } from "../CSTA-get-hookswitch-status/GetHookswitchStatusResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getHookswitchStatus
 * @description
 *
 * Get Hookswitch Status (ECMA-269 §21.1.5 / ECMA-285 §19.1.5). Direction:
 * CF→SF. ROSE local CODE 264. Errors: `universalFailure`. Atomic
 * acknowledgement.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getHookswitchStatus OPERATION ::= {    ARGUMENT         GetHookswitchStatusArgument
 *     RESULT            GetHookswitchStatusResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 264 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetHookswitchStatusArgument, GetHookswitchStatusResult>}
 * @implements {OPERATION<GetHookswitchStatusArgument, GetHookswitchStatusResult>}
 */
export
const getHookswitchStatus: OPERATION<GetHookswitchStatusArgument, GetHookswitchStatusResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetHookswitchStatusArgument,
        "&ResultType": _decode_GetHookswitchStatusResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetHookswitchStatusArgument,
        "&ResultType": _encode_GetHookswitchStatusResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 264 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
