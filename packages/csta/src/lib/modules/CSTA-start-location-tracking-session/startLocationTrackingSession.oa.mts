/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";





import {
    StartLocationTrackingSessionArgument,
    _decode_StartLocationTrackingSessionArgument,
    _encode_StartLocationTrackingSessionArgument
} from "../CSTA-start-location-tracking-session/StartLocationTrackingSessionArgument.ta.mjs";

import {
    StartLocationTrackingSessionResult,
    _decode_StartLocationTrackingSessionResult,
    _encode_StartLocationTrackingSessionResult
} from "../CSTA-start-location-tracking-session/StartLocationTrackingSessionResult.ta.mjs";



/**
 * @summary startLocationTrackingSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * startLocationTrackingSession OPERATION ::= {     ARGUMENT        StartLocationTrackingSessionArgument
 *     RESULT            StartLocationTrackingSessionResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 536}
 * ```
 * 
 * @constant
 * @type {OPERATION<StartLocationTrackingSessionArgument, StartLocationTrackingSessionResult>}
 * @implements {OPERATION<StartLocationTrackingSessionArgument, StartLocationTrackingSessionResult>}
 */
export
const startLocationTrackingSession: OPERATION<StartLocationTrackingSessionArgument, StartLocationTrackingSessionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StartLocationTrackingSessionArgument,
        "&ResultType": _decode_StartLocationTrackingSessionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_StartLocationTrackingSessionArgument,
        "&ResultType": _encode_StartLocationTrackingSessionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 536 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
