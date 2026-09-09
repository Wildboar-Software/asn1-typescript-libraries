/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";





import {
    GetLocationTrackingCapabilitiesArgument,
    _decode_GetLocationTrackingCapabilitiesArgument,
    _encode_GetLocationTrackingCapabilitiesArgument
} from "../CSTA-get-location-tracking-capabilities/GetLocationTrackingCapabilitiesArgument.ta.mjs";

import {
    GetLocationTrackingCapabilitiesResult,
    _decode_GetLocationTrackingCapabilitiesResult,
    _encode_GetLocationTrackingCapabilitiesResult
} from "../CSTA-get-location-tracking-capabilities/GetLocationTrackingCapabilitiesResult.ta.mjs";



/**
 * @summary getLocationTrackingCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getLocationTrackingCapabilities OPERATION ::= {    ARGUMENT        GetLocationTrackingCapabilitiesArgument 
 *     RESULT             GetLocationTrackingCapabilitiesResult
 *     ERRORS             {universalFailure }
 *     CODE            local: 539 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetLocationTrackingCapabilitiesArgument, GetLocationTrackingCapabilitiesResult>}
 * @implements {OPERATION<GetLocationTrackingCapabilitiesArgument, GetLocationTrackingCapabilitiesResult>}
 */
export
const getLocationTrackingCapabilities: OPERATION<GetLocationTrackingCapabilitiesArgument, GetLocationTrackingCapabilitiesResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetLocationTrackingCapabilitiesArgument,
        "&ResultType": _decode_GetLocationTrackingCapabilitiesResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetLocationTrackingCapabilitiesArgument,
        "&ResultType": _encode_GetLocationTrackingCapabilitiesResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 539 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
