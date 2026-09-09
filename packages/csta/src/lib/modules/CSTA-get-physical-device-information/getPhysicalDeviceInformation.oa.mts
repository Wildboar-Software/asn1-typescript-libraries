/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    GetPhysicalDeviceInformationArgument,
    _decode_GetPhysicalDeviceInformationArgument,
    _encode_GetPhysicalDeviceInformationArgument
} from "../CSTA-get-physical-device-information/GetPhysicalDeviceInformationArgument.ta.mjs";

import {
    GetPhysicalDeviceInformationResult,
    _decode_GetPhysicalDeviceInformationResult,
    _encode_GetPhysicalDeviceInformationResult
} from "../CSTA-get-physical-device-information/GetPhysicalDeviceInformationResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getPhysicalDeviceInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getPhysicalDeviceInformation OPERATION ::= {     ARGUMENT         GetPhysicalDeviceInformationArgument
 *     RESULT             GetPhysicalDeviceInformationResult
 *     ERRORS             {universalFailure }
 *     CODE             local:202 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetPhysicalDeviceInformationArgument, GetPhysicalDeviceInformationResult>}
 * @implements {OPERATION<GetPhysicalDeviceInformationArgument, GetPhysicalDeviceInformationResult>}
 */
export
const getPhysicalDeviceInformation: OPERATION<GetPhysicalDeviceInformationArgument, GetPhysicalDeviceInformationResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetPhysicalDeviceInformationArgument,
        "&ResultType": _decode_GetPhysicalDeviceInformationResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetPhysicalDeviceInformationArgument,
        "&ResultType": _encode_GetPhysicalDeviceInformationResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 202 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
