/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    GetSwitchingFunctionDevicesArgument,
    _decode_GetSwitchingFunctionDevicesArgument,
    _encode_GetSwitchingFunctionDevicesArgument
} from "../CSTA-get-switching-function-devices/GetSwitchingFunctionDevicesArgument.ta.mjs";

import {
    GetSwitchingFunctionDevicesResult,
    _decode_GetSwitchingFunctionDevicesResult,
    _encode_GetSwitchingFunctionDevicesResult
} from "../CSTA-get-switching-function-devices/GetSwitchingFunctionDevicesResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getSwitchingFunctionDevices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getSwitchingFunctionDevices OPERATION ::= {     ARGUMENT         GetSwitchingFunctionDevicesArgument
 *     RESULT             GetSwitchingFunctionDevicesResult
 *     ERRORS             {universalFailure }
 *     CODE             local:204 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetSwitchingFunctionDevicesArgument, GetSwitchingFunctionDevicesResult>}
 * @implements {OPERATION<GetSwitchingFunctionDevicesArgument, GetSwitchingFunctionDevicesResult>}
 */
export
const getSwitchingFunctionDevices: OPERATION<GetSwitchingFunctionDevicesArgument, GetSwitchingFunctionDevicesResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetSwitchingFunctionDevicesArgument,
        "&ResultType": _decode_GetSwitchingFunctionDevicesResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetSwitchingFunctionDevicesArgument,
        "&ResultType": _encode_GetSwitchingFunctionDevicesResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 204 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
