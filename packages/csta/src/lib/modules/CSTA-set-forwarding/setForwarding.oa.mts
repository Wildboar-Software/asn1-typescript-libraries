/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetForwardingArgument, _decode_SetForwardingArgument, _encode_SetForwardingArgument } from "../CSTA-set-forwarding/SetForwardingArgument.ta.mjs";

import { SetForwardingResult, _decode_SetForwardingResult, _encode_SetForwardingResult } from "../CSTA-set-forwarding/SetForwardingResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setForwarding
 * @description
 *
 * Set Forwarding (ECMA-269 §22.1.20 / ECMA-285 §20.1.20). Direction: CF→SF.
 * ROSE local CODE 317. Errors: `universalFailure`. Multiple user settings:
 * multiple requests if supported. If already at the requested value: positive
 * ack and no event (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setForwarding OPERATION ::= {    ARGUMENT         SetForwardingArgument
 *     RESULT             SetForwardingResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 317 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetForwardingArgument, SetForwardingResult>}
 * @implements {OPERATION<SetForwardingArgument, SetForwardingResult>}
 */
export
const setForwarding: OPERATION<SetForwardingArgument, SetForwardingResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetForwardingArgument,
        "&ResultType": _decode_SetForwardingResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetForwardingArgument,
        "&ResultType": _encode_SetForwardingResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 317 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
