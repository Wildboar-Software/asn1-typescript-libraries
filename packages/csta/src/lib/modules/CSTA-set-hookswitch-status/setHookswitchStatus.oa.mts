/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetHookswitchStatusArgument, _decode_SetHookswitchStatusArgument, _encode_SetHookswitchStatusArgument } from "../CSTA-set-hookswitch-status/SetHookswitchStatusArgument.ta.mjs";

import { SetHookswitchStatusResult, _decode_SetHookswitchStatusResult, _encode_SetHookswitchStatusResult } from "../CSTA-set-hookswitch-status/SetHookswitchStatusResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setHookswitchStatus
 * @description
 *
 * Set Hookswitch Status (ECMA-269 §21.1.16 / ECMA-285 §19.1.16). Direction:
 * CF→SF. ROSE local CODE 275. Errors: `universalFailure`. Generates Hookswitch.
 * If already at the requested value: positive ack and no event (ECMA-269 §9.5.1
 * FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setHookswitchStatus OPERATION ::= {    ARGUMENT         SetHookswitchStatusArgument
 *     RESULT            SetHookswitchStatusResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 275 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetHookswitchStatusArgument, SetHookswitchStatusResult>}
 * @implements {OPERATION<SetHookswitchStatusArgument, SetHookswitchStatusResult>}
 */
export
const setHookswitchStatus: OPERATION<SetHookswitchStatusArgument, SetHookswitchStatusResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetHookswitchStatusArgument,
        "&ResultType": _decode_SetHookswitchStatusResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetHookswitchStatusArgument,
        "&ResultType": _encode_SetHookswitchStatusResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 275 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
