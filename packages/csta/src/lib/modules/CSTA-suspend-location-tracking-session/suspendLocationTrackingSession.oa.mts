/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";





import {
    SuspendLocationTrackingSessionArgument,
    _decode_SuspendLocationTrackingSessionArgument,
    _encode_SuspendLocationTrackingSessionArgument
} from "../CSTA-suspend-location-tracking-session/SuspendLocationTrackingSessionArgument.ta.mjs";

import {
    SuspendLocationTrackingSessionResult,
    _decode_SuspendLocationTrackingSessionResult,
    _encode_SuspendLocationTrackingSessionResult
} from "../CSTA-suspend-location-tracking-session/SuspendLocationTrackingSessionResult.ta.mjs";



/**
 * @summary suspendLocationTrackingSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * suspendLocationTrackingSession OPERATION ::= {     ARGUMENT        SuspendLocationTrackingSessionArgument
 *     RESULT            SuspendLocationTrackingSessionResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 538 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SuspendLocationTrackingSessionArgument, SuspendLocationTrackingSessionResult>}
 * @implements {OPERATION<SuspendLocationTrackingSessionArgument, SuspendLocationTrackingSessionResult>}
 */
export
const suspendLocationTrackingSession: OPERATION<SuspendLocationTrackingSessionArgument, SuspendLocationTrackingSessionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SuspendLocationTrackingSessionArgument,
        "&ResultType": _decode_SuspendLocationTrackingSessionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SuspendLocationTrackingSessionArgument,
        "&ResultType": _encode_SuspendLocationTrackingSessionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 538 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
