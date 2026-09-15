/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    SetMessageWaitingIndicatorArgument,
    _decode_SetMessageWaitingIndicatorArgument,
    _encode_SetMessageWaitingIndicatorArgument
} from "../CSTA-set-message-waiting-indicator/SetMessageWaitingIndicatorArgument.ta.mjs";

import {
    SetMessageWaitingIndicatorResult,
    _decode_SetMessageWaitingIndicatorResult,
    _encode_SetMessageWaitingIndicatorResult
} from "../CSTA-set-message-waiting-indicator/SetMessageWaitingIndicatorResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setMessageWaitingIndicator
 * @description
 *
 * Set Message Waiting Indicator (ECMA-269 §21.1.18 / ECMA-285 §19.1.18).
 * Direction: CF→SF. ROSE local CODE 277. Errors: `universalFailure`. Generates
 * Message Waiting. If already at the requested value: positive ack and no event
 * (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setMessageWaitingIndicator OPERATION ::= {    ARGUMENT         SetMessageWaitingIndicatorArgument
 *     RESULT            SetMessageWaitingIndicatorResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 277 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetMessageWaitingIndicatorArgument, SetMessageWaitingIndicatorResult>}
 * @implements {OPERATION<SetMessageWaitingIndicatorArgument, SetMessageWaitingIndicatorResult>}
 */
export
const setMessageWaitingIndicator: OPERATION<SetMessageWaitingIndicatorArgument, SetMessageWaitingIndicatorResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetMessageWaitingIndicatorArgument,
        "&ResultType": _decode_SetMessageWaitingIndicatorResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetMessageWaitingIndicatorArgument,
        "&ResultType": _encode_SetMessageWaitingIndicatorResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 277 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
