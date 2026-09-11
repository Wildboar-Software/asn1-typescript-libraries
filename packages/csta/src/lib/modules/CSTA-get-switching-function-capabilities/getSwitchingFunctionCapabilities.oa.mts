/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    GetSwitchingFunctionCapsArgument,
    _decode_GetSwitchingFunctionCapsArgument,
    _encode_GetSwitchingFunctionCapsArgument
} from "../CSTA-get-switching-function-capabilities/GetSwitchingFunctionCapsArgument.ta.mjs";

import { GetSwitchingFunctionCapsResult, _decode_GetSwitchingFunctionCapsResult, _encode_GetSwitchingFunctionCapsResult } from "../CSTA-get-switching-function-capabilities/GetSwitchingFunctionCapsResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getSwitchingFunctionCapabilities
 * @description
 *
 * Get Switching Function Capabilities (ECMA-269 §13.1.4 / ECMA-285 §11.1.4).
 * Direction: CF→SF. ROSE local CODE 203. Errors: `universalFailure`. Returns
 * the current capabilities of the entire switching function.
 * Atomic acknowledgement.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getSwitchingFunctionCapabilities OPERATION ::= {     ARGUMENT         GetSwitchingFunctionCapsArgument
 *     RESULT             GetSwitchingFunctionCapsResult
 *     ERRORS             {universalFailure }
 *     CODE             local:203 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetSwitchingFunctionCapsArgument, GetSwitchingFunctionCapsResult>}
 * @implements {OPERATION<GetSwitchingFunctionCapsArgument, GetSwitchingFunctionCapsResult>}
 */
export
const getSwitchingFunctionCapabilities: OPERATION<GetSwitchingFunctionCapsArgument, GetSwitchingFunctionCapsResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetSwitchingFunctionCapsArgument,
        "&ResultType": _decode_GetSwitchingFunctionCapsResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetSwitchingFunctionCapsArgument,
        "&ResultType": _encode_GetSwitchingFunctionCapsResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 203 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
