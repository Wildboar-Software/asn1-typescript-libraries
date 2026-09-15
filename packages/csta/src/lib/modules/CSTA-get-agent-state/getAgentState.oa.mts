/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetAgentStateArgument, _decode_GetAgentStateArgument, _encode_GetAgentStateArgument } from "../CSTA-get-agent-state/GetAgentStateArgument.ta.mjs";

import { GetAgentStateResult, _decode_GetAgentStateResult, _encode_GetAgentStateResult } from "../CSTA-get-agent-state/GetAgentStateResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getAgentState
 * @description
 *
 * Get Agent State (ECMA-269 §22.1.5 / ECMA-285 §20.1.5). Direction: CF→SF. ROSE
 * local CODE 304. Errors: `universalFailure`. Atomic acknowledgement. Optional
 * `acdGroup` filters the result.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getAgentState OPERATION ::= {    ARGUMENT         GetAgentStateArgument
 *     RESULT             GetAgentStateResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 304 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetAgentStateArgument, GetAgentStateResult>}
 * @implements {OPERATION<GetAgentStateArgument, GetAgentStateResult>}
 */
export
const getAgentState: OPERATION<GetAgentStateArgument, GetAgentStateResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetAgentStateArgument,
        "&ResultType": _decode_GetAgentStateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetAgentStateArgument,
        "&ResultType": _encode_GetAgentStateResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 304 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
