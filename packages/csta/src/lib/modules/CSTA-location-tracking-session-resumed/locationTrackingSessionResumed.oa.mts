/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    LocationTrackingSessionResumedArgument,
    _decode_LocationTrackingSessionResumedArgument,
    _encode_LocationTrackingSessionResumedArgument
} from "../CSTA-location-tracking-session-resumed/LocationTrackingSessionResumedArgument.ta.mjs";

import {
    LocationTrackingSessionResumedResult,
    _decode_LocationTrackingSessionResumedResult,
    _encode_LocationTrackingSessionResumedResult
} from "../CSTA-location-tracking-session-resumed/LocationTrackingSessionResumedResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary locationTrackingSessionResumed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locationTrackingSessionResumed OPERATION ::= {     ARGUMENT        LocationTrackingSessionResumedArgument
 *     RESULT            LocationTrackingSessionResumedResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 532}
 * ```
 * 
 * @constant
 * @type {OPERATION<LocationTrackingSessionResumedArgument, LocationTrackingSessionResumedResult>}
 * @implements {OPERATION<LocationTrackingSessionResumedArgument, LocationTrackingSessionResumedResult>}
 */
export
const locationTrackingSessionResumed: OPERATION<LocationTrackingSessionResumedArgument, LocationTrackingSessionResumedResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LocationTrackingSessionResumedArgument,
        "&ResultType": _decode_LocationTrackingSessionResumedResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_LocationTrackingSessionResumedArgument,
        "&ResultType": _encode_LocationTrackingSessionResumedResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 532 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
