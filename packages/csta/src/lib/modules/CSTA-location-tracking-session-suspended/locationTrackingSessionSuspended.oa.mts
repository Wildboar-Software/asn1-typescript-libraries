/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    LocationTrackingSessionSuspendedArgument,
    _decode_LocationTrackingSessionSuspendedArgument,
    _encode_LocationTrackingSessionSuspendedArgument
} from "../CSTA-location-tracking-session-suspended/LocationTrackingSessionSuspendedArgument.ta.mjs";

import {
    LocationTrackingSessionSuspendedResult,
    _decode_LocationTrackingSessionSuspendedResult,
    _encode_LocationTrackingSessionSuspendedResult
} from "../CSTA-location-tracking-session-suspended/LocationTrackingSessionSuspendedResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary locationTrackingSessionSuspended
 * @description
 *
 * Indicates a location tracking session has been suspended. Location is neither
 * collected nor reported while suspended. Unreported collected PIDF-LO may
 * appear in `locationInfoList` (ECMA-269 §28.1.4).
 *
 * Switching function → computing function.
 *
 * ROSE local:533. Errors: `universalFailure` (ECMA-285 §26.1.4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locationTrackingSessionSuspended OPERATION ::= {     ARGUMENT        LocationTrackingSessionSuspendedArgument
 *     RESULT            LocationTrackingSessionSuspendedResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 533}
 * ```
 * 
 * @constant
 * @type {OPERATION<LocationTrackingSessionSuspendedArgument, LocationTrackingSessionSuspendedResult>}
 * @implements {OPERATION<LocationTrackingSessionSuspendedArgument, LocationTrackingSessionSuspendedResult>}
 */
export
const locationTrackingSessionSuspended: OPERATION<LocationTrackingSessionSuspendedArgument, LocationTrackingSessionSuspendedResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LocationTrackingSessionSuspendedArgument,
        "&ResultType": _decode_LocationTrackingSessionSuspendedResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_LocationTrackingSessionSuspendedArgument,
        "&ResultType": _encode_LocationTrackingSessionSuspendedResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 533 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
