/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    GetLogicalDeviceInformationArgument,
    _decode_GetLogicalDeviceInformationArgument,
    _encode_GetLogicalDeviceInformationArgument
} from "../CSTA-get-logical-device-information/GetLogicalDeviceInformationArgument.ta.mjs";

import {
    GetLogicalDeviceInformationResult,
    _decode_GetLogicalDeviceInformationResult,
    _encode_GetLogicalDeviceInformationResult
} from "../CSTA-get-logical-device-information/GetLogicalDeviceInformationResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getLogicalDeviceInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getLogicalDeviceInformation OPERATION ::= {     ARGUMENT         GetLogicalDeviceInformationArgument
 *     RESULT             GetLogicalDeviceInformationResult
 *     ERRORS             {universalFailure }
 *     CODE             local:201 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetLogicalDeviceInformationArgument, GetLogicalDeviceInformationResult>}
 * @implements {OPERATION<GetLogicalDeviceInformationArgument, GetLogicalDeviceInformationResult>}
 */
export
const getLogicalDeviceInformation: OPERATION<GetLogicalDeviceInformationArgument, GetLogicalDeviceInformationResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetLogicalDeviceInformationArgument,
        "&ResultType": _decode_GetLogicalDeviceInformationResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetLogicalDeviceInformationArgument,
        "&ResultType": _encode_GetLogicalDeviceInformationResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 201 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
