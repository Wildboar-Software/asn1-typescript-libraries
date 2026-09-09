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
