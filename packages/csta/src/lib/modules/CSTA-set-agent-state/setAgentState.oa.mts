/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetAgentStateArgument, _decode_SetAgentStateArgument, _encode_SetAgentStateArgument } from "../CSTA-set-agent-state/SetAgentStateArgument.ta.mjs";

import { SetAgentStateResult, _decode_SetAgentStateResult, _encode_SetAgentStateResult } from "../CSTA-set-agent-state/SetAgentStateResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setAgentState
 * @description
 *
 * Set Agent State (ECMA-269 §22.1.15 / ECMA-285 §20.1.15). Direction: CF→SF.
 * ROSE local CODE 312. Errors: `universalFailure`. A later Set overrides a
 * previous pendingAgentState. If already at the requested value: positive ack
 * and no event (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setAgentState OPERATION ::= {    ARGUMENT         SetAgentStateArgument
 *     RESULT             SetAgentStateResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 312 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetAgentStateArgument, SetAgentStateResult>}
 * @implements {OPERATION<SetAgentStateArgument, SetAgentStateResult>}
 */
export
const setAgentState: OPERATION<SetAgentStateArgument, SetAgentStateResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetAgentStateArgument,
        "&ResultType": _decode_SetAgentStateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetAgentStateArgument,
        "&ResultType": _encode_SetAgentStateResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 312 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
