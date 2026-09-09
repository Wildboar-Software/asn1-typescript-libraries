/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";





import {
    StopLocationTrackingSessionArgument,
    _decode_StopLocationTrackingSessionArgument,
    _encode_StopLocationTrackingSessionArgument
} from "../CSTA-stop-location-tracking-session/StopLocationTrackingSessionArgument.ta.mjs";

import {
    StopLocationTrackingSessionResult,
    _decode_StopLocationTrackingSessionResult,
    _encode_StopLocationTrackingSessionResult
} from "../CSTA-stop-location-tracking-session/StopLocationTrackingSessionResult.ta.mjs";



/**
 * @summary stopLocationTrackingSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * stopLocationTrackingSession OPERATION ::= {     ARGUMENT        StopLocationTrackingSessionArgument
 *     RESULT            StopLocationTrackingSessionResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 537}
 * ```
 * 
 * @constant
 * @type {OPERATION<StopLocationTrackingSessionArgument, StopLocationTrackingSessionResult>}
 * @implements {OPERATION<StopLocationTrackingSessionArgument, StopLocationTrackingSessionResult>}
 */
export
const stopLocationTrackingSession: OPERATION<StopLocationTrackingSessionArgument, StopLocationTrackingSessionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StopLocationTrackingSessionArgument,
        "&ResultType": _decode_StopLocationTrackingSessionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_StopLocationTrackingSessionArgument,
        "&ResultType": _encode_StopLocationTrackingSessionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 537 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
